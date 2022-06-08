<template lang="pug">
	.single-map
		.single-map__head
			.single-map__row.flex.flex_justify.flex_bottom
				.single-map__info
					h3.single-map__title.h3 On map
					.single-map__addr.h4.color-gray(v-if="!IsOpened") {{ Addr }}

				button-toggle.single-map__toggle(
					@click.native="ToggleMapView"
					:active="IsOpened"
				) {{ ButtonLabel }}

			part-icon-list.single-map__list(:list="fields" v-if="IsOpened")
		
		.single-map__bottom(v-if="IsOpened")
			img.single-map__image(src="~/assets/img/map.jpg")
</template>

<script>
export default {
	data(){
		return {
			IsOpened: false,

			Addr: "New Your, 45 Broadway #520 100341",

			fields: [
				{
					text: "New Your, 45 Broadway #520 100341",
					icon: "map-field.svg"
				},
				{
					text: "2 km near you",
					icon: "distance-field.svg"
				},
			]
		}
	},

	computed: {
		ButtonLabel(){
			return this.IsOpened ? "Hide map" : "Show map";
		}
	},

	methods: {
		ToggleMapView(){
			this.IsOpened = !this.IsOpened
		}
	}
}
</script>

<style lang="scss">
.single-map{

	&__title{
		margin-right: 30rem;
		margin-bottom: 15rem;
	}
	&__toggle{
		margin-bottom: 15rem;

		@include large-mobile {
			position: absolute;
			left: 0;
			bottom: 0;

			margin-bottom: 0;
		}
	}

	&__addr{
		margin-top: 20rem;
		font-family: 'Gilroy';
		font-weight: normal;
		margin-bottom: 15rem;

		@include large-mobile {
			font-size: 14rem;
			line-height: 120%;
			margin-bottom: 20rem;
		}
	}

	&__row{
		margin-bottom: -15rem;

		@include large-mobile {
			display: block;
			margin-bottom: 0;

		}
	}

	&__head{
		@include large-mobile {
			position: relative;
			padding-bottom: 15rem;
			margin-bottom: 20rem;
		}
	}

	&__image{
		border-radius: 10rem;

		@include large-mobile {
			height: 300rem;
			object-fit: cover;
		}
	}

	&__list{
		margin-top: 30rem;
		margin-bottom: 15rem;

		@include large-mobile {
			margin-bottom: 17rem;
		}
	}
}
</style>