<template>
  <div>
      <div class="all-content">
        <div class="sell-content" v-for='token in serie' :key=token.id>
          <div class="texts">
            <p class="title-serie">
                {{token.title}}
            </p>
            <p class="serie-description">
              {{token.description}}
            </p>
            <button><router-link :to='`${token.get_absolute_url}`'>
              View gallery
            </router-link></button>
          </div>
            <div class="gallery">
                  <img :src='token.get_image' alt="">
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  setup () {
    const serie = ref([])

    const load = () => axios.get('http://127.0.0.1:8000/serie/')
      .then(response => {
        serie.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
    load()
    return { serie }
  }
}
</script>

<style scoped src='../assets/styles/active_page.css'></style>
