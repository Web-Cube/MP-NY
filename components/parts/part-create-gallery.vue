<template lang="pug">
	.create-gallery
		.create-gallery__preview
			.create-gallery__action
				button-medium.create-gallery__action-btn.create-gallery__action-btn_main(big borderWhite icon="pinned" type="button") сделать главной
				button-medium.create-gallery__action-btn.create-gallery__action-btn_refresh(big transparent square icon="refresh")
				button-medium.create-gallery__action-btn(big transparent square icon="deleteBig")
				button-medium.create-gallery__btn-main(big blue icon="pinned" type="button") main photo
			.create-gallery__preview-img
				img.object-fit(:src="require(`~/assets/img/${preview}`)")
</template>

<script>
export default {
	props: {
		preview: {
			type: String,
			default: "create-gallery__img5_big.jpg"
		},
		secondText: {
			type: String,
			default: "Click to upload or drop a photo"
		},
		img: {
			type: String,
			default: "analytics-box__img.svg"
		},
		list: {
			type: Array,
			default: () => ([
				'You can upload up to 10 photos',
				'Format JPG or PNG format',
				'Only upload media you own the rights to',
				'The maximum photo size is 25MB.'
			])
		},
	},
}
</script>

<style lang="scss">
.create-gallery{

	&__preview {
		position: relative;
		&-img {
			padding-top: div( 500, 872 ) *100%;
			overflow: hidden;
			border-radius: 10rem;
			text-align: center;
			position: relative;
		}

		@include large-mobile {
			&-img {
				padding-top: div( 334, 345 ) *100%;
			}
		}
	}

	&__btn-main {
		position: absolute;
		left: 100%;
		margin-left: 70rem;
		top: 0;
		white-space: nowrap;

		@include large-desktop {
			margin-left: 40rem;
		}
		@include small-desktop {
			display: none;
		}
		@include large-mobile {
			display: inline-flex;
			position: static;
			width: 35rem;
			padding: 0;
			margin-left: 5rem;
			.button-medium {
				&__icon {
					margin-right: 0;
				}
				&__text {
					display: none;
				}
			}
		}
	}

	&__action {
		position: absolute;
		z-index: 50;
		right: 20rem;
		top: 20rem;
		&-btn {
			&:not(:first-child) {
				margin-left: 10rem;
			}
		}

		@include large-mobile {
			right: 10rem;
			top: 10rem;
			&-btn {
				&:not(:first-child) {
					margin-left: 5rem;
				}
				&_main, &_refresh {
					display: none;
				}
			}
		}
	}

	&__thumbnails {
		margin-top: 10rem;
		&-list {
			@include items(10, 4);
		}
		&-btn {
			position: relative;
			padding-top: 100%;
			&:before {
				content: '';
				display: block;
				box-sizing: border-box;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				border: 1px dashed $light-gray;
				border-radius: 7rem;
			}
		}

		@include large-mobile {
			overflow: hidden;
			margin: 5rem -15rem 0 -15rem;
			&-list {
				padding: 0 15rem;
				padding-bottom: 40rem;
				margin: 0 0 -40rem 0;
				overflow-y: hidden;
				overflow-x: auto;
				flex-wrap: nowrap;
			}
			&-item {
				margin: 0;
				width: 111rem;
				flex-shrink: 0;
				&:not(:last-child) {
					margin-right: 5rem;
				}
			}
		}
	}
}
</style>