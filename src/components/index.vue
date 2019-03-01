<template>
  <div id="index">
    <el-row>
      <el-col :span="24">
        <div class="header">
          <router-link to="#" tag="div"><img src="../assets/brand.png" class="header-logo"></router-link>
          <ul class="header-operations" v-popover:popover>
            <li><img  src="" ></li>
            <li class="text">wubuze</li>
          </ul>

          <el-popover
            ref="popover"
            placement="bottom"
            width="100"
            trigger="hover">
            <ul style="list-style-type: none;">
              <li><el-button type="text" @click="userInfo" style="">个人资料</el-button></li>
              <li><el-button type="text" @click="" style="padding-left: 10px">修改密码</el-button></li>
              <li><el-button type="text" @click="logout" style="padding-left: 10px">退出系统</el-button></li>
            </ul>
          </el-popover> 
          
        </div>
           
      </el-col>
    </el-row>
    <el-row class="container">
      <el-col :span="3">
        <el-menu 
        @open="handleOpen"
        router>
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


  </div>
</template>

<script>

    export default {
      name: 'index',
      data () {
        return {
          menu: [
            {
              title: "基础设置",
              route: "",
              subMenu: [
                {
                  title: "登入",
                  route: "/login",
                }
              ]
            },
            {
              title: "用户管理",
              route: "/user-center"
            }
          ]
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        userInfo() {
          this.$router.push({ path: '/user-center'});
        },
        logout() {
          this.$router.push({ path: '/login'});
        }
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
  .header-operations {
    position: absolute;
    top: 0;
    right: 30px;
    height: 100%;
    list-style: none;
    cursor: pointer;
    display: inline-block;
  }
  .header-operations li{
    float: left;
    margin-left: 10px;
    line-height: 80px;
    color: white;
  }
  .header-operations li img{
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;    
  }
  .header-operations li.text{
    font-size: 20px;
  }

  ul{
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-padding-start: 0;
  }
  


</style>
