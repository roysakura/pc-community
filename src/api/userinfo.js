/**
 * Created by THINK on 2017/7/13.
 */
import axios from 'axios';
/**
 * 获取用户信息
 * @param url
 * @returns {*}
 */
export function getUser(url) {
  return axios.get(url).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 提交(修改)用户信息
 * @param url
 * @param qq
 * @param personal_info
 * @param company
 * @returns {*}Promise对象
 */
export function changeUserInfo(url,qq,personal_info,company) {
  return axios.post(url,{
    qq:qq,
    personal_info:personal_info,
    company:company
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}
