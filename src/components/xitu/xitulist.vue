<template>
  <div class="xitu-list-container">
    <XiTu :priceList ="priceList"></XiTu>
    <div class="back-top" @click="goToTop()" id="backTop">
    </div>
  </div>
</template>
<script>
  import {getMonthData} from '../../api/pricelist'
  import {getMonthDataByMonthName} from '../../api/pricelist'
  import {getLookAll} from '../../api/pricelist'
  import timeUtil from '../../utils/timeUtil'
  import {getBaoJia} from '../../api/pricelist'
  const XiTu = resolve =>{
    require(['../../template/xitu/XiTuTemplate.vue'],resolve);
  };
  export default{
      data(){
          return{
            priceList:[]
          }
      },
      //配置子组件
      components:{
        XiTu
      },
      mounted(){
        this.getPriceListData();
        this.backTop();
      },
      methods:{
        /**
         * 获取稀土行情列表数据
          */
        getPriceListData(){
          const that = this;
          getBaoJia(timeUtil()).then((res)=>{
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
      }
  }
</script>
<style scoped>
  @import "../../assets/css/xitu_lists_tyle.css";
</style>
