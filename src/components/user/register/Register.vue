<template>
  <div class="register-container">
    <p class="register-title">
      注册磁易购社区
    </p>
    <main class="reg-info-box">
      <div class="reg-phone">
        <span>手&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp机<span style="color: red">*</span></span>
        <input  class="reg-phone-number reg-common" placeholder="您的手机号" name="phone" type="tel" v-model="phone"/>

      </div>
      <div class="reg-code">
        <span>验&nbsp&nbsp证&nbsp&nbsp码<span style="color: red">*</span></span>
        <input type="text" class="reg-code-number reg-common" placeholder="请输入验证码" id="reg-code-number" name="code" v-model="code"/>
        <timer-btn ref="timerbtn" class="g-code" id="get-code" v-on:run="sendCode" ></timer-btn>
      </div>
      <div class="reg-password">
        <span>密&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp码<span style="color: red">*</span></span>
        <input type="password" class="reg-password-number reg-common" placeholder="请输入密码" autocomplete="off"  name="pwd" v-model="pwd"/>
      </div>
      <div class="reg-password">
        <span>确认密码<span style="color: red">*</span></span>
        <input type="password" class="reg-password-number-again reg-common" placeholder="请再次输入密码"  name="pwd" v-model="repwd" style="margin-left: 2px;"/>
      </div>
      <div class="who">
        <div style="display: inline-block" class="my-namee">我&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp是</div>
        <div class="who-am">
          <div class="who-box who-c">
            <span  class="radio-img account_company" id="account_company"></span>
          </div>
          <div class="who-box">
            <span class="radio-img account_person" id="account_person" ></span>
          </div>
        </div>
      </div>
      <div class="reg-password">
        <span>名&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp称<span style="color: red">*</span></span>
        <input type="text" class="reg-password-number-again reg-common" placeholder="您的称呼" autocomplete="off" name="pwd" v-model="chenghu" />
      </div>
      <div class="reg-password choice_company">
        <span>公&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp司<span style="color: red">*</span></span>
        <input type="text" class="reg-password-number-again reg-common" placeholder="您的公司"  name="company" v-model="companyName" id="company" v-on:keyup.13="hideList()"/>
        <ul class="company-list" id="company_list" v-show="showCompany">
          <li v-for="item in compData" @click="choiceCom(item._source.name)">{{item._source.name}}</li>
        </ul>
      </div>
      <div class="fileee">
        <div class="card_n">名&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp片</div>
        <div class="upload-file">
          <label class="select-file">
            <input type="file" name="docfile" class="docfile" id="fileImg">
          </label>
          <img class="preview-img" src="">
          <div class="close">x</div>
        </div>
      </div>
      <div class="agree" id="Agree">
        <div @click="showStyle" :class="{'bg-default':!isChecked,'bg-red':isChecked}">

        </div>
        <div class="agreement">本人同意并接受<a href="http://www.xxx.com">《平台注册声明》</a></div>
      </div>
      <div class="reg-btn">
        <a v-on:click='register_user($event)' class="reg-btn-info">注册</a>
      </div>
    </main>
  </div>
</template>
<script>
  import BtnMsg from '../../common/TimeBtn.vue';
  import {getVerCode} from '../../../api/register';
  import {dealRegister} from '../../../api/register';
  import {getCompanyName} from '../../../api/register';
  export default{
    data(){
      return{
        companyName:"",
        phone:'', //手机号码
        code:'',  //验证码
        pwd:'',   //密码
        repwd:'', //第二次密码
        account_type:1,
        src_base64:"",
        chenghu:"",
        isChecked:true,
        showCompany:false,
        compData:[]
      }
    },
    mounted(){
      this.changeSym();
    },
    methods:{

      choiceCom(cName){
        this.companyName = cName;
        this.showCompany = false;
        this.watchCompany();
      },
      hideList(){
        this.showCompany = false;
      },
      showStyle(){
        this.isChecked = !this.isChecked;
      },
      changeSym(){
        const _this = this;
        /**
         * 切换主体：供应商
         * */
        $('#account_company').click(function(){
          _this.account_type = 1;
          $(this).removeClass("account_company_no").addClass("account_company");
          $('#account_person').removeClass("account_person_have").addClass("account_person");
          $('#account_tec').removeClass("account_tec_have").addClass("account_tec");
        });
        /**
         * 需求商
         * */
        $('#account_person').click(function(){
          _this.account_type = 2;
          $(this).removeClass("account_person").addClass("account_person_have");
          $('#account_company').removeClass("account_company").addClass("account_company_no");
          $('#account_tec').removeClass("account_tec_have").addClass("account_tec");
        });
        /**
         * 技术人员
         * */
        $('#account_tec').click(function(){
          _this.account_type = 3;
          $(this).removeClass("account_tec").addClass("account_tec_have")
          $('#account_person').removeClass("account_person_have").addClass("account_person")
          $('#account_company').removeClass("account_company").addClass("account_company_no")
        });
        $('#company').bind('input propertychange', function() {
          //进行相关操作
          _this.watchCompany(_this.companyName);
        });

        $("#fileImg").change(function () {
          const  file = this.files[0];
          if(!/image\/\w+/.test(file.type)){//判断上传的文件是否为图片
            _this.showMsg("请确保文件为图片类型!");
            return false;
          }
          let reader = new FileReader();//创建一个读取文件的阅读器实例
          reader.readAsDataURL(file);
          reader.onload = function(e){
            //获取到的数怎么那么大
            var  image_base64=this.result.split(",")[1];
            $(".preview-img")[0].src = this.result;
            _this.src_base64 = this.result;
            //就是base64
          };

        });
      },
      watchCompany(companyName){
        $('#company_list').show();
        getCompanyName(companyName).then((res)=>{
          if(res.data.code === 200){
            this.compData = res.data.data.detail.hits.hits;
            this.showCompany = true;
          }
        },(err)=>{
        });
      },
      /**
       *
       * 进入注册界面第一个输入框自动获取焦点
       * */
      autoStyle(numberBox){
        numberBox.focus();
        if(numberBox.focus){
          $(numberBox).css({
            'border':'2px solid #20a0ff',
          });
        }
      },
      /**
       * 用户注册功能
       **/
      register_user($event){
        const that = this;
        if(that.phone === '' || that.code === '' || that.pwd === '' || that.repwd===''||
          that.companyName === '' || that.chenghu === ''){
          that.showMsg("请填完注册信息!");
          return;
        }
        if(that.pwd!==that.repwd){
          that.showMsg("两次输入密码不一致!");
          return;
        }
        dealRegister('/signup/',that.phone,that.code,that.pwd,that.repwd,that.account_type,that.companyName,that.chenghu,that.src_base64).then((res)=>{
          if(res.status===201 && res.data!==null){
            that.showMsg("恭喜您注册成功!");
            //跳转到登录页面
            that.$router.push({path: '/login', replace: true});
          }
        },(err)=>{
          that.showMsg("注册失败，稍后请重试!");
        });
        $event.preventDefault();
      },
      /**
       * 改变样式
       * */
      changeInStyle(){
        const _that = this;
        let inputs = $(".reg-common");
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
       *获取注册的验证码
       **/
      sendCode:function(){
        const _that =this;
        if(_that.phone==='' || _that.phone ===null){
          _that.showMsg("手机号不能为空!");
        }else if (!(/^1[34578]\d{9}$/.test(_that.phone))){
          _that.showMsg("手机号格式不对!");
        } else{
          _that.$refs.timerbtn.setDisabled(true); //设置按钮不可用
          const codeEle = $("#get-code");
          codeEle.css({
            'background-color':'#20a0ff',
            'color':'#ffffff'
          });
          _that.$refs.timerbtn.start(); //启动倒计时
          getVerCode('/sendcode/',_that.phone).then((res)=>{
            if(res.status === 201 && res.data!==null){
              _that.showMsg("获取验证码成功!");
            }
          },(err)=>{
            /**
             * 根据错误码进行错误信息的提示
             */
            if(parseInt(err.code) === 101){
              _that.showMsg("该手机号已经被注册了!");
            }else if(parseInt(err.code) === 104){
              _that.showMsg("获取验证码超过次数上限,请1小时后再尝试!");
            }else {
              _that.showMsg("注册失败!");
            }
            _that.$refs.timerbtn.stop(); //停止倒计时
          })
        }
      },
      showMsg(str){
        this.$toast.center(str);
      },
      /**
       * 输入框获取到焦点的时候的样式
       */
      getContent(){
        const codeContentEle = $("#reg-code-number");
        codeContentEle.css({
          'border':'2px solid #20a0ff',
        })
      },
      /**
       * 输入框在失去焦点的时候的样式
       */
      blurContent(){
        const codeContentEle = $("#reg-code-number");
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
