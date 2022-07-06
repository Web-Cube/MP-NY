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
					title: 'Safety',
					fields: [
						{
							groupName: 'Safety',
							label: 'Login method',
							placeholder: 'Login with a password',
							modalName: 'fieldLogin'
						},
						{
							option: 'groupFields',
							groupName: 'Safety',
							label: 'Password',
							placeholder: '• • • • • • • • • • ',
							modalName: 'fieldPassword',
							list: [
								{
									label: 'Your current password',
									placeholder: '• • • • • • • • • • ',
									type: 'password'
								},
								{
									label: 'New password',
									placeholder: '• • • • • • • • • • ',
									icon: 'eyeShow',
									type: 'password'
								},
								{
									label: 'Repeat the password',
									placeholder: '• • • • • • • • • • ',
									type: 'password'
								}
							]
						},
					]
				},
			]
		}
	}
}
</script>
