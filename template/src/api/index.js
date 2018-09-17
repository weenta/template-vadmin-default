import goods from './goods'
import member from './member'
import order from './order'

/**
 * API 入口
 */
export default {
  // 商品模块
  ...goods,

  // 会员模块
  ...member,

  // 订单模块
  ...order,
  
}
