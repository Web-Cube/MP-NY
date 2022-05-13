<template lang="pug">
	component.button-action(
		:is="to !== '' ? 'NuxtLink' : 'button'"
		:to="to !== '' ? to : false"
	) 
		svg-icon.button-action__icon(:name="icon" :class="`button-action__icon_${icon}`")

</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: "heart"
		},
		to: {
			type: String,
			default: ""
		},
	}
}
</script>

<style lang="scss">
.button-action{
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 30rem;
	height: 30rem;
	border: 0;
	background: none;
	cursor: pointer;
	&__icon {
		max-width: 18rem;
		max-height: 16rem;
		&_heart {
			fill: none;
			stroke: #000;
			stroke-width: 2;
		}
	}
}
</style>