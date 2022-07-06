<template lang="pug">
	section-settings(:list="list" :nav="nav")
</template>

<script>
export default {
	layout: 'back',
	data(){
		return{
			nav: [
				{
					text: 'Profile',
					to: '/setting',
				},
				{
					to: '/safety',
					text: 'Safety',
				},
				{
					to: '/other',
					text: 'Other',
				},
				{
					to: '/blacklist',
					text: 'Blacklist',
				},
			],
			list: [
				{
					title: 'Username',
					fields: [
						{
							label: 'First name',
							placeholder: 'Alexandr'
						},
						{
							label: 'Last name',
							placeholder: 'Bairamov'
						}
					]
				},
				{
					title: 'Notifications',
					fields: [
						{
							label: 'Email',
							placeholder: 'Bari56@mail.ru',
							type: "email",
							name: "email"
						},
						{
							label: 'Phone',
							placeholder: '+7 747 609 99 95'
						}
					]
				},
				{
					title: 'Language',
					fields: [
						{
							label: 'Language',
							option: 'select',
						}
					]
				}
			]
		}
	}
}
</script>
