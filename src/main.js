import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'uno', done: true },
      { id: 2, text: 'due', done: false },
      { id: 3, text: 'tre', done: false }
    ]
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done),
    undoneTodos: state => state.todos.filter(todo => !todo.done),
  },
  mutations: {
    changeState(state, id) {
      const todo = state.todos.find( todo => todo.id == id)
      todo.done = !todo.done;
    },
    deleteTodo(state, id) {
      const index = state.todos.map(todo => todo.id).indexOf(id);
      state.todos.splice(index, 1);
    },
    addTodo(state, text) {
      const lastId = state.todos.map(todo => todo.id).reverse().shift() || 0;
      state.todos.push({ id: lastId+1, text, done: false});
    }
  },
  actions: {
    changeState (context, id) {
      context.commit('changeState', id);
    },
    deleteTodo (context, id) {
      context.commit('deleteTodo', id);
    },
    addTodo (context, text) {
      context.commit('addTodo', text);
    },
  }

});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')