webpackJsonp([7],{"2CAv":function(o,n,t){"use strict";var A=function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("div",{staticClass:"login-container"},[t("div",{staticClass:"body"},[t("div",{staticClass:"login-layer"},[t("div",{staticClass:"login-uname"},[t("i",{staticClass:"user-name-icon"}),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.phone,expression:"phone"}],staticClass:"user-t user-name login-common",staticStyle:{"margin-top":"40px"},attrs:{type:"text",placeholder:"用户名",id:"phone-input"},domProps:{value:o.phone},on:{input:function(n){n.target.composing||(o.phone=n.target.value)}}}),o._v(" "),t("i",{staticClass:"close-x close-x-normal",attrs:{id:"user-close"}})]),o._v(" "),t("div",{staticClass:"login-paswd",staticStyle:{"margin-top":"40px"}},[t("i",{staticClass:"pwd-suo-top"}),o._v(" "),t("i",{staticClass:"pwd-suo-bottom"}),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.pwd,expression:"pwd"}],staticClass:"user-t login-common",attrs:{type:"password",placeholder:"密码",id:"user-pwd"},domProps:{value:o.pwd},on:{input:function(n){n.target.composing||(o.pwd=n.target.value)}}}),o._v(" "),t("i",{staticClass:"close-p close-x-normal",attrs:{id:"pwd-close"}})]),o._v(" "),t("div",{staticClass:"login-btn1"},[t("a",{staticClass:"login-btn",on:{click:function(n){o.checkLog()}}},[o._v("登录")])]),o._v(" "),t("div",{staticClass:"user-name-box forget-paswd"},[t("router-link",{staticClass:"reg-quick-btn",attrs:{to:"/register"}},[o._v("快速注册")]),o._v(" "),t("router-link",{staticClass:"forget-paswd-btn",attrs:{to:"/forgetpwd"}},[o._v("忘记密码")])],1)])])])},e=[],i={render:A,staticRenderFns:e};n.a=i},"4HJF":function(o,n){o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAYCAYAAAB5j+RNAAAAAXNSR0IArs4c6QAAAdxJREFUSA3tlzFLQlEUx895+qKioKGhJVEjqGhoqKEt53BxazApHVyKoF2Khmiq6AukIkEQQYRjNUTQ4gcIo3JqikSCKH23/71xX7ZKeiV8oOd/z316fu+c9zxHojY+uJ4tmBXzjkNx+Maw0Vu/12RdFoIKXg8dFKNc0LEU3Nyl6H58ol04k3rDhAXMJ1uUuo/SDjMLS0KUSrQHYxRMcggiG5XbDmRpRa45mBHTcNxCK1DpJKYaruJN6Ra8AaofZKqK3+Gp4vHShBdg63AoMGb6YEFJn4+OrkL83gIuFWLqVAyUy7QJyFXpkLDVGsU5cChKWAxLJ+C2HmKcktrE4U+LG5DNqthMeZmxIRdE0LWrDQhU7UKHRY0HLWTN1g7LoqrWJqxgqrhxcQ/+PASut31EB67RWnQy9/8zh0e5p9Gr/IvP4Xft120mFy/uFzs042oDwmEa1WGRqKqFluXOT5ip1oI54Z6gT2yFHcmISbSuBR0LHeJOTiURNP8T7YR9xcYxXs91vqZKDG5+gEWQnD4dCINnCAxEaP5naGNhvWHaoprnGEDC6ga0u2gZ01TeNJSKz2j+NiWkVpnTUIG0SCCDS1iPY0Jo5X8IOTsWAZNbjNH+BrOjmTq2kQx8Aa8heFrLvoy1AAAAAElFTkSuQmCC"},"4s4v":function(o,n,t){"use strict";var A={isQQ:function(o){return!!RegExp(/^[1-9][0-9]{4,9}$/).test(o)},isPhone:function(o){return!!RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/).test(o)},isEmail:function(o){return!!RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(o)}};n.a=A},LzkL:function(o,n){o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAhCAYAAAAoNdCeAAAAAXNSR0IArs4c6QAAAqlJREFUSA3tVU1oE0EU/t7sSkNbY40HBSE09iBUKFKLiIdiBVFBqR4qYkLqD0Lx7MmLIkqu3urJGoUeUlFEKNZL9FSQCqJFsZTGooJaqamlqdRmxzcLs9lokppm9yKdy5v3930z783bJfzDklJS6yDCSxa2ksR6y0IjEXIGYT5P+Nxeh8zQCcqvBEWVAnakZCiXwyUJRDluS9lYwncGumcYuDoZo4/l4sqSbbsj+/gG1zkxVC65hD3HgImOeiRK3fQvsp6UNMYW0S8lzpcAszhhBoQZ9odYboaE8WccxzwKbcLJF0cp5/YVkaneRJK4zwHHioIII1zKgbomDL/rpnnt25eWgekPOMCEMfb3sCzgEUabw9j/tIt+6viCky3NSXmZE65oJ6d+4gdxNnOanji2MptIUu7m2w6wu9UJIdx630vntO6QRW7LTj5dmh1COfm1jXPDD1dquAbRcucD2TT3Aw+ZtFPbhEB0Kk6DSreB1UYSEi59FiaOVEOkMF4ep+yGILp5O6V0tSyJa7vG5Dq1t8la7spDXL69ymAvwoVMlKa1Wo1UhCYh5uRIRGbHcUbpNlneQlw7ua6vM3GktL4aOdlLo9zvYVeujS/UC+RbHdQO7tVNIn4WNS6+Rb+GYIY9bSOyQbQMIchGZ3BNE491UC2ykZDmgy/ZGDyLua/YLuqXEXCBZiei5DTXZa96+ypOC5z0VidaeWwUC7JAxif5op0eSQePsYOCZ8l0AWddey+2Dp4FNDhzppB5GGt+GJVOWERWKdAL3xqZF1UsfIg9QVsBxO+ezWl+Elh0z5i2eyZ5hm/kl9HO8/TLNPDMVzL+H77hk3fo0/tdRs1jyzWyonKsVikuo/pn+7iEsODMAjM/95ELYuIUfQuYaDMlusJhXPST7P/F/g1m0Lx4q/1cOgAAAABJRU5ErkJggg=="},M9A7:function(o,n,t){"use strict";function A(o,n,t){return i.a.post(o,{mobile:n,password:t,role_name:1}).then(function(o){return Promise.resolve(o)},function(o){return Promise.reject(o)})}n.a=A;var e=t("BMa3"),i=t.n(e)},MArX:function(o,n,t){"use strict";function A(o){return i.a.get(o).then(function(o){return Promise.resolve(o)},function(o){return Promise.reject(o)})}n.a=A;var e=t("BMa3"),i=t.n(e)},VD9V:function(o,n,t){n=o.exports=t("BkJT")(!0),n.i(t("m7VW"),""),n.push([o.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Login.vue",sourceRoot:""}])},"Wz+Q":function(o,n){o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAMAAAA2a+hwAAABmFBMVEUAAAD///+A//9Av/8zzP8rqv8ktv9Av/85qv8zs/8uov8rqv8kpP8iqv8wr/8rqv8oof8hpv8po/8jp/8iov8hpf8op/8mpf8koP8jo/8jov8ko/8hof8jpP8iov8gov8jof8ipP8gov8jo/8io/8iof8hov8hoP8gof8jo/8hof8gof8ioP8io/8hov8gof8jov8ioP8hov8hov8hov8hof8hof8gov8gof8iov8hov8hof8jof8iov8ioP8iov8hof8hof8gof8iof8hov8iof8hof8hof8hof8hof8hoP8hof8gov8hoP8goP8hov8hof8hof8goP8hof8hof8gof8gof8goP8hof8hoP8hof8hoP8gof8hof8hof8hoP8hoP8gof8hof8hof8hoP8hof8hof8gof8hof8hof8hoP8gof8goP8gof8hof8hof8gof8goP8hof8hof8gof8goP8hof8hof8gof8goP8gof8goP8hoP8hof8hoP8hof8gof8goP8hoP8hof8gof8goP8gof8goP+shGYfAAAAh3RSTlMAAQIEBQYHCAkKCwwODxASExcZHR4fICIjJCwyNjs8P0FDR0hLTE1OT1BUV1lbXV9gYWNla2xtbm9wc3V1eHl5en1/gIOIiouNk5SVlpyfoaKjp6irra6vsbKztLa4ubq8vsDBxMnLztDR0tTV1tjZ3t/g4+Tn6evs7e7v8PHy8/b3+vv8/f6T7ov2AAABZElEQVQYGXXBi19LYQDH4V+zZMpEbkUuNUKMLpOsC0rllrTYyK2VykgrJLVQ7fj+2/XpPZ3POW/zPPJUxV98/bM2l2qOyLbv1jKuH60hBUQnYPPD3Rs37006kDkon0Of4XmNdpx6CR8PyFP2mo0WeW47jMgTh1b5JCEmVzhPSgHvmS2T0UixVgGn4YyMx2RlydEvY5oeWQZ5J+Mb12RpJyejQEyWOHkZOVpkuUNWRoYhWYYZltHHvIJCS3TIOOYQU0Cc9cNyjfMlIp/oIiPaVfeX0ZA84TcUTsjTBpkquaon4Kp8HsBSolrbjiRX+NetgOvrUJx5Nf7Jgd9NCtifXMOz3FEun0uL8Gsscbn+7JXOdAHyF+Vpd1hoq5ArkviO0ynXfXhaKZ/oKAxoRxM8keUZNGvb0Z+kQ7KE31I4LinFdIX2qMyRlk4WOa8SGnBq9ZCsSprikVY5p5IusKLeLv1Hd88WFsdngS4c6sYAAAAASUVORK5CYII="},XkN5:function(o,n,t){var A=t("VD9V");"string"==typeof A&&(A=[[o.i,A,""]]),A.locals&&(o.exports=A.locals);t("8bSs")("84208d98",A,!0)},epbB:function(o,n,t){"use strict";var A=t("M9A7"),e=t("4s4v"),i=t("MArX");n.a={data:function(){return{phone:"",pwd:"",token:"",personalInfo:{},images:"",isTouXiang:!1}},mounted:function(){this.makeFocus(),this.changeInStyle(),this.switchClose()},methods:{switchClose:function(){$("#user-close").on("click",function(){$("#phone-input").val(""),$(this).hide()}),$("#phone-input").bind("input propertychange",function(){$("#user-close").show()}),$("#pwd-close").on("click",function(){$("#user-pwd").val(""),$(this).hide()}),$("#user-pwd").bind("input propertychange",function(){$("#pwd-close").show()})},makeFocus:function(){var o=$(".user-name")[0];$(".login_layer")[0];o.focus(),o.focus&&$(o).css({border:"2px solid #20a0ff"})},changeInStyle:function(){var o=$(".login-common");$(o).each(function(o,n){$(n).focus(function(){$(this).css({border:"2px solid #20a0ff"})}),$(n).blur(function(){$(this).css({border:"1px solid #d6d6d6"})})})},showMsg:function(o){this.$toast.center(o)},checkLog:function(){var o=this;return""===this.phone?void o.showMsg("电话号码不能为空!"):e.a.isPhone(this.phone)?""===this.pwd?void o.showMsg("密码不能为空!"):void Object(A.a)("/api-token-auth/",o.phone,o.pwd).then(function(n){200===n.status&&null!==n.data&&o.initLogin(n)},function(n){3e4===parseInt(n.errorcode[0])&&o.showMsg("电话号码错误!"),30001===parseInt(n.errorcode[0])&&o.showMsg("密码错误!")}):void o.showMsg("输入的不是手机号!")},initLogin:function(o){this.token=o.data.token,localStorage.setItem("ptoken",o.data.token),localStorage.setItem("userId",o.data.user_id),localStorage.setItem("uName",o.data.user_name),localStorage.setItem("login",!1),this.$store.dispatch("showLogin",!1),this.$store.dispatch("setToken",o.data.token),this.$store.dispatch("setUserId",o.data.user_id),this.getUserInfos();var n=decodeURIComponent(this.$route.query.redirect||"/");this.$router.push({path:n})},getUserInfos:function(){var o=this;Object(i.a)("/api1.0/profiles/").then(function(n){o.initUserInfos(n)},function(n){o.hideUserInfo()})},initUserInfos:function(o){var n=this;200===o.status?(n.personalInfo=o.data[0].personal_info,n.images=n.personalInfo.image.medium,n.personalInfo.avatar?n.isTouXiang=!0:n.isTouXiang=!1,localStorage.setItem("uPhoto",this.personalInfo.avatar),this.$store.dispatch("avatar",this.personalInfo.avatar)):n.hideUserInfo()},hideUserInfo:function(){}}}},hK7K:function(o,n,t){"use strict";function A(o){t("XkN5")}Object.defineProperty(n,"__esModule",{value:!0});var e=t("epbB"),i=t("2CAv"),s=t("46Yf"),a=A,r=s(e.a,i.a,!1,a,"data-v-438c1838",null);n.default=r.exports},m7VW:function(o,n,t){n=o.exports=t("BkJT")(!0),n.push([o.i,".login-layer{width:300px;margin:0 auto;text-align:center;font-size:16px;color:#ccc;margin-top:10px;cursor:pointer}.body{width:386px;background:#fff;box-shadow:0 1px 6px 0 rgba(0,0,0,.5);border-radius:4px;padding:0 0 20px;margin:0 auto;height:400px}.login-uname{margin-top:20px;height:40px;width:100%;position:relative}.user-name-icon{left:0;top:40px;background:url("+t("Wz+Q")+")no-repeat 50%;background-size:18px 22px}.close-x-normal,.user-name-icon{width:36px;height:36px;position:absolute}.close-x-normal{font-style:normal;background:url("+t("qAS7")+") no-repeat 50%;background-size:22px}.close-x{right:0;top:40px}.login-paswd{position:relative}.pwd-suo-top{top:20px;background:url("+t("LzkL")+")no-repeat 50%;background-size:14px}.pwd-suo-bottom,.pwd-suo-top{width:27px;height:33px;position:absolute;left:2px}.pwd-suo-bottom{top:30px;background:url("+t("4HJF")+")no-repeat 50%;background-size:18px}.close-p{right:0;top:22px}.user-t{border:1px solid #d6d6d6;border-radius:4px;padding:9px 30px;font-size:16px;-webkit-user-modify:read-write-plaintext-only;margin-top:20px}.login-btn,.user-t{width:100%;height:38px}.login-btn{line-height:38px;display:block;background:#20a0ff;text-align:center;color:#fff;font-size:18px;margin-top:86px;border-radius:8px}.user-name-box{width:100%;height:40px;margin-top:10px}.user-name-box>.reg-quick-btn{font-size:14px;color:#20a0ff;float:left}.user-name-box>.forget-paswd-btn{float:right;font-size:14px;color:#959595}a{text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}","",{version:3,sources:["D:/Products/ecmagnet-pc/src/assets/css/login.css"],names:[],mappings:"AAAA,aACE,YAAa,AACb,cAAe,AACf,kBAAmB,AACnB,eAAgB,AAChB,WAAe,AACf,gBAAiB,AACjB,cAAgB,CACjB,AACD,MACE,YAAa,AACb,gBAAiB,AACjB,sCAA0C,AAC1C,kBAAmB,AACnB,iBAAkB,AAClB,cAAe,AACf,YAAc,CACf,AACD,aACE,gBAAiB,AACjB,YAAa,AACb,WAAY,AACZ,iBAAmB,CACpB,AACD,gBAIE,OAAQ,AACR,SAAU,AACV,sDAA2D,AAC3D,yBAA2B,CAC5B,AACD,gCARE,WAAY,AACZ,YAAa,AACb,iBAAmB,CAapB,AAPD,gBACE,kBAAmB,AAInB,uDAA6D,AAC7D,oBAAsB,CACvB,AACD,SACE,QAAS,AACT,QAAU,CACX,AAED,aACE,iBAAmB,CACpB,AACD,aAKE,SAAU,AACV,sDAAsD,AACtD,oBAAsB,CACvB,AACD,6BARE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,QAAU,CAaX,AARD,gBAKE,SAAU,AACV,sDAAyD,AACzD,oBAAsB,CACvB,AACD,SACE,QAAS,AACT,QAAU,CACX,AACD,QACE,yBAA0B,AAC1B,kBAAmB,AAGnB,iBAAkB,AAClB,eAAgB,AAChB,8CAA+C,AAC/C,eAAiB,CAClB,AACD,mBAPE,WAAY,AACZ,WAAa,CAiBd,AAXD,WAGE,iBAAiB,AACjB,cAAe,AACf,mBAAoB,AACpB,kBAAmB,AACnB,WAAY,AACZ,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,eACE,WAAY,AACZ,YAAa,AACb,eAAiB,CAClB,AACD,8BACE,eAAgB,AAChB,cAAe,AACf,UAAY,CACb,AACD,iCACE,YAAa,AACb,eAAgB,AAChB,aAAe,CAChB,AACD,EACE,qBAAsB,AACtB,yCAA2C,CAC5C",file:"login.css",sourcesContent:['.login-layer{\n  width: 300px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 16px;\n  color: #cccccc;\n  margin-top: 10px;\n  cursor: pointer;\n}\n.body{\n  width: 386px;\n  background: #fff;\n  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, .5);\n  border-radius: 4px;\n  padding: 0 0 20px;\n  margin: 0 auto;\n  height: 400px;\n}\n.login-uname{\n  margin-top: 20px;\n  height: 40px;\n  width: 100%;\n  position: relative;\n}\n.user-name-icon{\n  width: 36px;\n  height: 36px;\n  position: absolute;\n  left: 0;\n  top: 40px;\n  background: url("../img/user_icon@2x.png")no-repeat center;\n  background-size: 18px 22px;\n}\n.close-x-normal{\n  font-style: normal;\n  width: 36px;\n  height: 36px;\n  position: absolute;\n  background: url("../img/close-icon@2x.png") no-repeat center;\n  background-size: 22px;\n}\n.close-x{\n  right: 0;\n  top: 40px;\n}\n\n.login-paswd{\n  position: relative;\n}\n.pwd-suo-top{\n  width: 27px;\n  height: 33px;\n  position: absolute;\n  left: 2px;\n  top: 20px;\n  background: url("../img/suo-top.png")no-repeat center;\n  background-size: 14px;\n}\n.pwd-suo-bottom{\n  width: 27px;\n  height: 33px;\n  position: absolute;\n  left: 2px;\n  top: 30px;\n  background: url("../img/suo-bottom.png")no-repeat center;\n  background-size: 18px;\n}\n.close-p{\n  right: 0;\n  top: 22px;\n}\n.user-t{\n  border: 1px solid #d6d6d6;\n  border-radius: 4px;\n  width: 100%;\n  height: 38px;\n  padding: 9px 30px;\n  font-size: 16px;\n  -webkit-user-modify: read-write-plaintext-only;\n  margin-top: 20px;\n}\n.login-btn{\n  width: 100%;\n  height: 38px;\n  line-height:38px;\n  display: block;\n  background: #20a0ff;\n  text-align: center;\n  color: #fff;\n  font-size: 18px;\n  margin-top: 86px;\n  border-radius: 8px;\n}\n.user-name-box{\n  width: 100%;\n  height: 40px;\n  margin-top: 10px;\n}\n.user-name-box>.reg-quick-btn {\n  font-size: 14px;\n  color: #20a0ff;\n  float: left;\n}\n.user-name-box>.forget-paswd-btn {\n  float: right;\n  font-size: 14px;\n  color: #959595;\n}\na{\n  text-decoration: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n'],sourceRoot:""}])},qAS7:function(o,n){o.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAV1BMVEUAAABVqv8wr/8tpf8jpP8jof8hof8hov8iof8hov8hof8hoP8gof8goP8gof8gof8hof8hoP8hof8hof8goP8ppP8yp/8zqP/I5//Z7v/c7//c8P////+Rq3j2AAAAFHRSTlMAAxARO1FcXZChorq+v8XW2fLz+wVsdAsAAADnSURBVDjLjZTXFoMwDENN2XuJnf//zrZAaGJGrTfI5RgrtogMuUGcV01T5XHg0rX8rMWhNvMvEK8AU+ExxIlwocgxmVeKS6Uvgylxo/KgnBS3SnXFCA+K9r7wqK1H3XvXm2d9p51YPdTMOBlUP42a+rqaHa/VjxqMh+xzXy3OlPVB61JoltiPLAYIKcGJYgwSysEpziCnCoxaZsagosa2rl+Umm0GDdUMmpVaGFSfy83LuZzox+P/FsQSMwPZtYgu+GZUBntUREMnG1/RIshWSrScsjWXBYYseoQhtsZhmGxxmIRWHL4BsoRQ+1ulGucAAAAASUVORK5CYII="}});
//# sourceMappingURL=7.b9405f4601329e8ffa52.js.map