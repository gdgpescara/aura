import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { labelKey: 'Menu.Home', to: '/', icon:'home'},
      { labelKey: 'Menu.Events', to: '/events', icon: 'rounded_corner'},
      { labelKey: 'Menu.Team', to: '/team', icon:'group'},
      { labelKey: 'Menu.About', to: '/about', icon: 'toc'},
      { labelKey: 'Menu.Contacts', to: '/contact', icon:'person'}
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
