<template>
  <div class="hello">
      <el-dialog :visible="$store.state.show">
          看见我了
          <el-button @click="aaa">aaa</el-button>
      </el-dialog>

  </div>
</template>

<script>
    export default{
      data() {
        return {
          show2: false
        }
      },
//      props: [ 'show' ],
      computed:{
//        currentShow:{
//                get(){
//                    return this.show
//                },
//                set(val){
//                    this.$emit("update:show",val)
//                }
//          }
      },
        methods: {
          aaa(){
            console.log(this.currentShow)
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
