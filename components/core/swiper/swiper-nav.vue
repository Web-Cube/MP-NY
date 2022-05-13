<template lang="pug">
	.swiper-nav(:class="Mods")
		.swiper-button.swiper-button-prev
			
		.swiper-button.swiper-button-next
			
</template>

<script>
export default {
	props: {
		outsideCenter: {
			type: Boolean,
			default: false
		},
		insideCenter: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		Mods(){
			return {
				'swiper-nav_center swiper-nav_center_outside': this.outsideCenter,
				'swiper-nav_center swiper-nav_center_inside': this.insideCenter,
			}
		}
	}
}
</script>

<style lang="scss">
.swiper{

	--button-size: 4rem;

	&-nav{
		z-index: 200;
		position: relative;
		

		&_center{
			position: absolute;
			top: 50%;

			pointer-events: none;

			&_outside{
				left: calc(-1 * var(--wrapper-padding));
				right: calc(-1 * var(--wrapper-padding));				
			}

			&_inside{
				right: 0;
				left: 0;
			}

			.swiper-button{
				position: absolute;
				top: 50%;
				pointer-events: auto;
				margin-top: calc(-1 * var(--button-size) / 2);

				&.swiper-button-disabled{
					opacity: 0;
					visibility: hidden;
				}

				
				&.swiper-button-next{
					right: 3rem;
				}

				&.swiper-button-prev{
					left: 3rem;
				}
			}
		}		
	}

	&-button{
		width: var(--button-size);
		height: var(--button-size);
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.24);
		backdrop-filter: blur(32px);

		transition: linear .1s;

		fill: #fff;
		cursor: pointer;


		@extend %flex-center;

		&__icon{
			width: 1rem;
		}

		&:hover{
			background: $default;
		}

		&.swiper-button-prev{
			.swiper-button__icon{
				transform: rotate(-180deg);
				margin-right: 0.2rem;
			}
		}

		&.swiper-button-next{
			.swiper-button__icon{
				margin-left: 0.2rem;
			}
		}
	}

}
</style>