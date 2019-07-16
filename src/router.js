import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import i18n from './i18n.js'
import _ from 'lodash'

Vue.use(Router)

function loadLocales () {
  const locales = require.context('./assets/data/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const arr = []
  for (var i = 0; i < locales.keys().length; i++) {
    const key = locales.keys()[i];
    const locale = key.match(/([A-Za-z0-9-_]{2})/i)[0]
    arr.push(locale)
  }
  return _.uniq(arr)
}

function genericBeforeEnter(to, from, next, lang, setLang, redirect) {
  const locales = loadLocales()
  if (!locales.includes(lang)) {
    return next('/en/'+to.name)
  }
  if (setLang) {
    if (i18n.locale !== lang) {
      i18n.locale = lang
      return next()
    }
    return next()
  }
  if (redirect === undefined) redirect = ''
  return next(lang+'/'+redirect)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      beforeEnter(to, from, next) {
        return genericBeforeEnter(to, from, next, navigator.language.slice(0,2), false)
      }
    },
    {
      path: '/home',
      beforeEnter(to, from, next) {
        return genericBeforeEnter(to, from, next, navigator.language.slice(0,2), false, 'home')
      }
    },
    {
      path: '/about',
      beforeEnter(to, from, next) {
        return genericBeforeEnter(to, from, next, navigator.language.slice(0,2), false, 'about')
      }
    },
    {
      path: '/team',
      beforeEnter(to, from, next) {
        return genericBeforeEnter(to, from, next, navigator.language.slice(0,2), false, 'team')
      }
    },
    {
      path: '/events',
      beforeEnter(to, from, next) {
        return genericBeforeEnter(to, from, next, navigator.language.slice(0,2), false, 'events')
      }
    },
    {
      path: '/contact',
      beforeEnter(to, from, next) {
        return genericBeforeEnter(to, from, next, navigator.language.slice(0,2), false, 'contact')
      }
    },
    {
      path: '/:lang',
      component: {
        template: '<router-view />',
      },
      beforeEnter (to, from, next) {
        return genericBeforeEnter(to, from, next, to.params.lang, true)
      },
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('./views/About.vue')
        },
        {
          path: 'team',
          name: 'team',
          component: () => import('./views/Team.vue')
        },
        {
          path: 'events',
          name: 'events',
          component: () => import('./views/Events.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('./views/Contact.vue')
        }
      ]
    }
  ]
})
