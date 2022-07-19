<template lang="pug">
	main.main
		section-commercial(:switchers="switchers")
</template>

<script>
export default {
	layout: 'admin',
	data(){
		return{
			switchers: [
				{
					value: 'For user',
					text: 'For user',
					checked: true
				},
				{
					value: 'For business',
					text: 'For business',
				},
			],
		}
	}
}
</script>
