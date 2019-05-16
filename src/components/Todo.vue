<template>
  <li>
    {{todo.text}}
    <div class="buttons">
      <button class="remove" @click="deleteTodo"></button>
      <button class="complete" @click="changeState"></button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: Object,
  },
  methods: {
    changeState(){
      this.$store.dispatch('changeState', this.todo.id)
    },
    deleteTodo(){
      this.$store.dispatch('deleteTodo', this.todo.id)
    }
  }
}
</script>