<template lang="pug">
	form.search-form(action="/")
		.search-form__row
			.search-form__field(v-b-modal.modal-search)
				input.search-form__input(
					name="search" 
					:placeholder="placeholder" 
					autocomplete="off"
				)
				button-action.search-form__btn-search(icon="search")
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String,
			default: "Search for ads"
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/сss/search-form.scss';
</style>