<template>
  <div id="index">
    <h1>welcome</h1>
    <h2> {{data2}} </h2>
  </div>
</template>

<script>
  import * as rootController from '@/api/rootController'

  export default {
    data() {
      return {
        data2: []
      }
    },
    created() {
      this.getTest()
    },
    methods: {
      getTest() {
        rootController.test().then((res) => {
//          console.log(res)
          this.data2 = res
        })
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
