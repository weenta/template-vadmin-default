<template>
  <div class='category'>
    <div class='nav-header'>
      <el-row :gutter='20' type='flex'>
        <el-col :span='8'>
          <el-button type='success' >新增</el-button>
          <el-button type='danger' @click='multiDel' >批量删除</el-button>
        </el-col>
      </el-row>    
    </div>
    <div v-loading='loading' class='content'>
      <el-row class='category-title'>
        <span class='name'>分类名称</span>
        <span class='icon'>图标</span>
        <span class='sort'>排序</span>
        <span class='edit'>操作</span>
      </el-row>
      <el-tree
        ref='tree'
        :data='list'
        :expand-on-click-node='false'
        :render-content='renderContent'
        show-checkbox
        node-key='id'
        default-expand-all
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      loading: false,
    }
  },

  mounted() {
    this.getList()
  },

  methods: {
    getList() {
      this.loading = true
      this.$api.CATEGORY_LIST().then(res=>{
        this.loading = false
        if (res.data.code === 200) {
          this.list = JSON.parse(JSON.stringify(res.data.data))
        }
                
      })
    },

    //操作-编辑
    edit(node,data) {

    },
    
    // 操作-删除
    remove(node,data) {
      let content = '删除分类: ' + data.label + ' ?'
      this.$cs.confirm(content).then(()=>{
        this.getList()
      })
    },

    // 删除-批量
    multiDel() {
      // 获取所选节点
      let hasChosen = this.$refs.tree.getCheckedNodes()
      if (hasChosen.length === 0) {
        this.$cs.warn('没有选中分类')
        return
      }
      let id = ''
      hasChosen.forEach(e=>{
        id += (e.id + ',')
      })
           
      this.$cs.confirm('删除所选分类?').then(()=>{
        this.getList()
      })
    },

    // 生成节点树
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>
            <span>{node.data.label}</span>
            <img class="icon" src={node.data.pic}/>
            <span class="sort">{node.data.sort}</span>
          </span>
          <span>
            <el-button size="mini" type="primary" icon='el-icon-edit' on-click={ () => this.edit(node,data) }></el-button>
            <el-button size="mini" type="danger" icon='el-icon-delete' on-click={ () => this.remove(node, data) }></el-button>
          </span>
        </span>
      )
    },
       
  },
}
</script>

<style scoped>
.category {
  background-color: #f1f2f7;
}

.category-title {
  background-color: #fff;
  font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
}

.category-title .name {
  display: inline-block;
  width: 120px;
}
.category-title .icon {
  display: inline-block;
  width: 70px;
}
.category-title .sort {
  display: inline-block;
  width: 50px;
}
.category-title .edit {
  display: block;
  width: 100px;
  float: right;
  text-align: center;
}
</style>
