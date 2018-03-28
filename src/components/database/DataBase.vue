<template>
  <div class="database-container">
    <div class="database-filt">
      <div class="cont" style="display: none">
        <span class="ttl">筛选：</span>
        <ul id="choice">
          <li>
            <span class="rdo"></span>
            <span>全部</span>
          </li>
          <li>
            <span class="rdo"></span>
            <span>DOC</span>
          </li>
          <li>
            <span class="rdo"></span>
            <span>PPT</span>
          </li>
          <li>
            <span class="rdo"></span>
            <span>PDF</span>
          </li>
          <li>
            <span class="rdo"></span>
            <span>XLS</span>
          </li>
          <li>
            <span class="rdo"></span>
            <span>其他</span>
          </li>
        </ul>
      </div>
    </div>

   <DataBaseListTemplate :databases="databases" :isShowMore="isShowMore"    v-on:load="loadMore" :totalCount="totalCount"></DataBaseListTemplate>

    <div class="back-top" @click="goToTop()" id="backTop">

    </div>
  </div>
</template>
<script>
  const DataBaseListTemplate = resolve =>{
    require(['../../template/database/DataBaseListTemplate.vue'],resolve);
  };
  export default{
    components:{
      DataBaseListTemplate
    },
    data(){
      return{
        //总页数
        totalCount:0,
        //第一页
        pageIndex:1,
        //每一页的数量
        pageSize:10,
        //资料集合
        databases:[],
        //新闻的标签
        newsTags:[],
        //是否有数据
        isNoData:false,
        xituIcon:"http://chuantu.biz/t6/101/1508207945x2728278913.jpg",
        isShowMore:true
      }
    },
    mounted(){
      this.getDataBaseDatas(0,1);
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
       * 从服务器端获取资料库的数据
       * */
      getDataBaseDatas(type,page){
        const that = this;
        this.$http.get('/api1.0/files/',{
          params:{
            type:0,
            page:page,
            page_size:that.pageSize,
          }
        }).then((res)=>{
          if(res.status === 200){
            that.initData(type,res);
          }else{
            that.isNoData = true;
          }
        },()=>{//没有数据的时候触发这个回调
          that.isNoData = true;
        });
      },
      /**
       *初始化资料库的数据
       * */
      initData(type,res){
        const that = this;
        let count = res.data.data.total_count;
        that.totalCount = res.data.data.total;//获取总的记录数
        console.log("获取到的总页数是:",res.data.data.total);
        if(res.data!==null && res.data.data.detail.length>0){
          that.isNoData = false;
          let tempArr = [];
          tempArr = res.data.data.detail;
          if(type===0){
            that.databases = tempArr;
          }
          //下拉刷新
          else if(type===1){
            that.databases=tempArr.splice(0,that.pageSize);
          }else if(type === 2){ //上拉加载
            that.databases = that.databases.concat(tempArr);
          }
          let newsLen = that.databases.length;
          for(let i = 0; i<newsLen;i++){
            that.newsTags = that.databases[i].tags;
          }
        }else{
          that.isNoData = true;
        }

      },
      loadMore(){
        this.pageIndex++;
        this.type = 2;
        if(this.pageIndex<=this.totalCount){
          this.isShowMore = true;
          this.getDataBaseDatas(this.type,this.pageIndex);
        }else{
          this.isShowMore = false;
        }
      },
    }
  }
</script>
<style scoped>
  @import "../../assets/css/database.css";
</style>
