<template>
  <div class="bottom-container">
    <div class="footer">
      <div class="cont">Copyright 2018 深圳市龙元汇信科技股份有限公司 版权所有 | All Rights Reserved ICP <a href="http://www.miitbeian.gov.cn">粤ICP备15078047号-2</a></div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
        return{
          endDate:""
        }
    },
    mounted(){

        this.getCurrentDate();
    },
    methods:{
      /**
       * 获取当前的年份
        */
      getCurrentDate(){
          let date = new Date();
          this.endDate = date.getFullYear();
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/footer.css";
</style>
