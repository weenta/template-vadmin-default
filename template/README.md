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
|   |__ assets                   资源目录
|   |    |__ css                   
|   |    |__ images                   
|   |__components                组件目录
|   |__mock                      数据模拟目录
|   |    |__ mockApi.js             mock接口
|   |    |__ mockData.js            mock数据
|   |__ pages                    页面目录
|   |__ router                   路由目录
|   |__ vuex                     vuex目录
|   |__ App.vue                  根组件
|   |__ Layout.vue               主布局文件   
|   |__ Login.vue                登录页             
|   |__ main.js
|__static
...
```
