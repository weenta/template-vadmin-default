<template>
  <div class='member'>
    <div class='nav-header'>
      <el-row :gutter='20' type='flex'>
        <el-col :span='4'>
          <el-input v-model='mobile' placeholder='请输入手机号'/>
        </el-col>
        <el-col :span='4'>
          <el-input v-model='name' placeholder='请输入姓名'/>
        </el-col>
        <el-col :span='4'>
          <el-button type='primary' icon='el-icon-search' @click='getList'>查询</el-button>
        </el-col>
      </el-row>    
    </div>
    <div class='content'>
      <el-table v-loading='loading' :data='list' style='width: 100%;' >
        <el-table-column type='index' width='50'/>
        <el-table-column prop='name' label='姓名' width='150'/>
        <el-table-column prop='mobile' label='手机' width='150'/>
        <el-table-column prop='age' label='年龄' width='80'/>
        <el-table-column prop='register_time' label='注册时间' min-width='150'/>
        <el-table-column fixed='right' width='150' label='操作' >
          <template slot-scope='scope'>
            <el-button size='mini' type='primary' icon='el-icon-edit'/>
            <el-button size='mini' type='danger' icon='el-icon-delete'/>
          </template>
        </el-table-column>
      </el-table>  
      <div class='page-wrapper'>
        <el-pagination :total='total' layout='prev, pager, next' @current-change='changePage'/>
      </div>  
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      mobile: '',
      name: '',
      total: 0,
      page: 1,
      list: [],
      loading: true,
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取列表
    getList() {
      this.loading = true
      this.$api.MEMBER_LIST().then(res=>{
        this.loading = false
        if (res.data.code === 200) {
          this.total = res.data.data.total
          this.list = res.data.data.data
        }
      })
    },

    // 翻页
    changePage(page) {
      this.page = page
      this.getList()
    }
        
  },

}
</script>

<style scoped>
</style>

