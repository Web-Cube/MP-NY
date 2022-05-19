<template lang="pug">
	.grid-switch
		label.grid-switch__item
			input.grid-switch__input(type="radio" :name="name" checked)
			svg-icon.grid-switch__icon(name="grid2")
		label.grid-switch__item
			input.grid-switch__input(type="radio" :name="name")
			svg-icon.grid-switch__icon(name="list")
</template>

<script>

export default {
	props: {
		name: {
			type: String,
			default: 'grid'
		},
	},
}
</script>

<style lang="scss">
.grid-switch{
	display: flex;
	&__item {
		cursor: pointer;
		width: 14rem;
		height: 14rem;
		&:not(:last-child) {
			margin-right: 30rem;
		}

		@include large-mobile {
			&:not(:last-child) {
				margin-right: 16rem;
			}
		}
	}
	&__input {
		display: none;
		&:checked {
			& + .grid-switch__icon {
				fill: $default;
			}
		}
	}
	&__icon {
		width: 100%;
		height: 100%;
		transition: ease .12s;
		fill: $light-gray;
	}
}
</style>