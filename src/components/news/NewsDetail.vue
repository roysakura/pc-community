<template>
  <div class="newsdetail-container">
    <div class="newsdetail-menu">
      <router-link to="/">磁易购首页</router-link>
      <span>&gt;</span>
      <router-link to="/news">文章</router-link>
      <span>&gt;</span>
      <span>正文</span>
    </div>

    <div class="news-detail-content">
      <div class="cont-left">
        <div class="detail">
          <div class="ttl" style="margin-top: 20px">{{newDetailObj.title}}</div>
          <div class="info" style="margin-top: 10px">
            <span>{{newDetailObj.created_at}}</span>
            <span v-show="tags.length>0">{{tagName}}</span>
          </div>
          <div class="info" style="margin-top: 10px;">
            <span>本文来源：{{newDetailObj.source}}</span>
            <span>负责编辑：{{newDetailObj.author}}</span>
            <div class="share-to">
              <span>分享到：</span>
              <a class="share-icon share-qq-k" @click="shareQQ()"></a>
              <a class="share-icon share-qq-friend" target="_blank" id="qq_friend" @click="shareQQFriend()"></a>
              <a class="share-icon share-weibo" @click="shareWeiBo()"></a>
              <a class="share-icon share-wechat" @click="shareWeiXin()"></a>
              <a class="share-icon share-wechat-circle" @click="shareWeiXin()"></a>

            </div>
            <!--<share :items="newDetailObj"></share>-->
          </div>
          <p id="editor" class="txt" v-html="newDetailObj.body" style="margin-top: 20px;">
            {{newDetailObj.body}}
          </p>

          <p class="h16">
            <span class="attr"><img class="view" src="../../assets/img/icon1.png"><span>{{newDetailObj.article_views_count}}阅读</span></span>
            <span class="attr"><img src="../../assets/img/icon2.png"><span>{{newDetailObj.article_comments_count}}评论</span></span>
            <span class="attr on" id="praise" @click="putZan(newDetailObj.can_like)"><img src="../../assets/img/icon5.png"><i class="plus">+1</i><span>赞</span><span class="praise-num" id="likeNum">{{newDetailObj.article_likes_count}}</span></span>
          </p>
        </div>
        <div class="ad-area" v-for="adv in advObj" v-if="adv.position === 'behind'">
          <div class="tip">广告</div>
          <a :href="adv.ad_link">
            <img class="ad" v-lazy="adv.image_link" alt="">
          </a>
        </div>

        <div class="comment-area">

          <div class="comment">
            <textarea placeholder="请输入评论……" id="comment" v-model="commentContent"></textarea>
            <div class="btn-emoji" style="display: none"></div>
            <div id="sub" class="sub"><button class="unclick" @click="submitCommit(newDetailObj.id)" id="subc" :disabled="!isAble">提 交</button></div>
            <i class="rhb"></i>
          </div>

          <div class="swiper-container" v-show="false">
            <div class="swiper-wrapper">
              <div class="swiper-slide slide1">
                <div class="del"></div>
                <div class="icon-container"><!--<i lang="微笑"></i>--></div>
              </div>
              <div class="swiper-slide slide2">
                <div class="del"></div>
                <div class="icon-container"></div>
              </div>
              <div class="swiper-slide slide3">
                <div class="del"></div>
                <div class="icon-container"></div>
              </div>
              <div class="swiper-slide slide4" v-show="false">
                <div class="del"></div>
                <div class="icon-container" v-show="false"></div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>

          <ul class="comment-list" id="comment_list" style="margin-top: 20px">
            <li v-for="(cItem,index) in articlesComments" v-show="cItem.status!==0">
              <div class="h26">
                <img class="avatar" :src="cItem.commentator.personal_info.image.medium">
                <span class="from">{{cItem.commentator.personal_info.name}}</span>
                <span>：</span>
                <span class="txt">{{cItem.content}}</span>
              </div>
              <div class="h26 pl32">
                <span>{{cItem.created_at}}</span>
                <span class="revert" @click="showReply(index)"><img class="icon" src="../../assets/img/icon6.png"><span>回复</span></span>
              </div>
              <div class="add-res-layer">
                <textarea style="min-height: 35px; max-height: 132px; overflow: hidden; word-wrap: break-word; height: 32px;" name="text" class="form-control reply-text" rows="1" placeholder="文明社会，理性评论" v-model="replyContent"></textarea><button type="button" class="btn-res" @click="resToComment(cItem.id,cItem.commentator.id,cItem.commentator.personal_info.name,cItem.content,index)">添加回复</button>
              </div>
              <ul style="margin-top: 6px;margin-left: 32px;">
                <li v-for="(replyItem,rIndex) in replyComment" v-if="cItem.id==replyItem.comment_id">
                  <div class="h26">
                    <span class="from">{{replyItem.from_uid.personal_info.name}}</span>
                    <span>回复</span>
                    <span class="to">{{replyItem.to_uid.personal_info.name}}</span>
                    <span>：</span>
                    <span class="txt">{{replyItem.content}}</span>
                  </div>
                  <div class="h26 pl32 p-resp">
                    <span>{{replyItem.replyed_at}}</span>
                    <span class="revert" @click="showReto(rIndex,replyItem.from_uid.personal_info.name)"><img class="icon" src="../../assets/img/icon6.png"><span>回复</span></span>
                  </div>
                  <div class="add-res2-layer">
                    <textarea style="min-height: 35px; max-height: 132px; overflow: hidden; word-wrap: break-word; height: 32px;" name="text" class="form-control reply-text2" rows="1" placeholder="文明社会，理性评论" v-model="replyToReplyContent"></textarea><button type="button" class="btn-res2"  @click="showReplyToReply(replyItem.comment_id,replyItem.from_uid.id,replyItem.from_uid.id,replyItem.from_uid.personal_info.name,cItem.commentator.id,1,replyItem.content)">添加回复</button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <div class="view-more" id="view_more" v-show="false">
            <div class="btn-more">查看更多&or;</div>
          </div>
        </div>
        <div class="others">
          <div class="hr"></div>
          <ul>
            <li v-for="lookItem in allLookNews"  v-show="lookItem.status===1 || lookItem.status==='1'">
              <router-link :to="'/newsdetail/'+lookItem.id">
                <img :src="lookItem.image" alt="">
                <p>{{lookItem.title}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="cont-right">
        <div class="item">
          <div class="ttl">大家关注的</div>
          <ul>
            <li><a href="">前沿科技<span>|</span>世界上最强大超导磁铁强大超导磁铁</a></li>
            <li><a href="">前沿科技<span>|</span>世界上最强大超导磁铁</a></li>
            <li><a href="">前沿科技<span>|</span>世界上最强大超导磁铁</a></li>
            <li><a href="">前沿科技<span>|</span>世界上最强大超导磁铁</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="back-top" @click="goToTop()" id="backTop">

    </div>
    <div class="weixin-share-container" v-show="isShowWeiXin">
      <div class="qrcode-close" @click="closeQrCode()">

      </div>
      <p class="weixin-share-title">扫一扫，微信分享</p>
      <div id="qrcode">

      </div>
    </div>
    <div class="weixin-share-layer"  v-show="isShowWeiXin"  @click="closeQrCode()">

    </div>
  </div>
</template>
<script>
  import {dealAll} from '../../api/newsdetail'
  import {delLike} from '../../api/newsdetail';
  import {cLike} from '../../api/newsdetail';
  import {collect} from '../../api/newsdetail';
  import {delCollect} from '../../api/newsdetail';
  import QRCode from '../../utils/jquery.qrcode.min'
  export default{
    data(){
        return{
          isShowAdv:false,
          isWeiXinBowser:false,
          isShowDelete:false,
          collectioned:-1,
          liked:-1,
          collection_or_cancel:-1,
          isDelete:false,
          isJuBao:false,
          isShowText:true,
          newDetailObj:{

          },
          advObj:[],
          //评论人
          whoPingLun:'',
          //评论的内容
          whoPingLunContent:'',
          //新闻留言
          articlesComments:[],
          //回复留言
          replyComment:[],
          //标签
          tags:[],
          //评论id
          commentId:'',
          //回复人的id
          fromId:'',
          //评论人的id
          toId:'',
          commentator_id:'',
          //回复人的名字
          fromName:'',
          articleId:-1,
          isShowSource:false,
          tagName:"",
          isShowAll:false,
          isShowAllLook:false,
          allLookNews:[],
          myTagName:"",
          myTags:[],
          allLookObj:{},
          commentContent:"",
          isAble:false,
          replyContent:"",
          replyToReplyContent:"",
          isShowWeiXin:false

        }
    },
    watch:{
      $route(to){
        //对传递的id进行验证(防止篡改)
        let reg=/newsdetail\/\d+/;
        const _this = this;
        if(reg.test(to.path)){
          const contentBox = $('#comment');
          const _this = this;
          /**
           * 获得焦点,改变样式
           */
          contentBox.focus();
          _this.changeBtnBg(_this,contentBox);
          let newsId=this.$route.params.newsdetailid || 0;
          this.transViews();
          this.fetchData(newsId);
        }
      }
    },
    mounted(){
      /**
       * 获得焦点,改变样式
       */
      const contentBox = $('#comment');
      const _this = this;
      /**
       * 获得焦点,改变样式
       */
      contentBox.focus();
      _this.changeBtnBg(_this,contentBox);
      this.transViews();
      this.fetchData(this.$route.params.newsdetailid);
      this.backTop();
    },
    methods:{
      closeQrCode(){
        this.isShowWeiXin = false;
      },
      /**
       * 阅读数,不用对其进行任何的处理
       **/
      transViews(){
        let newsId = this.$route.params.newsdetailid;
        if(newsId!==null && $.isNumeric(newsId)){
          this.$http.post('/api1.0/views/',{
            post_id:newsId
          }).then((res)=>{

          },(err)=>{

          });
        }

      },
      shareWeiXin(){
        this.weixin();
      },
      weixin(){
        this.isShowWeiXin = true;
        const target_url = `http://m.ciyigou.com/mobile/index#/newsdetail/${this.$route.params.newsdetailid}`;
        $('#qrcode').html('');//避免重复生成二维码
        $('#qrcode').qrcode({width: 128,height: 128,text: target_url});
      },
      shareQQFriend(){
        $("#qq_friend").attr("href",this.qqFriend());
      },
      /**
       *
       * QQ空间分享
       * */
     qqFriend() {
      let p = {
        url : window.location.href, /*获取URL，可加上来自分享到QQ标识，方便统计*/
        desc:this.newDetailObj.abstract,
        //title : '新玩法，再不来你就out了！', /*分享标题(可选)*/
        title:this.newDetailObj.title,
        summary : '', /*分享摘要(可选)*/
        pics : this.newDetailObj.image, /*分享图片(可选)*/
        flash : '', /*视频地址(可选)*/
        site : "QQ分享", /*分享来源(可选) 如：QQ分享*/
        style : '201',
        width : 32,
        height : 32
      };
        let s = [];
        for ( let i in p) {
          s.push(i + '=' + encodeURIComponent(p[i] || ''));
        }
        let url = "http://connect.qq.com/widget/shareqq/index.html?"+s.join('&');
        return url;

  },

      qqZone(){
        const _url = window.location.href;
        const _showcount = 0;
        const _desc = this.newDetailObj.abstract;
        const _summary = "";
        const _title = this.newDetailObj.title;
        const _site = "";
        const _width = "600px";
        const _height = "800px";
        const _pic = this.newDetailObj.image;
        let _shareUrl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';
          _shareUrl += 'url=' + encodeURIComponent(_url||document.location);   //参数url设置分享的内容链接|默认当前页location
          _shareUrl += '&showcount=' + _showcount||0;      //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
          _shareUrl += '&desc=' + encodeURIComponent(_desc||'分享的描述');    //参数desc设置分享的描述，可选参数
          //_shareUrl += '&summary=' + encodeURIComponent(_summary||'分享摘要');    //参数summary设置分享摘要，可选参数
          _shareUrl += '&title=' + encodeURIComponent(_title||document.title);    //参数title设置分享标题，可选参数
          //_shareUrl += '&site=' + encodeURIComponent(_site||'');   //参数site设置分享来源，可选参数
          _shareUrl += '&pics=' + encodeURIComponent(_pic||'');   //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
          window.open(_shareUrl,'width='+_width+',height='+_height+',top='+(screen.height-_height)/2+',left='+(screen.width-_width)/2+',toolbar=no,menubar=no,scrollbars=no,resizable=1,location=no,status=0');
  },
      /**
       * 分享到QQ好友
       * */
      shareQQ(){
        this.qqZone();
      },
      /**
       * 分享到微博
       * */
      shareWeiBo(){
        const title = this.newDetailObj.title;
        const url = window.location.href;
        const picurl = this.newDetailObj.image;
        const sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
        window.open(sharesinastring,'newwindow',`height=400,width=400,top=100,left=100`);

      },
      /**
       * 返回顶部
       * */
      backTop(){
        window.onscroll= function(){
          //变量t是滚动条滚动时，距离顶部的距离
          const t = document.documentElement.scrollTop||document.body.scrollTop;
          const scrollup = document.getElementById('backTop');
          //当滚动到距离顶部200px时，返回顶部的锚点显示
          if(scrollup){
            if(t>=800){
              scrollup.style.display="block";
            }else{          //恢复正常
              scrollup.style.display="none";
            }
          }

        }
      },
      /**
       * 返回顶部
       * */
      goToTop(){
        $('html,body').scrollTop(0);
      },
      showMsg(str){
          this.$toast.center(str);
      },
      showReplyToReply(commentId,fromId,toId,fromName,commenter_id,flag,content){
          const _this = this;
          if(this.replyToReplyContent === ""){
            _this.showMsg("请填写回复内容哦!");
            return;
          }
        let to_uid={
          id:toId,
        };
        if(commentId!==-1 && $.isNumeric(commentId) || fromId!==-1 && $.isNumeric(fromId)){
          this.$http.post('/api1.0/replys/',{
            content:_this.replyToReplyContent,
            reply_id:1,
            comment_id:commentId,
            to_uid:to_uid
          }).then((res)=>{
            if(res.status ===200){
              _this.$router.go(0);
            }else{
              _this.showMsg("回复失败，请重试!");
            }
          },(err)=>{
            _this.showMsg("回复失败，请重试!");
          });
        }
      },
      showReto(mIndex,fName){
        const _this = this;
        const len = $(".add-res2-layer").length;
        for(let i=0;i<len;i++){
          $(".add-res2-layer")[i].style.display = "none";
        }
        $(".add-res2-layer")[mIndex].style.display = "block";
        const len1 = $(".reply-text2").length;
        for(let i=0;i<len1;i++){
          $(".reply-text2")[i].setAttribute("placeholder","文明社会，理性评论")
        }
        $(".reply-text2")[mIndex].setAttribute("placeholder",`回复${fName}`)
      },
      showReply(mIndex){
        const _this = this;
        const len = $(".add-res-layer").length;
        for(let i=0;i<len;i++){
          $(".add-res-layer")[i].style.display = "none";
        }
        $(".add-res-layer")[mIndex].style.display = "block";
      },
      /**
       * 针对评论的回复
       * */
      resToComment(commentId,commentator_id,commentName,commentContent,index){
        const _this = this;
        if(this.replyContent===null || this.replyContent===''){
          _this.showMsg("请填写回复内容哦!");
          return;
        }
        let articleId =this.$route.params.newsdetailid;
        let to_uid = {
          id:commentator_id,
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
       * 根据输入内容设置发送按钮的样式
       * @param _this
       * @param contentBox:内容dom元素
       * @param feedBtn:按钮元素
       */
      changeBtnBg(_this,contentBox){
        $(document).on('input propertychange', 'textarea', function() {
          //function code
          _this.feedContent = contentBox.val();
          if(_this.feedContent!=='null' &&_this.feedContent.length>0){
            _this.isAble = true;
           $("#subc").removeClass("unclick").addClass("click");
          }else{
            _this.isAble = false;
            $("#subc").removeClass("click").addClass("unclick");
          }
        });
      },
      /**
       * 评论
       * */
      submitCommit(newsId){
        if(this.commentContent!==null && this.commentContent!==''){
          this.commitComment(newsId);
        }else{
          this.showMsg("请填写评论内容哦!");
        }
      },
      /**
       * 提交评论
       * */
      commitComment(articleId){
        const _this = this;
        if(articleId!==-1 && articleId!==''){
          this.$http.post('/api1.0/comments/',{
            content:_this.commentContent,
            article_id:articleId,
            status:1
          }).then((res)=>{
            //评论成功后回到上一个界面
            if(res.status ===200){
              _this.$router.go(0);
            }else{
              _this.showMsg("留言失败，请重试!");
            }
          },(err)=>{
            _this.showMsg("留言失败，请重试!");
          });
        }
      },
      /**
       * 通过新闻id获取新闻详情页的数据
       * */
      fetchData(newsdetailId){
        const that = this;
        dealAll('/api1.0/articles/','/api1.0/articles','/api1.0/ads/',newsdetailId,'api1.0/articleorders/').then(this.$http.spread(function (acct,perms,three,four){
          //新闻详情
          that.initNewsInfo(acct);
          //评论
          that.initCommentsInfo(perms);
          //广告
          that.initAdsInfo(three);
          //大家都在看
          that.initAllLookInfo(four);

        }),(err)=>{

        });
      },
      /**
       * 点赞功能
       * */
      putZan(canLike){
        const _this = this;
        let token = localStorage.getItem('token');
        if(token===null || token===''){
          _this.$router.replace({path: '/login', replace: true});
        }
        if(canLike === 0){
          _this.showMsg("你是作者,无法对自己进行此操作!");
          return;
        }
        let newsId = this.$route.params.newsdetailid;
        if(newsId!==null && $.isNumeric(newsId)) {
          switch (this.liked){
            case 0://未点赞,执行点赞操作
              _this.dealLike(newsId);
              break;
            case 1://点赞了，执行取消点赞操作
              _this.cancleLike(newsId);
              break;
          }
        }
      },
      dealLike(newsId){
        const _this = this;
        delLike('/api1.0/likes/',newsId).then((res)=>{
          if(res.status === 200){
            _this.liked = 1;
            let topele=$("#likeNum"),topcurrent = parseInt(topele.text());
            $("#likeNum").css({
              'color':'#20A0FF'
            });
            $(".plus").show(0).stop(true).animate({"top":-18,opacity:0},500,function(){topele.text(topcurrent + 1);});
            _this.showMsg("点赞成功!");
          }
        },(err)=>{

        });
      },
      cancleLike(newsId){
        const _this = this;
        cLike('/api1.0/likes/',newsId).then((res)=>{
          if(res.status === 204){
            _this.liked = 0;
            let topele=$("#likeNum"),topcurrent = parseInt(topele.text());
            $(".plus").show(0).stop(true).animate({"top":18,opacity:0},500,function(){topele.text(topcurrent - 1);});
            $("#likeNum").css({
              'color':'#979fa8'
            });
            _this.showMsg("已取消点赞!");
          }else{
            _this.showMsg("出现错误，请重试!");
          }
        },(err)=>{

        });
      },
      initAllLookInfo(four){
        const that = this;
        if(four.status === 200 && four.data!==null){
          this.isShowAllLook = true;
          this.allLookNews = four.data.data.detail;
          const newsLen = this.allLookNews.length;
          newsLen>0 ? this.isShowAllLook = true : this.isShowAllLook = false;
          for(let i = 0; i<newsLen;i++){
            that.myTags = that.allLookNews[i].tags;

          }
          this.allLookObj = that.allLookNews[0];
//              console.log("获取到大家都在看的信息是:",four,this.allLookObj);
          this.myTagName = "";
          let len = this.myTags.length;
          for(let i=0;i<len;i++){
            if(i<=2){
              if(i+1===len){
                if(i>=2){
                  this.myTagName+=this.myTags[i].name+"......";
                }else{
                  this.myTagName+=this.myTags[i].name;
                }

              }else {
                this.myTagName+=this.myTags[i].name+"、";
              }
            }
          }
        }else{
          this.isShowAllLook = false;
        }
      },
      initAdsInfo(three){
        if(three.status === 200 && three.data!==null){
          this.advObj = three.data.data.detail;
          for(let item of this.advObj){
            if(item.position === 'behind'){
              this.isShowAdv = true;
            }else{
              this.isShowAdv = false;
            }
          }
        }
      },
      /**
       * 初始化新闻的信息
       * */
      initNewsInfo(acct){
        const _this = this;
        if(acct.status === 200 && acct.data!==null){
          this.newDetailObj = acct.data.data.detail;
          this.isShowAll = true;
          if(this.newDetailObj.source===""){
            this.isShowSource=false;
          }else{
            this.isShowSource=true;
          }
          this.collectioned = this.newDetailObj.collectioned;
          this.liked =  this.newDetailObj.liked;
          this.tags =  this.newDetailObj.tags;
          let len = this.tags.length;
          this.tagName = "";
          for(let i=0;i<len;i++){
            if(i<=2){
              if(i+1===len){
                if(i>=2){
                  this.tagName+=this.tags[i].name+"......";
                }else{
                  this.tagName+=this.tags[i].name;
                }

              }else {
                this.tagName+=this.tags[i].name+"、";
              }
            }
          }
          this.collection_or_cancel =  this.newDetailObj.collection_or_cancel;
          this.filterData(this.newDetailObj.body,this.newDetailObj.source);
          if(this.collection_or_cancel ===1){
            $('.shouc-plus').html('已收藏');
          }else{
            $('.shouc-plus').html('+收藏');
          }
          //当数据加载完后，自动返回到顶部
          setTimeout(function () {
            $('html,body').scrollTop(0);
          },0)
        }else{
          this.isShowAll = false;
        }
      },
      /**
       * 替换操作：将获取到的html标签中的img标签进行跳板的方式显示
       * @param content
       */
      filterData(content,source){
        $(function () {
          if(source !=="磁易购"){
            $("#editor").html(content).find("img").each(function () {
//              let getImgs = $(this).data("src").split("?")[0];
             /* let getImgs = $(this).data("src");
              let srcTemp = "http://img01.sogoucdn.com/net/a/04/link?appid=100520033&url=";
              $(this)[0].src =srcTemp+getImgs;*/
              /* `http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=${getImgs}?=&${Math.random()}`;*/
            })
          }
        })
      },
      /**
       * 初始化评论的信息
       * @param perms
       */
      initCommentsInfo(perms){
        this.replyComment = [];
        if(perms.status ===200 && perms.data.data.detail!==null){
          this.articlesComments = perms.data.data.detail;
          let len = this.articlesComments.length;
          if(len>=1){
            this.isShowText = false;
          }else{
            this.isShowText = true;
          }
//                leave-msg-box
          for(let j=0;j<len;j++){
            let kLen = this.articlesComments[j].reply_comment.length;
            for(let k = 0;k<kLen;k++){
              this.replyComment.push(this.articlesComments[j].reply_comment[k]);
            }
          }
        }
      },
    }

  }
</script>
<style>
  @import "../../assets/css/newsdetail.css";
</style>
