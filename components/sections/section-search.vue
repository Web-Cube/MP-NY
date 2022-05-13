<template lang="pug">
	SECTION.section-search
		.section-search__wrap.wrap
			.section-search__img.section-search__img_left
				img(src="~/assets/img/section-search__img1.svg")
			.section-search__img.section-search__img_right
				img(src="~/assets/img/section-search__img2.svg")
			.section-search__img.section-search__img_right
			.section-search__inner
				h2.section-search__title.h1(v-html="title")
				part-search-form.section-search__form
					form-select.search-form__select(value="New Yourk")
			.section-search__list
				.section-search__list-wrap.flex
					item-category.section-search__item(
						v-for="(item, i) in list" :key="i"
						:img="item.img"
						:to="item.to"
						:text="item.text"
					)
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Search. Buy. <span class='color-blue'>Sell.</span>"
		},
		list: {
			type: Array,
			default: () => ([])
		}
	}
}
</script>

<style lang="scss">
.section-search{
	padding: 100rem 0 45rem 0;
	overflow: hidden;

	@include large-mobile {
		padding: 80rem 0 50rem 0;
	}

	&__inner {
		max-width: 872rem;
		margin: 0 auto;
		position: relative;

		@include small-tablet {
			max-width: none;
		}
	}
	&__form {
		margin-top: 40rem;

		@include large-mobile {
			margin-top: 17rem;
		}
	}

	&__img {
		position: absolute;
		pointer-events: none;
		&_left {
			width: 226rem;
			right: 100%;
			top: 24rem;
			margin-right: -80rem;
		}
		&_right {
			width: 408rem;
			left: 100%;
			top: 105rem;
			margin-left: -140rem;
		}

		@include large-desktop {
			display: none;
		}
	}

	&__list {
		max-width: 1120rem;
		margin: 0 auto;
		padding-top: 15rem;
		&-wrap {
			@include items(7, 10);
		}

		@include small-tablet {
			&-wrap {
				@include items(5, 10);
			}
		}

		@include large-mobile {
			margin: 20rem -15rem 0 -15rem;
			padding-top: 0;
			overflow: hidden;
			&-wrap {
				flex-wrap: nowrap;
				padding-left: 15rem;
				padding-right: 15rem;
				padding-bottom: 40px;
				margin-bottom: -40px;
				padding-top: 10rem;
				overflow-x: auto;
				overflow-y: hidden;
			}
		}
	}

	&__item {
		margin-top: 50rem;
		&:first-child {
			display: none;
		}

		@include large-mobile {
			margin: 0 10rem;
			width: 80rem;
			flex-shrink: 0;
			&:first-child {
				display: block;
			}
		}
	}
}
</style>