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
		.create-gallery__thumbnails
			.create-gallery__thumbnails-list.flex
				.create-gallery__thumbnails-item(
					v-for="(item, i) in thumbnails"
					:key="i"
				)
					item-photo-thumbnail.create-gallery__thumbnails-btn(
						:img="item.img"
						:main="item.main"
						:loading="item.loading"
						@click.native="thumbnail(i)"
						:class="{isActive:number == i}"
					)
		.create-gallery__text.color-gray * Drag to change the cover
</template>

<script>
export default {
	props: {
		preview: {
			type: String,
			default: "create-gallery__img5_big.jpg"
		},
		thumbnails: {
			type: Array,
			default: () => ([
				{
					img: 'create-gallery__img1_small.jpg',
					main: true,
				},
				{
					img: 'create-gallery__img2_small.jpg',
				},
				{
					img: 'create-gallery__img3_small.jpg',
				},
				{
					img: 'create-gallery__img4_small.jpg',
				},
				{
					img: 'create-gallery__img5_small.jpg',
				},
				{
					img: 'create-gallery__img5_small.jpg',
				},
				{
					loading: true
				},
				{
				}
			])
		},
	},
	data(){
		return {
			number: 1,
			i: 1
		}
	},
	methods:{
		thumbnail(i) {
			this.number = i;
		},
	}
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

		@include large-mobile {
			overflow: hidden;
			margin: 2px -15rem 0 -15rem;
			&-list {
				padding: 4px 15rem 44rem 15rem;
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

	&__text {
		margin-top: 20rem;
	}
}
</style>