<template lang="pug">
	component.button-primary.h5(
		:is="to !== '' ? 'NuxtLink' : 'button'"
		:to="to !== '' ? to : false"
		:class="Mods"
	)
		svg-icon.button-primary__icon(:name="icon" :class="`button-primary__icon_${icon}`" v-if="icon")
		span.button-primary__text
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
		light: {
			type: Boolean,
			default: false
		},
		gray: {
			type: Boolean,
			default: false
		},
		blue: {
			type: Boolean,
			default: false
		},
		small: {
			type: Boolean,
			default: false
		},
		border: {
			type: Boolean,
			default: false
		},
		verysmall: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		Mods(){
			return {
				'button-primary_light': this.light,
				'button-primary_gray': this.gray,
				'button-primary_small': this.small,
				'button-primary_blue': this.blue,
				'button-primary_border': this.border,
				'button-primary_verysmall': this.verysmall
			}
		}
	}
}
</script>

<style lang="scss">
.button-primary{
	border: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 60rem;
	padding: 0 20rem;
	border-radius: 10rem;
	font-size: 16rem;
	font-weight: 600;
	transition: ease .12s;
	cursor: pointer;
	font-family: 'Gilroy';

	@include large-mobile {
		height: 50rem;
		font-size: 14rem;
	}

	&_light {
		background: rgba(85, 109, 238, 0.1);
		color: $blue;
		fill: $blue;
		&:hover {
			// color: #fff;
			background: #D6DDFE;
		}
	}

	&_gray {
		background: #F5F5F7;
		border: 1px solid #F5F5F7;
		&:hover {
			background: #fff;
			border-color: #E4E4E4;
		}
	}
	&_small {
		font-size: 14rem;
	}
	&_blue {
		background: $blue;
		color: #fff;
		fill: #fff;
		&:hover{
			background: #4257C7;
		}
	}
	&_border {
		background: #fff;
		border: 1px solid #C4C4C4;
	}
	&_verysmall {
		height: 32rem;
		font-weight: 500;
	}
	&__icon {
		flex-shrink: 0;
		margin-right: 10rem;

		&_chatting {
			width: 16rem;
			height: 12rem;
			margin-right: 0;
		}
		&_phone {
			width: 11rem;
			height: 10rem;
			
			margin-top: -1px;
		}
		&_info {
			width: 12rem;
			height: 12rem;
			fill: #C3C8CB;
		}

		@include large-mobile {
			&_phone {
				width: 9rem;
				height: 8rem;
				margin-right: 5rem;
			}
		}
	}

	.phone {
		font-size: 22rem;
		font-family: 'Gilroy';

		@include large-mobile {
			font-size: 18rem;
		}
	}
}
</style>