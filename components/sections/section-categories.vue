<template lang="pug">
	SECTION.section-categories
		.section-categories__wrap.wrap
			.section-categories__category(v-for="(category, i) in categories" :key="i")
				h2.section-categories__title.h3 {{ category.title }}
				.section-categories__list.flex
					item-card.section-categories__item(
						v-for="(item, i) in category.list"
						:key="i"
						:name="item.name"
						:text="item.text"
						:phone="item.phone"
						:price="item.price"
						:gallery="item.gallery"
						:zoom="item.zoom"
						:status="item.status"
					)
</template>

<script>
export default {
	props: {
		categories: {
			type: Array,
			default: () => ([
				{
					title: 'VIP advertise',
					list: [
						{
							name: 'Объектив SLR Magic. Sony E. 25mm f1.4',
							text: 'New Your, 2 km near you • 2 days ago',
							price: '$ 228',
							phone: '+ 1 376 266 5353',
							zoom: true,
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
							text: 'New Your, 22 km near you • 1 days ago',
							price: '$ 128',
							phone: '+ 1 379 266 5353',
							status: 'VIP',
							gallery: [
								'item-card__img2.jpg',
							]
						},
					]
				}
			])
		}
	},
}
</script>

<style lang="scss">
.section-categories{
	padding: 45rem 0 100rem 0;
	overflow: hidden;

	&__list {
		padding-top: 5rem;
		@include items(5, 10);
	}

	&__item {
		margin-top: 45rem;
	}
}
</style>