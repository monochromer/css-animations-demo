import Vue from 'vue'
import Router from 'vue-router'
import Artists from './components/Artists.vue'
import Tracks from './components/Tracks.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/css-animations-demo/',
      name: 'artists',
      component: Artists
    },
    {
      path: '/css-animations-demo/:id',
      name: 'tracks',
      component: Tracks
    }
  ]
})

export default router
