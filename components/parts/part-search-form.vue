<template lang="pug">
	form.search-form(action="/")
		.search-form__row
			.search-form__options
				slot(name="left")
			.search-form__field
				input.search-form__input(
					name="search" 
					:placeholder="placeholder" 
					autocomplete="off" 
					@keyup="showList" 
					@blur="closeList"
				)
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
			type: [Array, Object],
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
@import '~/assets/сss/search-form.scss';
</style>