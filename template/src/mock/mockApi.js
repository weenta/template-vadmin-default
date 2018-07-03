import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
const mock = new MockAdapter(axios)
import * as data from './mockData'
const DELAY = 500      // 延时时间

// 模拟网络环境 延时返回数据
const send = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([200, {
        code: 200,
        msg: 'success',
        data
      }])
    }, DELAY)
  })
}

// 会员列表
mock.onGet('/member_list').reply(() => {
  return send(data.memberList)
})

// 订单列表
mock.onGet('/order_list').reply(() => {
  return send(data.orderList)
})

// 上架商品列表
mock.onGet('/goods_list_on').reply(() => {
  return send(data.goodsListOn)
})

// 下架商品列表
mock.onGet('/goods_list_off').reply(() => {
  return send(data.goodsListOff)
})

// 分类列表
mock.onGet('/category_list').reply(() => {
  return send(data.categoryList)
})

