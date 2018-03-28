<template>
  <div class="article-container">
    <div class="article-content">
      <div class="article-cont-left">
        <div class="article-list" id="list">
          <div class="item" v-for="(item,index) in articles" v-show="item.status===1 || item.status==='1'">
            <p class="tags">标签：<span v-show="tags.length>0">
              {{tagName}}</span></p>
            <p class="info">
              <img class="avatar" :src="item.avatar">
              <span class="name">{{item.author}}</span>
              <span class="time">{{item.created_at}}</span>
            </p>
            <p class="ttl">{{item.title}}</p>
            <div class="abstract">
              <!--<img src="" alt="文章配图">-->
              <p class="article-txt">
                <!-- 此span的文章摘要，劳烦后台只取出110字长 -->
                <span v-html="item.body" class="article-abstract">{{item.body}}</span>
                <span>……</span>
                <span><router-link class="view-all" :to="'/articledetail/'+item.id">阅读全文</router-link></span>
              </p>
            </div>
            <p class="h16">
              <span class="attr"><img class="view" src="../../assets/img/icon1.png"><span>{{item.article_views_count}}阅读</span></span>
              <span class="attr"><img src="../../assets/img/icon2.png"><span>{{item.article_comments_count}}评论</span></span>
              <!-- <span class="attr on share"><img src="img/icon3.png"><span>分享</span></span> -->
              <span class="attr collect"><img src="../../assets/img/icon4.png"><span>收藏</span></span>
            </p>
          </div>
        </div>
        <div class="loadmore" @click="loadMore()" v-show="isShowMore">
          加载更多
        </div>
      </div>
      <div class="cont-right" style="display: none">
        <div class="item">

        </div>
      </div>
    </div>
    <div class="back-top" @click="goToTop()" id="backTop">

    </div>
  </div>
</template>

<script>
  import {getTieZiInfo} from '../../api/tiezi'
  import {collect} from '../../api/tiezi'
  import {unCollect} from '../../api/tiezi'
  import {deleteArticle} from '../../api/tiezi'
  export default{
    data(){
      return{
        showNoData:false,
//           myTieZiPos:-1,
        collection_or_cancel:-1,
        //总页数
        totalCount:0,
        //第一页
        pageIndex:1,
        //每一页的数量
        pageSize:10,
        articles:[],
        //类型：0表示初始化数据，1表示下拉刷新，2表示加载更多
        type:0,
        //表示收藏
        isShou:true,
        tags:[],
        tagName:"",
        isShowMore:true
      }
    },
    mounted(){
      this.getArticleInfos(0,1);
      this.backTop();
    },
    methods:{
      goToTop(){
        $('html,body').scrollTop(0);
      },
      /**
       * 返回顶部
       * */
      backTop(){
        window.onscroll= function(){
          //变量t是滚动条滚动时，距离顶部的距离
          const t = document.documentElement.scrollTop||document.body.scrollTop;
          let scrollup = document.getElementById('backTop');
          //当滚动到距离顶部200px时，返回顶部的锚点显示
          if(t>=800){
            scrollup.style.display="block";
          }else{          //恢复正常
            scrollup.style.display="none";
          }
        }
      },
      /**
       * 从服务器端获取文章(帖子)的数据
       * */
      getArticleInfos(cType,page){
        if(cType === 2){

        }
        const _this = this;
        getTieZiInfo('/api1.0/articles/',page,_this.pageSize).then((res)=>{
          if(res.status === 200 && res.data.data!==null){
            _this.initDatas(cType,res);
          }else{
            _this.dealErr();
          }
        },(err)=>{
          _this.dealErr();
        });
      },
      /**
       * 初始化文章想暑假
       * */
      initDatas(cType,res) {
        let tempArr = [];
        this.totalCount = res.data.data.total;
        tempArr = res.data.data.detail;
        if(tempArr.length>0){
          this.showNoData = false;
          if(cType===0){
            this.articles = tempArr;
          }
          //下拉刷新
          else if(cType===1){
            this.articles=tempArr.splice(0,this.pageSize);
          }else if(cType === 2){ //上拉加载
            this.articles = this.articles.concat(tempArr);
          }
          const len1 = this.articles.length;
          for(let i = 0;i<len1;i++){
            this.tags = this.articles[i].tags;
          }
          this.tagName = "";
          let len = this.tags.length;
          for(let i=0;i<len;i++){
            if(i<=2){
              if(i+1===len){
                if(i>=2){
                  this.tagName+=this.tags[i].name+"......";
                }else{
                  this.tagName+=this.tags[i].name;
                }

              }else {
                this.tagName+=this.tags[i].name+"、";
              }
            }
          }
          const articleLen = this.articles.length;
          //去除图片的部分
          /*for(let i=0;i<articleLen;i++){
            let indexArticle = this.articles[i].body.indexOf("<img");
            if(indexArticle!==-1){
              this.articles[i].body = this.articles[i].body.replace(/(<img.*?>)/g, '');
            }
          }*/

        }else{
          this.showNoData = true;
        }
      },
      /**
       * 加载更多
       */
      loadMore(){
        this.pageIndex++;
        this.type = 2;
        //加载更多的条件
        if(this.pageIndex<=this.totalCount){
          this.isShowMore = true;
          this.getArticleInfos(this.type,this.pageIndex);
        }else{
          this.isShowMore = false;
        }

      },
      dealErr(){
        this.showMsg("密码错误!");
      },
      showMsg(str){
        this.$toast.center(str);
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/article.css";
</style>
