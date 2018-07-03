import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout'
import Login from '@/Login'
import GoodsOn from '@/pages/goods/GoodsOn'
import GoodsOff from '@/pages/goods/GoodsOff'
import Category from '@/pages/goods/Category'
import Order from '@/pages/order/Order'
import Member from '@/pages/member/Member'
import Setting from '@/pages/setting/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hide: true,
    },
    {
      path: '/login',
      name: '登录',
      component: Login,
      hide: true,
    },
    {
      path: '/',
      component: Layout,
      name: '商品管理',
      iconCls: 'el-icon-goods',
      children: [
        { path: '/goodson', name: '上架商品', component: GoodsOn },
        { path: '/goodsoff', name: '下架商品', component: GoodsOff },
        { path: '/category', name: '商品分类', component: Category },
      ]
    },
    {
      path: '/',
      component: Layout,
      name: '会员管理',
      iconCls: 'el-icon-mobile-phone',
      children: [
        { path: '/member', name: '会员列表', component: Member }
      ]
    },
    {
      path: '/',
      component: Layout,
      name: '订单管理',
      iconCls: 'el-icon-tickets',
      children: [
        { path: '/order', name: '商品订单', component: Order },
      ]
    },
    {
      path: '/',
      component: Layout,
      name: '系统设置',
      iconCls: 'el-icon-setting',
      children: [
        { path: '/setting', name: '密码设置', component: Setting },
      ]

    },

  ]
})
