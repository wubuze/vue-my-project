/**
 * Created by wubuze on 18/1/28.
 */
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

const state = {
  show: false,
  orderList: [1,2,4],
  login: false,
  count: 0,
    todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
    ]
};
const getters = {
    doneTodosCount: (state) => {
        return state.todos.filter(todo => todo.done)
    }
};
const mutations = {
    increment: (state) => {
        return state.count ++
    }
};


export default new vuex.Store({
  state,
  getters,
  mutations
})
