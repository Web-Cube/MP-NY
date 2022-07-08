<template lang="pug">
	section-registration(title="Password recovery ")
		.registration-form__desc.p.color-gray
			| Enter the email address you used when you joined and we’ll send you instructions to reset your password.

		.registration-form__field
			label.registration-form__label.p.b Phone or mail
			form-input(placeholder="Enter your phone number or email")

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
