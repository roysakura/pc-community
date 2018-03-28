<template>
  <div class="upload-avator-container">
    <section class="avatar-main">
      <div class="avatar-img">
        <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange"  style="display: none;">
        <ul class="list-ul" v-show="!isPhoto">
          <li class="list-li">
            <img v-lazy="imgUrls" class="avatar-i">
          </li>
        </ul>
      </div>
      <div class="avatar-choice">
        <button class="choice-xiangce" @click="addPic()">选择上传头像</button>
      </div>
    </section>
  </div>
</template>
<script>
  import lrz from 'lrz';
  export default {
    data: function () {
      return {
        imgUrls: '',
        urlArr: [],
        isPhoto: true,
        btnTitle: '',
        isModify: false,
        previewImg:'',
        isPreview: false
      }
    },
    mounted(){
      const temAvatar = localStorage.getItem('avatar');
      if(temAvatar!==null){
        this.imgUrls = temAvatar;
      }
    },
    watch: {
      imgUrls: 'toggleAddPic'
    },
    methods: {
      showMsg(str){
        this.$toast.center(str);
      },
      /**
       * 切换选择显示或者隐藏图片列表
       * */
      toggleAddPic(){
        let vm = this;
        if(vm.imgUrls!==null || vm.imgUrls!==''){
          if(vm.imgUrls.length >= 1) {
            vm.isPhoto = false;
          } else {
            vm.isPhoto = true;
          }
        }

      },
      /**
       *  选择相册或者拍照
       * */
      addPic(){
        $('input[type=file]').trigger('click');
        return false;
      },
      /**
       * 重新选择图片,将之前的进行覆盖操作
       * */
      onFileChange(e){
        const files = e.target.files || e.dataTransfer.files;
        if(!files.length) return;
        this.createImage(files, e);
      },
      /***
       * 创建用户头像并进行压缩处理
       * */
      createImage(file,e){
        let vm = this;
        /**
         * rst:用于对图片进行压缩，获取图片相关信息（图片大小、文件名、类型等）的对象
         * */
        lrz(file[0], { width: 750 }).then(function(rst) {
          vm.imgUrls = rst.base64;
          localStorage.removeItem('avatar');
          localStorage.setItem('user-avatar',vm.imgUrls);
//          history.back(-1);
          return rst;
        }).always(function() {
          // 清空文件上传控件的值
          e.target.value = null;
        });
      },
      /**
       * 上传图片
       * */
      /*saveImage: function(imgUrls){
       const _this = this;
       //数据传输操作,上传到服务器端
       console.log("当前的图片base64为:",imgUrls);
       /!*this.initAxios().post(Api.UPLOADAVATORINFOS,{

       }).then((res)=>{
       _this.showUpLoadImgInfo(res);
       },(err)=>{
       _this.showUpLoadImgWarning();
       console.log("上传失败的信息:",err);
       }
       );*!/

       },*/
    }
  }
</script>
<style scoped>
  @import "../../assets/css/upload.css";
</style>
