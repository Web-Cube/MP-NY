<template lang="pug">
	.analytics-box
		swiper.analytics-box__slider(:options="SwiperOptions")
			swiper-slide.analytics-box__slide(
				v-for="(slide, i) in slides"
				:key="i"
			)
				.analytics-box__inner
					h2.analytics-box__title.h2.h2_big {{slide.title}}
					.analytics-box__desc {{slide.desc}}
					part-statistic.analytics-box__statistic(:statistics="slide.statistics")
				.analytics-box__img
					img(:src="require(`~/assets/img/${slide.img}`)")
			template(v-slot:nav)
				swiper-nav.analytics-box__nav
</template>

<script>
import { Navigation } from "swiper";
export default {
	props: {
		slides: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		const SwiperOptions = {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			modules: [Navigation],
			navigation: {
				nextEl: ".analytics-box__nav .swiper-button-next",
				prevEl: ".analytics-box__nav .swiper-button-prev",
			},
		};
		return {
			SwiperOptions,
		};
	},
}
</script>

<style lang="scss">
.analytics-box{
	border: 1px solid $light-gray;
	border-radius: 20rem;
	position: relative;
	width: 100%;

	@include large-mobile {
		border: 0;
		overflow: visible;
		border-radius: 0;
	}

	&__slide {
		position: relative;
		overflow: hidden;
		padding: 50rem 50rem 30rem 50rem;
		@include large-tablet {
			padding: 50rem 30rem 30rem 30rem;
		}
		@include large-mobile {
			padding: 0;
		}
	}
	&__inner {
		position: relative;
		z-index: 2;
		width: 50%;
		max-width: 380rem;

		@include small-tablet {
			width: auto;
			max-width: inherit;
		}
	}

	&__title {
		line-height: 1;
	}

	&__desc {
		margin-top: 10rem;
		font-size: 18rem;
		font-weight: 500;
		line-height: 1.5;
		color: #6E6E73;
		@include large-mobile {
			font-size: inherit;
			line-height: inherit;
		}
	}

	&__statistic {
		margin-top: 44rem;

		@include large-tablet {
			margin-top: 30rem;
		}

		@include large-mobile {
			margin-top: 20rem;
		}
	}

	&__img {
		position: absolute;
		right: 185rem;
		top: -49rem;
		width: 633rem;
		pointer-events: none;

		@include large-desktop {
			right: 120rem;
			width: 580rem;
			top: -20rem;
		}

		@include large-tablet {
			right: 10rem;
			width: 400rem;
			top: 10rem;
		}

		@include small-tablet {
			display: none;
		}
	}

	&__nav {
		position: absolute;
		right: 20rem;
		bottom: 20rem;
		z-index: 5;

		@include small-tablet {
			bottom: 30rem;
			right: 30rem;
		}

		@include large-mobile {
			display: none!important;
		}
	}

	&__btn {
		&:not(:first-child) {
			margin-left: 6rem;
		}
	}
}
</style>