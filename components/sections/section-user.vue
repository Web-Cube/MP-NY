<template lang="pug">
	section.section-user
		.section-user__row
			.section-user__column.section-user__column_left
				part-user-box.section-user__box(
					:buttonText="buttonText"
					:list="userList"
				)
			.section-user__column.section-user__column_right
				.section-user__publications
					h3.section-user__title.h3 {{title}}
					part-back-nav.section-user__nav(:nav="nav" mobile mobileBlue)
					.section-user__publications-list.flex
						item-card.section-user__publications-item(
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
		modal-card
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Publications"
		},
		buttonText: {
			type: String,
			default: ""
		},
		userList: {
			type: Array,
			default: () => ([
			]),
		},
	},
	data(){
		return{
			nav: [
				{
					text: 'Active',
					class: 'isActive'
				},
				{
					text: 'Inactive',
				},
				{
					text: 'Сanceled',
				},
			],
			catalog: [
				{
					name: 'Объектив SLR Magic. Sony E. 25mm f1.4 2',
					city: 'New Your',
					distance: '2 km near you',
					date: '4 days ago',
					price: 22228,
					phoneNumber: '+ 1 376 266 5353',
					gallery: [
						'item-card__img1.jpg',
					]
				},
				{
					name: 'Объектив SLR Magic. Sony E. 25mm f1.2',
					city: 'New Your',
					distance: '3 km near you',
					date: '5 days ago',
					price: 128,
					phoneNumber: '+ 1 379 266 5353',
					gallery: [
						'item-card__img2.jpg',
					]
				},
				{
					gallery: [
						'item-card__img3.jpg',
					]
				},
				{
					gallery: [
						'item-card__img4.jpg',
					]
				},
				{
					gallery: [
						'item-card__img5.jpg',
					]
				},
			],
		}
	},
}
</script>

<style lang="scss">
.section-user{
	padding: 30rem 0 80rem 0;

	@include large-mobile {
		padding: 10rem 0 70rem 0;
	}

	&__row {
		display: flex;
		@include large-tablet {
			flex-wrap: wrap;
		}
	}

	&__column {
		&_left {
			width: 355rem;
			min-width: 355rem;
		}
		&_right {
			width: 100%;
			margin-left: 40rem;
		}

		@include large-tablet {
			width: 100%;
			min-width: inherit;
			&_right {
				margin-left: 0;
				margin-top: 50rem;
			}
		}

		@include large-mobile {
			&_right {
				margin-top: 38rem;
			}
		}
	}
	&__title {
		font-family: 'Atyp Display';
		font-weight: 500;
	}

	&__nav {
		margin-top: -15rem;
		.back-nav__row {
			justify-content: flex-end;
		}

		@include large-mobile {
			margin-top: 15rem;
		}
	}

	&__publications {
		&-list {
			@include items(3, 5);
			padding-top: 10rem;
		}
		&-item {
			margin-top: 25rem;
		}

		@include min-large-mobile {
			.item-card__gallery {
				padding-top: 67.27%;
			}
		}

		@include large-mobile {
			&-list {
				@include items(2, 5);
			}
			&-item {
				margin-top: 15rem;
			}
		}
	}
}
</style>