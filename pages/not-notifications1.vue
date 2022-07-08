<template lang="pug">
	main.main
		section-notifications3(:text="text")
</template>

<script>
export default {
	layout: 'back',
	data(){
		return{
			text: "You have not Notifications"
		}
	}
}
</script>
