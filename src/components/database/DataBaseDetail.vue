<template>
  <div class="database-detaicl-container">
    <div class="database-detail-menu cont">
      <router-link to="/">磁易购首页</router-link>
      <span>&gt;</span>
      <router-link to="/database">文章</router-link>
      <span>&gt;</span>
      <span>正文</span>
    </div>

    <div class="content">
      <div class="cont-left">
        <div class="detail">
          <div class="ttl">
            <!--<img src="">-->
            <span>{{file_name}}</span>
          </div>
          <div class="info">
            <span>贡献者: {{user_name}}</span>
            <span>上传于：{{uploaded_at}}</span>
            <span style="display: none">阅读: 4507</span>
            <span>下载: {{downloadCount}}</span>
          </div>

          <div class="word">
            <div class="abstract">
              <p class="txt">{{abstract}}</p>
            </div>
            <div class="download-wrap">
              <div class="download">
                <p>所需下载积分：{{credit}}</p>
                <!-- 积分不够时显示cant_download，同时隐藏download -->
                <p id="cant_download">您当前积分为{{currentCredit}}</p>
                <div @click="openwin(url,$event)" class="down-l">下载</div>
              </div>
              <div class="earn" style="display: none">
                <a href="">完成任务，赚取下载积分</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="cont-right">
        <div class="item">
          <div class="ttl">相关文档推荐</div>
          <ul>
            <li><a href="">世界上最强大超导磁铁强大超导磁铁</a></li>
            <li><a href="">世界上最强大超导磁铁</a></li>
            <li><a href="">世界上最强大超导磁铁</a></li>
            <li><a href="">世界上最强大超导磁铁</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        id:-1,
        //文件的摘要
        abstract:'',
        //下载该文件所需要的积分
        credit:0,
        //用户当前积分
        currentCredit:0,
        uploader:-1,
        downloadCount:0,
        url:"",
        isShowDataBase:false,
        isShowBak:true,
        user_name:"",
        uploaded_at:"",
        file_name:""
      }
    },
    mounted(){
      this.getUserJIfen();
      this.getDatumById(this.$route.params.fileId);
    },
    methods:{
      /**
       * 通过资料库的id获取资料库详细信息
        * @param id:资料库的id
       */
      getDatumById(id){
        this.$http.get(`/api1.0/files/${id}/`).then((res)=>{
          this.id = res.data.data.detail.id;
          this.abstract = res.data.data.detail.abstract;
          this.credit = res.data.data.detail.credit;
          this.uploader = res.data.data.detail.uploader;
          this.downloadCount = res.data.data.detail.download_count;
          this.url = res.data.data.detail.file_url;
          this.user_name = res.data.data.detail.user_name;
          this.uploaded_at = res.data.data.detail.uploaded_at;
          this.file_name = res.data.data.detail.file_name;
          let str = window.location.href;
          const regEn1 = /[?]/im;
          if(regEn1.test(str) ) {
            let arr = str.split("?")[0];
            let arr1 = str.split("?")[1].split("#")[1];
            str = arr+"#"+arr1;
          }
        },(err)=>{

        });
      },
      /**
       * 显示提示信息
       * @param str
       */
      showMsg(str){
        this.$toast.center(str);
      },
      openwin(url,event) {
        let token = localStorage.getItem('token');
        if(token===null || token===''){
          this.$router.push({path: '/login', replace: true});
        }
        if(this.currentCredit <this.credit){
          this.showMsg("很抱歉，您当前积分不足，不能下载该文件!");
          return;
        }
        const _this = this;
        this.$http.post('/api1.0/filecredits/',{
          file_id:_this.id
        }).then((res)=>{
        },(err)=>{
        });
        let a = document.createElement("a");
        a.setAttribute("href", `${url}?date=${new Date().getTime()}`);
        a.setAttribute("download", `${url}`);
        document.body.appendChild(a);
        a.click();
        event.preventDefault();
      },
      /**
       * 获取当前用户的积分信息
       */
      getUserJIfen(){
        const _this = this;
        this.$http.get(`/api1.0/users/${localStorage.getItem('userId')}/credits/`)
          .then((res)=>{
            _this.initJiFenData(res);
          },(err)=>{

          })
      },
      /**
       * 初始化当前用户的积分数据
       * @param res
       */
      initJiFenData(res){
        if(res.status ===200 && res.data.data!==null) {
          this.currentCredit = res.data.data.detail.current_credit;
        }
      }
    },
    watch:{
      $route(to){
        //对传递的id进行验证(防止篡改)
        let reg=/databasedetail\/\d+/;
        if(reg.test(to.path)){
          let newsId=this.$route.params.fileId || 0;
          this.getDatumById(newsId);
        }
      }
    },
  }
</script>
<style scoped>
  @import "../../assets/css/data-detail.css";
</style>
