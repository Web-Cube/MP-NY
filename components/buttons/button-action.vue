<template lang="pug">
	component.button-action(
		:is="to !== '' ? 'NuxtLink' : 'button'"
		:to="to !== '' ? to : false"
	) 
		svg-icon.button-action__icon(:name="icon" :class="`button-action__icon_${icon}`")

</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: "heart"
		},
		to: {
			type: String,
			default: ""
		},
	}
}
</script>

<style lang="scss">
.button-action{
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 40rem;
	height: 40rem;
	border: 0;
	background: none;
	cursor: pointer;
	border-radius: 10rem;
	&:hover {
		.button-action {
			&__icon {
				&_heart {
					stroke: $blue;
				}
				&_search {
					fill: $blue;
				}
			}
		}
	}

	@include large-mobile {
		width: 36rem;
		height: 36rem;
	}
	&__icon {
		max-width: 18rem;
		max-height: 16rem;
		transition: ease .1s;
		&_heart {
			fill: none;
			stroke: #000;
			stroke-width: 2;
		}
		&_search {
			fill: $gray;
		}

		&_zoom {
			width: 16rem;
			height: 16rem;
			fill: #fff;
			stroke: #fff;
			stroke-width: 1px;
			transform: rotate(90deg);
		}

		@include large-mobile {
			max-width: 16rem;
			max-height: 14rem;
			&_zoom {
				width: 14rem;
				height: 14rem;
			}
		}
	}
}
</style>