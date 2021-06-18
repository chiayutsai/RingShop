<template>
  <div class="rotate position-absolute opacity-3" :style="{top: `${top}`,right: `${right}`}">
    <svg viewBox="0 0 300 150" height="150">
      <path id="zxxCircle" fill="none" d="M90 75a60 60 0 1 0 120 0a60 60 0 1 0 -120 0z" />
      <text>
        <textPath href="#zxxCircle" fill="#fff">RingRing • Pretty • Store RingRing</textPath>
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    top: String,
    right: String,
  },
};
</script>
