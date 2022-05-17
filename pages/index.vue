<template lang="pug">
	main.main
		section-search(:list="search.list" :title="search.title")
		section-categories(:categories="categories")

</template>

<script>
export default {
	data(){
		const search = {
			title: "Search. Buy. <span class='color-blue'>Sell.</span>",
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
						gallery: [
							'item-card__img1.jpg',
						]
					},
					{
						banner: true,
						bannerImg: 'banner1.png',
						name: 'Объектив <br>SLR Magic. Sony E. 25mm f1.4'
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
						gallery: [
							'item-card__img3.jpg',
						]
					},
					{
						banner: true,
						bannerImg: 'banner2.png',
						name: 'Объектив <br>SLR Magic. Sony E. 25mm f1.4'
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
						gallery: [
							'item-card__img4.jpg'
						]
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
