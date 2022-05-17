<template lang="pug">
	component.button-primary.h5(
		:is="to !== '' ? 'NuxtLink' : 'button'"
		:to="to !== '' ? to : false"
		:class="Mods"
	)
		svg-icon.button-action__icon(:name="icon" :class="`button-primary__icon_${icon}`" v-if="icon")
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
		white: {
			type: Boolean,
			default: false
		},
		light: {
			type: Boolean,
			default: false
		},
		gray: {
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
				'button-primary_white': this.white,
				'button-primary_light': this.light,
				'button-primary_gray': this.gray,
				'button-primary_small': this.small
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
	font-size: 17rem;
	font-weight: 600;
	transition: ease .2s;
	cursor: pointer;
	font-family: 'Gilroy';

	@include large-mobile {
		height: 50rem;
		font-size: 14rem;
	}

	&_white {
		background: #fff;
	}

	&_light {
		background: rgba(85, 109, 238, 0.1);
		color: $blue;
		&:hover {
			color: #fff;
			background: #1E41FF;
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
	&__icon {
		flex-shrink: 0;
		&_chatting {
			width: 16rem;
			height: 12rem;
		}
		&_phone {
			width: 11rem;
			height: 10rem;
			margin-right: 10rem;
			margin-top: -1px;
		}

		@include large-mobile {
			&_phone {
				width: 9rem;
				height: 8rem;
				margin-right: 5rem;
			}
		}
	}
}
</style>