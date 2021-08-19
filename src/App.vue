<template>
  <div>
    <Menu></Menu>
    <router-view :key="$route.path"/>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from './components/nav/Menu.vue'
import Footer from './components/nav/Footer.vue'
import './assets/styles/global.css'

export default {
  components: {
    Menu,
    Footer
  }
}
</script>

<style scoped>

</style>
