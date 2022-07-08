<template lang="pug">
	.input(:class="Mods")
		textarea.input__field.input__field_textarea(:name="name" :value="value" :placeholder="placeholder" v-if="textarea")
		input.input__field(:type="type" :name="name" :value="value" :placeholder="placeholder" :disabled="disabled" :maxlength="maxlength" v-else)
		.input__clear(v-if="adress")
			svg-icon(name="closeBig")
		a.input__btn-map.p(:href="mapLink" target="_blank" v-if="adress") Map
		svg-icon.input__icon(:name="icon" :class="`input__icon_${icon}`" v-if="icon")

		slot

</template>

<script>

export default {
	props: {
		value: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		mapLink: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		},
		placeholder: {
			type: String,
			default: ''
		},
		separator: {
			type: Boolean,
			default: false
		},
		textarea: {
			type: Boolean,
			default: false
		},
		adress: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		big: {
			type: Boolean,
			default: false
		},
		maxlength: {
			type: Number,
			default: null
		},
		icon: {
			type: String,
			default: ''
		}
	},

	computed: {
		Mods(){
			return {
				'is-separator': this.separator,
				'input_adress': this.adress,
				'input_big': this.big,
			}
		}
	},
}
</script>

<style lang="scss">
.input{
	position: relative;

	@include min-large-mobile {
		&.is-separator {
			.input__field {
				border-left-width: 0;
				border-right-width: 0;
				border-radius: 0;
				&:focus {
					border-color: $light-gray;
				}
			}
			&:before {
				content: '';
				display: block;
				position: absolute;
				left: 0;
				top: 50%;
				width: 1px;
				height: 30rem;
				background: #D2D2D7;
				margin-top: -15rem;
			}
			&:first-child {
				&:before {
					display: none;
				}
				.input__field {
					border-radius: 10rem 0 0 10rem;
					border-left-width: 1px;
				}
			}
			&:last-child {
				.input__field {
					border-radius: 0 10rem 10rem 0;
					border-right-width: 1px;
				}
			}
		}
	}

	&_adress {
		.input {
			&__field {
				padding-right: 133rem;
			}
		}

		@include large-mobile {
			.input {
				&__field {
					padding-right: 105rem;
				}
			}
		}
	}

	&_big {
		.input {
			&__field {
				height: 80rem;
			}
		}

		@include large-mobile {
			.input {
				&__field {
					height: 50rem;
				}
			}
		}
	}

	&__field {
		width: 100%;
		height: 60rem;
		font-size: 17rem;
		font-weight: 500;
		font-family: 'Gilroy';
		padding: 0 10rem 0 20rem;
		border: 1px solid $light-gray;
		border-radius: 10rem;
		display: block;
		&:focus {
			border-color: $blue;
		}
		&::placeholder {
			font-weight: 500;
			color: $gray;
		}

		&:disabled {
			border-color: transparent;
			background: #F4F3F4;
			color: #83929D;
			&::placeholder {
				color: #83929D;
			}
		}

		&_textarea {
			height: 110rem;
			padding-top: 20rem;
			overflow: hidden;
			resize: none;
		}

		@include large-mobile {
			height: 50rem;
			font-size: 14rem;
			&_textarea {
				height: 90rem;
				padding-top: 15rem;
			}
		}
	}

	&__clear {
		width: 24rem;
		height: 24rem;
		fill: $gray;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 50%;
		margin-top: -12rem;
		right: 100rem;
		cursor: pointer;

		svg {
			width: 16rem;
			height: 16rem;
		}

		@include large-mobile {
			right: 78rem;
		}
	}

	&__btn-map {
		position: absolute;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		right: 0;
		top: 0;
		width: 86rem;
		height: 100%;
		&:before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			top: 13rem;
			width: 1px;
			height: calc( 100% - 26rem );
			background: $light-gray;
		}
		@include large-mobile {
			width: 69rem;
			&:before {
				top: 10rem;
				height: calc( 100% - 20rem );
			}
		}
	}

	&__icon {
		position: absolute;
		width: 20rem;
		height: 20rem;
		top: 50%;
		margin-top: -10rem;
		right: 20rem;
		&_eyeShow {
			cursor: pointer;
			fill: #9A9A9A;
		}
		&_eyeHide {
			cursor: pointer;
			stroke: #9A9A9A;
			stroke-width: 1.5;
			fill: none;
			width: 24rem;
			height: 24rem;
			margin-top: -12rem;
			right: 18rem;
		}
	}

	&__edit {
		position: absolute;
		right: 1px;
		top: 1px;
		height: calc( 100% - 2px );
		background: #fff;
		cursor: pointer;
		border-radius: 10rem;
		padding: 0 20rem;
		display: flex;
		align-items: center;
	}
	
}
</style>