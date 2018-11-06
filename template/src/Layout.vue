<template>
  <!-- layout -->
  <div class='layout'>
    <el-container v-loading='loading' class='main-container'>
      <!-- header -->
      <el-header>
        <div class='title'>
          <img :src='logoPath' alt='' class='logo'>
          <span>{{ companyName }}</span>
          <span class='desc'>后台管理系统</span>
        </div>
        <el-dropdown size='medium' class='user-info' trigger='click'>
          <div class='user-info'>
            <span>{{ userName }}</span>
            <img :src='avatarPath' alt='' class='avatar'>
          </div>
          <el-dropdown-menu slot='dropdown'>
            <el-dropdown-item @click.native='logoutHandler'>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <!-- sidebar导航 -->
        <el-aside>
          <el-menu
            :default-active='activePage'
            :router='activeRouter'
            :unique-opened='true'
            background-color='#545c64'
            text-color='#fff'
            active-text-color='#ffd04b'
          >
            <!-- 一级导航 -->
            <el-submenu v-for='(nav,index) in sidebarNav' :key='index' :index='nav.name'>
              <template slot='title'>
                <font-awesome-icon :icon='nav.iconCls' class='nav-icon' />
                <span slot='title'>{{ nav.name }}</span>
              </template>
              <!-- 二级导航 -->
              <el-menu-item v-for='child in nav.children' :index='child.path' :key='child.name'>{{ child.name }}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主内容区 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companyName: 'VUE商城',
      logoPath: require('./assets/images/logo.png'),
      avatarPath: require('./assets/images/user.jpg'),
      userName: 'admin',
      activeRouter: true,
      loading: false,
    }
  },
  computed: {
    // 侧边栏导航
    sidebarNav() {
      let pages = this.$router.options.routes.filter(route => !route.hide)
      return pages
    },

    // 当前active页面
    activePage() {
      let path = this.$route.fullPath
      return path
    }
  },

  created() {

  },
  methods: {
    // 退出
    logoutHandler() {
      this.$confirm('退出系统？', '退出', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.logout()
      }).catch(() => {})
    },
        
    // 提交退出
    logout() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push({path: '/login'})
      }, 300)
    }
  },
}
</script>

<style scoped>
.logo {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}
.user-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
}
.avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 10px;
}
.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
}
.desc {
  color: #ffd04b;
  font-size: 18px;
  font-style: italic;
  margin-left: 10px;
}
.main-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  background-color: #f1f1f1;
}
</style>
