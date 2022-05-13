<template lang="pug">
	.swiper(ref="swiper")
		.swiper-wrapper
			slot
		
		slot(name="nav")
</template>

<script>
import Swiper from 'swiper';

export default {
	props: {
		options: {
			type: Object,
			default: {}
		}
	},

	data(){
		return{
			Instance: null,
		}
	},

	mounted(){
		this.SwiperInit()
	},

	methods: {
		SwiperInit(){
			const $swiper = this.$refs.swiper;

			if(!$swiper) return false;

			this.Instance = new Swiper($swiper, this.options)
		}
	}
}
</script>