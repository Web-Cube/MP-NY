<template lang="pug">
	.item-card
		.item-card__box.flex.flex_bottom
			.item-card__buttons
				button-primary.item-card__btn.item-card__btn_chatting(gray icon="chatting")
				button-primary.item-card__btn.item-card__btn_phone(gray v-if="phone") {{ phone }}
				button-primary.item-card__btn.item-card__btn_phone(gray small icon="phone" v-else @click.native="showPhone") Show number
		.item-card__head
			.item-card__gallery
				part-mouse-gallery(:list="gallery")
			.item-card__zoom(v-if="zoom")
				svg-icon(name="search")
			.item-card__status(v-if="status") {{ status }}
		.item-card__info
			.item-card__top
				NuxtLink.item-card__name.p(to="#") {{ name }}
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
		phone: {
			type: String,
			default: "+ 1 376 266 5353"
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
		z-index: 25;
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
	}
	&__info {
		margin-top: 15rem;
		position: relative;
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
	}

	&__btn {
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
	}
}
</style>