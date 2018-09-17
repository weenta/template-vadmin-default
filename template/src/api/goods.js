import { axios, qs, BASE } from './config'
/**
 * 商品模块
 */
export default {
  // 获取上架商品列表
  GOODS_LIST_ON: params => { return axios.get(`${BASE}/goods_list_on`, { params }) },

  // 获取下架商品列表
  GOODS_LIST_OFF: params => { return axios.get(`${BASE}/goods_list_off`, { params }) },

  // 商品分类列表
  CATEGORY_LIST: params => { return axios.get(`${BASE}/category_list`, { params }) },

}