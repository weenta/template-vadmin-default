import { axios, qs, BASE } from './config'
/**
 * 订单模块
 */
export default {
  // 获取订单列表
  ORDER_LIST: params => { return axios.get(`${BASE}/order_list`, { params }) },
}