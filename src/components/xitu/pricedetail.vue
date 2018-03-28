<template>
  <div class="price-detail-container">
    <div class="xitu-m-top" v-show="false">
      <span class="xitu-go_back" @click="goBackPage()" v-show="false">返回</span>
      <span class="xitu-m-top-text">{{mPriceData.name}}</span>
    </div>
    <div class="top">
      <div class="top1">
        <p class="name">{{mPriceData.name}}</p>
        <p class="from guige">规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：{{mPriceData.specifications}}</p>
        <p class="from">数据来源：磁易购</p>
      </div>
      <div class="top2">
        <div class="col col-xs-3">
          <p class="tt">最高价格</p>
          <p class="fb" :class="{'detailup':mPriceData.flag==='up','detaildown':mPriceData.flag==='down' ,'detaileq':(mPriceData.flag!=='up' && mPriceData.flag!=='down')}">{{mPriceData.max_quote}}</p>
        </div>
        <div class="col col-xs-3">
          <p class="tt">最低价格</p>
          <p class="fb" :class="{'detailup':mPriceData.flag==='up','detaildown':mPriceData.flag==='down','detaileq':(mPriceData.flag!=='up' && mPriceData.flag!=='down') }">{{mPriceData.min_quote}}</p>
        </div>
        <div class="col col-xs-2">
          <p class="tt">均价</p>
          <p class="fb" :class="{'detailup':mPriceData.flag==='up','detaildown':mPriceData.flag==='down','detaileq':(mPriceData.flag!=='up' && mPriceData.flag!=='down') }">{{mPriceData.avg_quote}}</p>
        </div>
        <div class="col col-xs-2">
          <p class="tt">跌涨</p>
          <p class="fb" :class="{'detailup':mPriceData.flag==='up','detaildown':mPriceData.flag==='down','detaileq':(mPriceData.flag!=='up' && mPriceData.flag!=='down') }">{{mPriceData.change}}</p>
        </div>
        <div class="col col-xs-2">
          <p class="tt">单位</p>
          <p class="tt">{{mPriceData.unit}}</p>
        </div>
      </div>
    </div>

    <div class="chart-wrap">
      <div class="sort" id="sort">
        <div class="col-xs-3 col on">一月</div>
        <div class="col-xs-3 col">三月</div>
        <div class="col-xs-3 col">半年</div>
        <div class="col-xs-3 col">一年</div>
      </div>
      <div class="canvas-area">
        <div id="c-container">
          <line-example
            :chart-data="mData"
            :options="options"
            ref="mycanvas"
            :width="400"
            :height="800"
            v-show="isShowMap"
          >
          </line-example>
        </div>
      </div>
    </div>
    <div class="news-wrap">
      <div class="tt">资讯</div>
      <div class="news-list">
        <a @click="goNewDetail(item.id)" v-for="item in allLookData">
          <p class="cont">{{item.title}}</p>
          <p class="time">{{item.created_at}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  // 导入chart组件模拟数据
//  import options from '../api/data';
  import LineExample from './lineMarker.js'
  import {getMonthData} from '../../api/pricelist'
  import {getMonthDataByMonthName} from '../../api/pricelist'
  import {getLookAll} from '../../api/pricelist'
  import timeUtil from '../../utils/timeUtil'
  import {getSignInfo} from '../../api/pricelist'
  export default{
    components: {
      LineExample
    },
    data() {
      return {
        gradient:null,
        mData: {

        },
        options: {
           title : {
           //是否显示，默认否          --》 Boolean
           display : true,
           //标题显示位置                --》 String
           //'top', 'left', 'bottom', 'right'.
           position : "top",
           //宽屏布局  TODO            --》 Boolean
           //标题是否贴边显示、全屏居中
           fullWidth : true,
           //标题样式
           fontSize : 12,
           fontFamily : "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
           fontColor : "bold",
           //标题上下边距                --》 Number
           //            padding : 10,
           //标题文本内容                --》 String
           text : "手指移至下方曲线上，可查看近日均价(元)"
           },
          legend : {
            labels : {
              //图例框宽度         --》 Number
              boxWidth : 40,
              //图例字体样式
              fontSize : 12,
              fontStyle : "normal",
              fontColor : "#666",
              fontFamily : "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              //图例上下边距            --》 Number
//              padding : 10,
              //图例生成时触发       --》 function
              generateLabels : function(chart) {},
              //是否以点显示图例      --》 Boolean
              //设置为true时boxWidth无效
              usePointStyle : false
            },
          },
          tooltips: {
            intersect: false // default: true. if true, the tooltip mode applies only when the mouse position intersects with an element. If false, the mode will be applied at all times.
          },
          animation: {
            duration: 1000  // 动画时长单位:ms
          },
          responsive: true, // 长宽，100%.如果要单设长和宽的话，要将responsive 设为false
          maintainAspectRatio: false // 保持长宽比
        },
        mPriceData:{},
        month:"1",
        mLabels:[],
        mMonthDatas:[],
        isShowMap:false,
        allLookData:[],
        xituIcon:"http://chuantu.biz/t6/99/1508145943x2890208931.jpg"
      }
    },
    watch:{
      $route(to){
        //对传递的id进行验证(防止篡改)
        const _this = this;
        let reg=/pricedetail\/\d+/;
        if(reg.test(to.path)){
          _this.getDetailData(_this.$route.params.priceName);
          _this.getAllLookData();
        }
      }
    },
    mounted(){
      const _this = this;
      _this.getDetailData(_this.$route.params.priceName);
      _this.getAllLookData();
      $('#sort .col').click(function(event) {
        $(this).addClass('on').siblings().removeClass('on');
        switch ($(this).html()){
          case "一月":
            _this.month = "1";
              break;
          case "三月":
            _this.month = "3";
            break;
          case "半年":
            _this.month = "6";
            break;
          case "一年":
            _this.month = "12";
            break;
        }
        _this.getMonthMoreData(_this.month,_this.mPriceData.name,_this.mPriceData.specifications);
      });
    },
    methods:{
      /**
       * 跳转到新闻详情页
       * */
      goNewDetail(newsId){
        this.$router.push({path: `/newsdetail/${newsId}`, replace: true});
      },
      /**
       * 获取咨询的数据
       * */
      getAllLookData(){
        getLookAll().then((res)=>{
          this.allLookData = res.data.data.detail;
        },(err)=>{

        });
      },
      goBackPage(){
        window.history.go(-1);
      },
      /**
       * 分别获取对应月份的数据
       * @param date
       * @param name
       */
      getMonthMoreData(date,name,spec){
        getMonthDataByMonthName(name,date,spec).then((res)=>{
            this.mMonthDatas = [];
            this.mLabels = [];
            this.mMonthDatas = res.data.data.detail;
            let len = this.mMonthDatas.length;
            len > 0 ? this.isShowMap = true : this.isShowMap = false;
            let mObj = {};
            mObj.labels = [];
            mObj.datasets = [];
          let mBackObj = this.$refs.mycanvas.$refs.canvas.getContext('2d');
          this.gradient = mBackObj.createLinearGradient(0, 0, 0, 450)
          this.gradient.addColorStop(0, 'rgba(0,144,255, 0.9)');
          this.gradient.addColorStop(0.5, 'rgba(0,144,255, 0.25)');
          this.gradient.addColorStop(1, 'rgba(0,144,255, 0)');
            var mRealData = {
              fillColor:'#ccc',// 填充色
              data: [],
              label: '稀土日均价(元)',
              scaleOverride: true, //是否用硬编码重写y轴网格线
              scaleSteps: 6, //y轴刻度的个数
              scaleStepWidth: 20, //y轴每个刻度的宽度
              scaleStartValue: 0, //y轴的起始值
              pointDot: true, //是否显示点
              pointDotRadius: 3, //点的半径
              pointDotStrokeWidth: 2, //点的线宽
              datasetStrokeWidth: 1, //数据线的线宽
             /* backgroundColor: this.gradient,
//            backgroundColor: '#0295f2',
              borderWidth: 1*/
              borderWidth: 1,
              backgroundColor: this.gradient,
            /*  backgroundColor: [ 'rgba(30,144,255, 0.2)', 'rgba(30,144,255, 0.2)', 'rgba(30,144,255, 0.2)', 'rgba(30,144,255, 0.2)', 'rgba(30,144,255, 0.2)', 'rgba(30,144,255, 0.2)' ], borderColor: [ 'rgba(0,191,255,1)', 'rgba(0,191,255, 1)', 'rgba(0,191,255, 1)', 'rgba(0,191,255, 1)', 'rgba(0,191,255 1)', 'rgba(0,191,255, 1)' ],*/

              //点的颜色                      --》 Color or Array<Color>
              pointBackgroundColor : "rgba(0,144,255, 0.5)",
              //点外圈宽度                 --》 Number or Array<Number>
              pointBorderWidth : 2,
              //点半径                       --》 Number or Array<Number>
              pointRadius : 2,
              // TODO                         --》 Number or Array<Number>
              pointHitRadius : 2,
              //鼠标悬浮时点半径              --》 Number or Array<Number>
              pointHoverRadius : 2,
              //鼠标悬浮时点的颜色         --》 Color or Array<Color>
              pointHoverBackgroundColor : "rgba(0,144,255, 0.5)",
              //鼠标悬浮时点边框颜色            --》 Color or Array<Color>
              pointHoverBorderColor : "rgba(0,144,255, 0.5)",
              //鼠标悬浮时点半径              --》 Number or Array<Number>
              pointHoverBorderWidth : 3,
              //是否绘制线条                    --》 Boolean
              showLine : true,
              //有空数据时是否绘制         --》 Boolean
              spanGaps : false,
            };
            for(let i = 0 ;i<len;i++){
                this.mLabels.push(this.mMonthDatas[i].quote_date);
                mRealData.data.push(this.mMonthDatas[i].avg_quote);
            }
            mObj.datasets.push(mRealData);
            mObj.labels = this.mLabels;
            this.mData = mObj;
        },(err)=>{

        });
      },
      /**
       * 获取对应id稀土的详细信息
       * @param name
       */
      getDetailData(name){
        getMonthData(name,timeUtil()).then((res)=>{
            const _this = this;
           this.mPriceData = res.data.data.detail;
          _this.getMonthMoreData(_this.month,_this.mPriceData.name,_this.mPriceData.specifications);
          var str = window.location.href;
          var regEn1 = /[?]/im;
          if(regEn1.test(str) ) {
            var arr = str.split("?")[0];
            var arr1 = str.split("?")[1].split("#")[1];
            str = arr+"#"+arr1;
          }
        },(err)=>{

        });
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/price-detail.css";
  .top .top1{
    text-align: left;
  }
  .detaildown{
    color: #00ba00;
  }

  .detailup{
    color: #dc0000;
  }
  .detaileq{
    color: #333333;
  }
  .price-detail-container{
    width: 1100px;
    margin: 0 auto;
  }
  #test {
    width: 400px;
    height: 400px;
    margin: 40px auto;
  }
  .top2{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: space-around;
    border: 1px solid #e7e7e7;
  }
  .sort{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .body .chart-wrap .sort .col{
    font-size: 14px;
  }
  .body .top .top2 .col{
    border: 0;
  }
  body .top .top2 .col{
    border-left: 1px solid #e7e7e7;
  }
  /*去掉左边第一个左边框样式*/
  body .top .top2 .col:first-of-type{
    border-left: none;
  }
  .news-list{
    text-align: left;
  }
  .xitu-m-top{
    width: 100%;
    height: 40px;
    background: #0295f2;
    color: #fff;
    font-size: 18px;
    line-height: 40px;
    position: relative;
    text-align: center;
  }
  .xitu-m-top-text{

  }
  .xitu-go_back{
    width: 40px;
    height: 40px;
    position: absolute;
    left: 25px;
    top: 0;
  }
  .xitu-go_back::before{
    content: "";
    width: 32px;
    height: 40px;
    /*background: url("../../assets/images/xitu-arrow-right.png")no-repeat center;*/
    position: absolute;
    left: -30px;
    top: 0;
  }
  .tt{
    color: #aaa;
  }
</style>
