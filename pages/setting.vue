<template lang="pug">
	section-settings(:list="list")
</template>

<script>
export default {
	layout: 'back',
	data(){
		return{
			list: [
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
					title: 'Language',
					fields: [
						{
							groupName: 'Language',
							label: 'Language',
							option: 'select',
							topPosition: true,
							modalName: 'fieldLanguage'
						}
					]
				}
			]
		}
	}
}
</script>
