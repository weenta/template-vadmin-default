<template>
  <div class='login-wrapper'>
    <el-form v-loading='loading' ref='form' :model='form' :rules='rule' label-position='left' label-width='0px' class='login-form'>
      <h3 class='title'>登录</h3>
      <el-form-item prop='account' class='login-form-item'>
        <el-input id='input-login' v-model='form.account' class='input-large' type='text' auto-complete='off' placeholder='账号' @keyup.native.enter='handleSubmit(&apos;form&apos;)'/>
      </el-form-item>
      <el-form-item prop='password' class='login-form-item'>
        <el-input v-model='form.password' type='password' class='input-large' auto-complete='off' placeholder='密码' @keyup.native.enter='handleSubmit(&apos;form&apos;)'/>
      </el-form-item>
      <el-checkbox v-model='checked' checked style='margin:0px 0px 35px 0px;'>记住密码</el-checkbox>
      <el-form-item style='width:100%;'>
        <el-button type='primary' style='width:100%;' @click.native.prevent='handleSubmit(&apos;form&apos;)'>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      form: {
        account: 'admin',
        password: ''
      },
      rule: {
        account: [
          { required: true, message: '请输入帐号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      checked: true
    }
  },

  methods: {
    //登录
    handleSubmit(form) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
            
    },
        
    // 提交登录
    login() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.replace({path: '/goodson'})  
        this.$notify({
          title: '成功',
          message: '登录成功',
          type: 'success'
        }) 
      }, 300)
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #545c64;
}
.title {
  text-align: center;
}
.input-large {
  width: 100%;
}
.login-form {
  padding: 20px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
  background-color: #f9fafc;
  margin: 180px auto;
  width: 400px;
  border: 2px solid #8492a6;
}

.login-form-item {
  margin: 25px 0;
}
</style>