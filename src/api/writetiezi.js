/**
 * Created by THINK on 2017/7/13.
 */
import axios from 'axios';
/**
 * 发送帖子的信息
 * @param url:请求的url
 * @param title:帖子标题
 * @param content:帖子内容
 * @param tags:帖子标签
 */
export function sendTieZiInfo(url,title,content,tags) {
  return axios.post(url,{
    title:title,
    body:content,
    tags:tags,
    article_type:1,
  }).then((res)=>{
     return Promise.resolve(res);
   },(err)=>{
     return Promise.reject(err);
   });
}
/**
 * 发帖的时候，进行积分的处理
 * @param url:处理积分的url
 * @param credit_num:积分数
 * @param credit_item_id:积分id
 */
export function dealJiFenInfo(url,credit_num,credit_item_id) {
  return axios.post(url,{
    credit_num:credit_num,
    credit_item_id:credit_item_id,
    is_income:true,
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/*
function allTagsInfo(tagUrl) {
  return axios.get(tagUrl);
}
function jifen(jifenUrl) {
  return axios.get(jifenUrl);
}
export function init(jifenUrl,tagUrl) {
  return axios.all([jifen(jifenUrl),allTagsInfo(tagUrl)]);
}*/
