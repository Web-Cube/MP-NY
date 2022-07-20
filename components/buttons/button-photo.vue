<template lang="pug">
	.button-photo
		input.button-photo__input(:name="name" :value="value" type="file")
		.button-photo__wrap.button-photo__wrap_img(v-if="img")
			.button-photo__img
				img(:src="require(`~/assets/img/${img}`)")
			.button-photo__edit
				svg-icon(name="editSmall")
		.button-photo__wrap(v-else)
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
		img: {
			type: String,
			default: ''
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
		position: relative;
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
		&_img {
			border: 1px solid $light-gray;
			&:before {
				display: none;
			}
		}
		@include large-mobile {
			svg {
				fill: $default;
			}
		}
	}

	&__img {
		max-width: 90%;
		max-height: 90%;
		img {
			max-height: 100rem;
		}

		@include large-mobile {
			img {
				max-height: 80rem;
			}
		}
	}
	&__edit {
		position: absolute;
		right: 1px;
		bottom: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $blue;
		border-radius: 100%;
		width: 34rem;
		height: 34rem;
		svg {
			fill: #fff!important;
			width: 16rem;
			height: 16rem;
		}
		@include large-mobile {
			right: -3px;
		}
	}
}
</style>