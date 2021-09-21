<template>
<div class='menu-navbar'>
  <div class="topnav"><router-link :to='{ name: "Home" }'><img src='../../assets/images/logo-small.png' class="logo-img"></router-link></div>
    <a href="#" class="toggle-button">
      <span class="hamburger"></span>
      <span class="hamburger"></span>
      <span class="hamburger"></span>
    </a>
        <span id="topnav" class="dropdown">Collections
          <span class='active' >
            <router-link :to='{ name: "Active" }'>Active</router-link>
              <li v-for='title in series' :key='title.slug' :slug="title.slug"><router-link :to="{ name: 'Serie', params: { slug: title.slug } }">{{title.title}}</router-link></li>
          </span>
        </span>
      <div id="topnav"><router-link :to='{ name: "About" }'>About us</router-link></div>
      <div id="topnav"><router-link :to='{ name: "Charity" }'>Charity</router-link></div>
        <div id='topnav'>
          <span class='social-media'>
            <a :href='sm[0].web' target="blank">
              <img :src="sm[0].img" alt="" class='sm-pics'></a>
            <a :href="sm[1].web" target="blank">
              <img :src="sm[1].img" alt="" class="sm-pics"></a>
            <a :href="sm[2].web" target="blank">
              <img :src="sm[2].img" alt="" class="sm-pics"></a>
          </span>
        </div>
  <hr>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const series = ref([])

    const load = () => axios.get('http://192.168.41.41:8000/serie/')
      .then(response => {
        series.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
    load()
    return { series }
  },
  computed: {
    ...mapGetters({
      sm: 'sm'
    })
  }
}
</script>

<style scoped src="../../assets/styles/menu.css"></style>
