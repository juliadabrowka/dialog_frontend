<template>
  <div>
    <Menu></Menu>
    <Spinner :key="$route.path"/>
    <router-view :key="$route.path"/>
  </div>
</template>

<script>
import Menu from '@/components/nav/Menu.vue'
import Spinner from '@/components/spinner/Spinner.vue'
import './assets/styles/global.css'

export default {
  components: {
    Menu,
    Spinner
  }
}
</script>

<style scoped>

</style>
