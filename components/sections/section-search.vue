<template lang="pug">
	section.section-search
		.section-search__images
			.section-search__wrap.wrap
				.section-search__img.section-search__img_left
					img(src="~/assets/img/section-search__img1.svg")
				.section-search__img.section-search__img_right
					img(src="~/assets/img/section-search__img2.svg")
		.section-search__wrap.wrap
			.section-search__img.section-search__img_right
			.section-search__inner
				h2.section-search__title.h1
					| Search. Buy. 
					span.color-blue Sell.
				part-search-form.section-search__form(:searchList="searchList" v-if="$screen.st")
					form-select.search-form__select(value="New Yourk" name="city" :items="['Chicago', 'San Diego', 'Houston']")
				part-search-mobile.section-search__form(v-else)
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
		list: {
			type: Array,
			default: () => ([])
		},
	},
	data(){
		const searchList = [
			{
				name: "Apple iPhone xr 64gb",
				link: "#",
			},
			{
				name: "Xbox Series X",
				link: "#",
			},
			{
				name: "SLR Magic. Sony E. 25mm f1.4",
				link: "#",
			}
		];
		return{
			searchList
		}
	}
}
</script>

<style lang="scss">
.section-search{
	padding: 100rem 0 17rem 0;
	position: relative;

	@include large-desktop {
		overflow: visible;
	}

	@include small-tablet {
		padding-top: 60rem;
	}

	@include large-mobile {
		padding: 80rem 0 40rem 0;
	}

	&__title {
		@include large-mobile {
			color: #CED2D9;
		}
	}

	&__images {
		position: absolute;
		left: 0;
		top: 100rem;
		width: 100%;
		height: 100%;
		overflow: hidden;

		@include large-desktop {
			display: none;
		}
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

		@include small-tablet {
			margin-top: 30rem;
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