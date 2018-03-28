/**
 * Created by THINK on 2017/7/13.
 */
import axios from 'axios';
/**
 * 获取个人中心-点赞的数据
 * @param url
 * @returns {*}
 */
export function getLikeDataInfo(url) {
  return axios.get(url).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  });
}
