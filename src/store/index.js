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
    ]
  },
  getters: {
    sm (state) {
      return state.sm
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
