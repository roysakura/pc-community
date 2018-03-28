<template>
  <div class="public-article-container">
    <div class="p-article-container">
      <main class="write-tie-box">
        <div class="content">
          <div class="tag-wrap">
            <div class="tag" v-for="(item,index) in mChoiceTag">
              <span class="txt">{{item.text}}</span>
              <span class="delete" @click="delChoiceTag(index)">&times;</span>
            </div>
            <div id="add-tag" class="add-tag">
              <span>+</span>
              <span>添加标签</span>
            </div>
          </div>
          <div class="article-wrap">
            <div class="title">
              <input type="text" name="" value="" placeholder="标题" v-model="tieTitle">
            </div>
            <div class="cont">
              <div contenteditable="true" id="content" class="editor" placeholder="话题内容，至少五个字" v-model="content"></div>
            </div>
            <div class="toolbar" v-show="true">
              <label class="select-file"  @click="addPic()">
                <a name="docfile" class="docfile"></a>
              </label>
            </div>
          </div>
        </div>
      </main>
      <div class="avatar-img" v-show="false">
        <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange"  style="display: none;">
        <ul class="list-ul" v-show="!isPhoto">
          <li class="list-li" v-for="item in imgUrls">
            <img :src="item" class="avatar-i">
          </li>
        </ul>
      </div>
      <div class="avatar-choice" v-show="false">
        <button class="choice-xiangce" @click="addPic()">选择或拍照上传头像</button>
      </div>
      <div class="btn-send" @click="sendTie()">
        发送
      </div>
    </div>
  </div>
</template>
<script>
  import Picker from 'better-picker';
  import lrz from 'lrz';
  import {sendTieZiInfo} from '../../api/writetiezi';
  import {dealJiFenInfo} from '../../api/writetiezi';
  export default{
    data(){
      return{
        tags:[],
        jifen:[],
        tieTitle:'',
        opt:'',
        content: "",
        item_credit:0,
        credit_item_id:0,
        mChoiceTag:[],
        imgUrls: [],
        urlArr: [],
        isPhoto: true,
        btnTitle: '',
        isModify: false,
        previewImg:'',
        isPreview: false
      }
    },
    watch: {
      imgUrls: 'toggleAddPic'
    },
    mounted(){
      this.$nextTick(function () {
        this.initEditor();
      });
    },
    methods:{
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
//          console.log("files.length:",files);
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
          vm.imgUrls.push(rst.base64);
          var img = document.createElement("img");
          img.src = rst.base64;
          $("#content").append(img);
//            vm.initEditContent(vm.imgUrls);
          return rst;
        }).always(function() {
          // 清空文件上传控件的值
          e.target.value = null;
        });
      },
      initEditContent(imgUrls){
        const len = imgUrls.length;
//          console.log("我的len:",len);
        for(let i=0;i<len;i++){
          var img = document.createElement("img");
          img.src = imgUrls[i];
          $("#content").append(img);
        }
      },
      /**
       * 删除tag
       * */
      delChoiceTag(tagId){
        this.mChoiceTag.splice(tagId,1);
      },
      //初始化选择器
      initPicker(){
        const _this = this;
        var picker = new Picker({
          data: [_this.tags],
          selectedIndex: [0],
//            title: '我们都是小学生'
        });
        var nameEl = document.getElementById('add-tag');
        picker.on('picker.select', function (selectedVal, selectedIndex) {
//            nameEl.innerText = _this.data1[selectedIndex[0]].text
          //这里进行放入到数组中
          let obj = {};
          obj.text = _this.tags[selectedIndex[0]].text;
          const len = _this.tags.length;
          for(let i=0;i<len;i++){
            if(i===selectedIndex[0]){
              obj.value = _this.tags[i].value;
            }
          }
          _this.mChoiceTag.push(obj);
        });
        nameEl.addEventListener('click', function () {
          picker.show();
        });
      },
      initEditor(){
        const _this = this;
        this.$http.all([this.getAllTags(),this.getAllJiFen()])
          .then(this.$http.spread((tagInfos,jifen)=>{
            _this.initTags(tagInfos);
            _this.initJiFen(jifen);
          }));
      },
      getAllTags(){
        return this.$http.get('/api1.0/tags/');
      },
      getAllJiFen(){
        return this.$http.get('/api1.0/credititems/');
      },
      initTags(res){
        if(res.status === 200 && res.data.data!==null){

          var tempArr = [];
          tempArr = res.data.data.detail;
          const len = tempArr.length;
          for(let i=0;i<len;i++){
            let obj = {};
            obj.text = tempArr[i].name;
            obj.value = tempArr[i].id;
            this.tags.push(obj);
          }
          this.initPicker();
        }else{

        }
      },
      initJiFen(res){
        if(res.status === 200 && res.data.data!==null){
          this.jifen = res.data.data.detail;
        }else{

        }
      },
      updateData(data){
        this.content = data;
      },
      showMsg(str){
        this.$toast.center(str)
      },
      /**
       * 发送帖子
       * @param $event
       */
      sendTie(){
        const _this = this;
        this.content = $("#content").html();

        let tags=[];
        //增强验证性
        const len = this.mChoiceTag.length;
        for(let i=0;i<len;i++){
          tags.push({name:this.mChoiceTag[i].text});
        }
        if(tags.length<=0){
          this.showMsg("请选择标签!");
          return;
        }
        if(this.content===""){
          this.showMsg("请填写内容!");
          return;
        }
        if(this.tieTitle===""){
          this.showMsg("请填写标题!");
          return;
        }
        sendTieZiInfo('/api1.0/articles/',_this.tieTitle,_this.content,tags).then((res)=>{
          _this.delSuccess(res);
        },(err)=>{
          _this.delErr(err);
        });
      },
      delSuccess(res){
        if(res.status === 200){
//              history.go(-1);
          //处理积分
          this.dealJiFen();
        }
      },
      delErr(err){
        this.showMsg("提交失败，请重试!");
      },
      dealJiFen(){
        const _this = this;
        const len = this.jifen.length;
        this.showMsg("发送成功，再写一篇!");
        _this.tieTitle = "";
        _this.content = "";
        _this.mChoiceTag = [];
        $("#content").html("");
        if(len>=1){
          this.item_credit = _this.jifen[1].item_credit;
          this.credit_item_id = _this.jifen[1].id;
        }
        dealJiFenInfo(`/api1.0/users/${localStorage.getItem('userId')}/creditrecords/`,_this.item_credit,_this.credit_item_id).then((res)=>{
          _this.$router.go(0);
        },(err)=>{

        });
      },

    }
  }
</script>
<style scoped>
  @import "../../assets/css/particle.css";
</style>
