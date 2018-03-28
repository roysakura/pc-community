<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import 'babel-polyfill'
const Index = resolve =>{
  require(['./components/Index.vue'],resolve);
};
export default {
  name: 'app',
  components:{
    Index
  },
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
