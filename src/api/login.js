/**
 * Created by THINK on 2017/7/13.
 */
import axios from 'axios';
/**
 * 处理登录
 * @param url
 * @param mobile
 * @param password
 * @returns {*}
 */
export function dealLogin(url,mobile,password) {
  return axios.post(url,{
    mobile:mobile,
    password:password,
    role_name:1,
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 处理微信登录
 * @param url
 * @param code
 * @returns {*}
 */
export function dealWeiXinLogin(url,code) {
  return axios.post(url,{
    code:code,
    mobile:18389379733,
    password:"r43deqwcdcds",
    role_name:1,
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
