<template>
  <div>
      <div class="mainpage-tokens">
        <div class='token-container' v-for='token in randomTokens' :key=token.id>
              <img :src='token.get_image'>
            <span class='token-undertitle'>
              <span class='title'>{{token.title}}</span>
              <span class='undertitle'>s{{token.serie}}|nº{{token.number}}|#{{token.author}}</span>
            </span>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const randomTokens = ref([])
    const error = ref('')

    const load = () => axios.get('http://192.168.41.41:8000/main-page/')
      .then(response => {
        randomTokens.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
    load()
    return { randomTokens, error }
  }
}
</script>

<style scoped src='../assets/styles/main-page.css'></style>
