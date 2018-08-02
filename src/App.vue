<template>
  <div id="app">
    <heads v-show="headsShow"></heads>
    <router-view/>
    <foot v-show="footShow"></foot>
  </div>
</template>

<script>
import heads from './components/head/head.vue'
import foot from './components/foot/foot.vue'

export default {
  name: 'App',
  data(){
    return {
      headsShow:true,
      footShow:true
    }
  },
  components:{
      heads,
      foot
    },
    created(){
      // if(this.$route.name!="loginDL" || this.$route.name!="login"){

      //   this.headsShow=true;
      //   this.footShow=true;
      // }
    },
    mounted(){
    
      // $router.router
    }
    // destroyed(){
    //   console.log(this.$route.route)
    // }
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
