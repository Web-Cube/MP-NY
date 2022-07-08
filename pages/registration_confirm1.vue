<template lang="pug">
	section-registration(title="Confirm your Email")
		.registration-form__desc.p.color-gray
			| Enter the code from the SMS

		.registration-form__field
			.registration-form__code
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
		.registration-form__desc.mobile-hidden.p.color-gray
			| Send the code again 0:42

		template(v-slot:bottom)
			button-primary.registration-form__btn(blue) Sign in
			button-primary.registration-form__btn.mobile-visible(gray)
				span.color-gray Send the code again 0:42
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
