<template lang="pug">
	section.section-catalog
		.section-catalog__wrap.wrap
			part-search-form.section-catalog__form(:searchList="searchList")
				template(v-slot:left)
					button-select.search-form__select(borderRight name="tippyCategories") Categories
					tippy(to="tippyCategories" placement="bottom-start")
						part-modal-categories(:categories="categories")

				form-select.search-form__select(value="New Yourk" name="city" :items="['Chicago', 'San Diego', 'Houston']")
				form-select.search-form__select(value="+0 km" name="distanse" :items="['+1 km', '+2 km', '+3 km']")
			.section-catalog__row
				.section-catalog__column.section-catalog__column_left
					part-filter.section-catalog__filter(:filters="filters" :counter="counter")

				.section-catalog__column.section-catalog__column_right
					.section-catalog__tags
						.section-catalog__tags-list
							item-tag.section-catalog__tag(
								v-for="(tag, i) in tags"
								:key="i"
								:text="tag.text"
								:counter="tag.counter"
								:to="tag.to"
							)

					.section-catalog__nav.flex.flex_vertical.flex_justify
						button-filter.section-catalog__btn-filter(:counter="counter")
						form-select.section-catalog__sort(
							lang 
							noBorder 
							label="Sort by"
							value="Newest" 
							:items="['By date', 'By price', 'By rating']"
						)
						module-grid-switch.section-catalog__grid-switch
					.section-catalog__list.flex
						item-card.section-catalog__item(
							v-for="(item, i) in catalog" 
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
						)
					.section-catalog__btn-wrap
						button-primary.section-catalog__btn(gray) {{ buttonText }}
</template>

<script>
export default {
	props: {
		catalog: {
			type: Array,
			default: () => ([
			])
		},
		tags: {
			type: Array,
			default: () => ([
			])
		},
		buttonText: {
			type: String,
			default: "Показать еще"
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
		const categories = [
			{
				title: 'Личные вещи ',
				list: [
					{
						text: 'Животные',
						to: '#',
					},
					{
						text: 'Электроника',
						to: '#',
					},
					{
						text: 'Предложение услуг ',
						to: '#',
					},
					{
						text: 'Favourites',
						to: '#',
					},
				]
			},
			{
				title: 'Транспорт ',
				list: [
					{
						text: 'Недвижимость ',
						to: '#',
					},
					{
						text: 'Работа ',
						to: '#',
					}
				]
			},
			{
				title: 'Работа  ',
				list: [
					{
						text: 'Животные',
						to: '#',
					},
					{
						text: 'Электроника',
						to: '#',
					},
					{
						text: 'Предложение услуг ',
						to: '#',
					},
					{
						text: 'Favourites',
						to: '#',
					},
				]
			},
			{
				title: 'Личные вещи ',
				list: [
					{
						text: 'Животные',
						to: '#',
					},
					{
						text: 'Электроника',
						to: '#',
					},
					{
						text: 'Предложение услуг ',
						to: '#',
					},
					{
						text: 'Favourites',
						to: '#',
					},
				]
			},
			{
				title: 'Транспорт ',
				list: [
					{
						text: 'Недвижимость ',
						to: '#',
					},
					{
						text: 'Работа ',
						to: '#',
					}
				]
			},
			{
				title: 'Работа  ',
				list: [
					{
						text: 'Животные',
						to: '#',
					},
					{
						text: 'Электроника',
						to: '#',
					},
					{
						text: 'Предложение услуг ',
						to: '#',
					},
					{
						text: 'Favourites',
						to: '#',
					},
				]
			}
		];
		const filters = [
			{
				title: "Electronic",
				visible: true,
				name: 'electronic',
				list: [
					"Sport",
					"Electronic",
					"Appliances"
				]
			},
			{
				title: "Appliances",
				name: 'appliances',
				list: [
					"Sport",
					"Electronic",
					"Appliances"
				]
			},
			{
				title: "Computers",
				name: 'computers',
				list: [
					"Sport",
					"Electronic",
					"Appliances"
				]
			},
			{
				title: "Children",
				name: 'children',
				list: [
					"Sport",
					"Electronic",
					"Appliances",
					"Sport",
					"Electronic",
					"Appliances"
				]
			},
			{
				title: "Appliances",
				name: 'appliances',
				list: [
					"Sport",
					"Electronic",
					"Appliances"
				]
			},
			{
				title: "Computers",
				name: 'computers',
				list: [
					"Sport",
					"Electronic",
					"Appliances"
				]
			},
		];
		return{
			searchList,
			categories,
			filters,
			counter: 3
		}
	}
}
</script>

<style lang="scss">
.section-catalog{
	padding-bottom: 85rem;

	@include large-mobile {
		padding-top: 15rem;
		padding-bottom: 50rem;
	}
	&__row {
		display: flex;
		margin-top: 50rem;
		align-items: flex-start;

		@include small-tablet {
			flex-wrap: wrap;
		}

		@include large-mobile {
			margin-top: 27rem;
		}
	}
	&__column {
		&_left {
			width: 266rem;
			padding-right: 18rem;
			border-right: 1px solid #D2D2D7;
			flex: 0 0 auto;
		}
		&_right {
			flex: 1 1 auto;
			width: 100%;
			padding-left: 20rem;
		}

		@include small-tablet {
			width: 100%;
			&_left {
				padding-right: 0;
				border-right: 0;
			}
			&_right {
				padding-left: 0;
			}
		}
	}

	&__list {
		@include items(4, 10);

		@include large-tablet {
			@include items(3, 10);
		}

		@include small-tablet {
			@include items(3, 10);
		}
		@include large-mobile {
			@include items(2, 10);
		}
	}

	&__item {
		margin-top: 35rem;
		margin-bottom: 5rem;
		@include large-mobile {
			margin-top: 20rem;
			margin-bottom: 0;
		}
	}

	&__tags {
		margin-bottom: 25rem;
		padding-bottom: 16rem;
		border-bottom: 1px solid $light-gray;
		&-list {
			margin: -5rem 0;
		}

		@include large-mobile {
			margin: 0 -15rem 16rem -15rem;
			padding-bottom: 20rem;
			overflow: hidden;
			&-list {
				display: flex;
				flex-wrap: nowrap;
				padding-left: 15rem;
				padding-right: 15rem;
				padding-bottom: 40px;
				margin: 0 0 -40px 0;
				overflow-x: auto;
				overflow-y: hidden;
			}
		}
	}

	&__tag {
		margin: 5rem 0;
		&:not(:last-child) {
			margin-right: 25rem;
		}

		@include large-mobile {
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	&__nav {
		@include large-mobile {
			padding-bottom: 16rem;
			border-bottom: 1px solid $light-gray;
			margin-left: -15rem;
			margin-right: -15rem;
			padding-left: 15rem;
			padding-right: 15rem;
		}
	}

	&__btn-filter {
		display: none;

		@include small-tablet {
			display: inline-flex;
		}
	}

	&__btn {
		width: 100%;
		height: 40rem;
		font-size: 12rem;
		&-wrap {
			display: none;
			margin-top: 40rem;
		}
		@include large-mobile {
			&-wrap {
				display: block;
			}
		}
	}
}
</style>