<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <div class="md:hidden flex justify-between items-center bg-gray-50 border-b-2 border-red-900 rounded-b-xl p-4 sticky top-0">
    <img src="./assets/menu.svg" alt="" width="35">
    <div class="flex items-center space-x-3">
      <img src="./assets/logo.png" width="30" alt="">
      <h1 class="text-center font-black text-xl text-red-800">donor.tj</h1>
    </div>
    <img src="./assets/profile-circle-white.svg" alt="" width="35">
  </div>

  <div class="hidden md:flex px-80  justify-between bg-gray-100 border-b-2 border-red-900 rounded-b-xl p-4 sticky top-0">
      <h1 class="font-black text-xl text-red-900">donor.online</h1>
  </div>

  <!-- <div class="md:hidden">
      <MobileTabBar/>
  </div>   -->

  <router-view class="lg:px-80 p-4"/>
</template>

<script>

  import MobileTabBar from './components/TabBar.vue'

  export default {
    components: {
      MobileTabBar
    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
