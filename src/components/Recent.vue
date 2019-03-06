<template>
  <div class="recent">
    <Track v-for="track in tracks" :key="track.id" :track="track" />
  </div>
</template>

<script>
import Track from './Track.vue';

export default {
  props: {
    tracks: Array
  },

  components: {
    Track
  }
}
</script>

<style lang="scss" scoped>
.recent {
  margin-bottom: 50px;
  overflow-x: auto;
  overflow-y: hidden;
  display: grid;
  grid-auto-columns: 160px;
  grid-auto-flow: column;
  grid-column-gap: 40px;

  @media screen and (max-width: 768px) {
    max-width: calc(100vw - 100px - var(--scroll-bar));
  }
}
</style>
