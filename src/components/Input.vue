<template>
  <header class="small-12 column">
    <div class="header-wrapper">
      <input type="text" placeholder="type here" id="item" v-model="text">
      <button id="add" @click="addTodo"> <span>+</span></button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Input',
  data(){
    return {
      text : '',
    }
  },
  methods: {
    addTodo(){
      this.$store.dispatch('addTodo', this.text);
      this.text = '';
    },
  }
}
</script>