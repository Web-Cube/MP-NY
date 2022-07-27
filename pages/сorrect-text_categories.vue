<template lang="pug">
	main.main
		part-correct-head(title="Categories corrections")
			button-primary.correct-head__btn(blue icon="plusBig" v-b-modal.modal-category) Add category
		section-correct-categories
		modal-category
</template>

<script>
export default {
	layout: 'admin'
}
</script>