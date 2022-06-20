<template lang="pug">
	component.button-medium(
		:is="to !== '' ? 'NuxtLink' : 'button'"
		:to="to !== '' ? to : false"
		:class="Mods"
	)
		span.button-medium__icon(:class="`button-medium__icon_${icon}`" v-if="icon")
			svg-icon(:name="icon")
		span.button-medium__text
			slot

</template>

<script>
export default {
	props: {
		to: {
			type: String,
			default: ""
		},
		icon: {
			type: String,
			default: ""
		},
		white: {
			type: Boolean,
			default: false
		},
		blue: {
			type: Boolean,
			default: false
		},
		border: {
			type: Boolean,
			default: false
		},
		square: {
			type: Boolean,
			default: false
		},
		small: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		Mods(){
			return {
				'button-medium_white': this.white,
				'button-medium_blue': this.blue,
				'button-medium_border': this.border,
				'button-medium_square': this.square,
				'button-medium_small': this.small
			}
		}
	}
}
</script>

<style lang="scss">
.button-medium{
	border: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: $default;
	font-size: 15rem;
	line-height: 1;
	border-radius: 10rem;
	transition: ease .15s;
	background: #F4F3F4;
	padding: 0 20rem;
	height: 40rem;

	&_white {
		background: none;
		padding: 0;
	}
	&_blue {
		color: #fff;
		background: $blue;
		.button-medium {
			&__icon {
				stroke: #fff;
			}
		}
		&:hover {
			background: #7A8DF1;
		}
	}

	&_square {
		padding: 0;
		width: 40rem;
	}

	&_border {
		background: #FFF;
		border: 1px solid $light-gray;
	}
	&_small {
		border-radius: 4px;
		padding: 0 10rem;
		height: 36rem;
	}

	&__icon {
		width: 20rem;
		height: 20rem;
		fill: none;
		stroke: $default;
		stroke-width: 1.5;
		flex-shrink: 0;
		margin-right: 8rem;
		svg {
			width: 100%;
			height: 100%;
		}

		&_chatBorder {
			position: relative;
			&:after {
				content: '';
				display: block;
				position: absolute;
				right: 2rem;
				top: 1rem;
				background: $blue;
				width: 6rem;
				height: 6rem;
				border-radius: 6px;
			}
		}
		&_closeBig {
			stroke: none;
			fill: $default;
			width: 14rem;
			height: 14rem;
			margin-top: -1px;
		}
		&_chart {
			margin-top: -1px;
		}
		&_dots {
			width: 12rem;
			height: 4rem;
			stroke: none;
			fill: $default;
			margin-right: 0;
		}
	}
}
</style>