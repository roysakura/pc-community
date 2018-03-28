<template>
  <div class="news-container">
    <img  src="../../assets/img/news-dav.png" alt="广告图" style="margin: 0 auto;margin-bottom: 15px; margin-top: 10px;display: block">
    <div class="news-content">
      <div class="news-w1">
        <div class="cont-left">
          <div class="news-area">
            <div class="ttl">
              <div class="t-name">
                <div class="circle"></div>
                <span>头条</span>
              </div>
              <router-link class="t-more" to="/newslist/1">更多</router-link>
            </div>
            <div class="ct">
              <div class="headline">
                <el-carousel :interval="5000" arrow="always" class="toutia-banner-item">
                  <el-carousel-item v-for="banner in newsBanner" :key="banner.id">
                    <router-link :to="'/newsdetail/'+banner.id">
                      <img v-lazy="banner.image" alt="" class="banner-icon toutiao-img">
                      <div class="m-title-mask">
                        <div class="m-mask-bg">

                        </div>
                        <span class="m-banner-title">{{banner.title}}</span>
                      </div>
                    </router-link>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <ul class="toutiao-ul">
                <li v-for="item in toutiao">
                  <span></span>
                  <router-link :to="'/newsdetail/'+item.id">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="news-area">
            <div class="ttl">
              <div class="t-name">
                <div class="circle"></div>
                <span>国内</span>
              </div>
              <router-link class="t-more" to="/newslist/2">更多</router-link>
            </div>
            <div class="ct">
              <div class="headline">
                <el-carousel :interval="5000" arrow="always" class="toutia-banner-item">
                  <el-carousel-item v-for="banner in guoneiBanner" :key="banner.id">
                    <router-link :to="'/newsdetail/'+banner.id">
                      <img v-lazy="banner.image" alt="" class="banner-icon toutiao-img">
                      <div class="m-title-mask">
                        <div class="m-mask-bg">

                        </div>
                        <span class="m-banner-title">{{banner.title}}</span>
                      </div>
                    </router-link>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <ul class="toutiao-ul">
                <li v-for="item in guonei">
                  <span></span>
                  <router-link :to="'/newsdetail/'+item.id">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="news-area">
            <div class="ttl">
              <div class="t-name">
                <div class="circle"></div>
                <span>国际</span>
              </div>
              <router-link class="t-more" to="/newslist/4">更多</router-link>
            </div>
            <div class="ct">
              <div class="headline">
                <el-carousel :interval="5000" arrow="always" class="toutia-banner-item">
                  <el-carousel-item v-for="banner in guoJiBanner" :key="banner.id">
                   <router-link :to="'/newsdetail/'+banner.id">
                     <img v-lazy="banner.image" alt="" class="banner-icon toutiao-img">
                     <div class="m-title-mask">
                       <div class="m-mask-bg">

                       </div>
                       <span class="m-banner-title">{{banner.title}}</span>
                     </div>
                   </router-link>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <ul class="toutiao-ul">
                <li v-for="item in guoji">
                  <span></span>
                  <router-link :to="'/newsdetail/'+item.id">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cont-right">
          <div class="list-area">
            <div class="ttl">
              <div class="name">稀土行情</div>
              <div class="more" @click="goXiTuList">更多</div>
            </div>
            <table class="table">
              <thead>
              <tr>
                <th>名称</th>
                <th>价格区间</th>
                <th>均价</th>
              </tr>
              </thead>
              <tbody><!-- tbody里只显示6条信息 -->
              <tr v-for="item in priceList"  @click="goPriceDetailPage(item.id)">
                <td>{{item.name}}</td>
                <td :class="{'up':item.flag==='up','down':item.flag==='down'}">{{item.min_quote}}～{{item.max_quote}}</td>
                <td :class="{'up':item.flag==='up','down':item.flag==='down' }">{{item.avg_quote}}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <img class="adv-home2" src="../../assets/img/adv-home3.png" alt="广告图">
          <div class="list-area" style="margin-top: 80px;">
            <div class="ttl">
              <div class="name">热度排行</div>
            </div>
            <ul id="hot_list">
              <li v-for="(item,index) in hotDatas">
                <span>{{index+1}}</span>
                <a href="">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div class="news-w1">
        <div class="cont-left">
          <div class="news-area">
            <div class="ttl">
              <div class="t-name">
                <div class="circle"></div>
                <span>企业</span>
              </div>
              <router-link class="t-more" to="/newslist/5">更多</router-link>
            </div>
            <div class="ct">
              <div class="headline">
                <el-carousel :interval="5000" arrow="always" class="toutia-banner-item">
                  <el-carousel-item v-for="banner in qiYeBanner" :key="banner.id">
                    <router-link :to="'/newsdetail/'+banner.id">
                      <img v-lazy="banner.image" alt="" class="banner-icon toutiao-img">
                      <div class="m-title-mask">
                        <div class="m-mask-bg">

                        </div>
                        <span class="m-banner-title">{{banner.title}}</span>
                      </div>
                    </router-link>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <ul class="toutiao-ul">
                <li v-for="item in qiye">
                  <span></span>
                  <router-link :to="'/newsdetail/'+item.id">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="news-area">
            <div class="ttl">
              <div class="t-name">
                <div class="circle"></div>
                <span>数据</span>
              </div>
              <router-link class="t-more" to="/newslist/6">更多</router-link>
            </div>
            <div class="ct">
              <div class="headline">
                <el-carousel :interval="5000" arrow="always" class="toutia-banner-item">
                  <el-carousel-item v-for="banner in dataBanner" :key="banner.id">
                   <router-link :to="'/newsdetail/'+banner.id">
                     <img v-lazy="banner.image" alt="" class="banner-icon toutiao-img">
                     <div class="m-title-mask">
                       <div class="m-mask-bg">

                       </div>
                       <span class="m-banner-title">{{banner.title}}</span>
                     </div>
                   </router-link>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <ul class="toutiao-ul">
                <li v-for="item in shuju">
                  <span></span>
                  <router-link :to="'/newsdetail/'+item.id">{{item.title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="cont-right">
          <div class="list-area">
            <div class="ttl">
              <div class="name">百科</div>
            </div>
            <ul class="knowledge">
              <li v-for="item in baike">
                <span class="ccl"></span>
                <router-link :to="'/newsdetail/'+item.id">{{item.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="back-top" @click="goToTop()" id="backTop">

    </div>
  </div>
</template>
<script>
  import timeUtil from '../../utils/timeUtil'
  import {getBaoJia} from '../../api/pricelist'
  import {getNewsSomeList} from '../../api/news'
  import {getNewsHotList} from '../../api/news'
  import {getNewsBanner} from '../../api/news'
  export default{
    data(){
        return{
            priceList:[],
            toutiao:[],
            guonei:[],
            guoji:[],
            qiye:[],
            shuju:[],
            qianyan:[],
            baike:[],
            hotDatas:[],
          newsBanner:[],
          guoneiBanner:[],
          guoJiBanner:[],
          qiYeBanner:[],
          dataBanner:[]
        }
    },
    mounted(){
        this.getPriceListData();
        this.getNewsListData();
        this.getHotData();
        this.getTouTiaoBanner();
        this.getGuoNeiBanner();
        this.getGuoJiBanner();
        this.getQiYeBanner();
        this.getDataBanner();
        this.backTop();
    },
    methods:{
      getDataBanner(){
        getNewsBanner('/api1.0/articleranks/',6).then((res)=>{
          this.dataBanner = res.data.data.detail;
        },(err)=>{

        });
      },
      getQiYeBanner(){
        getNewsBanner('/api1.0/articleranks/',5).then((res)=>{
          this.qiYeBanner = res.data.data.detail;
        },(err)=>{

        });
      },
      getGuoJiBanner(){
        getNewsBanner('/api1.0/articleranks/',4).then((res)=>{
          this.guoJiBanner = res.data.data.detail;
        },(err)=>{

        });
      },
      getGuoNeiBanner(){
        getNewsBanner('/api1.0/articleranks/',2).then((res)=>{
          this.guoneiBanner = res.data.data.detail;
        },(err)=>{

        });
      },
      getTouTiaoBanner(){
        getNewsBanner('/api1.0/articleranks/',1).then((res)=>{
          this.newsBanner = res.data.data.detail;
        },(err)=>{

        });
      },
      getHotData(){
        getNewsHotList("/api1.0/articleranks/").then((res)=>{
          this.hotDatas = res.data.data.detail
        },(err)=>{

        });
      },
      getNewsListData(){
        getNewsSomeList("/api1.0/categorys/articles/").then((res)=>{
            this.toutiao = res.data.data[1];
            this.guonei = res.data.data[2];
            this.guoji = res.data.data[4];
            this.qiye = res.data.data[5];
            this.shuju = res.data.data[6];
            this.qianyan = res.data.data[8];
            this.baike = res.data.data[10];
        },(err)=>{

        })
      },
      /**
       * 跳转到稀土行情详情页
       * */
      goPriceDetailPage(name){
        this.$router.push({path: `/pricedetail/${name}`, replace: true});
      },
      /**
       * 跳转到稀土行情页
       * */
      goXiTuList(){
        this.$router.push({path: `/xitulist`, replace: true});
      },
      /**
       * 返回顶部
       * */
      backTop(){
        window.onscroll= function(){
          //变量t是滚动条滚动时，距离顶部的距离
          const t = document.documentElement.scrollTop||document.body.scrollTop;
          const scrollup = document.getElementById('backTop');
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
      getPriceListData(){
        getBaoJia(timeUtil()).then((res)=>{
          let priceArr = [];
          priceArr = res.data.data.detail;
          this.priceList = priceArr.filter((item,index)=>{
              return index<6;
          })
        },(err)=>{

        })
      }
    }
  }
</script>
<style>
  @import "../../assets/css/news.css";
</style>
