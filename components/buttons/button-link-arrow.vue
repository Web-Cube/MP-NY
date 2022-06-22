<template lang="pug">
	component.link-arrow(
		:is="to !== '' ? 'NuxtLink' : 'button'"
		:to="to !== '' ? to : false"
	)
		span.link-arrow__text
			slot
		svg-icon.link-arrow__icon(name="arrowRight")

</template>

<script>
export default {
	props: {
		to: {
			type: String,
			default: ""
		},
	}
}
</script>

<style lang="scss">
.link-arrow{
	border: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: none;
	cursor: pointer;
	font-size: 17rem;
	line-height: 1;
	font-weight: 600;

	@include large-mobile {
		font-size: 16rem;
	}

	&__icon {
		fill: none;
		stroke: $gray;
		width: 14rem;
		height: 11rem;
		stroke-width: 1.5;
		flex-shrink: 0;
		margin-left: 4rem;
	}
	
}
</style>