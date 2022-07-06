<template lang="pug">
	.profile-box
		module-user-info(
			:avatar="avatar"
			:name="name" 
			:about="about" 
			big 
			edit
		)
		.profile-box__img
			img(:src="require(`~/assets/img/${img}`)")
</template>

<script>
export default {
	props: {
		img: {
			type: String,
			default: "settings__img.svg"
		},
		avatar: {
			type: String,
			default: "User3.jpg"
		},
		name: {
			type: String,
			default: "Alexandr Bairamov"
		},
		about: {
			type: String,
			default: "New Your, Rochester "
		},
	},
}
</script>

<style lang="scss">
.profile-box{
	border: 1px solid $light-gray;
	padding: 38rem 20rem 0 20rem;
	border-radius: 20rem;
	overflow: hidden;

	@include large-tablet {
		padding: 30rem;
	}

	@include large-mobile {
		padding: 15rem;
	}

	&__img {
		width: 310%;
		margin-left: -70%;
		margin-bottom: -3px;
		margin-top: 47rem;

		@include large-tablet {
			display: none;
		}
	}
}
</style>