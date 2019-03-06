<template>
  <div class="artists">
    <h4 class="title">Artists</h4>
    <Category title="Trending Now" :artists="trending" />
    <Category title="Popular" :artists="popular" />
  </div>
</template>

<script>
import Category from './Category'
import artists from '../data/artists'

export default {
  name: 'artists',

  components: { Category },

  data() {
    return {
      trending: artists.filter(a => [1, 2, 3, 4].includes(a.id)),
      popular: artists.filter(a => [5, 6].includes(a.id))
    }
  },

  beforeMount() {
  },

  beforeRouteEnter(to, from, next) {
    next()
  },

  beforeRouteLeave(to, from, next) {
    const { id } = to.params;
    if (id) {
      const tileElement = document.querySelector(`[data-id="${id}"]`);
      const { x, y, width, height } = tileElement.getBoundingClientRect();
      const rootEl = document.documentElement;
      rootEl.style.setProperty('--tile-x', x);
      rootEl.style.setProperty('--tile-y', y);
      rootEl.style.setProperty('--tile-width', width);
      rootEl.style.setProperty('--tile-height', height);
      tileElement.style.opacity = 0;
    }
    next()
  },
}
</script>

<style lang="scss" scoped>
.artists {
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 20px;

  @media screen and (min-width: 769px) {
    padding-left: 110px;
  }
}

.title {
  color: var(--red);
  animation: fade-in 0.5s ease;
}

@keyframes fade-in {
  from { opacity: 0; }
}

.main-leave-active {
  position: absolute;
  width: 100%;
  transition: transform 0.4s, opacity 0.4s;
  will-change: transform, opacity;

  @media screen and (min-width: 769px) {
    width: calc(100% - 260px);
  }
}

.main-leave-to {
  opacity: 0;
  transform: scale(0.92);
}
</style>
