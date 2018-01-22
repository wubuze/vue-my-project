<template>
  <div id="user-manage">
    <el-row class="nav">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>用户权限</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'user-manage'
    }
  }
}
</script>


<style lang="stylus" >
  #user-manage
    .header
      height 100px
      width 200px
      border 1px solid red
</style>
