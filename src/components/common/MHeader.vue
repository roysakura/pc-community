<template>
  <div class="header-container">
    <div class="top-nav">
      <div class="nav1">
        <div class="cont">
          <a class="logo" href="http://www.ecmagnet.com/">
            <div class="name1">磁易购</div>
            <div class="name2">社区</div>
          </a>
          <ul id="navs1">
            <li lang="news" @click="showNews(1)"><router-link to="/news" class="header-tab-link">新闻</router-link></li>
            <li lang="essay" @click="showNews(2)"><router-link to="/article" class="header-tab-link">文章</router-link></li>
            <li lang="data" @click="showNews(3)"><router-link to="/database" class="header-tab-link">资料</router-link></li>
          </ul>
          <div class="search-area">
            <input type="text" name="search" maxlength="100" placeholder="搜索" id="searchKey" v-model="searchSingle">
            <div class="icon-wrap" @click="goSearch(searchSingle)"><router-link to="/search"><span class="icon-search"></span></router-link></div>
          </div>
          <router-link to="/particle" class="btn-publish">发布</router-link>
          <div class="opera" >
            <router-link to="/register">注册</router-link>
            <router-link to="/login">登录</router-link>
          </div>
          
          <div class="my my-ssss" id="my">
            <a class="msg" id="my-header-msg">
              <img src="../../assets/img/msg.png" alt="消息">
              <div class="header-comment-zan">
                <ul class="header-comment-zan-list">
                  <li class="header-comment-zan-item" @click="goComment(0)"><router-link to="/comtinfo/0" class="user-min-item-link" >评论</router-link></li>
                  <li class="header-comment-zan-item" @click="goComment(1)"><router-link to="/comtinfo/1"  class="user-min-item-link">赞</router-link></li>
                </ul>
              </div>


            </a>

            <a class="avt user-avt">
              <img :src="userName" alt="头像">
              <!--<span class="user-icon">{{userName}}</span>-->
              <div class="user-header-choice">
                <ul class="user-header-min-list">
                  <li class="user-min-item"><router-link to="/userhome" class="user-min-item-link">我的主页</router-link></li>
                  <li class="user-min-item"><router-link to="/userinfo" class="user-min-item-link">账号设置</router-link></li>
                  <li class="user-min-item" @click="logOut()">退出</li>
                </ul>
              </div>
            </a>
          </div>
          <div class="header-nav2" v-show="isHow">
            <div class="header-cont" >
              <ul id="navs2"  >
                <li class="news" v-for="tabItem in newTab">
                  <router-link :to="'/newslist/'+tabItem.id">{{tabItem.name}}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>
<script>
  import {getNewsTab} from '../../api/news'
  export default{
    data(){
        return{
          newTab:[],
          searchSingle:"",
        }
    },
    watch:{
      showLogin:function () {
        return this.$store.state.mutations.isShowLogin;
      },
      userName:function () {
        if(this.$store.state.mutations.avatar){
          return this.$store.state.mutations.avatar;
        }else{
          return ""
        }
      }
    },
    computed:{
      showLogin:function () {
        return this.$store.state.mutations.isShowLogin;
      },
      isHow:function () {
        return this.$store.state.mutations.showTab
      },
      userName:function () {
        if(this.$store.state.mutations.avatar){
          return this.$store.state.mutations.avatar;
        }else{
          return ""
        }
      }
    },
    mounted(){
      const _this = this;
      this.$nextTick(()=>{
        _this.getNewsTabData();
        _this.initSearchKey();
        _this.initUserChoice();
      });
    },
    methods:{
      goComment(flag){
        this.$store.dispatch("comLikeFlag",flag);
      },
      showMsg(str){
        this.$toast.center(str);
      },
      /**
       * 退出登录
       * */
      logOut(){
        //清除保存的信息
        this.showMsg("成功退出登录!");
        localStorage.removeItem('uPhoto');
        localStorage.removeItem('ptoken');
        localStorage.removeItem('uName');
        localStorage.setItem('login',true);
        this.$store.dispatch('showLogin',true);
        this.$store.dispatch('clearToken');
        this.$store.dispatch('clearUserId');
        this.$store.dispatch('avatar',"");
        //跳转到首页
        this.$router.replace('/');
      },
      initUserChoice(){
        $(".user-avt").mouseenter(function () {
          $(".user-header-choice").show();
          $(".header-comment-zan").hide();
        });
        $(".user-avt").mouseleave(function () {
          $(".user-header-choice").hide();
          $(".header-comment-zan").hide();
        });
        $(".user-header-choice").mouseenter(function () {
          $(this).show();
          $(".header-comment-zan").hide();
        });
        $(".user-header-choice").mouseleave(function () {
          $(this).hide();
          $(".header-comment-zan").hide();
        });

        $("#my-header-msg").mouseenter(function () {
          $(".header-comment-zan").show();
        });
        $("#my-header-msg").mouseleave(function () {
          $(".header-comment-zan").hide();
        });
        $(".header-comment-zan").mouseenter(function () {
          $(this).show();
        });
        $(".header-comment-zan").mouseleave(function () {
          $(this).hide();
        });
      },
      /**
       * 初始化搜索的关键字
        */
      initSearchKey(){
        const _this = this;
        $('#searchKey').bind('input propertychange', function() {
          _this.$store.dispatch("search",_this.searchSingle);
        });
      },
      showNews(flag){
          switch (flag){
            case 1:
                this.getNewsTabData();
              break;
            case 2:
                break;
            case 3:
                break;
          }

      },
      /**
       * 获取新闻的Tab数据
       */
      getNewsTabData(){
        getNewsTab('/api1.0/categorys/').then((res)=>{
            this.newTab = [];
            this.newTab = res.data.data.detail;
            if(this.newTab.length>0){
              let obj = {};
              obj.id = 0;
              obj.name="稀土行情";
              this.newTab.splice(0, 0, obj);
            }
        },(err)=>{

        })
      },
      /**
       * 搜索
       * @param searchText
       */
      goSearch(searchText){
          this.$store.dispatch("search",searchText);
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/header.css";
</style>
