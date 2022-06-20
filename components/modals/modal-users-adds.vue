<template lang="pug">
	b-modal(
		id="users-adds" 
		size="users" 
		modal-class="users-adds" 
		body-class="users-adds__body" 
		header-class="users-adds__header"
		footer-class="users-adds__footer"
		centered 
		:hide-footer="true"
	)
	
		template(#modal-header='{ close }')
			button-close.modal__close(@click.native='close()')
		module-user-info(
			name="Antony Watson"
			about="Registered mart 2022"
			avatar="user-avatar.jpg"
			verified
			vertical
		)

		.users-adds__title.h3 {{title}}

		.users-adds__nav.flex
			module-tag.users-adds__nav-btn(
				v-for="(tag, i) in tags"
				:key="i"
				:text="tag.text"
				:counter="tag.counter"
				:to="tag.to"
				:active="tag.active"
				button
			)
		.users-adds__container.css-scrollbar
			.users-adds__list.flex
				item-card.users-adds__item(
					v-for="(item, i) in catalog" 
					:key="i"
					:name="item.name"
					:city="item.city"
					:distance="item.distance"
					:date="item.date"
					:phoneNumber="item.phoneNumber"
					:price="item.price"
					:gallery="item.gallery"
					:status="item.status"
					:to="item.to"
				)
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Users adds'
		},
		tags: {
			type: Array,
			default: () => ([
				{
					text: 'Active',
					counter: 9,
					active: true,
					to: '#'
				},
				{
					text: 'Non active',
					counter: 5,
					to: '#'
				}
			])
		},
	},
	data(){
		return{
			catalog: [
				{
					name: 'Объектив SLR Magic. Sony E. 25mm f1.4 2',
					city: 'New Your',
					distance: '2 km near you',
					date: '4 days ago',
					price: 22228,
					phoneNumber: '+ 1 376 266 5353',
					status: 'VIP',
					gallery: [
						'item-card__img1.jpg',
						'item-card__img2.jpg',
						'item-card__img3.jpg',
						'item-card__img4.jpg',
						'item-card__img5.jpg'
					]
				},
				{
					name: 'Объектив SLR Magic. Sony E. 25mm f1.2',
					city: 'New Your',
					distance: '3 km near you',
					date: '5 days ago',
					price: 128,
					phoneNumber: '+ 1 379 266 5353',
					status: 'VIP',
					gallery: [
						'item-card__img2.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img3.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img4.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img5.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img1.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img2.jpg',
					]
				},
				{
					status: 'VIP',
					gallery: [
						'item-card__img3.jpg',
					]
				},
				{
					gallery: [
						'item-card__img4.jpg',
					]
				},
				{
					gallery: [
						'item-card__img5.jpg',
					]
				},
				{
					gallery: [
						'item-card__img4.jpg',
					]
				},
				{
					gallery: [
						'item-card__img5.jpg',
					]
				},
				{
					gallery: [
						'item-card__img1.jpg',
					]
				},
				{
					gallery: [
						'item-card__img2.jpg',
					]
				},
				{
					gallery: [
						'item-card__img3.jpg',
					]
				},
				{
					gallery: [
						'item-card__img4.jpg',
					]
				},
			],
		}
	}
}
</script>

<style lang="scss">
.users-adds{
	.modal-content {
		overflow: hidden;
	}

	.modal-dialog.modal-users {
	 	transform: none;
	}

	@include large-mobile {
		padding: 0!important;
		.modal-dialog.modal-users {
		 	transform: translate(0, 30rem);
		}
		&.show .modal-dialog.modal-users {
			transform: none;
		}
		.modal-content {
			padding: 30rem 15rem 0 15rem;

		}
	}
	&__title {
		margin-top: 30rem;
	}

	&__nav {
		margin-top: 30rem;
		border-bottom: 1px solid $light-gray;
		&-btn {
			padding: 0 28rem 10rem 28rem;
			margin-bottom: -1px;
			border-bottom: 2px solid transparent;
			&.is-active {
				border-color: $default;
			}
		}

		@include large-mobile {
			margin-top: 20rem;
			&-btn {
				padding: 0 16rem 10rem 16rem;
			}
		}
	}

	&__container {
		margin-top: 20rem;
		margin-right: -40rem;
		margin-left: -30rem;
		padding-left: 30rem;
		padding-right: 38rem;
		max-height: 70vh;
		overflow-x: hidden;
		overflow-y: auto;

		@include small-tablet {
			padding-right: 20rem;
			margin-right: -22rem;
		}

		@include large-mobile {
			margin-top: 20rem;
			padding-bottom: 30rem;
			max-height: 60vh;
		}
	}

	&__list {
		@include items(3, 10);

		@include large-mobile {
			@include items(2, 5);
			margin-top: -20rem;
		}
	}

	&__item {
		margin-top: 30rem;

		@include large-mobile {
			margin-top: 20rem;
		}
	}
}
</style>