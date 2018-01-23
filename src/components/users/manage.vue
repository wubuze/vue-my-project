<template>
  <div id="user-manage">
    <el-row class="nav">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>用户权限</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
    </el-row>

    <el-row style="text-align: left">
      <el-select v-model="value" placeholder="请选择">
        <el-option  value="1" label="选项1" > </el-option>
        <el-option  value="2" label="选项2" > </el-option>
      </el-select> 
     
      <el-input  placeholder="请输入姓名"></el-input>
      <el-button type="primary">搜索</el-button>
    </el-row>

    
    <el-row >
      <el-table 
      :data="users" 
      border 
      stripe
      style="width: 100%">
        <el-table-column 
        prop="email" 
        label="账号" 
        align="center">
        </el-table-column>

        <el-table-column 
          prop="name" 
          label="姓名" 
          align="center">
        </el-table-column>
        <el-table-column 
          prop="gender" 
          label="性别" 
          align="center">
        </el-table-column>

        <el-table-column 
          prop="qq" 
          label="qq" 
          align="center">
        </el-table-column>
        <el-table-column 
          prop="activated" 
          label="状态" 
          align="center">
        </el-table-column>
        <el-table-column 
          label="操作" 
          align="center">

        </el-table-column>

        
      </el-table>
    </el-row>

  </div>
</template>

<script type="text/ecmascript-6">
  import * as userController from '@/api/userController.js'

  export default {
    data() {
      return {
        state: '',
        states: [
          { label: '启用', value: '1' },
          { label: '禁用', value: '0' }
        ],
        userGroups: [],
        userGroup: '',
        users: [],
        name: '',
        value: '',
        value2: '',
        tableData: [
          {
            date: '2018-01-01',
            name: 'aaa',
            address: '福州'
          },
          {
            date: '2018-01-01',
            name: 'aaa',
            address: '福州'
          }
        ],
        search: {
          page: 1,
          num_per_page: 10
        }
      }
    },
    created() {
      this.getUserList()
    },
    methods: {
        getUserList() {
          let data = {
          status: 1,
          name: this.name,
          page: this.search.page,
          num_per_page: this.search.num_per_page
        }
        userController.userList(data).then((res) => {
          this.users = res.users.data
          console.log(res.users.data)
        })
      }
    }

    
  

  }
  
</script>


<style lang="stylus" >
  #user-manage
    .nav
      margin-bottom 20px
    .el-input
      width: 200px
</style>
