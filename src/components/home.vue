<template>
  <div id="index">
    <h1>welcome</h1>
    <h2> {{data2}} </h2>
    <h2> {{todos}} </h2>
    <h2> + {{count2}} </h2>
    <button @click="setIncre"> + {{count2}} </button>
  </div>
</template>

<script>
  import * as rootController from '@/api/rootController'
  import { mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        data2: [],
        count2: 0
      }
    },
    computed: {
      ...mapState(['orderList', 'login', 'todos', 'count']),
      ...mapGetters(['doneTodosCount'])
    },
    created() {
      this.getTest()
//      console.log(this.orderList)
    },
    methods: {
      getTest() {
//        rootController.test().then((res) => {
////          console.log(res)
////          this.data2 = res,
//        })
        this.data2 = this.doneTodosCount
      },
      ...mapMutations(['increment']),
      setIncre() {
        this.increment()
        console.log(this.count)
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
