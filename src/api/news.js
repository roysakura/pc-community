/**
 * Created by THINK on 2017/7/6.
 */
import axios from 'axios';
/**
 * 获取新闻tab标签
 * @returns {*}
 */
export function getNewsTab(url) {
  return axios.get(url).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}
/**
 * 获取新闻数据
 * @param page:请求的页数
 * @param newsId:新闻的id
 * @param pageSize:每页请求多少条记录
 * @returns {*}
 */
export function getNews(url,page,newsId,pageSize) {
  return axios.get(url,{
    params:{
      type:0,
      page:page,
      page_size:pageSize,
      category:newsId,
      fields:"id,title,article_views_count,article_comments_count,created_at,image,tags,status"
    }
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}

export function getNewsOne(url,page,pageSize) {
  return axios.get(url,{
    params:{
      type:0,
      page:page,
      page_size:pageSize,
      status:1,
      fields:"id,title,article_views_count,article_comments_count,created_at,image,tags,status"
    }
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}

export function getNewsBanner(url,category_id) {
  return axios.get(url,{
    params:{
      category_id:category_id
    }
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}

export function getNewsSomeList(url) {
  return axios.get(url,{
    params:{
      fields:"id,title"
    }
  }).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}

export function getNewsHotList(url) {
  return axios.get(url).then((res)=>{
    return Promise.resolve(res);
  },(err)=>{
    return Promise.reject(err);
  })
}


