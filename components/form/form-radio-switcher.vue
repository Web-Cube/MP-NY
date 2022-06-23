<template lang="pug">
	.radio-switcher
		.radio-switcher__list
			label.radio-switcher__item(
					v-for="(item, i) in items"
					:key="i"
				)
				input.radio-switcher__input(
					:name="name"
					:value="item.value"
					type="radio"
					:checked="item.checked"
				)
				span.radio-switcher__btn
					.radio-switcher__text(v-html="item.text")

</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default: 'name'
		},
		items: {
			type: Array,
			default: () => ([
			]),
		},
	},
}
</script>

<style lang="scss">
.radio-switcher{
	border: 1px solid $light-gray;
	border-radius: 10rem;
	padding: 3px;
	&__list {
		display: flex;
	}
	&__item {
		width: 100%;
	}
	&__input {
		display: none;

		&:checked + .radio-switcher__btn {
			color: $default;
			background: #F4F3F4;
		}
	}
	&__btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 10rem;
		padding: 10rem 15rem;
		height: 53rem;
		width: 100%;
		transition: ease .15s;
		font-size: 20rem;
		color: $gray;
		cursor: pointer;
		&:hover {
			color: $blue;
		}

		@include large-mobile {
			font-size: 15rem;
			font-weight: 600;
		}
	}
}
</style>