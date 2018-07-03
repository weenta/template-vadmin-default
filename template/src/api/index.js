import { axios, qs, BASE } from './config'

// 获取会员列表
export const MEMBER_LIST = params => { return axios.get(`${BASE}/member_list`, { params }) }

// 获取订单列表
export const ORDER_LIST = params => { return axios.get(`${BASE}/order_list`, { params }) }

// 获取上架商品列表
export const GOODS_LIST_ON = params => { return axios.get(`${BASE}/goods_list_on`, { params }) }

// 获取下架商品列表
export const GOODS_LIST_OFF = params => { return axios.get(`${BASE}/goods_list_off`, { params }) }

// 分类列表
export const CATEGORY_LIST = params => { return axios.get(`${BASE}/category_list`, { params }) }
