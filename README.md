# layout-simple
A simple Webpack + Extend layout

> This template is Vue 2.0 compatible

## Documentation where this template was based
- [For template webpack-simple](https://github.com/vuejs-templates/webpack-simple): common questions specific to this template are answered and each part is described in greater detail

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init ktquez/layout-simple my-project
$ cd my-project
$ npm install
$ npm run dev
```

## Using layouts

By default, there are 2 layout components in the directory `layouts/`:
- **layouts/default.vue** => Is the default application extend layout
- **layouts/error.vue** => This is the layout for error page

*Both are already configured in the route file*
For example:
```javascript
...
export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: () => import('@/pages/Hello'),
      // Setting layout when default, is optional, no need to set.
    },
    {
      path: '*',
      name: 'Error',
      meta: {
        layout: 'error' // error layout for route mismatch
      }
    }
  ]
})

```

# Custom extend layout

To create a layout you just need to create a component within the layouts directory and name that component.  

For example:
`layouts/my-custom-layout-login.vue`

```vue
<template>
  <div>
    <layout /> <!-- This component will serve as a wrapper for your pages. -->
  </div>
</template>

<script>
  export default {
    name: 'my-custom-layout-login' // id of the layout
  }
</script>

<style>
/* your style */
</style>
```

And to extend this layout in any the desired route, simply include the property `layout: my-custom-layout-login` in meta object of the route.
```javascript
{
  path: '/login',
  name: 'Login',
  component: () => import('@/pages/Login'),
  meta: {
    layout: 'my-custom-layout-login' // name of the layout
  }
}
```

**Attention: The value of the `layout` property must be the same as the name of the `my-custom-layout-login` component.**

# Articles and Screencast

- In development

# Contributing

- Check the open issues or open a new issue to start a discussion around your feature idea or the bug you found.
- Fork repository, make changes, add your name and link in the contributors session readme.md
- Send a pull request

If you want a faster communication, check out my blog [ktquez.com](https://ktquez.com) or find me on Twitter [@ktquez](https://twitter.com/ktquez)

Thank you for using!