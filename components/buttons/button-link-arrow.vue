<template lang="pug">
	component.link-arrow(
		:is="to !== '' ? 'NuxtLink' : 'button'"
		:to="to !== '' ? to : false"
		:class="Mods"
	)
		span.link-arrow__text
			slot
		svg-icon.link-arrow__icon(name="arrowRight")

</template>

<script>
export default {
	props: {
		to: {
			type: String,
			default: ""
		},
		more: {
			type: Boolean,
			default: false
		},
		small: {
			type: Boolean,
			default: false
		},
		blue: {
			type: Boolean,
			default: false
		},
		white: {
			type: Boolean,
			default: false
		},
	},
	computed: {
		Mods(){
			return {
				'link-arrow_more': this.more,
				'link-arrow_small': this.small,
				'link-arrow_blue': this.blue,
				'link-arrow_white': this.white
			}
		}
	}
}
</script>

<style lang="scss">
.link-arrow{
	border: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: none;
	cursor: pointer;
	font-size: 17rem;
	line-height: 1;
	font-weight: 600;

	@include large-mobile {
		font-size: 16rem;
	}

	&_small {
		font-size: 14rem;
		.link-arrow {
			&__icon {
				width: 13rem;
				height: 10rem;
				stroke-width: 3;
			}
		}
	}

	&_more {
		.link-arrow {
			&__icon {
				transform: rotate(90deg);
				margin-left: 8rem;
			}
		}
		&.isActive {
			.link-arrow {
				&__icon {
					transform: rotate(-90deg);
				}
			}
		}
	}

	&_blue {
		color: $blue;
		.link-arrow {
			&__icon {
				stroke: $blue;
			}
		}
	}

	&__icon {
		fill: none;
		stroke: $gray;
		width: 14rem;
		height: 11rem;
		stroke-width: 1.5;
		flex-shrink: 0;
		margin-left: 4rem;
		transition: ease .2s;
	}
	
}
</style>