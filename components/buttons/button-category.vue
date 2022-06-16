<template lang="pug">
	NuxtLink.button-category(:to="to")
		span.button-category__wrap
			span.button-category__img
				img(:src="require(`~/assets/img/${img}`)" v-if="img")
				.button-category__icon(v-else)
					svg-icon(name="grid")
			span.button-category__text
				span.button-category__title {{text}} 
				span.button-category__counter.color-blue ({{counter}})
		svg-icon.button-category__arrow(name="arrowRight")
</template>

<script>
export default{
	props: {
		img: {
			type: String,
			default: ""
		},
		to: {
			type: String,
			default: "#"
		},
		text: {
			type: String,
			default: "All categories"
		},
		counter: {
			type: Number,
			default: 0
		},
	}
}
</script>

<style lang="scss">
.button-category{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 10rem;

	font-size: 14rem;
	line-height: 1.2;
	color: #6A757C;

	&__arrow {
		width: 6rem;
	    height: 10rem;
	    fill: none;
	    stroke: #C3C8CB;
	    stroke-width: 1.5;
	    flex-shrink: 0;
	    margin-left: 10rem;
	}

	&__wrap {
		display: flex;
		align-items: center;
	}

	&__img {
		width: 34rem;
		height: 34rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #F2F4F5;
		border-radius: 3px;
		padding: 5rem;
		margin-right: 10rem;
		img {
			max-height: 100%;
		}
	}

	&__icon {
		fill: #6A757C;
		width: 12rem;
		height: 12rem;
		svg {
			height: 100%;
		}
	}
}
</style>