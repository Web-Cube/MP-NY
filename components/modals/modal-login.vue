<template lang="pug">
	b-modal(
		id="modal-login" 
		size="login-size" 
		modal-class="modal-login" 
		body-class="modal-login__body" 
		header-class="modal-login__header"
		footer-class="modal-login__footer"
		centered 
	)
	
		template(#modal-header='{ close }')
			button-close.modal__close(@click.native='close()')
		h3.modal-login__title.h3 {{ title }}
		form.modal-login__form(action="/registration")
			.modal-login__field
				form-input.modal-login__input(placeholder="Enter the login" name="email")
			.modal-login__field
				form-input.modal-login__input(placeholder="Enter the password" name="password" type="password")
				NuxtLink.modal-login__link.color-blue(to="/recovery") Forgot password?
			button-primary.modal-login__btn.modal-login__btn_login(blue) Login
		.modal-login__with
			.modal-login__with-text.p Login with
			.modal-login__with-buttons.flex
				button-primary.modal-login__with-btn(border icon="facebook") Facebook
				button-primary.modal-login__with-btn(border icon="gmail") Gmail
		template(#modal-footer='{ close }')
			button-primary.modal-login__btn.modal-login__btn_reg(light to="/registration") Registration


</template>

<script>
export default{
	props: {
		title: {
			type: String,
			default: 'Sign in'
		},
	}
}
</script>

<style lang="scss">
.modal-login {

	@include large-mobile {
		padding-left: 15px!important;
		.modal-content {
			padding-bottom: 40rem;
			border-radius: 15rem;
		}
		.modal-form {
			align-items: center;
		}
		.modal-dialog {
			align-items: center;
		}
	}

	&__title {
		text-align: center;
	}

	&__form {
		margin-top: 30rem;
	}

	&__field {
		&:not(:first-child) {
			margin-top: 20rem;
		}
	}

	&__link {
		line-height: .8;
		display: inline-flex;
		margin-top: 10rem;
		font-weight: 600;
	}

	&__btn {
		width: 100%;
		&_login {
			margin-top: 30rem;
		}
	}

	&__with {
		margin-top: 50rem;
		text-align: center;
		&-text {
			line-height: .8;
		}
		&-buttons {
			padding-top: 20rem;
			@include items(2, 5);
		}
	}

	&__footer {
		margin-top: 30rem;
		padding-top: 34rem;
	}

}
</style>