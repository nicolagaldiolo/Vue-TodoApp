<template>
  <div>
    <h4>{{title}}</h4>
    <ul class="todo" id="todo">
      <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
  import Todo from './Todo.vue'
  export default {
    name: 'List',
    props: {
      title: String,
      todos: Array
    },
    components: {
      Todo
    }
  }
</script>
