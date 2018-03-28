<template>
  <div id="news-list">
    <div class="news-list">
      <ul>
        <li v-for="newItem in news" v-show="newItem.status===1 || newItem.status==='1'">
         <NewsItemTemplate :newItem="newItem"></NewsItemTemplate>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  const NewsItemTemplate = resolve =>{
    require(['./NewsItemTemplate.vue'],resolve);
  };
  export default{
      props:[
          'news'
      ],
      components:{
        NewsItemTemplate
      }
  }
</script>
