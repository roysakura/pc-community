/**
 * Created by THINK on 2017/7/13.
 */
import axios from 'axios';
/**
 * 获取评论信息
 * @param url
 * @returns {*}
 */
export function getCommentInfo(url) {
  return axios.get(url).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}
