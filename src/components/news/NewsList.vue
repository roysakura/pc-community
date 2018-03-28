<template>
  <div class="news-list-container">
    <div class="news-list-content"  v-show="!showTable">
      <div class="cont-left">
        <div class="top">
          <div class="slide-wrap">
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="banner in newsBanner" :key="banner.id">
                <img v-lazy="banner.image" alt="" class="banner-icon">
                <div class="title-mask">
                  <div class="mask-bg">

                  </div>
                  <span class="banner-title">{{banner.title}}</span>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <ul class="news-lis">
            <li v-for="item in toutiao">
              <span></span>
              <router-link :to="'/newsdetail/'+item.id">{{item.title}}</router-link>
            </li>
          </ul>
        </div>

        <NewsListTemplate :news="news"></NewsListTemplate>
        <div class="loadmore" @click="loadMore()" v-show="isShowMore">
          加载更多
        </div>
      </div>
      <div class="cont-right">
        <div class="item">

        </div>
      </div>
    </div>
    <XiTu :priceList="priceList" v-show="showTable"></XiTu>
    <div class="back-top" @click="goToTop()" id="backTop">

    </div>
  </div>
</template>
<script>
  import {getNews} from '../../api/news'
  import {getNewsBanner} from '../../api/news'
  import timeUtil from '../../utils/timeUtil'
  import {getBaoJia} from '../../api/pricelist'
  import {getNewsSomeList} from '../../api/news'
  const XiTu = resolve =>{
    require(['../../template/xitu/XiTuTemplate.vue'],resolve);
  };
  const NewsListTemplate = resolve =>{
    require(['../../template/news/NewsListTemplate.vue'],resolve);
  };
  export default{
    components:{
      XiTu,
      NewsListTemplate
    },
      data(){
          return{
            newsId:-1,
            news:[],
            newsBanner:[],
            pageSize:10,
            totalCount:0,
            pageIndex:1,
            type:0,
            isShowMore:true,
            priceList:[],
            showTable:false,
            toutiao:[]
          }
      },
      mounted(){
        let newsId=this.$route.params.newsId || 0;
        if(parseInt(newsId) === 0){
          this.getBanner(1);
          this.getPriceListData();
        }else{
          this.showTable = false;
          this.getBanner(newsId);
          this.getCatNews(0,newsId,this.pageIndex);
          this.getNewsSome(newsId);
        }
        this.backTop();
      },
      methods:{
        getNewsSome(newsId){
          getNewsSomeList("/api1.0/categorys/articles/").then((res)=>{
            this.toutiao = res.data.data[newsId];
          },(err)=>{

          })
        },
        /**
         * 获取稀土行情列表数据
         */
        getPriceListData(){
          const that = this;
          getBaoJia(timeUtil()).then((res)=>{
            this.showTable = true;
            this.priceList = res.data.data.detail;
          },(err)=>{
            that.showNoData = false;
          });
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
            if(scrollup){
              if(t>=800){
                scrollup.style.display="block";
              }else{          //恢复正常
                scrollup.style.display="none";
              }
            }
          }
        },
        /**
         * 返回顶部
         * */
        goToTop(){
          $('html,body').scrollTop(0);
        },
        getCatNews(type,newsId,pageIndex){
          getNews('/api1.0/articles/',pageIndex,newsId,10).then((res)=>{
            if(res.status === 200){
              this.initNewsData(type,res);
            }
          },(err)=>{

          });
        },
        /**
         * 初始化新闻数据
         * @param type:类型，1表示刷新，2表示上拉加载更多
         * @param res:返回的新闻数据
         */
        initNewsData(type,res){
          const that = this;
          that.totalCount = res.data.data.total;
          if(res.data!==null && res.data.data.detail.length>0) {
            that.showNoData = false;
            let tempArr = [];
            tempArr = res.data.data.detail;

            if (type === 0) {
              that.news = tempArr;
            }
            //下拉刷新
            else if (type === 1) {
              that.news = tempArr.splice(0, that.pageSize);
            } else if (type === 2) { //上拉加载
              that.news = that.news.concat(tempArr);
            }

          }
        },
        /**
         * 加载更多
         */
        loadMore(){
          this.pageIndex++;
          this.type = 2;
          if(this.pageIndex<=this.totalCount){
            this.isShowMore = true;
            this.getCatNews(this.type,this.$route.params.newsId,this.pageIndex);
          }else{
            this.isShowMore = false;
          }

        },
        /**
         * 获取轮播数据
         * @param newsId
         */
        getBanner(newsId){
          getNewsBanner('/api1.0/articleranks/',newsId).then((res)=>{
  //            this.newsBanner = [];
              this.newsBanner = res.data.data.detail;

          },(err)=>{

          });
        }
      },
        watch:{
          $route(to){
            //对传递的id进行验证(防止篡改)
            let reg=/newslist\/\d+/;
            const _this = this;
            if(reg.test(to.path)){
              let newsId=this.$route.params.newsId || 0;
              _this.pageIndex = 1;
              _this.news = [];
              if(parseInt(newsId) === 0){
                _this.getBanner(1);
                _this.getPriceListData();
                _this.showTable = true;
              }else{
                _this.showTable = false;
                _this.getCatNews(0,newsId,_this.pageIndex);
                _this.getBanner(newsId);
                _this.getNewsSome(newsId);
              }
              }
            }
          }
  }
</script>
<style>
  @import "../../assets/css/news-list.css";
  @import "../../assets/css/xitu_lists_tyle.css";
  .el-carousel{
    width: 406px;
    height: 200px;
  }
  .el-carousel__container{
    width: 406px;
    height: 200px;
  }
  .el-carousel__item{
    width: 406px;
    height: 200px;
  }
</style>
