<template lang="pug">
	.single-sidebar
		button-action.single-sidebar__favorite(
			gray
			to="#"
		)

		h2.single-sidebar__title.h2 {{ title }}
		.single-sidebar__price.h2 $ {{ numberWithSpaces(cost) }}

		button-primary.single-sidebar__button.single-sidebar__button_number(
			icon="phone"
			blue
		) Show number
		button-primary.single-sidebar__button.single-sidebar__button_message(
			icon="chatting"
			light
		) Message
		
		client-only
			module-user-info.single-sidebar__user(
				:avatar="user.avatar"
				:name="user.name"
				:about="user.about"
				:verified="user.verified"

				v-if="$screen.lt"
			)

			button-border.single-sidebar__other(icon="other-posts" v-if="$screen.lt" v-b-modal.users-adds) 9 User Ads

		.single-sidebar__bottom.flex
			.single-sidebar__label.single-sidebar__label_date.color-gray 2 days ago
			.single-sidebar__label.single-sidebar__label_id.color-gray ID 312300120312
			module-single-views.single-sidebar__views 2120
</template>

<script>
import { numberWithSpaces } from "~/assets/js/functions"
export default {
	props: {
		title: {
			type: String
		},
		cost: {
			type: Number
		},

		user: {
			type: Object,
			default: () => ({})
		}
	},

	data(){
		return {
			numberWithSpaces
		}
	}
}
</script>

<style lang="scss">
.single-sidebar{
	padding: 30rem 30rem 15rem;
	border: 1px solid $light-gray;
	border-radius: 20rem;

	@include large-tablet {
		padding: 20rem 20rem 10rem;
	}

	@include small-tablet {
		padding: 40rem 0;
		border: none;
		border-radius: 0;
	}

	&__bottom{
		margin-top: 30rem;

		@include large-desktop {
			margin-top: 25rem;
		}

		@include small-tablet {
			align-items: flex-start;
		}

		@include large-mobile {
			margin-top: 10rem;
		}
	}

	&__favorite{
		position: absolute;
		right: 10rem;
		top: 10rem;

		@include large-mobile {
			top: 15rem;
			right: -8rem;
		}

	}

	&__views{
		margin-left: auto;
		margin-bottom: 15rem;
		@include large-tablet {
			margin-bottom: 10rem;
		}
	}

	&__label{
		font-weight: 600;
		margin-right: 30rem;
		margin-bottom: 15rem;

		@include large-tablet {
			margin-right: 15rem;
			margin-bottom: 10rem;
		}

		@include small-tablet {
			margin-right: 30rem;
		}

		@include large-mobile {
			font-size: 14rem;
			line-height: 1em;
		}
	}

	&__title{
		margin-bottom: 30rem;
		padding-right: 80rem;

		@include large-desktop {
			padding-right: 20rem;
			margin-bottom: 20rem;
		}

		@include large-mobile {
			padding-right: 100rem;
			margin-bottom: 10rem;
		}
	}

	&__user{
		margin-top: 62rem;

		@include large-desktop {
			margin-top: 25rem;
		}
	}

	&__price{
		color: $blue;
		margin-bottom: 30rem;
		@include large-desktop {
			margin-bottom: 20rem;
		}

		@include large-mobile {
			line-height: 1em;
		}
	}

	&__other{
		margin-top: 30rem;
	}

	&__button{
		width: 100%;
		margin-bottom: 10rem;

		@include large-mobile {
			height: 60rem;
		}
	}
}
</style>