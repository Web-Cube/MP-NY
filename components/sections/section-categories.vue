<template lang="pug">
	SECTION.section-categories
		.section-categories__wrap.wrap
			.section-categories__category(v-for="(category, i) in categories" :key="i")
				h2.section-categories__title.h3 {{ category.title }}
				.section-categories__list.flex
					item-card.section-categories__item(
						v-for="(item, i) in category.list"
						:key="i"
						:name="item.name"
						:text="item.text"
						:phone="item.phone"
						:price="item.price"
						:gallery="item.gallery"
						:zoom="item.zoom"
						:status="item.status"
						:banner="item.banner"
						:bannerImg="item.bannerImg"
					)
				.section-categories__btn-wrap
					button-primary.section-categories__btn(gray) Показать еще
</template>

<script>
export default {
	props: {
		categories: {
			type: Array,
			default: () => ([
			])
		}
	},
}
</script>

<style lang="scss">
.section-categories{
	padding: 45rem 0 100rem 0;
	overflow: hidden;

	@include large-mobile {
		padding: 10rem 0 50rem 0;
	}

	&__list {
		padding-top: 5rem;
		@include items(5, 10);

		@include large-tablet {
			@include items(4, 10);
		}
		@include small-tablet {
			@include items(3, 10);
		}
		@include large-mobile {
			@include items(2, 5);
			padding-top: 0;
		}
	}

	&__item {
		margin-top: 45rem;

		@include large-mobile {
			margin-top: 20rem;
			display: none;
			&:nth-child(-n+6) {
				display: block;
			}
		}
	}

	&__category {
		margin-top: 100rem;

		@include large-mobile {
			margin-top: 40rem;
			&:first-child {
				margin-top: 0;
			}
		}
	}

	&__btn {
		width: 100%;
		height: 40rem;
		font-size: 12rem;
		&-wrap {
			display: none;
			margin-top: 20rem;
		}
		@include large-mobile {
			&-wrap {
				display: block;
			}
		}
	}
}
</style>