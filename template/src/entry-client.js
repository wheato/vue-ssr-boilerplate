import { createApp } from './main'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{#router}}
const { app, router } = createApp(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

router.onReady(() => {
  app.$mount('#app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{else}}
const { app } = createApp(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
app.$mount('#app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
