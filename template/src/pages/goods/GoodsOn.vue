<template>
  <div class='goods'>
    <div class='nav-header'>
      <el-row :gutter='20' type='flex'>
        <el-col :span='4'>
          <el-input v-model='goodsName' placeholder='请输入商品名称' @keyup.native.enter='getList'/>
        </el-col>
        <el-col :span='4'>
          <el-input v-model='goodsNum' placeholder='请输入商品编号' @keyup.native.enter='getList'/>
        </el-col>
        <el-col :span='4'>
          <el-select v-model='value' placeholder='商品分类' @change='getList'>
            <el-option v-for='item in categoryList' :key='item.id' :label='item.label' :value='item.id' :class='["option-"+item.type]'/>
          </el-select>
        </el-col>
        <el-col :span='4'>
          <el-button :loading='loading' type='primary' icon='el-icon-search' @click='getList'>查询</el-button>
        </el-col>
      </el-row>    
    </div>
    <div class='content'>
      <el-table v-loading='loading' :data='list' style='width: 100%;' >
        <el-table-column type='index' width='50'/>
        <el-table-column prop='name' label='商品名' width='200'/>
        <el-table-column label='商品图片' width='180'>
          <template slot-scope='scope'>
            <img :src='scope.row.pic' class='goods-pic' >
          </template>
        </el-table-column>
        <el-table-column prop='price' label='价格(元)' width='80'/>
        <el-table-column prop='store' label='库存(个)' width='80'/>
        <el-table-column prop='category' label='分类' width='120'/>
        <el-table-column prop='status' label='商品状态' min-width='100'/>
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
      loading: false,
      page: 1,
      list: [],
      total: 0,
      goodsName: '',
      goodsNum: '',
      categoryList: [],
      value: ''
    }
  },

  created() {
    this.getList()
    this.getCategoryList()
  },

  methods: {

    // 获取商品列表
    getList() {
      this.loading = true
      this.$api.GOODS_LIST_ON().then(res=>{
        this.loading = false
        if (res.data.code === 200) {
          this.total = res.data.data.total
          this.list = res.data.data.data

        }
      })
    },

    // 获取分类列表
    getCategoryList() {
      this.$api.CATEGORY_LIST().then(res=>{
        if (res.data.code === 200) {
          this.category = res.data.data
          this._formatCategoryList(res.data.data)
        }
      })
    },

    // 翻页
    changePage(page) {
      this.page = page
      this.getList()
    },

    // 格式化分类列表
    _formatCategoryList(data) {
      let arr = []
      data.forEach(e=>{
        e.type = 'parent'
        arr.push(e)
        if (e.children.length > 0) {
          e.children.forEach(child=>{
            child.type = 'child'
            arr.push(child)
          })
        }
      })
      this.categoryList = arr
    }                    
        
  },
}
</script>
<style scoped>
.option-parent {
  font-weight: 600;
}
.option-child {
  text-indent: 20px;
}
</style>
