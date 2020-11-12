import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeText from '@/components/HomeText'
import PageA from '@/components/PageA'
import PageB from '@/components/PageB'
import PageA1 from '@/components/PageA1'
import Example from '@/components/Example'

Vue.use(Router)

export default new Router({
  // history模式，地址栏不显示#
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/HomeText',
          name: 'HomeText',
          component: HomeText
        },
        {
          path: '/PageA',
          name: 'PageA',
          component: PageA,
          // 子路由页面在显示的时候会连同父级页面一起显示
          children: [
            {
              path: '/PageA1',
              name: 'PageA1',
              component: PageA1
            }
          ]
        },
        {
          path: '/PageB',
          name: 'PageB',
          component: PageB
        }
      ]
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example
    }
  ]
})
