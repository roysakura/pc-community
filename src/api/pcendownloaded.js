/**
 * Created by THINK on 2017/7/13.
 */
import axios from 'axios';
/**
 * 获取个人中心--用户下载的资料信息
 * @param url
 * @param page:当前页数
 * @param page_size:每页记录数
 * @returns {*}
 */
export function getDownloadInfo(url,page,page_size) {
  return axios.get(url,{
    params:{
      page:page,
      page_size:page_size
    }
  }).then((res)=>{
    return Promise.resolve(res)
  },(err)=>{
    return Promise.reject(err);
  });
}
