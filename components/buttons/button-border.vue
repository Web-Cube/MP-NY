<template lang="pug">
	component.button-border(
		:is="to ? 'NuxtLink' : 'button'"
		:to="to ? to : false"
		:class="Mods"
	)
		svg-icon.button-border__icon(
			:name="icon" 
			:class="`button-border__icon_${icon}`"
			v-if="icon"
		)

		span.button-border__text 
			slot
</template>

<script>
export default {
	props: {
		to: {
			type: String
		},
		icon: {
			type: String
		},
		blue: {
			type: Boolean,
			default: false
		},
		BigIcon: {
			type: Boolean,
			default: false
		},
		gray: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		Mods(){
			return {
				'button-border_blue': this.blue,
				'button-border_big-icon': this.BigIcon,
				'button-border_gray': this.gray
			}
		}
	}
}
</script>

<style lang="scss">
.button-border{
	border: 1px solid $light-gray;
	border-radius: 10rem;
	width: 100%;
	background: transparent;
	cursor: pointer;
	height: 40rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	color: #212D38;
	fill: #212D38;
	padding: 0 20rem;

	&_blue {
		color: $blue;
		border-color: $blue;
		.button-border {
			&__icon {
				fill: $blue;
				&_zipper {
					fill: none;
					stroke: $blue;
				}
				&_check {
					fill: none;
					stroke: $blue;
				}
			}
		}
	}

	&_big-icon {
		justify-content: flex-start;
		.button-border {
			&__icon {
				width: 20rem;
				height: 20rem;
				margin-right: 15rem;
			}
		}
	}

	&_gray {
		color: $gray;
		.button-border {
			&__icon {
				fill: $gray;
				&_zipper {
					fill: none;
					stroke: $gray;
				}
				&_chatBorder {
					fill: none;
					stroke: $gray;
				}
				&_cross {
					fill: none;
					stroke: $gray;
				}
				&_noneUser {
					fill: none;
					stroke: $gray;
				}
				&_closeCircle {
					fill: none;
					stroke: $gray;
				}
				&_delete {
					fill: none;
					stroke: $gray;
				}
				&_minusCircle {
					fill: none;
					stroke: $gray;
				}
				&_penEdit {
					fill: none;
					stroke: $gray;
				}
				&_copy {
					fill: none;
					stroke: $gray;
				}
				&_filters {
					fill: none;
					stroke: $gray;
				}
				&_duplicate {
					fill: none;
					stroke: $gray;
				}
			}
		}
	}

	@include large-mobile {
		height: 50rem;
		font-size: 14rem;
	}

	&__icon{
		width: 13rem;
		height: 13rem;
		margin-right: 10rem;
		flex-shrink: 0;
		fill: $default;
		&_zipper {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_chatBorder {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_cross {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_noneUser {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_closeCircle {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_delete {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_check {
			fill: none;
			stroke: $default;
			stroke-width: 1.2;
		}
		&_minusCircle {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_penEdit {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_copy {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_plusBig {
			padding: 2px;
		}
		&_filters {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
		&_duplicate {
			fill: none;
			stroke: $default;
			stroke-width: 1.5;
		}
	}
}
</style>