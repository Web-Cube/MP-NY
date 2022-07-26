<template lang="pug">
	main.main
		part-correct-head(title="Categories corrections")
			button-primary.correct-head__btn(blue icon="plusBig") Add category
		section-correct-categories
</template>

<script>
export default {
	layout: 'admin'
}
</script>