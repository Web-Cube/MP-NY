<template lang="pug">
	NuxtLink.item-card(v-if="banner" :to="to")
		span.item-card__banner
			span.item-card__bg
			span.item-card__banner-wrap
				span.item-card__banner-img(v-if="bannerImg")
					img(:src="require(`~/assets/img/${bannerImg}`)")
				span.item-card__banner-name.h4(v-html="name")
				svg-icon.item-card__banner-arrow(name="arrowRight")
	.item-card(v-else)
		.item-card__box.flex.flex_bottom
			.item-card__buttons
				button-primary.item-card__btn.item-card__btn_chatting(gray icon="chatting")
				button-primary.item-card__btn.item-card__btn_phone(gray v-if="phone") {{ phoneNumber }}
				button-primary.item-card__btn.item-card__btn_phone(gray small icon="phone" v-else @click.native="showPhone") Show number
		.item-card__head
			.item-card__gallery
				part-mouse-gallery(:list="gallery")
			.item-card__zoom(v-if="zoom")
				svg-icon(name="search")
			.item-card__status(v-if="status") {{ status }}
		.item-card__info
			.item-card__top
				NuxtLink.item-card__name.p(:to="to") {{ name }}
				button-action.item-card__favorite(to="#")
			.item-card__text.color-gray {{ text }}
			.item-card__price {{ price }}
</template>

<script>
export default{
	props: {
		name: {
			type: String,
			default: "Объектив SLR Magic. Sony E. 25mm f1.4"
		},
		text: {
			type: String,
			default: "New Your, 2 km near you  •  2 days ago"
		},
		price: {
			type: String,
			default: "$ 228"
		},
		status: {
			type: String,
			default: ""
		},
		phoneNumber: {
			type: String,
			default: "+ 1 376 266 5353"
		},
		to: {
			type: String,
			default: "#"
		},
		bannerImg: {
			type: String,
			default: ""
		},
		gallery: {
			type: Array,
			default: () => ([
				'item-card__img1.jpg',
				'item-card__img2.jpg',
				'item-card__img3.jpg',
				'item-card__img4.jpg',
				'item-card__img5.jpg'
			])
		},
		banner: {
			type: Boolean,
			default: false
		},
		zoom: {
			type: Boolean,
			default: false
		}
	},
	data: () => ({
		phone: false,		
	}),
	methods: {
		showPhone() {
			this.phone = true;
		},
	}
}
</script>

<style lang="scss">
.item-card{
	position: relative;
	&:hover {
		z-index: 31;
		.item-card {
			&__box {
				visibility: visible;
				opacity: 1;
			}
		}
	}
	&__head {
		position: relative;
	}
	&__gallery {
		position: relative;
		z-index: 1;
		overflow: hidden;
		padding-top: div(220, 264) * 100%;
		border-radius: 10rem;

		@include large-mobile {
			padding-top: div(140, 167) * 100%;
		}
	}
	&__info {
		margin-top: 15rem;
		position: relative;

		@include large-mobile {
			margin-top: 10rem;
		}
	}
	&__favorite {
		width: auto;
		height: auto;
		stroke: $gray;
		flex-shrink: 0;
		margin-left: 20rem;
		svg {
			width: 21rem;
			height: 19rem;
			max-width: inherit;
			max-height: inherit;
			stroke: rgba($gray, .3);
		}

		@include large-mobile {
			svg {
				width: 17rem;
				height: 15rem;
				stroke-width: 1.7;
			}
		}
	}
	&__top {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	&__name {
		font-weight: 600;
		display: block;
		max-width: 210rem;
		transition: ease .2s;
		&:hover {
			color: $blue;
		}

		@include large-mobile {
			max-width: 75%;
		}
	}
	&__text {
		margin-top: 10rem;
	}
	&__price {
		margin-top: 15rem;
		font-size: 20rem;
		font-weight: 600;
		line-height: 1;
		letter-spacing: 0.01em;

		@include large-mobile {
			margin-top: 10rem;
			font-size: 17rem;
		}
	}

	&__box {
		position: absolute;
		left: -15rem;
		top: -15rem;
		width: calc( 100% + 30rem );
		height: calc( 100% + 115rem );
		background: #fff;
		border-radius: 10rem;
		border: 1px solid #D2D2D7;
		padding: 20rem 15rem;
		visibility: hidden;
		opacity: 0;
		transition: ease .2s;

		@include large-mobile {
			left: -10rem;
			top: -10rem;
			width: calc( 100% + 20rem );
			height: calc( 100% + 95rem );
			padding: 15rem 10rem;
		}
	}

	&__btn {
		padding: 0;
		&:not(:last-child) {
			margin-right: 5rem;
		}
		&_chatting {
			width: 60rem;
			min-width: 60rem;
		}
		&_phone {
			width: 100%;
		}

		@include large-mobile {
			&_chatting {
				width: 50rem;
				min-width: 50rem;
			}
			&_phone {
				font-size: 12rem;
			}
		}
	}
	&__buttons {
		width: 100%;
		display: flex;
	}

	&__zoom {
		position: absolute;
		left: 5rem;
		top: 5rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40rem;
		height: 40rem;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		border-radius: 10rem;
		z-index: 30;
		svg {
			width: 16rem;
			height: 16rem;
			fill: #fff;
			stroke: #fff;
			stroke-width: 1px;
			transform: rotate(90deg);
		}

		@include large-mobile {
			width: 30rem;
			height: 30rem;
			svg {
				width: 12rem;
				height: 12rem;
			}
		}
	}
	&__status {
		position: absolute;
		z-index: 30;
		left: 10rem;
		top: 10rem;
		height: 30rem;
		background: #FF664A;
		border-radius: 7rem;
		padding: 0 10rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-weight: 600;
		letter-spacing: normal;
		@include large-mobile {
			height: 20rem;
			padding: 0 6rem;
			font-size: 10rem;
		}
	}
	&__banner {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 30rem 20rem;
		&-wrap {
			position: relative;
			text-align: center;
			display: block;
		}
		&-name {
			letter-spacing: 0.01em;
			display: block;
		}
		&-img {
			display: block;
			margin-bottom: 20rem;
			img {
				max-height: 130rem;
			}
		}
		&-arrow {
			width: 9rem;
			height: 11rem;
			display: block;
			margin: 20rem auto 0 auto;
			fill: none;
			stroke: $default;
			stroke-width: 2;
		}

		@include large-mobile {
			&-img {
				margin-bottom: 17rem;
				img {
					max-height: 114rem;
				}
			}
			&-name {
				font-size: 14rem;
			}
			&-arrow {
				margin-top: 10rem;
			}
		}
	}
	&__bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(239.83deg, #E0F0FF 10.5%, #FFE3D3 124.13%);
		opacity: 0.7;
		border-radius: 10px;
		transform: matrix(-1, 0, 0, 1, 0, 0);
	}
}
</style>