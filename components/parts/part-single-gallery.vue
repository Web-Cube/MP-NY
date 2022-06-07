<template lang="pug">
	.single-gallery
		swiper.single-gallery__slider(
			:options="MainSwiperOptions"
			v-model="MainSliderInstance"
		)
			swiper-slide(v-for="(Image,i) in TestImages" :key="i")
				.single-gallery__preview
					img.object-fit(
						:src="require(`~/assets/img/${Image}`)"
					)

		swiper.single-gallery__slider(
			:options="ThumbsSwiperOptions"
			v-model="ThumbsSliderInstance"
		)
			swiper-slide(v-for="(Image,i) in TestImages" :key="i")
				.single-gallery__preview.single-gallery__preview_thumbnail
					img.object-fit(
						:src="require(`~/assets/img/${Image}`)"
					)
				
</template>

<script>
import { Navigation, Thumbs } from "swiper";

export default {
	data(){
		return {
			MainSliderInstance: null,
			ThumbsSliderInstance: null,

			MainSwiperOptions: {
				slidesPerView: 1,
				spaceBetween: 10,
				loop: false,
				modules: [Navigation, Thumbs],
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},

			ThumbsSwiperOptions: {
				slidesPerView: 8,
				spaceBetween: 10,
				loop: false,
			},

			TestImages: [
				"preview/1.jpg",
				"preview/2.jpg",
				"preview/3.jpg",
				"preview/4.jpg",

				"preview/1.jpg",
				"preview/2.jpg",
				"preview/3.jpg",
				"preview/4.jpg",

				"preview/1.jpg",
				"preview/2.jpg",
				"preview/3.jpg",
				"preview/4.jpg",
			]
		}
	}
}
</script>

<style lang="scss">
.single-gallery{
	

	&__slider{
		border-radius: 10rem;
		overflow: hidden;
		&:not(:last-child){
			margin-bottom: 10px;
		}
	}

	&__preview{
		position: relative;
		padding-top: div(526, 982) * 100%;
		border-radius: 10rem;

		&_thumbnail{
			padding-top: div(80, 114) * 100%;
		}

		img{
			border-radius: inherit;
		}
	}

}
</style>