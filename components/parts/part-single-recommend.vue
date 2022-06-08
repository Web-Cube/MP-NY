<template lang="pug">
	.single-recommend
		h3.single-recommend__title.h3 Recomend

		.single-recommend__list.flex
			item-card.single-recommend__item(
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
	
		button-primary.single-recommend__button(gray) Показать еще
</template>

<script>
export default {
	data(){
		return {
			catalog: [
				{
					name: 'Объектив SLR Magic. Sony E. 25mm f1.4 2',
					city: 'New Your',
					distance: '2 km near you',
					date: '4 days ago',
					price: 22228,
					phoneNumber: '+ 1 376 266 5353',
					status: 'VIP',
					gallery: [
						'item-card__img1.jpg',
						'item-card__img2.jpg',
						'item-card__img3.jpg',
						'item-card__img4.jpg',
						'item-card__img5.jpg'
					]
				},
				{
					name: 'Объектив SLR Magic. Sony E. 25mm f1.2',
					city: 'New Your',
					distance: '3 km near you',
					date: '5 days ago',
					price: 128,
					phoneNumber: '+ 1 379 266 5353',
					status: 'VIP',
					gallery: [
						'item-card__img2.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img3.jpg',
					]
				},

				{
					name: 'Объектив SLR Magic. Sony E. 25mm f1.4 2',
					city: 'New Your',
					distance: '2 km near you',
					date: '4 days ago',
					price: 22228,
					phoneNumber: '+ 1 376 266 5353',
					status: 'VIP',
					gallery: [
						'item-card__img1.jpg',
						'item-card__img2.jpg',
						'item-card__img3.jpg',
						'item-card__img4.jpg',
						'item-card__img5.jpg'
					]
				},
				{
					name: 'Объектив SLR Magic. Sony E. 25mm f1.2',
					city: 'New Your',
					distance: '3 km near you',
					date: '5 days ago',
					price: 128,
					phoneNumber: '+ 1 379 266 5353',
					status: 'VIP',
					gallery: [
						'item-card__img2.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img3.jpg',
					]
				},
			]
		}
	}
}
</script>

<style lang="scss">
.single-recommend{

	&__title{
		margin-bottom: 50rem;

		@include large-mobile {
			margin-bottom: 20rem;
		}
	}

	&__list{
		

		@include min-large-mobile {
			@include items(3, 5);
		}

		@include large-mobile {
			@include items(2, 5);
		}
	}

	&__button{
		width: 100%;
		margin-top: 45rem;
		@include large-mobile {
			margin-top: 30rem;
		}
	}
}
</style>