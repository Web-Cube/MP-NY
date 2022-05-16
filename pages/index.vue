<template lang="pug">
	main.main
		section-search(:list="search.list" :title="search.title")
		section-categories

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
		return{
			search
		}
	}
}
</script>
