const Index = resolve =>{
  require(['@/components/Index'],resolve);
};
const News = resolve =>{
  require(['@/components/news/News'],resolve);
};
const Article = resolve =>{
  require(['@/components/article/Article'],resolve);
};
const ArticleDetail = resolve =>{
  require(['@/components/article/ArticleDetail'],resolve);
};
const PublishArticle = resolve =>{
  require(['@/components/article/PublishArticle'],resolve);
};
const DataBase = resolve =>{
  require(['@/components/database/DataBase'],resolve);
};
const DataBaseDetail = resolve =>{
  require(['@/components/database/DataBaseDetail'],resolve);
};
const CommentZan = resolve =>{
  require(['@/components/comtinfo/CommentZan'],resolve);
};
const UserHome = resolve =>{
  require(['@/components/user/UserHome'],resolve);
};
const UserInfo = resolve =>{
  require(['@/components/user/UserInfo'],resolve);
};
const NewsDetail = resolve =>{
  require(['@/components/news/NewsDetail'],resolve);
};
const NewsList = resolve =>{
  require(['@/components/news/NewsList'],resolve);
};
const Login = resolve =>{
  require(['@/components/user/login/Login'],resolve);
};
const ForgetPwd = resolve =>{
  require(['@/components/user/login/ForgetPwd'],resolve);
};
const Register = resolve =>{
  require(['@/components/user/register/Register'],resolve);
};
const UploadAvator = resolve =>{
  require(['@/components/user/UploadAvator'],resolve);
};
const Search = resolve =>{
  require(['@/components/search/Search'],resolve);
};

const PriceDetail = resolve =>{
  require(['@/components/xitu/pricedetail'],resolve);
};
const XiTuList = resolve =>{
  require(['@/components/xitu/xitulist'],resolve);
};
export default [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/news',
  },
  {
    name:'pricedetail',
    path:'/pricedetail/:priceName',
    title:'稀土详情',
    component:PriceDetail,
  },{
    name:'xitulist',
    path:`/xitulist`,
    title:'稀土列表',
    component:XiTuList,
  },

    {
      path:'/news',
      name:'News',
      component:News
    },
    {
      path:'/newsdetail/:newsdetailid',
      name:'NewsDetail',
      component:NewsDetail
    }, {
      path:'/newslist/:newsId',
      name:'NewsList',
      component:NewsList
    },
    {
      path:'/article',
      name:'Article',
      component:Article
    },
    {
      path:'/articledetail/:articledetailid',
      name:'ArticleDetail',
      component:ArticleDetail
    },
  {
      path:'/particle/',
      name:'PublishArticle',
      component:PublishArticle,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/database',
      name:'DataBase',
      component:DataBase
    },{
      path:'/databasedetail/:fileId',
      name:'DataBaseDetail',
      component:DataBaseDetail
    },
    {
      path:'/comtinfo/:flag',
      name:'CommentZan',
      component:CommentZan,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/userhome',
      name:'UserHome',
      component:UserHome,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/userinfo',
      name:'UserInfo',
      component:UserInfo,
      meta:{
        requiresAuth:true
      }
    },{
      path:'/login',
      name:'Login',
      component:Login
    },{
      path:'/forgetpwd',
      name:'ForgetPwd',
      component:ForgetPwd
    },
  {
      path:'/register',
      name:'Register',
      component:Register
    },{
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/upload',
      name:'UploadAvator',
      component:UploadAvator,
      meta:{
        requiresAuth:true
      }
    }
  ]
