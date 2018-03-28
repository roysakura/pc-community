<template>
  <div class="comment-zan-container">
    <div class="comment-content">
      <div class="cont-left">
        <div class="cl-head">
          <ul>
            <li class="commentTab" @click="getUserCommentInfos()">
              <span>评论</span>
            </li>
            <li @click="getMineZanInfo()" class="commentTab">
              <span>赞</span>
            </li>
          </ul>
        </div>
        <div class="cl-body">
          <ul v-show="isShowComment" class="list" id="comment_list">
            <li class="item" v-for="(item,index) in commentsData">
              <div class="z-info">
                <img :src="item.article.avatar" alt="头像">
                <p>
                  <span>{{item.article.author}}</span>
                  <span>{{item.article.created_at}}</span>
                </p>
              </div>
              <div class="z-txt">{{item.content}}</div>
              <div class="z-atc">
                <router-link :to="'/articledetail/'+item.article.id">
                  <span>我的文章：</span>
                  <span>{{item.article.title}}</span>
                </router-link>
              </div>
              <div class="revert" lang="0">
                <img class="icon" src="../../assets/img/icon6.png">
                <span @click="showReply(index,item.commentator.personal_info.name)">回复</span>
              </div>
              <div class="add-res-layer add-res-layer3">
                <textarea style="min-height: 35px; max-height: 132px; overflow: hidden; word-wrap: break-word; height: 32px;" name="text" class="form-control reply-text4" rows="1" placeholder="文明社会，理性评论" v-model="replyContent"></textarea><button type="button" class="btn-res" @click="resToComment(item.article.id,item.id,item.commentator.id,item.commentator.personal_info.name)">添加回复</button>
              </div>
            </li>
          </ul>
          <ul v-show="!isShowComment" class="list" id="zan_list" style="display:none;">
            <li class="item" v-for="(item,index) in likeDatas">
              <div class="z-info">
                <img :src="item.article.avatar" alt="头像">
                <p>
                  <span>{{item.article.author}}</span>
                  <span>{{item.article.created_at}}</span>
                </p>
              </div>
              <div class="z-txt"><span class="zan-article">
                         <span v-for="(like,index) in likes">

                           <span v-show="likes.length<=2 && likes.length>0 && like.articleId === item.article.id">{{like.name}}<span v-show="index===0 && likes.length>0">、</span></span>
                            <span v-show="likes.length>=3 && like.articleId === item.article.id">{{like.name}}</span>
                         </span>
                         <span v-show="allTotal[index].len<=2 && allTotal[index].len>0 && allTotal[index].id === item.article.id && item.article.article_type === 1"></span>
                         <span v-show="allTotal[index].len>=3&& allTotal[index].id === item.article.id &&item.article.article_type === 1">等{{allTotal[index].len}}人</span>
                       </span>赞了我的文章</div>
              <div class="z-atc">
                <router-link :to="'/articledetail/'+item.article.id">
                  <span>我的文章：</span>
                  <span>{{item.article.title}}</span>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="cont-right">
        <div class="score">
          <div class="s-head">大家都在关注</div>
          <div class="s-body"></div>
           <div class="s-foot">
                      <a href="">充值</a>
                  </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {getLikeDataInfo} from '../../api/personalzan';
  import {getCommentInfo} from '../../api/comment';
  export default{
      data(){
          return{
            isShowComment:true,
            likeDatas:[],
            showNoData:false,
            articles:[],
            likes:[],
            allTotal:[],
            commentsData:[],
            replyContent:""
          }
      },
    computed:{
      /**
       * 通过flag的判断去加载不同的内容
       */
      flag:function () {
        let mFlag = parseInt(this.$store.state.mutations.flag);
        this.initFlag(mFlag);
        return this.$store.state.mutations.flag
      }
    },
    watch:{
      /**
       * 通过flag的判断去加载不同的内容
        */
      flag:function () {
        let mFlag = parseInt(this.$store.state.mutations.flag);
        this.initFlag(mFlag);
      }
    },
      mounted(){
        const flag = parseInt(this.$route.params.flag);
        this.initClickEvent();
        this.initFlag(flag);
      },
      methods:{
        /**
        * 初始化点击事件
        */
        initClickEvent(){
          $(".commentTab").click(function () {
            $(".commentTab").removeClass("on");
            $(this).addClass("on");
          })
        },
        initFlag(flag){
          $(".commentTab").removeClass("on");
          $(".commentTab").eq(flag).addClass("on");
          flag === 0 ? this.getUserCommentInfos():this.getMineZanInfo();
        },
        /**
         * 显示回复框
         * @param mIndex:当前回复框的索引号
         * @param fName:要回复的人的名字
         */
        showReply(mIndex,fName){
          const _this = this;
          const len = $(".add-res-layer").length;
          for(let i=0;i<len;i++){
            $(".add-res-layer")[i].style.display = "none";
          }
          $(".add-res-layer")[mIndex].style.display = "block";
          $(".reply-text4")[mIndex].setAttribute("placeholder",`回复${fName}`)
        },
        /**
         * 回复
         * @param articldId:文章id
         * @param commentId:评论id
         * @param commenter_id:评论人的id
         * @param commenterName:评论人的名字
         */
        resToComment(articldId,commentId,commenter_id,commenterName){
          const _this = this;
          if(this.replyContent===null || this.replyContent===''){
            _this.showMsg("请填写回复内容哦!");
            return;
          }
          let articleId =articldId;
          let to_uid = {
            id:commenter_id,
          };
          if(articleId!==-1 && $.isNumeric(articleId) || commentId!==-1 && $.isNumeric(commentId)){
            this.$http.post('/api1.0/replys/',{
              content:_this.replyContent,
              reply_id:0,
              comment_id:commentId,
              to_uid:to_uid
            }).then((res)=>{
              if(res.status ===200){
                _this.$router.go(0);
              }else{
                _this.showMsg("回复评论失败，请重试!");
              }
            },(err)=>{
               _this.showMsg("回复评论失败，请重试!");
            });
          }
        },
        /**
         * 获取评论信息
         * */
        getUserCommentInfos(){
          const _this = this;
          getCommentInfo('/api1.0/usercomments/').then((res)=>{
            _this.initUserComment(res);
          },(err)=>{
            _this.dealErr();
          });
        },
        dealErr(){
          this.showMsg('获取评论信息失败，请重试!');
        },
        showMsg(str){
          this.$toast.center(str);
        },
        /**
         * 初始化用户评论信息
         * @param res
         */
        initUserComment(res){
          this.isShowComment = true;
          if(res.status === 200 && res.data.data!==null){
            this.commentsData = res.data.data.detail;
          }else{
            this.dealErr();
          }
        },
        //获取点赞信息
        getMineZanInfo(){
          this.isShowComment = false;
          const _this = this;
          getLikeDataInfo(`/api1.0/users/${localStorage.getItem('userId')}/likes/`).then((res)=>{
            _this.initZanData(res);
          },(err)=>{
          });
        },
        /**
         * 初始化点赞信息
         * @param res
         */
        initZanData(res){
          if(res.status === 200 && res.data.data!==null){
            this.likeDatas = res.data.data.detail;
            const len = this.likeDatas.length;
            len>0 ? this.showNoData = false:this.showNoData = true;
            let tempArr = [];
            this.likes = [];
            for(let i=0;i<len;i++){
              let likeLen = res.data.data.detail[i].liker.length;
              let totalObj = {};
              totalObj.len = likeLen;
              totalObj.id = res.data.data.detail[i].article.id;
              this.allTotal.push(totalObj);
              if(likeLen>3){
                likeLen = 3;
              }
              for(let j=0;j<likeLen;j++){
                let like={

                };
                like.articleId = res.data.data.detail[i].article.id;
                if(likeLen>=3){
                  like.name = res.data.data.detail[i].liker[j].personal_info.name+'、';
                }else{
                  like.name = res.data.data.detail[i].liker[j].personal_info.name;
                }
                if(j>=2){
                  like.name=like.name.substring(0,like.name.length-1);
                }
                this.likes.push(like);
              }
            }
          }else{
          }
        },
      }
  }
</script>
<style scoped>
  @import "../../assets/css/my-data.css";
</style>
