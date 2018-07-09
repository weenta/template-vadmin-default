export default {
  methods: {

    // 路由跳转
    goRouter(path) {
      this.$router.push({ path })
    },

    // 返回
    goBack() {
      this.$router.go(-1)
    },

  }
}