/**
 * Created by THINK on 2017/7/13.
 */
import axios from 'axios';
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
  })
}
/**
 * 获取个人中心收藏的信息
 * @param url
 * @param page
 * @param page_size
 * @returns {*}
 */
export function getCollectInfo(url,page,page_size) {
  return axios.get(url,{
    params:{
      type:0,
      page:page,
      page_size:page_size
    }
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
