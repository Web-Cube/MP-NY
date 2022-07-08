<template lang="pug">
	.button-photo
		input.button-photo__input(:name="name" :value="value" type="file")
		.button-photo__wrap
			svg-icon(name="camera" viewBox="0 0 24 24")

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
			default: 'file'
		},
	},
}
</script>

<style lang="scss">
.button-photo{
	position: relative;
	display: inline-flex;
	width: 120rem;
	height: 120rem;
	flex-shrink: 0;
	cursor: pointer;

	@include min-large-mobile {
		&:hover {
			.button-photo {
				&__wrap {
					border-color: $blue;
					svg {
						fill: $blue;
					}
				}
			}
		}
	}

	@include large-mobile {
		width: 96rem;
		height: 96rem;
	}

	&__input {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
		z-index: 3;
	}

	&__wrap {
		width: 100%;
		height: 100%;
		border: 5px dashed $dark-gray;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: ease .15s;
		&:before {
			content: '';
			position: absolute;
			left: 1px;
			top: 1px;
			width: calc( 100% - 2px );
			height: calc( 100% - 2px );
			border-radius: 100%;
			background: #fff;
		}
		svg {
			width: 24rem;
			height: 24rem;
			fill: #9A9A9A;
			position: relative;
			z-index: 2;
			transition: ease .1s;
		}
		@include large-mobile {
			svg {
				fill: $default;
			}
		}
	}
}
</style>