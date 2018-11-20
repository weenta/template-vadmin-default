# {{ name }}
{{ description }}

## start
```bash
    cd {{ name }}
    npm i
    npm start
``` 

## 目录结构
```
...
|__build
|__config   
|__src                           主资源目录
|   |__api                       API目录
|   |    |__ config.js              API配置文件
|   |    |__ index.js               API文件
|   |__assets                   资源目录
|   |    |__ css                   
|   |    |__ images                   
|   |__mixin                    mixin
|   |__mock                      数据模拟目录
|   |    |__ mockApi.js             mock接口
|   |    |__ mockData.js            mock数据
|   |__ pages                    页面目录
|   |__ plugin                   插件目录
|   |__ router                   路由目录
|   |__ vuex                     vuex目录
|   |__ App.vue                  根组件
|   |__ Layout.vue               主布局文件   
|   |__ Login.vue                登录页             
|   |__ main.js
|__static
...
```

## 三方库 
### element-ui
http://element-cn.eleme.io/#/zh-CN/component/installation

### 图标font-awesome free/solid
https://fontawesome.com/icons?d=listing&s=solid&m=free

### mockjs
http://mockjs.com

## 自定义ui插件
element-ui MessageBox,Notification模块的二次封装，简化调用
- `$cs.error`
- `$cs.success`
- `$cs.warn`
- `$cs.confirm`
```js
// $cs成功提示
this.$cs.success('这是一条成功的提示消息')

// 封装前element-ui成功提示
this.$notify({
    title: 'Success',
    message: '这是一条成功的提示消息',
    type: 'success'
});

```

## 自定义api插件
- `$api`

## 其他
兼容ie11 兼容低分屏
