<template>
  <div id="news-item-tlp">
        <a href=""><img class="head-pic" v-lazy="newItem.image" alt="头图"></a>
        <div class="cont">
          <router-link class="ttl" :to="'/newsdetail/'+newItem.id">{{newItem.title}}</router-link>
          <p class="h16">
            <span class="attr"><img class="view" src="../../assets/img/icon1.png"><span>{{newItem.article_views_count}}阅读</span></span>
            <span class="attr"><img src="../../assets/img/icon2.png"><span>{{newItem.article_comments_count}}评论</span></span>
            <span class="attr">{{newItem.created_at}}</span>
          </p>
        </div>
  </div>
</template>
<script>
  export default{
      props:[
          'newItem'
      ],
      mounted(){
          this.watchPerformance();
      },
      methods:{
        /**
         * 查看图片加载的性能
          */
        watchPerformance(){
          const _this = this;
          this.$Lazyload.$on('loaded', function (listener) {
            console.table(_this.$Lazyload.performance())
          })
        }
      }
  }
</script>
