<template>
  <div class="user-info-conatiner">
    <div class="content">
      <div class="top">
        <div class="bg1"></div>
        <div class="bg2"></div>
        <img class="avatar" :src="images" alt="头像" @click="goUpload()">
        <div class="name">{{personalInfo.name}}</div>
        <router-link class="btn-edit" to="/userhome">返回我的主页</router-link>
      </div>

      <div class="body">
        <div class="info">
          <div class="item">
            <div class="name">性别</div>
            <div class="group">
              <label class="sex-radio">
                <input type="radio" name="sex" value="male" id="nan" class="choice-sex" @click="checkSex(0)"> 男
              </label>
              <label class="sex-radio">
                <input type="radio" name="sex" value="female" id="nv" class="choice-sex" @click="checkSex(1)"> 女
              </label>
            </div>
          </div>
          <div class="item">
            <div class="name">签名</div>
            <div class="group">
              <input class="w1" type="text" v-model="personalInfo.signture"  value="" maxlength="40" placeholder="最多40个字">
            </div>
          </div>
          <div class="item">
            <div class="name">现居</div>
            <div class="group">
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div class="item">
            <div class="name">职业</div>
            <div class="group">
              <input type="text" name="" value="">
            </div>
          </div>
        </div>
        <div class="info">
          <div class="ttl">联系方式</div>
          <div class="item">
            <div class="name">qq</div>
            <div class="group">
              <input type="text" name="" value="" v-model="userDatas.qq" placeholder="点击设置">
              <select class="w2">
                <option>所有人可见</option>
                <option>仅好友可见</option>
                <option>仅自己可见</option>
              </select>
            </div>
          </div>
          <div class="item">
            <div class="name">微信</div>
            <div class="group">
              <input type="text" name="" value="" v-model="personalInfo.wechat_number" placeholder="点击设置">
              <select class="w2">
                <option>所有人可见</option>
                <option>仅好友可见</option>
                <option>仅自己可见</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getUser} from '../../api/userinfo';
  import {changeUserInfo} from '../../api/userinfo';
  export default{
    data(){
        return{
          //设置当前时间
          pickerValue:new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
          //自定义选择开始-结束时间
          startDate:new Date(new Date().getFullYear() - 60, 0, 1),
          endDate:new Date(new Date().getFullYear(), 11, 31),
          userDatas:{},
          //个人信息
          personalInfo:{},
          //用户头像信息
          userIcon:{},
          //公司信息
          companys:'',
          isTouXiang:false,
          images:""
        }
    },
    mounted(){
      this.getUserInfos();
    },
    methods:{
      /**
       * 选择性别
       * @param sex 0:表示男，1：表示女
       */
      checkSex(sex){

      },
      //去到上传路由
      goUpload(){
       this.$router.replace("/upload");
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
      //初始化用户信息
      initUserInfos(res){
        const _this = this;
        if(res.status === 200){
          _this.userDatas = res.data[0];
          _this.personalInfo = res.data[0].personal_info;
          _this.images = _this.personalInfo.image.medium;
          _this.personalInfo.avatar ? _this.isTouXiang = true:_this.isTouXiang = false;
          if(res.data[0].company!==null){
            _this.companys = res.data[0].company.name;
          }
          /**
           * _this.userIcon对象三个属性:small,medium,large
           */
          _this.userIcon = this.personalInfo.image;
          localStorage.setItem('uName',this.personalInfo.name);
          localStorage.setItem('uPhoto',this.personalInfo.avatar);
          this.$store.dispatch('avatar',this.personalInfo.avatar);
          localStorage.setItem('uSign',this.personalInfo.signture);
          if(_this.personalInfo.birthday === '' || _this.personalInfo.birthday===null){
            _this.personalInfo.birthday = '点击设置';
          }
          if(_this.personalInfo.sex === 'm'){
            _this.personalInfo.sex = '男';
            $("#nan").attr("checked","checked");
          }else{
            _this.personalInfo.sex = '女';
            $("#nv").attr("checked","checked");
          }
        }else{
          _this.hideUserInfo();
        }
      },
      //隐藏用户基本信息
      hideUserInfo(){
        this.showMsg("获取用户信息失败，请重试!");
      },
      //Toast显示信息
      showMsg(str){
        this.$toast.center(str);
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/my-info.css";
</style>
