<template lang="pug">
	.button-file
		input.button-file__input(:name="name" :value="value" type="file")
		.button-file__wrap
			svg-icon(name="clip" viewBox="0 0 24 24")

</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: 'file'
		},
	},
}
</script>

<style lang="scss">
.button-file{
	position: relative;
	display: inline-flex;
	width: 64rem;
	height: 60rem;
	cursor: pointer;

	&:hover {
		.button-file {
			&__wrap {
				border-color: $blue;
			}
		}
	}

	@include large-mobile {
		width: 50rem;
		height: 50rem;
	}

	&__input {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		cursor: pointer;
	}

	&__wrap {
		width: 100%;
		height: 100%;
		border: 1px solid $light-gray;
		border-radius: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: ease .15s;
		svg {
			width: 24rem;
			height: 24rem;
			fill: none;
			stroke: #9A9A9A;
			stroke-width: 1.5;
		}
	}
}
</style>