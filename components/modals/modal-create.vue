<template lang="pug">
	b-modal(
		id="modal-create" 
		size="create-size" 
		modal-class="modal-create" 
		body-class="modal-create__body" 
		header-class="modal-create__header"
		footer-class="modal-create__footer"
		centered
	)
	
		template(#modal-header='{ close }')
			button-close.modal__close(@click.native='close()')
		.modal-create__steps
			//.modal-create__step
				.modal-create__head.flex.flex_vertical.flex_justify
					.modal-create__title.h4 Choose category
					button-action.modal-create__head-btn(icon="search" text="Search" small gray @click.native="showSearch" v-if="search != true")
				transition(name="fade")
					form.modal-create__search(action="/#search" v-if="search")
						.modal-create__search-field
							form-input.modal-create__search-input(placeholder="Search" ref="InputSearch")
							button-action.modal-create__search-btn(icon="search" small gray)
							button-close.modal-create__search-clear(type="button" white)
						.modal-create__search-cancel(@click="closeSearch") Cancel
				.modal-create__categories
					.modal-create__categories-list.flex
						.modal-create__categories-item(v-for="(category, i) in categories" :key="i")
							button-category.modal-create__categories-btn(
								:img="category.img"
								:to="category.to"
								:text="category.text"
								:desc="category.desc"
								:border="category.border"
							)
			//.modal-create__step
				.modal-create__title.h4 Choose another category
				.modal-create__breadcrumbs.color-gray.p
					span.modal-create__breadcrumbs-item(v-for="(item, i) in breadcrumbs" :key="i")
						| {{item}}
				.modal-create__nav.flex.flex_vertical.flex_justify
					button-back.modal-create__back(small gray) Back
					transition(name="fade")
						button-action.modal-create__nav-btn(icon="search" text="Search" small gray @click.native="showSearch" v-if="search != true")
				transition(name="fade")
					form.modal-create__search(action="/#search" v-if="search")
						.modal-create__search-field
							form-input.modal-create__search-input(placeholder="Search" ref="InputSearch")
							button-action.modal-create__search-btn(icon="search" small gray)
							button-close.modal-create__search-clear(type="button" white)
						.modal-create__search-cancel(@click="closeSearch") Cancel
				.modal-create__categories
					.modal-create__categories-list.flex
						.modal-create__categories-item(v-for="(category, i) in categories2" :key="i")
							button-category.modal-create__categories-btn(
								:img="category.img"
								:to="category.to"
								:text="category.text"
								:desc="category.desc"
								:border="category.border"
							)
			.modal-create__step
				part-form-create.modal-create__form(:breadcrumbs="breadcrumbs2")

		template(#modal-footer='{ close }')
			button-close.modal__close.modal__close_footer(@click.native='close()' v-if="form")
			.modal-create__footer-row.flex.flex_justify(v-if="form")
				button-primary.modal-create__cancel.modal-create__cancel_desktop(border @click.native='close()') Cancel
				.modal-create__footer-buttons.flex
					button-primary.modal-create__footer-btn(gray @click.native='close()' ) Save as Draft
					button-primary.modal-create__footer-btn(blue) Publish now
			button-primary.modal-create__cancel(border @click.native='close()' v-else) Cancel
</template>

<script>
export default{
	data(){
		return {
			search: false,
			form: true,
			categories: [
				{
					img: "category__img1.png",
					text: 'Electronics',
					desc: 'Headphones'
				},
				{
					img: "category__img2.png",
					text: 'Appliances',
					desc: 'Headphones'
				},
				{
					img: "category__img3.png",
					text: 'Computers',
					desc: 'Headphones'
				},
				{
					img: "category__img4.png",
					text: 'Automotive products',
					desc: 'Headphones'
				},
				{
					text: 'Other category',
					border: true
				},
			],
			categories2: [
				{
					img: "category__img1.png",
					text: 'Electronics',
				},
				{
					img: "category__img2.png",
					text: 'Appliances',
				},
				{
					img: "category__img3.png",
					text: 'Computers',
				},
				{
					img: "category__img4.png",
					text: 'Automotive products',
				},
				{
					img: "category__img1.png",
					text: 'Electronics',
				},
				{
					img: "category__img2.png",
					text: 'Appliances',
				},
				{
					img: "category__img3.png",
					text: 'Computers',
				},
				{
					img: "category__img4.png",
					text: 'Automotive products',
				},
				{
					text: 'Electronics',
				},
				{
					text: 'Appliances',
				},
				{
					text: 'Computers',
				},
				{
					text: 'Automotive products',
				},
			],
			breadcrumbs: [
				'Creat Advertise',
				'Electronics'
			],
			breadcrumbs2: [
				'Creat Advertise',
				'Electronics',
				'Headphones'
			],
		}
	},
	methods:{
		/*toggle() {

			if ( this.$refs.item.classList.contains('isActive') ) {
				this.$refs.item.classList.remove('isActive');
			} else {

				var matches = document.querySelectorAll('.item-faq');
	       		for(var i = 0; i < matches.length; i++) {
	       			matches[i].classList.remove('isActive');
	      		}

	      		this.$refs.item.classList.add('isActive');

			}
		},*/
		showSearch(){
			this.search = true
		},
		closeSearch(){
			this.search = false
		}
	}
}
</script>

<style lang="scss">
.modal-create {
	.modal-content {
		padding: 60rem 50rem;
	}

	.modal__close {
		right: 15rem;
		top: 15rem;
		&_footer {
			display: none;
		}
	}

	@include small-tablet {
		.modal-content {
			padding: 50rem 30rem;
		}
	}

	@include large-mobile {
		padding:0!important;
		.modal-content {
			border-radius: 10rem 10rem 0 0;
			padding: 25rem 15rem;
		}
		.modal__close {
			display: none;
			&_footer {
				display: flex;
			}
		}
	}

	&__title {
		@include large-mobile {
			font-size: 20rem;
		}
	}
	

	&__head {
		@include small-tablet {
			&-btn {
				margin-right: 20rem;
			}
		}
		@include large-mobile {
			display: block;
			&-btn {
				margin-right: 0;
				margin-top: 24rem;
			}
		}
	}

	&__search {
		display: flex;
		align-items: center;
		margin-top: 20rem;
		&-field {
			width: 100%;
			position: relative;
		}
		&-clear {
			position: absolute;
			right: 10rem;
			top: 50%;
			margin-top: -17rem;
		}
		&-btn {
			position: absolute;
			left: 19rem;
			top: 50%;
			margin-top: -8rem;
		}
		&-input {
			.input__field {
				padding-left: 49rem;
				padding-right: 40rem;
			}
		}
		&-cancel {
			padding: 15rem;
			margin-left: 10rem;
			cursor: pointer;
		}

		@include large-mobile {
			&-clear {
				margin-top: -14rem;
			}
			&-input {
				.input__field {
					padding-left: 39rem;
				}
			}
			&-btn {
				width: 14rem;
				height: 14rem;
				margin-top: -7rem;
				left: 15rem;
			}
			&-cancel {
				padding: 15rem 0;
				margin-left: 15rem;
				color: $blue;
			}
		}
	}

	&__categories {
		margin-top: 20rem;
		&-list {
			@include items(3, 5);
		}

		@include small-tablet {
			overflow-x: hidden;
			overflow-y: auto;
			max-height: 70vh;
			margin-right: -15rem;
			padding-right: 13rem;
			padding-bottom: 5rem;
			&::-webkit-scrollbar {
				width: 2px;
			}

			/* Track */
			&::-webkit-scrollbar-track {
				background: #E6E6E6;
			}

			/* Handle */
			&::-webkit-scrollbar-thumb {
				background: #B6B6B6;
			}
			&-list {
				@include items(2, 5);
			}
		}

		@include large-mobile {
			max-height: calc( 80vh - 200rem );
			margin-right: -8rem;
			padding-right: 6rem;
			margin-top: 10rem;
			&-list {
				margin: 0;
			}
			&-item {
				width: 100%;
				margin: 0;
				border-bottom: 1px solid $light-gray;
			}
			&-btn {
				padding: 10rem 0;
			}
		}
	}

	&__footer {
		padding: 0;
		border: 0;
		&-row {
			width: 100%;
			margin-top: 70rem;
		}
		&-btn {
			min-width: 156rem;
			&:not(:last-child) {
				margin-right: 24rem;
			}
		}

		@include large-mobile {
			&-row {
				margin-top: 30rem;
			}
			&-buttons {
				@include items(2, 5);
				width: calc( 100% + 10rem );
			}
			&-btn {
				min-width: inherit;
				&:not(:last-child) {
					margin-right: 5rem;
				}
			}
		}
	}

	&__cancel {
		display: none;
		margin-top: 27rem;
		color: $gray;

		&_desktop {
			display: inline-flex;
			margin-top: 0;
			min-width: 160rem;
		}

		@include large-mobile {
			display: flex;
			width: 100%;
			&_desktop {
				display: none;
			}
		}
	}
	&__breadcrumbs {
		margin-top: 15rem;
		line-height: 1;
		&-item {
			&:not(:first-child) {
				&:before {
					content: ' / '
				}
			}
		}
	}

	&__nav {
		margin-top: 20rem;

		@include large-mobile {
			&-btn {
				display: none;
			}
		}
	}

	&__form {
		margin: -10rem 0;

		@include small-tablet {
			margin: 0;
		}

		@include large-mobile {
			max-height: calc( 85vh - 100rem );
			overflow-x: hidden;
			overflow-y: auto;
			margin-right: -9rem;
			padding-right: 7rem;
			padding-top: 5rem;
			&::-webkit-scrollbar {
				width: 2px;
			}

			/* Track */
			&::-webkit-scrollbar-track {
				background: #E6E6E6;
			}

			/* Handle */
			&::-webkit-scrollbar-thumb {
				background: #B6B6B6;
			}
		}
	}
}
</style>