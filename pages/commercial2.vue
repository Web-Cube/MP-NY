<template lang="pug">
	main.main
		section-commercial(
			:switchers="switchers" 
			title="Type of banner" 
			banner 
			deleteButton="this banner"
		)
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
				},
				{
					value: 'For business',
					text: 'For business',
					checked: true
				},
			],
		}
	}
}
</script>
