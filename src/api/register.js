/**
 * Created by THINK on 2017/7/13.
 */
import axios from 'axios';
/**
 * 获取注册需要的验证码
 * @param url
 * @param mobile
 * @returns {*}
 */
export function getVerCode(url,mobile) {
  return axios.post(url,{
    mobile:mobile
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
/**
 * 处理注册
 * @param url:处理注册的url
 * @param mobile:注册手机号
 * @param veri_code:验证码
 * @param password1:首次密码
 * @param password2:二次密码
 * @returns {*}
 */
export function dealRegister(url,mobile,veri_code,password1,password2,role_type,company,username,card) {
  return axios.post(url,{
    mobile:mobile,
    veri_code:veri_code,
    password1:password1,
    password2:password2,
    role_type:role_type,
    company:company,
    username:username,
    card:card,
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}

export function getCompanyName(name) {
  return axios.get(`/api1.0/search/company/?name=${name}`).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}

