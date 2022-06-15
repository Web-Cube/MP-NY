<template lang="pug">
	main.main
		section-search(:list="search.list")
		section-categories(:categories="categories")

</template>

<script>
export default {
	data(){
		const search = {
			list: [
				{

				},
				{
					img: "category__img1.png",
					text: 'Electronics'
				},
				{
					img: "category__img2.png",
					text: 'Appliances'
				},
				{
					img: "category__img3.png",
					text: 'Computers'
				},
				{
					img: "category__img4.png",
					text: 'Automotive products'
				},
				{
					img: "category__img5.png",
					text: 'Sport'
				},
				{
					img: "category__img6.png",
					text: 'Children'
				},
				{
					img: "category__img7.png",
					text: 'Appliances'
				},
				{
					img: "category__img2.png",
					text: 'Appliances'
				},
				{
					img: "category__img1.png",
					text: 'Electronics'
				},
				{
					img: "category__img3.png",
					text: 'Computers'
				},
				{
					img: "category__img4.png",
					text: 'Automotive products'
				},
				{
					img: "category__img6.png",
					text: 'Children'
				},
				{
					img: "category__img7.png",
					text: 'Computers'
				},
				{
					img: "category__img5.png",
					text: 'Appliances'
				},
			]
		};
		const categories = [
			{
				title: 'VIP advertise',
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
					{
						img: 'card-premium__img1.png',
						name: 'Объектив <br>SLR Magic. Sony E. 25mm f1.4',
						type: 'premium'
					},
					{
						status: 'VIP',
						gallery: [
							'item-card__img5.jpg',
						]
					},
				]
			},
			{
				title: 'Recommend for you',
				list: [
					{
						gallery: [
							'item-card__img5.jpg'
						]
					},
					{
						gallery: [
							'item-card__img2.jpg'
						]
					},
					{
						gallery: [
							'item-card__img3.jpg',
						]
					},
					{
						img: 'card-premium__img1.png',
						name: 'Объектив <br>SLR Magic. Sony E. 25mm f1.4',
						type: 'premium'
					},
					{
						gallery: [
							'item-card__img1.jpg',
						]
					},
					{
						gallery: [
							'item-card__img4.jpg'
						]
					},
					{
						gallery: [
							'item-card__img5.jpg'
						]
					},
					{
						gallery: [
							'item-card__img2.jpg'
						]
					},
					{
						img: 'card-premium__img2.png',
						name: 'Объектив <br>SLR Magic. Sony E. 25mm f1.4',
						type: 'premium'
					},
					{
						gallery: [
							'item-card__img3.jpg',
						]
					},
					{
						gallery: [
							'item-card__img5.jpg'
						]
					},
					{
						gallery: [
							'item-card__img2.jpg'
						]
					},
					{
						gallery: [
							'item-card__img3.jpg',
						]
					},
					{
						gallery: [
							'item-card__img1.jpg',
						]
					},
					{
						img: 'card-premium__img1.png',
						name: 'Объектив <br>SLR Magic. Sony E. 25mm f1.4',
						type: 'premium'
					},
				]
			}
		];
		return{
			search,
			categories
		}
	}
}
</script>
