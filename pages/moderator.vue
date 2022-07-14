<template lang="pug">
	main.main
		section-user(
			buttonText="Delete this menager"
			:userList="userList"
			moderator
			:settings="settings"
		)
</template>

<script>
export default {
	layout: 'admin',
	data(){
		return{
			userList: [
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
				}
			],
			settings: [
				{
					title: 'Username',
					fields: [
						{
							groupName: 'Username',
							label: 'First name',
							placeholder: 'Alexandr',
							modalName: 'fieldName'
						},
						{
							groupName: 'Username',
							label: 'Last name',
							placeholder: 'Bairamov',
							modalName: 'fieldLastName'
						}
					]
				},
				{
					title: 'Notifications',
					fields: [
						{
							groupName: 'Notifications',
							label: 'Email',
							placeholder: 'Bari56@mail.ru',
							type: "email",
							name: "email",
							modalName: 'fieldEmail'
						},
						{
							groupName: 'Notifications',
							label: 'Phone',
							type: "tel",
							placeholder: '+7 747 609 99 95',
							modalName: 'fieldPhone'
						}
					]
				},
				{
					title: 'Authorization',
					fields: [
						{
							groupName: 'Authorization',
							label: 'Login',
							placeholder: '-',
							name: "login",
							modalName: 'fieldLogin'
						},
						{
							groupName: 'Authorization',
							label: 'Password',
							type: "password",
							placeholder: '-',
							modalName: 'fieldPassword'
						}
					]
				},
			]
		}
	}
}
</script>
