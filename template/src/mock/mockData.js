const Mock = require('mockjs')

// 上架商品列表
const goodsListOn = {
  total: 50,
  data: []
}
for (let i = 0; i < 10; i++) {
  let item = Mock.mock({
    name: Mock.Random.title(8),
    goods_num: /G2018[0-9]{6}/,
    pic: Mock.Random.dataImage('150x80', 'goods'),
    'price|1-999': 999,
    'store|1000-9999': 9999,
    'status': '已上架',
    'category|1': ['服装', '美食', '家电', '手机']
  })
  goodsListOn.data.push(item)
}

// 下架商品列表
const goodsListOff = {
  total: 50,
  data: []
}
for (let i = 0; i < 10; i++) {
  let item = Mock.mock({
    name: Mock.Random.title(8),
    goods_num: /G2018[0-9]{6}/,
    pic: Mock.Random.dataImage('150x80', 'goods'),
    'price|1-999': 999,
    'store|1000-9999': 9999,
    'status': '已下架',
    'category|1': ['服装', '美食', '家电', '手机']
  })
  goodsListOff.data.push(item)
}

// 会员列表
const memberList = {
  total: 30,
  data: []
}
for (let i = 0; i < 10; i++) {
  let item = Mock.mock({
    mobile: /1[358][0-9]{9}/,
    name: Mock.Random.cname(),
    'age|20-100': 100,
    'gender|1': ['男', '女'],
    email: /6[0-9]{8}@qq\.com/,
    'member_grade|1-3': 3,
    register_time: Mock.Random.date() + ' ' + Mock.Random.time()
  })
  memberList.data.push(item)
}

// 订单列表
const orderList = {
  total: 50,
  data: []
}
for (let i = 0; i < 10; i++) {
  let item = Mock.mock({
    order_num: /OD2018[0-9]{6}/,
    name: Mock.Random.cname(),
    buyer: /1[358][0-9]{9}/,
    time: Mock.Random.date() + ' ' + Mock.Random.time(),
    'price|1-999': 999,
    'status|1': ['已付款', '未付款'],
  })
  orderList.data.push(item)
}

// 分类列表
const categoryList = []
for (let i = 0; i < 5; i++) {
  let item = Mock.mock({
    id: i + 1,
    label: Mock.Random.ctitle(2),
    pic: Mock.Random.dataImage('35x35', 'i'),
    'sort|1-99': 99,
    children: [
      {
        id: (i + 1) * 10,
        label: Mock.Random.ctitle(4),
        pic: Mock.Random.dataImage('35x35', 'i'),
        'sort|1-99': 99,
      },
      {
        id: (i + 10) * 11,
        label: Mock.Random.ctitle(4),
        pic: Mock.Random.dataImage('35x35', 'i'),
        'sort|1-99': 99,
      },
    ]
  })
  categoryList.push(item)
}

export {
  memberList,
  orderList,
  goodsListOn,
  goodsListOff,
  categoryList,
}