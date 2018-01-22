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
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
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
        >
        </el-table-column>

        <el-table-column 
        prop="qq" 
        label="qq" 
        >
        </el-table-column>
        
      </el-table>
    </el-row>

  </div>
</template>

<script type="text/ecmascript-6">
  import * as userController from 'api/userController'

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
        ]
      }
    },
    created() {
      this.getUserList(this.state, this.userGroup, this.name)
      userController.listUserGroup().then((data) => {
        this.userGroups = data.roleDat
      })
    },
    methods: {
      async getUserList(state, userGroup, name) {
        let self = this
        await userController.listUser(1, 999, state, userGroup, name).then((users) => {
          //self.users = self.format(users)
          self.users = users

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
