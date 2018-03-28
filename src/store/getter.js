export default {
    loading: (state) => {
        return state.isShow;
    },
    getToken: (state) => {
        return state.token;
    },
    isShowLogin:(state)=>{
        // console.log("getters:",state.isShowLogin);
        return state.isShowLogin;
    },
    getSearchText:(state)=>{
      return state.searchText;
    },
    /*getArticleId:(state)=>{
        return state.aId;
    }*/
}
