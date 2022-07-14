<template lang="pug">
	main.main
		section-user(
			buttonText="Ban"
			:userList="userList"
		)
</template>

<script>
export default {
	layout: 'admin',
	data(){
		return{
			userList: [
				{
					label: 'Email',
					text: 'Johnson@gmail.co2m'
				},
				{
					label: 'Name',
					text: 'Johnson'
				},
				{
					label: 'Date register',
					text: '22/02/22'
				},
				{
					label: 'ID',
					text: '31203293'
				},
				{
					label: 'Publications',
					text: '12'
				},
				{
					label: 'Сanceled publications',
					text: '1'
				},
				{
					label: 'Phone',
					text: '+1 313 002 2122'
				}
			]
		}
	}
}
</script>
