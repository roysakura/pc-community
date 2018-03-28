<template>
  <div class="register-container">
    <p class="register-title">
      找回密码
    </p>
    <main class="reg-info-box">
      <div class="reg-phone">
        <span>手&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp机<span style="color: red">*</span></span>
        <input  class="reg-phone-number reg-common forget-common" placeholder="您的手机号" name="phone" type="tel" v-model="phone"/>

      </div>
      <div class="reg-code">
        <span>验&nbsp&nbsp证&nbsp&nbsp码<span style="color: red">*</span></span>
        <input type="text" class="reg-code-number reg-common forget-common" placeholder="请输入验证码" id="reg-code-number" name="code" v-model="code"/>
        <timer-btn ref="timerbtn" class="g-code" id="get-code" v-on:run="sendCode" ></timer-btn>
      </div>
      <div class="reg-password">
        <span>密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码<span style="color: red">*</span></span>
        <input type="password" class="reg-password-number reg-common forget-common" placeholder="请输入密码" autocomplete="off"  name="pwd" v-model="pwd"/>
      </div>
      <div class="reg-password">
        <span>确认密码<span style="color: red">*</span></span>
        <input type="password" class="reg-password-number-again reg-common forget-common" placeholder="请再次输入密码"  name="pwd" v-model="repwd" style="margin-left: 2px;"/>
      </div>
      <div class="reg-btn">
        <a v-on:click='okClick($event)' class="reg-btn-info">确定</a>
      </div>
    </main>
  </div>
</template>
<script>
  import BtnMsg from '../../common/TimeBtn.vue';
  import {getVerCode} from '../../../api/register';
  import {dealRegister} from '../../../api/register';
  import checkUtils from '../../../utils/check'
  export default{
    data(){
      return{
        phone:'', //手机号
        code:'',  //验证码
        pwd:'',   //密码
        repwd:'', //第二次密码
      }
    },
    mounted(){
      $(".reg-phone-number")[0].focus();
      this.changeInStyle();
    },
    methods:{
      /**
       * 改变样式
       **/
      changeInStyle(){
        const _that = this;
        let inputs = $(".forget-common");
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
      /**
       *
       * 重置密码
       * */
      okClick($event){
        const that = this;
        if(this.phone === ""){
          that.showMsg("请输入手机号!");
          return;
        }
        if(!checkUtils.isPhone(this.phone)){
          that.showMsg("手机号格式不对!");
          return;
        }
        if(this.code === ""){
          that.showMsg("请输入验证码!");
          return;
        }
        if(this.pwd === ""){
          that.showMsg("请输入密码!");
          return;
        }
        if(this.repwd === ""){
          that.showMsg("请输入再次密码!");
          return;
        }
        if(this.repwd !== this.pwd){
          that.showMsg("两次密码不一致，请重新输入!");
          return;
        }
        /**
         * 注册
         */
        dealRegister('/passwordrest/',that.phone,that.code,that.pwd,that.repwd).then((res)=>{
          let resData = res.data;
          if(resData.code === '100'){
            that.showMsg("重置密码成功!");
          }
          //重置密码成功后跳转到登录的页面
          that.$router.push({path: '/login', replace: true});
        },(err)=>{
          that.showMsg("重置密码失败，请重试!");
        });
        $event.preventDefault();
      },
      showMsg(str){
        this.$toast.center(str);
      },
      /**
       * 获取重置密码功能的验证码
       */
      sendCode:function(){
        const _that =this;
        if(this.phone === ""){
          _that.showMsg("手机号不能为空!");
          return;
        }
        if(!checkUtils.isPhone(this.phone)){
          _that.showMsg("手机号输入不正确!");
          return;
        }
        _that.$refs.timerbtn.setDisabled(true); //设置按钮不可用
        const codeEle = $("#get-code");
        codeEle.css({
          'background-color':'#20a0ff',
          'color':'#ffffff'
        });
        _that.$refs.timerbtn.start(); //启动倒计时
        getVerCode('/requestPasswordResetBySmsCode/',_that.phone).then((res)=>{
          if(res.status === 201 && res.data!==null){
            _that.showMsg("获取验证码成功!");
          }
          _that.$refs.timerbtn.stop(); //停止倒计时
        },(err)=>{
          _that.showMsg("获取验证码失败，稍后请重试!");
        });
      },

      /**
       *
       * 输入框在获取到焦点的时候的样式
       **/
      getContent(){
        const codeContentEle =  $("#reg-code-number");
        codeContentEle.css({
          'border':'2px solid #20a0ff',
        })
      },
      /**
       * 改变输入框失去焦点时候的样式
       */
      blurContent(){
        const codeContentEle =  $("#reg-code-number");
        codeContentEle.css({
          'border': '1px solid #d6d6d6',
        })
      }
    },
    components:{
      'timer-btn':BtnMsg,
    }
  }
</script>
<style scoped>
  @import "../../../assets/css/register.css";
</style>
