import Artists from './components/Artists.vue'
import Artist from './components/Artist.vue'

export default {
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {
        name: 'artists'
      }
    },
    {
      path: '/artists',
      name: 'artists',
      component: Artists
    },
    {
      path: '/artists/:id',
      name: 'artist',
      component: Artist
    }
  ]
}
