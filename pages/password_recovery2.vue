<template lang="pug">
	section-registration(title="Password recovery ")
		.registration-form__desc.p.color-gray
			| Enter your phone number or email

		.registration-form__field
			label.registration-form__label.p.b New password
			form-input(placeholder="Enter the password" type="password" icon="eyeShow")
		.registration-form__field
			label.registration-form__label.p.b Repeat the password
			form-input(placeholder="Enter the password" type="password" icon="eyeShow")

		template(v-slot:bottom)
			button-primary.registration-form__btn(blue) Send
			.registration-form__question
				| Do you already have a profile? 
				br
				a.link.color-blue(href="#" v-b-modal.modal-login) Log in


</template>

<script>
export default {
	layout: 'default_small',
}
</script>
