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

					part-single-content.section-single__part

					part-single-map.section-single__part.section-single__part_map

					client-only
						div.section-single__part.section-single__part_user(v-if="!$screen.lt")

							module-user-info.section-single__user(
								:avatar="SINGLE_INFO.user.avatar"
								:name="SINGLE_INFO.user.name"
								:about="SINGLE_INFO.user.about"
								:verified="SINGLE_INFO.user.verified"
							)

							button-border.section-single__other(icon="other-posts" v-b-modal.users-adds) 9 User Ads

					part-single-recommend.section-single__part

				.section-single__column.section-single__column_sidebar

					part-single-sidebar.section-single__info(
						:title="SINGLE_INFO.title"
						:cost="SINGLE_INFO.cost"
						:user="SINGLE_INFO.user"
					)
		modal-users-adds

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

		const SINGLE_INFO = {
			title: "Объектив SLR Magic. Sony E. 25mm f1.4",
			cost: 2800,
			user: {
				avatar: "user-avatar.jpg",
				name: "Antony Watson",
				about: "Registered mart 2022",
				verified: true,
			}
		}

		return {
			categories,
			searchList,
			SINGLE_INFO
		}
	}
}
</script>

<style lang="scss">
.section-single{
	
	padding-bottom: 50rem;

	@include large-mobile {
		padding-bottom: 10rem;
	}

	&__form{
		margin-bottom: 40rem;

		@include large-mobile {
			display: none;
		}
	}
	
	&__user{
		margin-bottom: 30rem;

		@include large-mobile {
			margin-bottom: 18rem;
		}
	}

	&__gallery{
		margin-bottom: 70rem;

		@include small-tablet {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
		}
	}

	&__info{
		position: sticky;
		top: 20rem;
		@include small-tablet {
			position: relative;
			top: 0;
			margin-top: 59.973545%;

			border-bottom: 1px solid #D2D2D7;
			margin-bottom: 50rem;

		}

		@include large-mobile {
			padding-top: 20rem;
			padding-bottom: 10rem;
			margin-bottom: 30rem;
			margin-top: div(250, 345) * 100%;
		}

		// max-height: calc(100vh - 40rem);
	}

	&__column{
		&_content{
			width: div(1001, 1400) * 100%;
			padding-right: 20rem;
		}
		&_sidebar{
			width: div(399, 1400) * 100%;
			padding-bottom: 50rem;
		}

		@include small-tablet {
			width: 100%;
			padding-right: 0;
			padding-bottom: 0;
		}
	}

	&__row{
		@include small-tablet {
			position: relative;
			flex-direction: column-reverse;
		}
	}

	&__part{
		padding-bottom: 50rem;

		&:not(:last-child){	
			margin-bottom: 50rem;
			border-bottom: 1px solid #D2D2D7;
		}

		@include small-tablet {
			&_map{
				&:not(:last-child){	
					border-bottom: none;
					padding-bottom: 0;
				}
			}
		}

		@include large-mobile {
			padding-bottom: 40rem;
			&:not(:last-child){	
				margin-bottom: 40rem;
			}

			&_map{
				&:not(:last-child){
					margin-bottom: 30rem;
				}
			}

			&_user{
				&:not(:last-child){
					margin-bottom: 50rem;
					padding-bottom: 0;
					border-bottom: none;
				}
			}
		}
	}
}
</style>