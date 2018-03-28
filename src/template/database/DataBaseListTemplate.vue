<template>
  <div id="database-tpl">
    <div class="database-content">
      <div class="cont-left">
        <div class="list" id="list">
          <div class="item" v-for="file in databases">
            <DataBaseItemTemplate :file="file" :totalCount="totalCount"></DataBaseItemTemplate>
          </div>
          <div class="load-data-more" @click="loadMoreData()" v-show="isShowMore">
            加载更多
          </div>
        </div>
      </div>
      <div class="cont-right" style="display: none">
        <div class="item">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  const DataBaseItemTemplate = resolve =>{
    require(['../../template/database/DataBaseItemTemplate.vue'],resolve);
  };
  export default{
      components:{
        DataBaseItemTemplate
      },
      props:[
          'databases',
          'isShowMore',
          'totalCount'
      ],
      methods:{
        loadMoreData(){
            this.$emit("load");
        }
      }
  }
</script>
