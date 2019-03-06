<template>
  <div class="track">
    <img class="track__image" :src="createUrl(track.image)" width="160" height="160">
    <div class="track__title">{{ track.title }}</div>
    <div class="track__duration">{{ formatTime(track.duration) }}</div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/formatTime';

export default {
  props: ['track'],
  methods: {
    createUrl(name) {
      return require(`../assets/tracks/recent/${name}`)
    },
    formatTime
  }
}
</script>

<style lang="scss" scoped>
.track {
  animation: scale-up 1s var(--easing-smooth) both;

  @for $i from 1 to 6 {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * 0.05}s;
    }
  }
}

  .track__image {
    margin-bottom: 7px;
    display: block;
    border-radius: 8px;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0, 0.35);
  }

  .track__title {
    margin-bottom: 3px;
    font-weight: 500;
    line-height: 1.4;
  }

  .track__duration {
    display: block;
    color: #999;
    font-size: 14px;
    line-height: 1;
  }

  @keyframes scale-up {
    0% {
      transform: scale(0.65);
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: none;
      opacity: 1;
    }
  }
</style>
