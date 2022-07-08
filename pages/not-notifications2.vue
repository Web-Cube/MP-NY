<template lang="pug">
	main.main
		section-notifications3(:text="text" :img="img")
</template>

<script>
export default {
	layout: 'back',
	data(){
		return{
			text: "You have not Notifications",
			img: 'not-notification___img2.svg'
		}
	}
}
</script>
