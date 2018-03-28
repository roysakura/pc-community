/**
 * Created by THINK on 2017/7/6.
 */
import axios from 'axios';
/**
 * 获取新闻详情页
 * @param newsId
 * @returns {*}
 */
 function getNewsDetail(url,newsId) {
  return axios.get(url+`${newsId}/`);
}
/**
 * 获取新闻评论信息
 * @param newsId
 */
 function getComments(url,newsId) {
  return axios.get(url+`/${newsId}/comments/`);
}
/**
 * 获取新闻广告的数据
 * @returns {AxiosPromise}
 */
 function getAds(url) {
  return axios.get(url);
}
function getAllLookAds(url) {
  return axios.get(url);
}
export function dealAll(newsUrl,commentUrl,adUrl,newsId,lookUrl) {
  return axios.all([getNewsDetail(newsUrl,newsId),getComments(commentUrl,newsId),getAds(adUrl),getAllLookAds(lookUrl)]);
}

/**
 * 处理点赞
 * @param url
 * @param newsId
 * @returns {*}
 */
export function delLike(url,newsId) {
  return axios.post(url,{
    post_id:newsId
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 取消点赞
 * @param url
 * @param newsId
 * @returns {*}
 */
export function cLike(url,newsId) {
  return axios.delete(url,{
    data:{
      post_id:newsId
    }
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 处理收藏
 * @param url
 * @param post_id
 * @returns {*}
 */
export function collect(url,post_id) {
  return axios.post(url,{
    post_id:post_id
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 取消收藏
 * @param url
 * @param post_id
 * @returns {*}
 */
export function delCollect(url,post_id) {
  return axios.delete(url,{
    data:{
      post_id:post_id
    }
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}



