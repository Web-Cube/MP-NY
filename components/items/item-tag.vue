<template lang="pug">
	component.tag(
			:is="to !== '' ? 'NuxtLink' : 'div'"
			:to="to !== '' ? to : false"
		)
		span.tag__text {{ text }}
		span.tag__counter.color-blue(v-if="counter") ({{ counter }})
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: ""
		},
		counter: {
			type: Number,
		},
		to: {
			type: String,
			default: ""
		},
	},
}
</script>

<style lang="scss">
.tag{
	display: inline-flex;
	font-size: 16rem;
	color: $gray;

	@include large-mobile {
		font-size: 14rem;
	}
	&__counter {
		margin-left: 3rem;
	}
}
</style>