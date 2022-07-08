<template lang="pug">
	section-registration(title="Welcome Alexandr! Let`s create your&nbsp;profile")
		.registration-form__desc.p.color-gray
			| Let others get know you better! You can do&nbsp;these later

		module-add-avatar.registration-form__add-avatar(title="Add an avatar")
			| Add your photo for answers, comments and reviews

		.registration-form__field
				label.registration-form__label.p.b Are you here?
				form-input(value="Los Angeles")
					.input__edit.p.color-blue Edit

		form-checkbox.registration-form__checkbox I agree with rules of this system

		template(v-slot:bottom)
			.registration-form__buttons.flex.flex_justify
				button-primary.registration-form__btn(blue) Next
				button-primary.registration-form__btn(gray) Skip


</template>

<script>
export default {
	layout: 'default_small',
}
</script>
