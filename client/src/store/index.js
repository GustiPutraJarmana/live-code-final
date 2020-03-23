import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    findAll (contex) {
      axios({
        url : 'http://localhost:3000/country',
        method : 'GET',
        headers : {
          token : localStorage.getItem('token')
        }
      })
      .then(data => {
        contex.commit('dataCountry', data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
