<template lang="pug">
	.button-switcher(:class="Mods")
		.button-switcher__list
			label.button-switcher__item(
					v-for="(item, i) in items"
					:key="i"
				)
				input.button-switcher__input(
					:name="name"
					:value="item.value"
					type="radio"
					:checked="item.checked"
				)
				span.button-switcher__btn
					.button-switcher__text(v-html="item.text")

</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: 'name'
		},
		items: {
			type: Array,
			default: () => ([
			]),
		},
		blue: {
			type: Boolean,
			default: false
		},
		light: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		Mods(){
			return {
				'button-switcher_blue': this.blue,
				'button-switcher_light': this.light,
			}
		}
	}
}
</script>

<style lang="scss">
.button-switcher{
	border: 1px solid $light-gray;
	border-radius: 10rem;
	padding: 3px;
	&__list {
		display: flex;
	}
	&__item {
		width: 100%;
	}
	&__input {
		display: none;

		&:checked + .button-switcher__btn {
			color: $default;
			background: #F4F3F4;
		}
	}
	&__btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 10rem;
		padding: 10rem 15rem;
		height: 53rem;
		width: 100%;
		transition: ease .15s;
		font-size: 20rem;
		color: $gray;
		cursor: pointer;
		white-space: nowrap;
		&:hover {
			color: $blue;
		}

		@include large-mobile {
			font-size: 15rem;
			font-weight: 600;
		}
	}

	&_blue {
		.button-switcher {
			&__btn {
				font-size: 16rem;
				padding: 10rem 25rem;
				font-weight: 600;
			}
			&__input {
				&:checked + .button-switcher__btn {
					color: #fff;
					background: $blue;
				}
			}
		}

		@include large-mobile {
			padding: 2px;
			.button-switcher {
				&__btn {
					font-size: 15rem;
					padding: 5rem 17rem;
					height: 38rem;
				}
			}
		}
	}

	&_light {
		border: 0;
		padding: 0;
		.button-switcher {
			&__item {
				&:not(:last-child) {
					margin-right: 10rem;
				}
			}
			&__btn {
				height: 49rem;
				padding: 0 30rem;
				background: #F4F3F4;
				font-size: 14rem;
				font-weight: 600;
				color: #9A9A9A;
			}
			&__input {
				&:checked + .button-switcher__btn {
					color: #fff;
					background: $blue;
				}
			}
		}
	}
}
</style>