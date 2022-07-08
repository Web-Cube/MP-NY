<template lang="pug">
	section-registration(title="Confirm your Email")
		.registration-form__desc.p.color-gray
			| To continue registration, follow the link in the email, we sent it to 
			a(href="mailto:Bari56@mail.ru") Bari56@mail.ru
			| . If you have not received it, then click "Resend after 01:20 or write to 
			a(href="mailto:Help56@mail.ru") Help56@mail.ru

		.registration-form__field
			.registration-form__code
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)
				form-input.registration-form__input.registration-form__input_code(placeholder="_" :maxlength="1" big)

		.registration-form__social
			.registration-form__social-text.p Go to the mail:
			.registration-form__social-list.flex
				button-primary.registration-form__social-btn(gray icon="gmail") Gmail
				button-primary.registration-form__social-btn(gray icon="yahoo") Yahoo!

		template(v-slot:bottom)
			button-primary.registration-form__btn(blue disabled) Resend
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
