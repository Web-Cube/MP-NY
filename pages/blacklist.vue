<template lang="pug">
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
