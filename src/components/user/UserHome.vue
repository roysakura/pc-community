<template>
  <div class="userinfo-container">
    <div class="userinfo-content">
      <div class="top">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <img class="avatar" :src="userName" alt="头像">
        <router-link class="btn-edit" to="/userinfo">编辑个人资料</router-link>
      </div>
      <div class="cont-left">
        <div class="m-cl-head">
          <ul id="sort">
            <li class="on" lang="article" @click="getArticleData(0,1)">
              <span>文章</span>
              <span>120</span>
            </li>
            <li lang="collect" @click="getCollectData(0,1)">
              <span>收藏</span>
              <span>100</span>
            </li>
            <li lang="data" @click="getMineDataBase()">
              <span>资料库</span>
              <span>0</span>
            </li>
          </ul>
        </div>
        <div class="cl-body">
          <ul class="list" id="article_list">
            <li class="item" v-for="item in articleDatas" v-show="item.status !==2 || item.status !=='2'">
              <p class="info">
                <span class="ttl"> {{item.title}}</span>
              </p>
              <div class="abstract">
                <!--<img src="" alt="文章配图">-->
                <p class="txt">
                  <!-- 此span的文章摘要，劳烦后台只取出90字长 -->
                  <span v-html="item.body">{{item.body}}</span>
                  <span>……</span>
                  <span><router-link class="view-all" :to="'/articledetail/'+item.id">阅读全文</router-link></span>
                </p>
              </div>
              <p class="h16">
                <span class="attr"><img class="view" src="../../assets/img/icon1.png"><span>{{item.article_views_count}}阅读</span></span>
                <span class="attr  comment" lang="0"><img src="../../assets/img/icon2.png"><span>{{item.article_comments_count}}评论</span></span>
                <span class="attr  collect"><img src="../../assets/img/icon4.png"><span>收藏</span></span>
              </p>

            </li>
            <div class="loadtmore" @click="loadTMore()" v-show="isShowTMore">
              加载更多
            </div>
          </ul>
          <ul class="list" id="collect_list" style="display:none;">
            <!--帖子-->
            <li class="item" v-for="(item,index) in tieZiData" v-show="tieZiData.length>0">
              <p class="info">
                <span class="ttl">{{item.post.title}}</span>
              </p>
              <div class="abstract">
                <!--<img src="" alt="文章配图">-->
                <p class="txt">
                  <!-- 此span的文章摘要，劳烦后台只取出90字长 -->
                  <span v-html="item.post.body">{{item.post.body}}</span>
                  <span>……</span>
                  <span><a class="view-all" href="data-detail.html">阅读全文</a></span>
                </p>
              </div>
              <p class="h16">
                <span class="attr"><img class="view" src="../../assets/img/icon1.png"><span>{{item.post.article_views_count}}阅读</span></span>
                <span class="attr  comment" lang="0"><img src="../../assets/img/icon2.png"><span> {{item.post.article_comments_count}}评论</span></span>
                <span class="attr  collect"><img src="../../assets/img/icon4.png"><span>收藏</span></span>
              </p>
            </li>
            <!--新闻-->
            <div class="news-list">
              <ul>
                <li track-by="$index" v-for="(item,index) in newsData" v-show="item.post.status===1 || item.post.status==='1'">
                  <a href=""><img class="head-pic" :src="item.post.image" alt="头图"></a>
                  <div class="news-list-cont">
                    <a class="ttl" > {{item.post.title}}</a>
                    <p class="h16">
                      <span class="attr"><img class="view" src="../../assets/img/icon1.png"><span>{{item.post.article_views_count}}阅读</span></span>
                      <span class="attr"><img src="../../assets/img/icon2.png"><span>{{item.post.article_comments_count}}评论</span></span>
                      <span class="attr">{{item.post.created_at}}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="loadmore" @click="loadMore()" v-show="isShowMore">
              加载更多
            </div>
          </ul>

          <ul class="list" id="data_list" style="display:none;">
            <li class="item" v-for="file in downLoadData">
              <p class="info">
                <span class="file-name">{{file.download_file.file_name}}</span>
              </p>
              <div class="abstract">
                <img :src="file.download_file.file_image" alt="文章配图">
                <p class="file1-txt">
                  <!-- 此span的文章摘要，劳烦后台只取出90字长 -->
                  <span class="file1-abstract">{{file.download_file.abstract}}</span>
                  <span>……</span>
                  <span><router-link class="view-all" :to="'/databasedetail/'+file.download_file.id">阅读全文</router-link></span>
                </p>
              </div>
              <p class="h16">
                <span class="info">{{file.download_file.downloaded_at}}</span>
                <span class="info">共{{totalCount}}页</span>
                <span class="info">下载{{file.download_file.download_count}}次</span>
                <span class="info">{{file.download_file.credit}}积分</span>
                <span class="info">贡献者: {{file.download_file.user_name}}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="cont-right">
        <div class="score">
          <div class="s-head">积分</div>
          <div class="s-body"></div>
          <div class="s-foot">
            <a href="">充值</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getDownloadInfo} from '../../api/pcendownloaded';
  import {getCollectInfo} from '../../api/pcencollect';
  export default{
    data(){
        return{
          //==========================针对资料库的
          isShowNoData:false,
          downLoadData:[],
          newsTags:[],
          //总页数
          totalCount:0,
          //第一页
          pageIndex:1,
          //每一页的数量
          pageSize:10,
          type:0,
          //========================================

          //===========================针对收藏的(包括新闻、帖子)
          allPageSize:10,
          allTotalCount:0,
          newDatas:[],
          tieZiData:[],
          newsData:[],
          allPageIndex:1,
          allType:0,
          isShowMore:true,
          //========================================

          //===========================针对我的帖子
          articleDatas:[],
          articleTags:[],
          //总页数
          articleTotalCount:0,
          //第一页
          articlePageIndex:1,
          //每一页的数量
          articlePageSize:10,
          articleType:0,
          isShowTMore:true
        }
    },
    mounted(){
        this.initTab();
        this.getArticleData(0,1);
    },
    computed:{
      userName:function () {
        if(this.$store.state.mutations.avatar){
          return this.$store.state.mutations.avatar;
        }else{
          return "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513752038222&di=402aaa81d84806d4ab035a9f83f72fd5&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dda82b32dc93d70cf4cafa209cdecfd36%2Fadaf2edda3cc7cd928acd5cd3901213fb80e9125.jpg"
        }
      }
    },
    methods:{
      getArticleData(type,page){
        const that = this;
        this.$http.get(`/api1.0/users/${localStorage.getItem('userId')}/topics/`,{
          params:{
            type:0,
            page:page,
            page_size:that.articlePageSize,
          }
        }).then((res)=>{
          if(res.status === 200){
            that.initArticleData(type,res);
          }else{
//            that.dealErrInfo();
          }
        },(err)=>{
//          that.dealErrInfo();
        });
      },
      initArticleData(type,res){
        const that = this;
        that.articleTotalCount = res.data.data.total;
        if(res.data!==null && res.data.data.detail.length>0){
          let tempArr = [];
          tempArr = res.data.data.detail;
          if(type===0){
            that.articleDatas = tempArr;
          }
          //下拉刷新
          else if(type===1){
            that.articleDatas=tempArr.splice(0,that.articlePageSize);
          }else if(type === 2){ //上拉加载
            that.articleDatas = that.articleDatas.concat(tempArr);
          }
        }else{
//          that.showMsg('当前暂无数据!');
        }
      },
      loadTMore(){
        this.articlePageIndex++;
        this.articleType = 2;
        if(this.articlePageIndex<=this.articleTotalCount){
          this.isShowTMore = true;
          this.getArticleData(this.articleType,this.articlePageIndex);
        }else{
          this.isShowTMore = false;
        }
      },
      loadMore(){
        this.allPageIndex++;
        this.articleType = 2;
        if(this.allPageIndex<=this.allTotalCount){
          this.isShowMore = true;
          this.getCollectData(this.articleType,this.allPageIndex);
        }else{
          this.isShowMore = false;
        }

      },
        getCollectData(type,page){
          const that = this;
          getCollectInfo(`/api1.0/users/${localStorage.getItem('userId')}/collections/`,page,that.allPageSize).then((res)=>{
            if(res.status === 200){
              that.initTieZiData(type,res);
            }else{
//              that.dealErrInfo();
            }
          },(err)=>{
//            that.dealErrInfo();
          });
        },
      /**
       * 初始化数据
       * @param type:类型，是否是刷新、加载更多
       * @param res:请求到的数据
       */
      initTieZiData(type,res){
        const _this = this;
        _this.allTotalCount = res.data.data.total;
        if(res.data!==null && res.data.data.detail.length>0){
          let tempArr = [];
          tempArr = res.data.data.detail;
          if(type===0){
            _this.newDatas = tempArr;
          }
          //下拉刷新
          else if(type===1){
            _this.newDatas=tempArr.splice(0,_this.allPageSize);
          }else if(type === 2){ //上拉加载
            _this.newDatas = _this.newDatas.concat(tempArr);
          }
          const len = _this.newDatas.length;
          _this.newsData = [];
          _this.tieZiData = [];
          for(let i=0;i<len;i++) {
            //是帖子
            if (parseInt(_this.newDatas[i].post.article_type) === 1 && parseInt(_this.newDatas[i].post.status) === 1) {
              _this.tieZiData.push(_this.newDatas[i]);
            } else if (parseInt(_this.newDatas[i].post.article_type) === 0 && parseInt(_this.newDatas[i].post.status) === 1) {
              _this.newsData.push(_this.newDatas[i]);
            }
          }

        }else{

        }
      },
        getMineDataBase(){
          this.getDownLoadData(0,1);
        },
        getDownLoadData(type,page){
        const _this = this;
        getDownloadInfo(`/api1.0/users/${localStorage.getItem('userId')}/downloads/`,page,_this.pageSize).then((res)=>{
          _this.totalCount = res.data.data.total;
          if(res.status === 200 && res.data.data!==null){
            let tempArr = [];
            tempArr = res.data.data.detail;
            if(type===0){
              _this.downLoadData = tempArr;
            }
            //下拉刷新
            else if(type===1){
              _this.downLoadData=tempArr.splice(0,_this.pageSize);
            }else if(type === 2){ //上拉加载
              _this.downLoadData = _this.downLoadData.concat(tempArr);
            }
            const len = _this.downLoadData.length;
            for(let i = 0; i<len;i++){
              _this.newsTags = _this.downLoadData[i].download_file.tags;
            }
            len > 0 ? _this.isShowNoData = false : _this.isShowNoData = true;
          }else{
            _this.isShowNoData = true;
          }
        },(err)=>{
          _this.isShowNoData = true;
        });
      },
        initTab(){
          $('#sort li').click(function(event) {
            var lg = $(this).attr('lang');
            $(this).addClass('on').siblings().removeClass('on');
            $('#'+lg+'_list').show().siblings().hide();
          });
          $('#navs1 li').hover(function() {
            $(this).addClass('on').siblings().removeClass('on');
            var cl = $(this).attr('lang');
            $('#navs2').children().hide().end().children('.'+cl).show();
          }, function() {
            // $(this).removeClass('on');
          });

          $('#navs2 li').click(function(event) {
            $(this).addClass('on').siblings().removeClass('on');
          });
          $('#article_list span.comment').click(function(event) {
            var $cmmar = $(this).parent('.h16').siblings('.comment-area');
            var $swiper = $cmmar.find('.swiper-container');
            if($(this).attr('lang') == '0'){
              $(this).attr('lang','1');
              $cmmar.show().find('.btn-emoji').click(function(event) {
                $(this).siblings('i').toggle();
                $swiper.toggle();
                initSwiper($swiper);
              });
            }else{
              $(this).attr('lang','0');
              $cmmar.hide();
            }
          });
        }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/my-index.css";
</style>
