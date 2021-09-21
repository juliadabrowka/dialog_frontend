import { createStore } from 'vuex'

export default createStore({
  state: {
    sm: [
      {
        id: 0,
        web: 'https://twitter.com/dialogboxNFT',
        img: require('../assets/images/twitter.png')
      },
      {
        id: 1,
        web: 'https://www.instagram.com/dialogbox_nft/',
        img: require('../assets/images/insta.png')
      },
      {
        id: 2,
        web: 'https://opensea.io/',
        img: require('../assets/images/opensea.png')
      }
    ],
    backendUrl: 'https://192.168.41.41:8000'
  },
  getters: {
    sm (state) {
      return state.sm
    },
    backendUrl (state) {
      return state.backendUrl
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
