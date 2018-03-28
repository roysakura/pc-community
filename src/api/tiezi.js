/**
 * Created by THINK on 2017/7/6.
 */
import axios from 'axios';
/**
 * 获取帖子的信息
 * @param url
 * @param page
 * @param pageSize
 * @returns {*}
 */
export function getTieZiInfo(url,page,pageSize) {
  return axios.get(url,{
    params:{
      type:1,
      page:page,
      page_size:pageSize,
    }
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}
/**
 * 收藏操作
 * @param url
 * @param id
 * @param tar
 * @returns {*}
 */
export function collect(url,id,tar) {
  return axios.post(url,{
    post_id:id
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 取消收藏操作
 * @param url
 * @param id
 * @param tar
 * @returns {*}
 */
export function unCollect(url,id,tar) {
  return axios.delete(url,{
    data:{
      post_id:id
    }
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 删除帖子
 * @param url
 * @param id
 * @param index
 * @returns {*}
 */
export function deleteArticle(url,id,index) {
  return axios.put(`${url}/${id}/`).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.then(err);
  });
}
