<template>
  <div class="search-container">
    <header class="search-tab-header">
      <ul class="search-list">
        <li class="search-item on" @click="goAllPage()">
          全部
        </li>
        <li class="search-item" @click="goNewsPage()">
          新闻
        </li>
        <li class="search-item" @click="goTieZiPage()">
          文章
        </li>
        <li class="search-item" @click="goDataPage()">
          资料
        </li>
      </ul>
    </header>
    <main class="search-content-container" v-show="isShowAll">
      <section class="search-news" v-show="singleNews.length > 0">
        <p class="news-tip">新闻</p>
        <ul class="all-news-list">
          <li class="search-all-news-item" v-for="(item,index) in singleNews" v-show="item._source.status===1 || item._source.status==='1'">
            <a class="search-all-news-link">
              <img :src="item._source.image_url" alt="" class="search-all-news-pic">
            </a>
            <div class="search-all-news-r">
              <router-link :to="'/newsdetail/'+item._source.id" class="search-all-news-title">{{item._source.title}}</router-link>
              <p class="search-all-news-b">
                <span class="tip-item">
                  <img src="../../assets/img/icon1.png" alt="" class="read">
                  <span>{{item._source.article_views_count}}阅读</span>
                </span>
                <span class="tip-item">
                  <img src="../../assets/img/icon2.png" alt="">
                  <span>{{item._source.article_comments_count}}评论</span>
                </span>
                <span>{{item._source.created_at}}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section class="search-article" v-show="singleTieZi.length > 0">
        <p class="news-tip">文章</p>
        <ul class="all-article-list">
          <li class="all-article-item" v-for="(item,index) in singleTieZi" v-show="item._source.status===1 || item._source.status==='1'">
              <p class="tags">标签：
                <span class="tags-name">
                   <span v-for="(tag,index) in item._source.tags">{{tag}}<span v-show="(index+1)!==item._source.tags.length">、</span></span>
                </span>
              </p>
              <p class="all-article-info">
                <img :src="item._source.avatar" alt="" class="all-article-avator">
                <span class="all-article-name">
                 {{item._source.author}}
                </span>
                <span class="all-article-time">
                  {{item._source.created_at}}
                </span>
              </p>
              <p class="all-article-title">
                {{item._source.title}}
              </p>
              <div class="all-abstract">
                <p class="all-article-txt">
                  <span class="all-article-abstract" v-html="item._source.body">
                    {{item._source.body}}
                  </span>
                  <span>……</span>

                  <span>  <router-link class="all-article-viewall" :to="'/articledetail/'+item._source.id">阅读全文</router-link></span>
                </p>
              </div>
              <p class="all-article-b">
                <span class="all-article-tip">
                  <img src="../../assets/img/icon1.png" alt="" class="all-article-read">
                  <span>{{item._source.article_views_count}}阅读</span>
                </span>
                <span class="all-article-tip">
                  <img src="../../assets/img/icon2.png" alt="" class="all-article-read">
                  <span>{{item._source.article_comments_count}}评论</span>
                </span>
                <span class="all-article-tip collect">
                  <img src="../../assets/img/icon4.png" alt="" class="all-article-read">
                  <span>收藏</span>
                </span>
              </p>
            </li>
        </ul>
      </section>
      <section class="search-database" v-show="singleZiLiao.length > 0">
        <p class="news-tip">资料库</p>
        <ul class="all-database-list">
          <li class="all-database-item" v-for="(file,index) in singleZiLiao">
            <p class="all-database-tags">
              标签：
              <span class="all-database-tagname">
                <span v-for="(tag,index) in file._source.tags">{{tag}}<span v-show="(index+1)!==file._source.tags.length">、</span></span>
              </span>
            </p>
            <p class="all-database-info">
              <img src="" alt="" class="all-database-avator">
              <span class="all-database-title">
               {{file._source.file_name}}
              </span>
            </p>
            <div class="all-database-abstract">
              <img :src="file._source.doc_pic_url" alt="" class="all-database-pic">
              <p class="all-database-txt">
                <span class="all-database-abstract">
                 {{file._source.abstract}}
                </span>
                <span>……</span>
                <span>
                   <router-link class="all-database-view" :to="'/databasedetail/'+file._source.id">阅读全文</router-link>
                </span>
              </p>
            </div>
            <p class="all-database-b">
            <!--  <span class="all-article-sp all-article-one">2017-09-05</span>
              <span class="all-article-sp">共14页</span>-->
              <span class="all-article-sp">下载{{file._source.download_count}}次</span>
              <span class="all-article-sp">{{file._source.credit}}积分</span>
              <span class="all-article-sp">贡献者: {{file._source.uploader_name}}</span>
            </p>
          </li>
        </ul>
      </section>
    </main>
    <main class="search-news-t" v-show="isShowNews">
      <ul class="all-news-list">
        <li class="search-all-news-item" v-for="(item,index) in searchNews">
          <a class="search-all-news-link">
            <img :src="item._source.image_url" alt="" class="search-all-news-pic">
          </a>
          <div class="search-all-news-r">
            <router-link :to="'/newsdetail/'+item._source.id" class="search-all-news-title">{{item._source.title}}</router-link>
            <p class="search-all-news-b">
                <span class="tip-item">
                  <img src="../../assets/img/icon1.png" alt="" class="read">
                  <span>{{item._source.article_views_count}}阅读</span>
                </span>
              <span class="tip-item">
                  <img src="../../assets/img/icon2.png" alt="">
                  <span>{{item._source.article_comments_count}}评论</span>
                </span>
              <span>{{item._source.created_at}}</span>
            </p>
          </div>
        </li>
      </ul>
    </main>
    <main class="search-article-t" v-show="isShowArticle">
      <ul class="all-article-list">
        <li class="all-article-item" v-for="(item,index) in searchTieZi" v-show="item._source.status===1 || item._source.status==='1'">
          <p class="tags">标签：
            <span class="tags-name">
               <span v-for="(tag,index) in item._source.tags">{{tag}}<span v-show="(index+1)!==item._source.tags.length">、</span></span>
                </span>
          </p>
          <p class="all-article-info">
            <img :src="item._source.avatar" alt="" class="all-article-avator">
            <span class="all-article-name">
                  {{item._source.author}}
                </span>
            <span class="all-article-time">
                 {{item._source.created_at}}
                </span>
          </p>
          <p class="all-article-title">
            {{item._source.title}}
          </p>
          <div class="all-article-abstract">
            <p class="all-article-txt">
                  <span class="all-article-abstract"  v-html="item._source.body">
                    {{item._source.body}}
                  </span>
              <span>……</span>
              <span> <router-link class="all-article-viewall" :to="'/articledetail/'+item._source.id">阅读全文</router-link></span>
            </p>
          </div>
          <p class="all-article-b">
                <span class="all-article-tip">
                  <img src="../../assets/img/icon1.png" alt="" class="all-article-read">
                  <span>{{item._source.article_views_count}}阅读</span>
                </span>
            <span class="all-article-tip">
                  <img src="../../assets/img/icon2.png" alt="" class="all-article-read">
                  <span> {{item._source.article_comments_count}}评论</span>
                </span>
            <span class="all-article-tip collect">
                  <img src="../../assets/img/icon4.png" alt="" class="all-article-read">
                  <span>收藏</span>
                </span>
          </p>
        </li>
      </ul>
    </main>
    <main class="search-database-t" v-show="isShowDataBase" >
      <ul class="all-database-list">
        <li class="all-database-item" v-for="(file,index) in searchData">
          <p class="all-database-tags">
            标签：
            <span class="all-database-tagname">  <span v-for="(tag,index) in file._source.tags">{{tag}}<span v-show="(index+1)!==file._source.tags.length">、</span></span></span>
          </p>
          <p class="all-database-info">
            <img src="" alt="" class="all-database-avator">
            <span class="all-database-title">
                {{file._source.file_name}}
              </span>
          </p>
          <div class="all-database-abstract">
            <img :src="file._source.doc_pic_url" alt="" class="all-database-pic">
            <p class="all-database-txt">
                <span class="all-database-abstract">
                   {{file._source.abstract}}
                </span>
              <span>……</span>
              <span>
                   <router-link class="all-database-view" :to="'/databasedetail/'+file._source.id">阅读全文</router-link>
                </span>
            </p>
          </div>
          <p class="all-database-b">
            <!--<span class="all-article-sp all-article-one">2017-09-05</span>
            <span class="all-article-sp">共14页</span>-->
            <span class="all-article-sp">下载{{file._source.download_count}}次</span>
            <span class="all-article-sp">{{file._source.credit}}积分</span>
            <span class="all-article-sp">贡献者: {{file._source.uploader_name}}</span>
          </p>
        </li>
      </ul>
    </main>
    <div class="back-top" @click="goToTop()" id="backTop">

    </div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            isShowAll:true,
            isShowNews:false,
            isShowArticle:false,
            isShowDataBase:false,

            showFilterSearch:false,
            showNoData:false,
            myFlag:-1,
            newsBars:[
              '全部','新闻','文章',
              '资料库信息中心',
            ],
            //搜索标签关键字的数据集合
            searchKeyDatas:[
            ],
            //搜索输入结果的关键字数据的集合
            singleKeyDatas:[],
            resultKeyDatas:[],
            resultKeySet:{},
            selected: '1',
            isShowSearchItems:false,
            isShowComponent:-1,
            isSlider:false,
            //搜索框的内容
            //服务端返回的数据
            myArticleId:-1,
            isAll:0,
            //是否显示暂无数据的子组件
            isNoData:false,
            //是否显示标签
            isShowTags:true,
            allResult:[],
            searchNews:[],
            searchTieZi:[],
            searchData:[],
            singleNews:[],
            singleTieZi:[],
            singleZiLiao:[],
            //总页数
            allTotalCount:30,
            //第一页
            allPageIndex:0,
            //每一页的数量
            allPageSize:30,
            allType:0,

            //总页数
            newsTotalCount:30,
            //第一页
            newsPageIndex:0,
            //每一页的数量
            newsPageSize:30,
            newsType:0,

            //总页数
            tieTotalCount:30,
            //第一页
            tiePageIndex:0,
            //每一页的数量
            tiePageSize:30,
            tieType:0,
            //总页数
            ziTotalCount:30,
            //第一页
            ziPageIndex:0,
            //每一页的数量
            ziPageSize:30,
            ziType:0,
            searchConditionDatas:[
            ],
            allNewstagName:"",
            allNewstags:[],
            allTietagName:"",
            allTietags:[],
            allZiLiaoTagName:"",
            allZiLiaotags:[],
            newsTagName:"",
            newsTag:[],
            tieTagName:"",
            tieTag:[],
            allTotalCondition:0,
          }
      },
      computed:{
         searchText:function () {
           return this.$store.state.mutations.searchText;
         }
      },
      watch:{
        searchText:function (newV,oldV) {
          this.goSearch(0,0);
        }
      },
      mounted(){
        this.initSwitchTab();
        this.goSearch(0,0);
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
         * 初始化Tab选项卡
         * */
        initSwitchTab(){
         $(".search-item").click(function (event) {
           $(".search-item").removeClass("on");
           $(this).addClass("on");
         })
        },
        /**
         * 全部
         * */
        goAllPage(){
            this.isShowAll = true;
            this.isShowNews = false;
            this.isShowArticle = false;
            this.isShowDataBase = false;
            this.myFlag = 0;
            this.isAll = 0;
            this.goSearch(0,0);
        },
        /**
         * 新闻
         * */
        goNewsPage(){
          this.isShowAll = false;
          this.isShowNews = true;
          this.isShowArticle = false;
          this.isShowDataBase = false;
          this.myFlag = 1;//新闻
          this.myArticleId = 0;
          this.isAll = 1;
          this.goNewsSearch(0,0);
        },
        /**
         * 文章
         * */
        goTieZiPage(){
          this.isShowAll = false;
          this.isShowNews = false;
          this.isShowArticle = true;
          this.isShowDataBase = false;
          this.myFlag = 2;//帖子
          this.myArticleId = 1;
          this.isAll = 2;
          this.goTieSearch(0,0);
        },
        /**
         * 资料库
         * */
        goDataPage(){
          this.isShowAll = false;
          this.isShowNews = false;
          this.isShowArticle = false;
          this.isShowDataBase = true;
          this.myFlag = 3;//资料库
          this.isAll = 3;
          //资料库的搜索
          this.goDataBaseSearch(0,0);
        },
        goDataBaseSearch(type,page){
          const _this =this;
          const tagLens = this.resultKeyDatas.length;
          let tempStr = "";
          if(tagLens>0){
            for (let i=0;i<tagLens;i++){
              tempStr += `${$.trim(this.resultKeyDatas[i])},`;
            }
          }else{
            tempStr = _this.searchText;
          }
          if(tempStr!=='' || this.resultKeyDatas.length>0){
            let searchUrl = '';
            if(_this.isAll === 0){//搜索全部
              if(tempStr.indexOf(',')>0){
                searchUrl = `api1.0/search/?tag=${tempStr}`;
              }else{
                searchUrl = `api1.0/search/?q=${tempStr}`;
              }

            }else{//搜索部分
              if(tempStr.indexOf(',')>0){
                searchUrl = `api1.0/search/?tag=${tempStr}&search_type=2`;
              }else{
                searchUrl = `api1.0/search/?q=${tempStr}&search_type=2`;
              }

            }
            //这里就执行搜索
            this.$http.get(searchUrl,{
              params:{
                page:page,
                page_size:_this.ziPageSize,

              }
            }).then((res)=>{
              _this.ziTotalCount = res.data.data.total_count;
              if(res.status === 200 && res.data.data!==null){
                let tempArr = [];
                tempArr = res.data.data.detail.hits.hits;
                tempArr.length>0 ? _this.isNoData = false:_this.isNoData = true;
                if(type===0){
                  _this.searchData = tempArr;
                }
                //下拉刷新
                else if(type===1){
                  _this.searchData=tempArr.splice(0,_this.ziPageSize);
                }else if(type === 2){ //上拉加载
                  _this.searchData = _this.searchData.concat(tempArr);
                }
              }else{
                _this.isNoData = true;
              }
            },(err)=>{
              _this.isNoData = true;
            })
          }else{
            //这里就要显示tag标签
            _this.isNoData = false;
            _this.searchData=[];
          }
        },
        goTieSearch(type,page){
          const _this =this;
          const tagLens = this.resultKeyDatas.length;
          let tempStr = "";
          if(tagLens>0){
            for (let i=0;i<tagLens;i++){
              tempStr += `${$.trim(this.resultKeyDatas[i])},`;
            }
          }else{
            tempStr = _this.searchText;
          }

          if(tempStr!=='' || this.resultKeyDatas.length>0){
            let searchUrl = '';
            if(_this.isAll === 0){//搜索全部
              if(tempStr.indexOf(',')>0){
                searchUrl = `api1.0/search/?tag=${tempStr}`;
              }else{
                searchUrl = `api1.0/search/?q=${tempStr}`;
              }

            }else{//搜索部分
              if(tempStr.indexOf(',')>0){
                searchUrl = `api1.0/search/?tag=${tempStr}&article_type=${_this.myArticleId}&search_type=1`;
              }else{
                searchUrl = `api1.0/search/?q=${tempStr}&article_type=${_this.myArticleId}&search_type=1`;
              }

            }
            //这里就执行搜索
            this.$http.get(searchUrl,{
              params:{
                page:page,
                page_size:_this.tiePageSize,
              }
            }).then((res)=>{
              _this.allTotalCondition = res.data.data.total_count;
              if(res.status === 200 && res.data.data!==null){
                let tempArr = [];
                tempArr = res.data.data.detail.hits.hits;
                tempArr.length>0 ? _this.isNoData = false:_this.isNoData = true;
                if(type===0){
                  _this.searchTieZi = tempArr;
                }
                //下拉刷新
                else if(type===1){
                  _this.searchTieZi=tempArr.splice(0,_this.tiePageSize);
                }else if(type === 2){ //上拉加载
                  _this.searchTieZi = _this.searchTieZi.concat(tempArr);
                }
              }else{
                _this.isNoData = true;
              }
            },(err)=>{
              _this.isNoData = true;
            })
          }else{
            //这里就要显示tag标签
            _this.isNoData = false;
          }
        },
        /**
         * 搜索新闻的数据
         * */
        goNewsSearch(type,page){
          const _this =this;
          const tagLens = this.resultKeyDatas.length;
          let tempStr = "";
          if(tagLens>0){
            for (let i=0;i<tagLens;i++){
              tempStr += `${$.trim(this.resultKeyDatas[i])},`;
            }
          }else{
            tempStr = _this.searchText;
          }
          if(tempStr!=='' || this.resultKeyDatas.length>0){
            let searchUrl = '';
            if(_this.isAll === 0){//搜索全部
              if(tempStr.indexOf(',')>0){
                searchUrl = `api1.0/search/?tag=${tempStr}`;
              }else{
                searchUrl = `api1.0/search/?q=${tempStr}`;
              }
            }else{//搜索部分
              if(tempStr.indexOf(',')>0){
                searchUrl = `api1.0/search/?tag=${tempStr}&article_type=${_this.myArticleId}&search_type=1`;
              }else{
                searchUrl = `api1.0/search/?q=${tempStr}&article_type=${_this.myArticleId}&search_type=1`;
              }

            }
            //这里就执行搜索
            this.$http.get(searchUrl,{
              params:{
                page:page,
                page_size:_this.newsPageSize,
              }
            }).then((res)=>{
              _this.newsTotalCount = res.data.data.total_count;
              if(res.status === 200 && res.data.data!==null){
                let tempArr = [];
                tempArr = res.data.data.detail.hits.hits;
                tempArr.length>0 ? _this.isNoData = false:_this.isNoData = true;
                if(type===0){
                  _this.searchNews = tempArr;
                }
                //下拉刷新
                else if(type===1){
                  _this.searchNews=tempArr.splice(0,_this.newsPageSize);
                }else if(type === 2){ //上拉加载
                  _this.searchNews = _this.searchNews.concat(tempArr);
                }

                let newsLen = _this.searchNews.length;
                for(let i = 0; i<newsLen;i++){
                  _this.newsTag = _this.searchNews[i]._source.tags;
                }
                let allNewsLen = _this.newsTag.length;
                this.newsTagName = "";
                for(let i=0;i<allNewsLen;i++){
                  if(i<=2){
                    if(i+1===allNewsLen){
                      if(i>=2){
                        this.newsTagName+=this.newsTag[i]+"......";
                      }else{
                        this.newsTagName+=this.newsTag[i];
                      }
                    }else {
                      this.newsTagName+=this.newsTag[i]+"、";
                    }
                  }
                }

              }else{
                _this.isNoData = true;
              }
            },(err)=>{
              _this.isNoData = true;
            })
          }else{
            //这里就要显示tag标签
            _this.isNoData = false;
          }
        },
        /**
         * 搜索
         * */
        goSearch(allType,page){
          this.showFilterSearch = false;
          const _this =this;
          const tagLens = this.resultKeyDatas.length;
          let tempStr = "";
          if(tagLens>0){
            for (let i=0;i<tagLens;i++){
              tempStr += `${$.trim(this.resultKeyDatas[i])},`;
            }
          }else{
            tempStr = _this.searchText;
          }
          if(tempStr===""){
            return;
          }
          if(tempStr!=='' || tempStr!=="" ||tempStr!==null || tempStr!=="null" || this.resultKeyDatas.length>0){
            let searchUrl = '';
            if(_this.isAll === 0){//搜索全部
              if(tempStr.indexOf(',')>0){
                searchUrl = `api1.0/search/?tag=${tempStr}`;
              }else{
                searchUrl = `api1.0/search/?q=${tempStr}`;
              }

            }else{//搜索部分
              if(tempStr.indexOf(',')>0){
                searchUrl = `api1.0/search/?tag=${tempStr}&article_type=${_this.myArticleId}&search_type=1`;
              }else{
                searchUrl = `api1.0/search/?q=${tempStr}&article_type=${_this.myArticleId}&search_type=1`;
              }

            }
            //这里就执行搜索（需要进行搜索优化）
            this.$http.get(searchUrl,{
              params:{
                page:page,
                page_size:_this.allPageSize,
              }
            }).then((res)=>{
              //搜索条件,总的页数
//                     _this.allTotalCount = res.data.data.hits.hits.total;
              if(res.status === 200 && res.data.data!==null){

                let tempArr = [];
                tempArr = res.data.data.detail.hits.hits;
                if(allType===0){
                  _this.allResult = tempArr;
                }
                //下拉刷新
                else if(allType===1){
                  _this.allResult=tempArr.splice(0,_this.allPageSize);
                }else if(allType === 2){ //上拉加载
                  _this.allResult = _this.allResult.concat(tempArr);
                }
                this.isShowTags = false;
                const len = _this.allResult.length;
                len>0 ? _this.isNoData = false:_this.isNoData = true;
                _this.singleTieZi = [];
                _this.singleNews = [];
                _this.singleZiLiao = [];
                for(let i=0;i<len;i++){
                  //帖子
                  if(parseInt(_this.allResult[i]._source.source_type) === 1 &&parseInt(_this.allResult[i]._source.article_type) === 1 && parseInt(_this.allResult[i]._source.status) ===1){
                    _this.singleTieZi.push(_this.allResult[i]);
                    let newsLen = _this.singleTieZi.length;
                    for(let i = 0; i<newsLen;i++){
                      _this.allTietags = _this.singleTieZi[i]._source.tags;
                    }
                    let allNewsLen = _this.allTietags.length;
                    this.allTietagName = "";
                    for(let i=0;i<allNewsLen;i++){
                      if(i<=2){
                        if(i+1===allNewsLen){
                          if(i>=2){
                            this.allTietagName+=this.allTietags[i]+"......";
                          }else{
                            this.allTietagName+=this.allTietags[i];
                          }

                        }else {
                          this.allTietagName+=this.allTietags[i]+"、";
                        }
                      }
                    }

                  }//新闻
                  else if(parseInt(_this.allResult[i]._source.source_type) === 1&&parseInt(_this.allResult[i]._source.status) === 1&&parseInt(_this.allResult[i]._source.article_type) === 0){
                    _this.singleNews.push(_this.allResult[i]);
                    let newsLen = _this.singleNews.length;
                    for(let i = 0; i<newsLen;i++){
                      _this.allNewstags = _this.singleNews[i]._source.tags;
                    }
                    let allNewsLen = _this.allNewstags.length;
                    this.allNewstagName = "";
                    for(let i=0;i<allNewsLen;i++){
                      if(i<=2){
                        if(i+1===allNewsLen){
                          if(i>=2){
                            this.allNewstagName+=this.allNewstags[i]+"......";
                          }else{
                            this.allNewstagName+=this.allNewstags[i];
                          }

                        }else {
                          this.allNewstagName+=this.allNewstags[i]+"、";
                        }
                      }
                    }
                  }//资料库
                  else if(parseInt(_this.allResult[i]._source.source_type) === 2){
                    _this.singleZiLiao.push(_this.allResult[i]);
                    let newsLen = _this.singleZiLiao.length;
                    for(let i = 0; i<newsLen;i++){
                      _this.allZiLiaotags = _this.singleZiLiao[i]._source.tags;
                    }
                    let allNewsLen = _this.allZiLiaotags.length;
                    this.allZiLiaoTagName = "";
                    for(let i=0;i<allNewsLen;i++){
                      if(i<=2){
                        if(i+1===allNewsLen){
                          if(i>=2){
                            this.allZiLiaoTagName+=this.allZiLiaotags[i]+"......";
                          }else{
                            this.allZiLiaoTagName+=this.allZiLiaotags[i];
                          }
                        }else {
                          this.allZiLiaoTagName+=this.allZiLiaotags[i]+"、";
                        }
                      }
                    }
                  }
                }

              }else{
                _this.isNoData = true;
              }
            },(err)=>{
              _this.isNoData = true;
            })
          }else{
            _this.singleNews = [];
            _this.singleTieZi = [];
            //这里就要显示tag标签
            _this.isNoData = false;
          }
        },
      }
  }
</script>
<style scoped>
  @import "../../assets/css/search.css";
</style>
