<template>
  <div id="data-base-item-tpl">
    <p class="tags">标签：<span v-for="(tag,index) in file.tags">{{tag.name}}<span v-show="(index+1)!==file.tags.length">、</span></span></p>
    <p class="info">
      <span class="avatar" style="display: none"></span>
      <span class="ttl">{{file.file_name}}</span>
    </p>
    <div class="abstract">
      <img v-lazy="file.file_image" alt="文章配图" class="data-base-icon">
      <p class="database-txt">
        <!-- 此span的文章摘要，劳烦后台只取出110字长 -->
        <span class="database-abstract">{{file.abstract}}</span>
        <span>……</span>
        <span><router-link class="view-all" :to="'/databasedetail/'+file.id">阅读全文</router-link></span>
      </p>
    </div>
    <p class="h16">
      <span>{{file.uploaded_at}}</span>
      <span>共{{totalCount}}页</span>
      <span>下载{{file.download_count}}次</span>
      <span>{{file.credit}}积分</span>
      <span>贡献者: {{file.user_name}}</span>
    </p>
  </div>
</template>
<script>

  export default{
      props:[
          'file',
          'totalCount'
      ]
  }
</script>
