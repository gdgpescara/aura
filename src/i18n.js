import Vue from 'vue'
import VueI18n from 'vue-i18n'
import _ from 'lodash'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./assets/data/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = key.match(/([A-Za-z0-9-_]{2})/i)[0]
      if (messages[locale] === undefined || messages[locale] == null) {
        messages[locale] = locales(key)
      } else {
        _.merge(messages[locale], locales(key))
      }
    }
  })
  return messages
}

export default new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
})