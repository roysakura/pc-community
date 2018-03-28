/**
 * Created by THINK on 2017/7/13.
 */
import axios from 'axios';
/**
 * 获取签名的信息
 * @param url
 * @param currentUrl
 * @returns {*}
 */
export function getSignInfo(url,currentUrl) {
  return axios.post(url,{
    url:currentUrl
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 处理帖子详情中收藏
 * @param url
 * @param post_id
 * @returns {*}
 */
export function dealColl(url,post_id) {
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
export function delColl(url,post_id) {
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
/**
 * 处理点赞
 * @param url
 * @param post_id
 * @returns {*}
 */
export function dealLike(url,post_id) {
  return axios.post(url,{
    post_id:post_id
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 取消点赞
 * @param url
 * @param post_id
 * @returns {*}
 */
export function cancLike(url,post_id) {
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
/**
 * 获取阅读数量
 * @param url
 * @param post_id
 * @returns {*}
 */
export function getViewsInfo(url,post_id) {
  return axios.post(url,{
    post_id:post_id
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}

