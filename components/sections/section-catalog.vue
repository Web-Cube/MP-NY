<template lang="pug">
	section.section-catalog
		.section-catalog__wrap.wrap
			part-search-form.section-search__form(:searchList="searchList")
				template(v-slot:left)
					button-select.search-form__select(borderRight name="tippyCategories") Categories
					tippy(to="tippyCategories" placement="bottom-start")
						part-modal-categories(:categories="categories")

				form-select.search-form__select(value="New Yourk" name="city" :items="['Chicago', 'San Diego', 'Houston']")
				form-select.search-form__select(value="+0 km" name="distanse" :items="['+1 km', '+2 km', '+3 km']")
			.section-catalog__row
				.section-catalog__column.section-catalog__column_left
					part-filter.section-catalog__filter(:filters="filters")

				.section-catalog__column.section-catalog__column_right
</template>

<script>
export default {
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
			filters
		}
	}
}
</script>

<style lang="scss">
.section-catalog{
	padding-bottom: 100rem;
	&__row {
		display: flex;
		margin-top: 50rem;
		align-items: flex-start;
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
	}
}
</style>