<template>
  <v-toolbar
    app
    color="white"
    height="55px"
    scroll-off-screen
  >
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"

    />

    <v-toolbar-title class="ml-0 pl-1 mr-1">
      <span class="google-font">{{ $t('ChapterName') }}</span>
    </v-toolbar-title>
    <v-spacer />
    <v-btn
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        class="ml-0 google-font hidden-sm-and-down"
        style="text-transform: capitalize;" 
        flat
        @click="onClick($event, link)"
      >
        {{ $t(link.labelKey) }}
    </v-btn>
    <select v-model="$i18n.locale" id="localePicker" data-width="fit">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.locale" >{{lang.flag}}</option>
    </select>
  
  </v-toolbar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations
  } from 'vuex'
  import _ from 'lodash'
  import $ from 'jquery'
  import emojiFlags from 'emoji-flags'

  function loadLocales() {
    const locales = require.context('../../assets/data/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const langs = []
    const ret = []
    locales.keys().forEach(key => {
      const locale = key.match(/([A-Za-z0-9-_]{2})/i)[0]
      langs.push(locale)
    })
    _.uniq(langs).forEach(lang => {
      let flagCode = lang == 'en' ? 'gb' : lang
      ret.push({locale: lang, flag: emojiFlags.countryCode(flagCode).emoji})
    })
    return ret
  }

  export default {
    data() {
      return {
        langs: loadLocales()
      }
    },
    computed: {
      ...mapGetters(['links'])
    },
    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()
        if (item.to || !item.href) return
        this.$vuetify.goTo(item.href)
      }
    }
  }
</script>