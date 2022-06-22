<template lang="pug">
	section-favorites-ad(:list="list")
</template>

<script>
export default {
	layout: 'back',
	data(){
		return{
			list: [
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
					status: 'VIP',
					gallery: [
						'item-card__img4.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img5.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img1.jpg',
					]
				},
				{
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
			],
		}
	}
}
</script>
