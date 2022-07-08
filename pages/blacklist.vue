<template lang="pug">
	main.main
		section-settings(:blacklist="blacklist")
</template>

<script>
export default {
	layout: 'back',
	data(){
		return{
			blacklist: [
				{

				},
				{
					avatar: 'User4.jpg',
					name: 'Johnson Johnson '
				},
				{

				},
			]
		}
	}
}
</script>
