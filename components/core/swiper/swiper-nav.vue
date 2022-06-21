<template lang="pug">
	.swiper-nav(:class="Mods")
		.swiper-button.swiper-button-prev
			svg-icon.swiper-button__icon(name="arrowRight" viewBox="0 0 9 14")
		.swiper-button.swiper-button-next
			svg-icon.swiper-button__icon(name="arrowRight" viewBox="0 0 9 14")
			
</template>

<script>
export default {
	props: {
		light: {
			type: Boolean,
			default: false,
		}
	},

	computed: {
		Mods(){
			return {
				'swiper-nav_light': this.light
			}
		}
	}
}
</script>

<style lang="scss">
.swiper{

	&-nav{
		z-index: 200;
		display: flex;
		--button-size: 50rem;

		@include min-large-tablet {
			&_light {
				.swiper-button {
					background: none;
					border-color: #fff;
					border-color: #fff;
					stroke: #fff;
				}
			}
		}
		@include large-tablet {
			&_light {
				.swiper-button {
					background: #fff;
					stroke: $default;
					border-color: $light-gray;
				}
			}
		}
	}

	&-button{
		width: var(--button-size);
		height: var(--button-size);

		cursor: pointer;

		display: flex;
		align-items: center;
		justify-content: center;

		background: #FFFFFF;
		/* Apple Gray Stroke */

		border: 1px solid transparent;
		border-radius: 10rem;

		stroke-width: 2;
		stroke: #212D38;
		fill: transparent;

		&__icon{
			width: 9rem;
		}


		&.swiper-button-prev{
			margin-right: 10rem;
			.swiper-button__icon{
				transform: rotate(-180deg);
			}
		}

		&-prev {
			padding-right: 3rem;
		}
		&-next {
			padding-left: 3rem;
		}

		// &.swiper-button-next{
		// 	.swiper-button__icon{
		// 	}
		// }
	}

}
</style>