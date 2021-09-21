<template>
  <div class="all-content">
      <div class="content">
          <div class="texts">
              <p class="serie-title">
                  {{serieDetails.title}}
              </p>
              <p class="serie-description">
                  {{serieDetails.description}}
              </p>
          </div>
          <div class="serie-gallery">
            <div class='token-container' v-for='token in serieDetails.tokens' :key='token'>
                <img :src="token.get_image" alt="">
            <span class='token-undertitle'>
              <span class='title'>{{token.title}}</span>
              <span class='undertitle'>s{{token.serie}}|nº{{token.number}}|#{{token.author}}</span>
            </span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const serieDetails = ref([])
    const route = useRoute()
    const slugPage = route.params.slug

    const load = () => axios.get('http://192.168.41.41:8000/serie/' + slugPage)
      .then(response => {
        serieDetails.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
    load()
    return { serieDetails, slugPage }
  }
}
</script>

<style scoped src='../assets/styles/serie_page.css'></style>
