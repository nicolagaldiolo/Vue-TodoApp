<template>
  <div id="app">
    <Input/>
    <section class="content">
      <List title="To do" :todos="undoneTodos"/>
      <hr>
      <List title="Completed" :todos="doneTodos"/>

    </section>
  </div>
</template>

<script>
import Input from './components/Input.vue'
import List from './components/List.vue'

export default {
  name: 'app',
  components: {
    Input,
    List
  },
  computed: {
    doneTodos(){
      return this.$store.getters.doneTodos
    },
    undoneTodos(){
      return this.$store.getters.undoneTodos
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
