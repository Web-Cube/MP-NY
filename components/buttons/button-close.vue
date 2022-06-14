<template lang="pug">
	button.button-close
		svg-icon(name="close" viewBox="0 0 10 9")

</template>

<style lang="scss">
.button-close{
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 34rem;
	height: 34rem;
	border-radius: 100%;
	background: #F4F3F4;
	border: 0;
	cursor: pointer;

	svg {
		width: 13rem;
		height: 13rem;
		stroke: $gray;
	}

	@include large-mobile {
		width: 28rem;
		height: 28rem;
		svg {
			width: 12rem;
			height: 12rem;
		}
	}
}
</style>