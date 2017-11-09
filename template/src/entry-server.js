import { createApp } from './main'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default context => {
  return new Promise((resolve, reject) => {
    {{#router}}
    const { app, router } = createApp(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    router.push(context.url){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      if (matchedComponents.length < 0) {
        //
      }
      resolve(app){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    })
    {{else}}
    const { app } = createApp(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    resolve(app){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    {{/router}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}
