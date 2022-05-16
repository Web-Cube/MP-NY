<template lang="pug">
	form.search-form(action="/")
		.search-form__row
			form-select.search-form__select(big borderRight value="Categories" v-if="category")
			.search-form__field
				input.search-form__input(name="search" :placeholder="placeholder" autocomplete="off")
				button-action.search-form__btn-search(icon="search")
			.search-form__options
				slot
		button.search-form__btn Search
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String,
			default: "Search for ads"
		},
		white: {
			type: Boolean,
			default: false
		},
		light: {
			type: Boolean,
			default: false
		},
		category: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.search-form{
	width: 100%;
	border: 2px solid $blue;
	background: $blue;
	position: relative;
	display: flex;
	border-radius: 15rem;

	@include large-mobile {
		border-radius: 8px;
	}

	&__row {
		display: flex;
		background: #fff;
		border-radius: 15rem;
		height: 86rem;
		width: 100%;
		@include large-mobile {
			border-radius: 8px;
			height: 46rem;
		}
	}
	&__field {
		position: relative;
		width: 100%;
	}
	&__input {
		height: 100%;
		border: 0;
		background: none;
		font-size: 20rem;
		padding-left: 64rem;
		padding-right: 30rem;
		width: 100%;
		&::placeholder {
			color: $gray;
		}

		@include large-mobile {
			padding-left: 39rem;
			font-size: 14rem;
			font-weight: 500;
		}
	}
	&__btn-search {
		position: absolute;
		left: 20rem;
		top: 50%;
		margin-top: -19rem;

		@include large-mobile {
			left: 5rem;
			margin-top: -18rem;
		}
	}
	&__options {
		display: flex;
	}
	&__select {
		flex-shrink: 1;
		display: flex;
		align-items: center;

		@include large-mobile {
			display: none;
		}
	}

	&__btn {
		height: 86rem;
		background: none;
		border: 0;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 17rem;
		font-weight: 600;
		padding: 0 40rem;
		cursor: pointer;
		@include large-mobile {
			display: none;
		}
	}
}
</style>