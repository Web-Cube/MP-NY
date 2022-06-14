<template lang="pug">
	.input(:class="Mods")
		textarea.input__field.input__field_textarea(:name="name" :value="value" :placeholder="placeholder" v-if="textarea")
		input.input__field(:type="type" :name="name" :value="value" :placeholder="placeholder" v-else)

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
	},

	computed: {
		Mods(){
			return {
				'is-separator': this.separator,
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

	&__field {
		width: 100%;
		height: 60rem;
		font-size: 17rem;
		font-weight: 600;
		font-family: 'Gilroy';
		padding: 0 10rem 0 20rem;
		border: 1px solid $light-gray;
		border-radius: 10rem;
		display: block;
		&::placeholder {
			font-weight: 500;
			color: $gray;
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
	
}
</style>