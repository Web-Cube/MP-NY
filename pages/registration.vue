<template lang="pug">
	section-registration
		.registration-form__social
			.registration-form__social-list.flex
				button-primary.registration-form__social-btn(gray icon="facebook") Facebook
				button-primary.registration-form__social-btn(gray icon="gmail") Gmail
		.registration-form__separator.flex.flex_center
			.registration-form__separator-text.p Or Sign in with
		.registration-form__fields
			.registration-form__fields-row.flex
				.registration-form__field
					label.registration-form__label.p.b Name
					form-input(placeholder="Alexandr")
				.registration-form__field
					label.registration-form__label.p.b Second name
					form-input(placeholder="Bairamov")
			.registration-form__field
				label.registration-form__label.p.b Phone or mail
				form-input(placeholder="Enter your phone number or email")
			.registration-form__field
				label.registration-form__label.p.b Password
				form-input(placeholder="Enter the password" type="password" icon="eyeHide")
			form-checkbox.registration-form__checkbox I agree with rules of this system

		template(v-slot:bottom)
			button-primary.registration-form__btn(blue) Sign in
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
