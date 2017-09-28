<template>
      <span class="icon iconfont icon-backtop21" @click="backtotop"></span>
</template>
<script>
export default {
  props:["wrap"],
  data(){
    return {
        
    }
  },
  methods:{
      backtotop(){
        this.wrap.scrollTop=0;
      }
  }
}
</script>
<style scoped>
span{
    font-size:50px;
}
</style>


