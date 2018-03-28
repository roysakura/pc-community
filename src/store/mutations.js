import getters from './getter';
const state = {
    isShow: false,
    token: '',
    isShowLogin:false,
    userId:'',
    showTab:false,
    searchText:"",
    flag:"",
    avatar:""
};
const mutations = {
    showNewsTab:(state,hide)=>{
      state.showTab = hide
    },
    search:(state,searchText)=>{
      state.searchText = searchText
    },
  avatar:(state,avatar)=>{
      state.avatar = avatar
    },
    showLoading: (state) => {
        state.isShow = true
    },
    hideLoading: (state) => {
        state.isShow = false
    },
    setToken: (state, token) => {
        state.token = token;
    },
    clearToken:(state)=>{
        window.localStorage.removeItem('token');
        state.token = null;
    },
    clearUserId:(state)=>{
      window.localStorage.removeItem('userId');
      state.userId = null;
    },
    setUserId:(state,userId)=>{
        state.userId = userId;
    },
   /* hideLogin:(state,hide)=>{
        state.isShowLogin = hide;
        // localStorage.setItem('login',hide);
        console.log("mutations:login hide",hide);
    },*/
    showLogin:(state,sh)=>{
        state.isShowLogin = sh;

    },
    comLikeFlag:(state,flag)=>{
        state.flag = flag;
    },


};
export default {
    getters,
    state,
    mutations
}
