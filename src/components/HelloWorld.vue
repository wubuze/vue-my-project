<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      菜单:
      <router-link to="/login" > 登入 </router-link>
      <router-link to="/" > 首页 </router-link>
      <router-link to="/user-center" > 个人中心 </router-link>
    </p>
    <router-view></router-view>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
