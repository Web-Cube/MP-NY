<template lang="pug">
	section.favorites-ad
		h1.favorites-ad__title.h3 {{title}}
		part-back-nav.favorites-ad__nav(:nav="nav")
			.back-nav__buttons.flex
				.back-nav__sort
					form-select.favorites-ad__select(label="Sort by" :items="['Newest', 'Popular']" value="Newest" noBorder)
				module-grid-switch.back-nav__grid-switch

		.favorites-ad__list.flex
			item-card.favorites-ad__item(
				v-for="(item, i) in list" 
				:key="i"
				:name="item.name"
				:city="item.city"
				:distance="item.distance"
				:date="item.date"
				:phoneNumber="item.phoneNumber"
				:price="item.price"
				:gallery="item.gallery"
				:status="item.status"
				:to="item.to"
				favorite="true"
			)
		button-primary.favorites-ad__more(gray) Show more
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Favorites ad"
		},
		list: {
			type: Array,
			default: () => ([
			])
		},
	},
	data() {
		return {
			nav: [
				{
					text: 'Favorites',
					class: 'isActive'
				},
				{
					text: 'Recently viewed',
				},
			],
		};
	},
}
</script>

<style lang="scss">
.favorites-ad{
	position: relative;
	height: 100%;
	padding-top: 50rem;
	padding-bottom: 30rem;

	@include small-tablet {
		padding-bottom: 80rem;
	}

	@include large-mobile {
		padding-top: 18rem;
		padding-bottom: 68rem;
	}

	&__title {
		font-family: 'Atyp Display';
		font-weight: 500;
	}

	&__nav {
		margin-top: 30rem;

		@include large-mobile {
			margin: 10rem -15rem 0 -15rem;
			padding: 0 15rem;

			.back-nav {
				&__column {
					&_left {
						display: none;
					}
					&_right {
						display: block;
						width: 100%;
						padding: 15rem 0;
					}
				}
				&__sort {
					margin-right: auto;
				}
			}
		}
	}

	&__buttons {
		@include large-mobile {
			min-height: 50rem;
			width: 100%;
			align-items: center;
			justify-content: space-between;
		}
	}

	&__sort {
		.select {
			&__label {
				color: #9A9A9A;
			}
		}
	}

	&__list {
		@include items(5, 8);
		padding-top: 28rem;

		@include large-tablet {
			@include items(3, 8);
		}

		@include large-mobile {
			@include items(2, 5);
			padding-top: 8rem;
		}
	}

	&__item {
		margin-top: 12rem;
	}

	&__more {
		min-width: 190rem;
		margin-top: 40rem;
		@include large-mobile {
			width: 100%;
			margin-top: 30rem;
		}
	}
}
</style>