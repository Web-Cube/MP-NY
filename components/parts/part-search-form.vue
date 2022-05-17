<template lang="pug">
	form.search-form(action="/")
		.search-form__row
			form-select.search-form__select(big borderRight value="Categories" v-if="category")
			.search-form__field
				input.search-form__input(name="search" :placeholder="placeholder" autocomplete="off" @keyup="showList" @blur="closeList")
				button-action.search-form__btn-search(icon="search")
				.search-form__list(v-if="searchListOn")
					.search-form__item(
						v-for="(item, i) in searchList" :key="i"
					)
						NuxtLink.search-form__link(:to="item.link")
							span.search-form__link-text {{ item.name }}
							svg-icon.search-form__link-arrow(name="arrowRight")
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
		},
		searchList: {
			type: Object,
			default: () => ([])
		}
	},
	data: () => ({
		searchListOn: false,		
	}),
	methods: {
		showList() {
			this.searchListOn = true;
		},
		closeList() {
			this.searchListOn = false;
		},
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
	&__list {
		position: absolute;
		top: 100%;
		width: 100%;
		margin-top: 10rem;
		padding: 20rem 10rem;
		border: 1px solid rgba($gray, .3);
		background: #fff;
		z-index: 100;
		border-radius: 0 0 15rem 15rem;

		@include large-mobile {
			padding: 10rem;
		}
	}
	&__link {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10rem 15rem 10rem 45rem;
		transition: ease .2s;
		border-radius: 5px;
		font-size: 17rem;
		color: $gray;
		&:hover {
			background: #F5F5F7;
			color: $default;
			.search-form__link-arrow {
				stroke: $default;
			}
		}
		&-arrow {
			width: 6rem;
			height: 11rem;
			flex-shrink: 0;
			fill: none;
			stroke: rgba($gray, .5);
			stroke-width: 1.5;
			transition: ease .2s;
		}

		@include large-mobile {
			padding-left: 25rem;
			padding-right: 10rem;
			font-size: 12px;
		}
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