<template lang="pug">
	component.button-back(
		:is="to !== '' ? 'NuxtLink' : 'button'"
		:to="to !== '' ? to : false"
	)
		span.button-back__arrow
			svg-icon.button-back__icon(name="prev")
		span.button-back__text
			slot

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
.button-back{
	border: 0;
	display: inline-flex;
	align-items: center;
	background: none;
	cursor: pointer;
	color: #9A9A9A;
	font-size: 15rem;
	line-height: 1;

	&__arrow {
		width: 42rem;
		height: 42rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		border-radius: 100%;
		flex-shrink: 0;
		margin-right: 15rem;
	}

	&__icon {
		width: 24rem;
		height: 24rem;
		fill: $blue;
	}
}
</style>