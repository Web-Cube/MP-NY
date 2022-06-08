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
	},

	computed: {
		Mods(){
			return {
			}
		}
	}
}
</script>

<style lang="scss">
.swiper{

	--button-size: 50rem;

	&-nav{
		z-index: 200;
		display: flex;
		// position: relative;	
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

		border: 2px solid $light-gray;
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

		// &.swiper-button-next{
		// 	.swiper-button__icon{
		// 	}
		// }
	}

}
</style>