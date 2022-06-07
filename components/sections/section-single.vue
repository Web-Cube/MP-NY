<template lang="pug">
	section.section-single
		.wrap
			part-search-form.section-single__form(:searchList="searchList")
				template(v-slot:left)
					button-select.search-form__select(borderRight name="tippyCategories") Categories
					tippy.tippy-hide(to="tippyCategories" placement="bottom-start" trigger="click" )
						part-modal-categories(:categories="categories")

				form-select.search-form__select(value="New Yourk" name="city" :items="['Chicago', 'San Diego', 'Houston']")
				form-select.search-form__select(value="+0 km" name="distanse" :items="['+1 km', '+2 km', '+3 km']")

			.section-single__row.flex.flex_justify
				.section-single__column.section-single__column_content
				
					part-single-gallery.section-single__gallery

					part-single-content.section-single__content

					part-single-recommend.section-single__recommend

				.section-single__column.section-single__column_sidebar

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

		return {
			categories,
			searchList
		}
	}
}
</script>

<style lang="scss">
.section-single{
	
	padding-bottom: 50rem;

	&__form{
		margin-bottom: 40rem;
	}

	&__gallery{
		margin-bottom: 70rem;
	}
	&__column{
		&_content{
			width: div(982, 1400) * 100%;
		}
		&_sidebar{
			width: div(399, 1400) * 100%;
		}
	}
}
</style>