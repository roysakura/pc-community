<template>
  <div class="login-container">
    <div class="body">
      <div class="login-layer">
          <div class="login-uname">
            <i class="user-name-icon"></i>
         <input type="text"  placeholder="用户名" v-model="phone" class="user-t user-name login-common" style="margin-top: 40px;" id="phone-input">
            <i class="close-x close-x-normal" id="user-close"></i>
          </div>
          <div class="login-paswd" style="margin-top: 40px">
            <i class="pwd-suo-top"></i>
            <i class="pwd-suo-bottom"></i>
            <input type="password"  placeholder="密码" v-model="pwd" class="user-t login-common" id="user-pwd">
            <i class="close-p close-x-normal" id="pwd-close"></i>
          </div>
          <div class="login-btn1">
            <a @click="checkLog()" class="login-btn">登录</a>
          </div>
        <div  class="user-name-box forget-paswd">
          <router-link to="/register"  class="reg-quick-btn">快速注册</router-link>
          <router-link class="forget-paswd-btn" to="/forgetpwd">忘记密码</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {dealLogin} from '../../../api/login'
  import CheckUtils from '../../../utils/check'
  import {getUser} from '../../../api/userinfo';
  export default{
      data(){
          return{
            phone:'',
            pwd:'',
            token:'',
            personalInfo:{},
            images:"",
            isTouXiang:false
          }
      },
    mounted(){
      this.makeFocus();
      this.changeInStyle();
      this.switchClose();
    },
    methods:{
      /**
       * 切换显示的样式
       * */
      switchClose(){
        $("#user-close").on('click',function () {
          $("#phone-input").val("");
          $(this).hide();
        });
        $("#phone-input").bind('input propertychange',function () {
          $("#user-close").show();
        });

        $("#pwd-close").on('click',function () {
          $("#user-pwd").val("");
          $(this).hide();
        });
        $("#user-pwd").bind('input propertychange',function () {
          $("#pwd-close").show();
        });
      },
      makeFocus(){
        let uEle = $(".user-name")[0];
        let LoginBox = $(".login_layer")[0];
        uEle.focus();
        if(uEle.focus){
          $(uEle).css({
            'border':'2px solid #20a0ff',
          });
        }
      },
      /**
       * 输入框获取到焦点的时候改变样式
       * */
      changeInStyle(){
        let inputs = $(".login-common");
        $(inputs).each(function (index,item) {
          $(item).focus(function () {
            $(this).css({
              'border':'2px solid #20a0ff',
            });
          });
          $(item).blur(function () {
            $(this).css({
              'border': '1px solid #d6d6d6',
            });
          });
        });
      },
      showMsg(str){
        this.$toast.center(str);
      },
      checkLog(){
        const that = this;
        if(this.phone === ""){
          that.showMsg("电话号码不能为空!");
          return;
        }
        if(!CheckUtils.isPhone(this.phone)){
          that.showMsg("输入的不是手机号!");
          return;
        }
        if(this.pwd === ""){
          that.showMsg("密码不能为空!");
          return;
        }
        dealLogin('/api-token-auth/',that.phone,that.pwd).then((res)=>{
          if(res.status ===200 && res.data!==null){
            that.initLogin(res);
          }else{
          }
        },(err)=>{
          if (parseInt(err.errorcode[0]) === 30000) {
            that.showMsg("电话号码错误!");
          }
          if (parseInt(err.errorcode[0]) === 30001) {
            that.showMsg("密码错误!");
          }
        })
      },
      initLogin(res){
        this.token = res.data.token;
        localStorage.setItem('ptoken',res.data.token);
        localStorage.setItem('userId',res.data.user_id);
        localStorage.setItem('uName',res.data.user_name);
        localStorage.setItem('login',false);
        this.$store.dispatch('showLogin',false);
        this.$store.dispatch('setToken', res.data.token);
        this.$store.dispatch('setUserId', res.data.user_id);
        this.getUserInfos();
        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
        this.$router.push({
          path: redirect
        });
      },
      //获取用户基本信息
      getUserInfos(){
        const _this = this;
        getUser('/api1.0/profiles/').then((res)=>{
          _this.initUserInfos(res);
        },(err)=>{
          _this.hideUserInfo();
        });
      },
      initUserInfos(res){
        const _this = this;
        if(res.status === 200){
          _this.personalInfo = res.data[0].personal_info;
          _this.images = _this.personalInfo.image.medium;
          _this.personalInfo.avatar ? _this.isTouXiang = true:_this.isTouXiang = false;

          /**
           * _this.userIcon对象三个属性:small,medium,large
           */
          localStorage.setItem('uPhoto',this.personalInfo.avatar);
          this.$store.dispatch('avatar',this.personalInfo.avatar);
        }else{
          _this.hideUserInfo();
        }
      },
      //隐藏用户基本信息
      hideUserInfo(){

      },
    }
  }
</script>
<style scoped>
  @import "../../../assets/css/login.css";
</style>
