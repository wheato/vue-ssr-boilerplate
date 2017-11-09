{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import { createRouter } from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export function createApp () {
  {{#router}}
  const router = createRouter(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{/router}}
  const app = new Vue({
    {{#router}}
    router,
    {{/router}}
    render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  return { app{{#router}}, router{{/router}} }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}
