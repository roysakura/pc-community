<template>
  <div class="index">
    <MHeader></MHeader>
    <IndexMain></IndexMain>
    <MFooter></MFooter>

  </div>
</template>

<script>

const MHeader = resolve =>{
  require(['./common/MHeader.vue'],resolve);
};
const MFooter = resolve =>{
  require(['./common/MFooter.vue'],resolve);
};
const IndexMain = resolve =>{
  require(['./common/IndexMain.vue'],resolve);
};
export default {
  name: 'Index',
  data () {
    return {

    }
  },
  components:{
    MHeader,
    MFooter,
    IndexMain
  }
}
</script>

<style scoped>
  @import "../assets/css/index.css";
</style>
