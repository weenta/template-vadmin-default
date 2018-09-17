import { axios, qs, BASE } from './config'
/**
 * 会员模块
 */
export default {
  // 获取会员列表
  MEMBER_LIST: params => { return axios.get(`${BASE}/member_list`, { params }) },
  
}