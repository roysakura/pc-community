
export default {
    showLoading: ({ commit }) => {
        commit('showLoading')
    },
    hideLoading: ({ commit }) => {
        commit('hideLoading')
    },
    showNav: ({ commit }) => {
        commit('showNav')
    },
    hideNav: ({ commit }) => {
        commit('hideNav')
    },
    setToken: ({
        commit
    },token) => {
        commit('setToken', token);
    },
  setUserId:({
    commit
  },userId)=>{
    commit('setUserId',userId);
  },
    clearToken:({
       commit
    })=>{
        commit('clearToken');
    },
  clearUserId:({
                commit
              })=>{
    commit('clearUserId');
  },
   /* hideLogin:({
        commit
    },hide)=>{
        commit('hideLogin',hide);
    },*/
  showNewsTab:({
    commit
  },hide)=>{
    commit('showNewsTab',hide)
  },
    showLogin:({
        commit
    },sh)=>{
        commit('showLogin',sh);
    },
  search:({
        commit
    },searchText)=>{
        commit('search',searchText);
    },
  avatar:({
        commit
    },avatar)=>{
        commit('avatar',avatar);
    },
  comLikeFlag:({
        commit
    },flag)=>{
        commit('comLikeFlag',flag);
    },

}
