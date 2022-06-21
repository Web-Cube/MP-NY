<template lang="pug">
	b-modal(
		id="modal-panel" 
		size="users" 
		modal-class="modal-panel" 
		body-class="modal-panel__body" 
		header-class="modal-panel__header"
		footer-class="modal-panel__footer"
		centered
	)
	
		template(#modal-header='{ close }')
			button-close.modal__close(@click.native='close()')
		h3.modal-panel__title.h3 {{ title }}
			.modal-panel__list
				.modal-panel__item
					button-border.modal-panel__btn(icon="zipper" blue BigIcon) Sale faster
				.modal-panel__item
					button-border.modal-panel__btn(icon="chatBorder" BigIcon gray) Chat
				.modal-panel__item
					button-border.modal-panel__btn(icon="cross" BigIcon gray) Deactivate
		template(#modal-footer='{ close }')
			button-border.modal-panel__cancel(gray @click.native='close()') Cancel

</template>
<script>
export default{
	props: {
		title: {
			type: String,
			default: 'Select an action'
		},
	}
}
</script>
<style lang="scss">
.modal-panel {
	padding: 0;
	.modal-content {
		padding: 25rem 15rem;
	}
	.modal__close {
		width: 34rem;
		height: 34rem;
	}

	&__title {
		font-weight: 600;
	}
	&__footer {
		padding: 0;
		border: 0;
		margin-top: 45rem;
	}

	&__btn {
		justify-content: flex-start;
		width: 100%;
	}

	&__list {
		margin-top: 23rem;
	}
	&__item {
		&:not(:first-child) {
			margin-top: 10rem;
		}
	}
	&__cancel {
		width: 100%;
	}
}
</style>