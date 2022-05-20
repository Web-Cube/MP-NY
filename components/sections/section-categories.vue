<template lang="pug">
	section.section-categories
		.section-categories__wrap.wrap
			.section-categories__category(v-for="(category, i) in categories" :key="i")
				h2.section-categories__title.h3 {{ category.title }}
				.section-categories__list.flex
					.section-categories__column(v-for="(item, i) in category.list" :key="i")
						item-card.section-categories__item(
							v-if="!item.type"
							:name="item.name"
							:city="item.city"
							:distance="item.distance"
							:date="item.date"
							:phoneNumber="item.phoneNumber"
							:price="item.price"
							:gallery="item.gallery"
							:status="item.status"
							:to="item.to"
						)
						item-card-premium.section-categories__item(
							v-else-if="item.type === 'premium'"
							:name="item.name"
							:img="item.img"
							:to="item.to"
						)
				.section-categories__btn-wrap
					button-primary.section-categories__btn(gray) {{ buttonText }}
</template>

<script>
export default {
	props: {
		buttonText: {
			type: String,
			default: "Показать еще"
		},
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

	@include small-tablet {
		padding-top: 10rem;
	}

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

	&__column {
		margin-top: 45rem;
		display: flex;

		@include large-mobile {
			margin-top: 20rem;
			display: none;
			&:nth-child(-n+6) {
				display: block;
			}
		}
	}

	&__item {
		min-height: 100%;
		width: 100%;
	}

	&__category {
		margin-top: 100rem;

		@include small-tablet {
			margin-top: 70rem;
		}

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