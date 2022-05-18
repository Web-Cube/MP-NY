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
		return{
			searchList,
			categories
		}
	}
}
</script>

<style lang="scss">
.section-catalog{
	padding-bottom: 100rem;
}
</style>