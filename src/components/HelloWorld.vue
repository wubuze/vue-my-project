<template>
  <div id="hello">
    <el-row>
      <el-col :span="24">
        <div class="header">
          <router-link to="/" tag="div"><img src="../assets/brand.png" class="header-logo"></router-link>
        </div>
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :span="3">
        <el-menu mode="" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>基础设置</span>
            </template>
            <el-menu-item index="/user-center">user</el-menu-item>
            <el-menu-item index="/login">login</el-menu-item>
          </el-submenu>
          
          <el-submenu index="3" >
            <template slot="title">
              <i class="el-icon-check"></i>
              <span>用户权限</span>
            </template>
            <el-menu-item index="3-1">权限管理</el-menu-item>
            <el-menu-item index="user-manage">用户管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col :span="21" class="content-container">
            <router-view></router-view>
      </el-col>
    </el-row>
    
   
    

      <a href="javascript:;" @click="$store.state.show = true">点击</a>
      <t-dialog :show.sync="$store.state.show"></t-dialog>


  </div>
</template>

<script>
    import dialog from './dialog.vue'

    export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: 'HelloWorld page',
//          show: false
        }
      },
      components: {
        't-dialog': dialog
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .header {
    width: 100%;
    height: 80px;
    background-color: rgb(32, 160, 255);
    padding: 0 20px;
    text-align: left;
  }
  .header .header-logo {
    height: 100%;
    cursor: pointer;
    margin-top: 15px;
  }
  .content-container {
    height: 100%;
    padding: 25px;

  }

  

</style>
