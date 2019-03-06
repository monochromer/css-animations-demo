<template>
  <div class="layout">
    <nav class="layout__side">
      <Sidebar />
    </nav>

    <main class="layout__main">
      <transition name="main" :duration="{ leave: 800 }">
        <router-view/>
      </transition>
    </main>

    <Player />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Player from './components/Player.vue'
import flipping from '@/utils/flip';

export default {
  name: 'app',

  components: {
    Sidebar,
    Player
  },

  data() {
    return {
      tilePosition: {},
      size: {},
      artistId: null,
    }
  },

  methods: {
    flipRead() {
      this.$nextTick(function() {
        flipping.read();
      })
    },

    flipApply() {
      this.$nextTick(function() {
        flipping.flip();
      })
    }
  },

  mounted() {
    this.flipRead();
  },

  beforeUpdate() {
    this.flipRead();
  },

  updated() {
    this.flipApply();
  }
}
</script>

<style lang="scss" scoped>
.layout {
  padding-bottom: 60px;
}

  .layout__side {
    position: fixed;
    z-index: 1;
    overflow-y: auto;
    width: var(--side-width);
    height: 100vh;
    border-right: 1px solid #353642;
    background-color: #191a28;

    @media screen and (max-width: 768px) {
      left: calc(-1 * var(--side-width));
    }
  }

  .layout__main {
    flex-grow: 1;

    @media screen and (min-width: 769px) {
      padding-left: var(--side-width);
    }
  }
</style>
