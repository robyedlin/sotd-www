<template>
<svg class="component-SvgFeedbackNegative" :width="width" :height="height" x="0px" y="0px" viewBox="0 0 512 509.3" style="enable-background:new 0 0 512 509.3;" xml:space="preserve">
	<path d="M256.1,0.2C115,0.2,0.1,115,0.1,256.2c0,141.2,114.8,256,256,256s256-114.8,256-256C512.1,115,397.3,0.2,256.1,0.2z
	 M256.1,486.4c-126.9,0-230.2-103.3-230.2-230.2S129.2,26,256.1,26s230.2,103.3,230.2,230.2S383,486.4,256.1,486.4z M413.5,256.2
	c0,86.8-70.6,157.4-157.4,157.4c-86.8,0-157.4-70.6-157.4-157.4c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9
	c0,72.6,59,131.6,131.6,131.6c72.6,0,131.6-59,131.6-131.6c0-7.1,5.8-12.9,12.9-12.9S413.5,249.1,413.5,256.2z M284.9,157.1
	c0-16.2,13.1-29.2,29.2-29.2c9,0,17.1,4.1,22.4,10.5c5.4-6.4,13.4-10.5,22.4-10.5c16.2,0,29.2,13.1,29.2,29.2
	c0,30.6-51.7,63.9-51.7,63.9S284.9,187.7,284.9,157.1z M123.9,157.1c0-16.2,13.1-29.2,29.2-29.2c9,0,17.1,4.1,22.4,10.5
	c5.4-6.4,13.4-10.5,22.4-10.5c16.1,0,29.2,13.1,29.2,29.2c0,30.6-51.7,63.9-51.7,63.9S123.9,187.7,123.9,157.1z"/>
</svg>
</template>

<script>
export default {
  props: {
    'height': {
      default: 20,
      type: Number
    },
    'width': {
      default: 20,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/css/settings';

path {
	transition: fill .2s ease;
	pointer-events: all;
	fill: $color--black;
}

svg:hover path {
	fill: $color--feedback-positive;
}
</style>
