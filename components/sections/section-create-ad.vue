<template lang="pug">
	section.create-ad
		//.create-ad__step
			.create-ad__inner
				h3.create-ad__title.h3 {{title}}
				.create-ad__desc.p.color-gray.flex.flex_center.flex_vertical
					span Upload images or
					button-primary(light verysmall).create-ad__desc-skip skip
					span this step
				part-add-photo.create-ad__add-photo
			.create-ad__bottom.flex.flex_justify
				.create-ad__bottom-column
					button-primary.create-ad__bottom-btn(border) Cancel
				.create-ad__bottom-column.flex
					button-primary.create-ad__bottom-btn(gray) Skip
					button-primary.create-ad__bottom-btn(blue v-b-modal.modal-create3) Next
		.create-ad__step
			.create-ad__inner
				form.create-ad__form(action="/")
					.create-ad__field
						label.create-ad__label.h4 Name advertise
						form-input(placeholder="Name of advertise")
					part-create-gallery.create-ad__gallery
					.create-ad__tabs
						.create-ad__nav.flex.flex_justify
							.create-ad__nav-list.flex
								module-tag.create-ad__nav-btn(
									v-for="(tag, i) in tags"
									:key="i"
									:text="tag.text"
									:counter="tag.counter"
									:to="tag.to"
									:active="tag.active"
									button
									:class="{isActive:number == i}"
									@click.native="tabList(i)"
								)
						.create-ad__tabs-list
							.create-ad__tab.js-tab.isActive
								.create-ad__field
									form-input(placeholder="$ 0.00")
									form-radio-switch.create-ad__switch Availabale cost
								.create-ad__field
									label.create-ad__label.h4 Decription
									form-input(placeholder="Tell us about the product" textarea)
							.create-ad__tab.js-tab
								.create-ad__field
									form-input(placeholder="For free" disabled)
								.create-ad__field
									label.create-ad__label.h4 Decription
									form-input(placeholder="Tell us about the product" textarea)
							.create-ad__tab.js-tab
								.create-ad__field
									form-input(placeholder="Exchange" disabled)
								.create-ad__field
									label.create-ad__label.h4 Decription
									form-input(placeholder="Tell us about the product" textarea)
			.create-ad__bottom.flex.flex_justify
				.create-ad__bottom-column
					button-primary.create-ad__bottom-btn(border) Cancel
				.create-ad__bottom-column.flex(v-if="$screen.st")
					button-primary.create-ad__bottom-btn Save as draft
					button-primary.create-ad__bottom-btn(blue v-b-modal.modal-create) Next
				.create-ad__bottom-column.flex(v-if="$screen.width < 581")
					button-primary.create-ad__bottom-btn(gray v-if="$screen.width < 581" v-b-modal.modal-question) 
						span.color-gray Draft
					button-primary.create-ad__bottom-btn.create-ad__bottom-btn_create(blue v-b-modal.modal-create) Create

		modal-question
		modal-question2
		modal-create
		modal-create2
		modal-create3
		modal-create4
		modal-tariffs
		modal-thank
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "What do you want to sell?"
		},
	},
	data() {
		return {
			tags: [
				{
					text: 'Cost',
				},
				{
					text: 'For free',
				},
				{
					text: 'Exchange',
				}
			],
			number: 0,
			i: 0
		}
	},
	methods:{
		tabList(i) {
			this.number = i;

			let index = i+1;

			var tabs = document.querySelectorAll('.js-tab');
			for(var j = 0; j < tabs.length; j++) {
				tabs[j].classList.remove('isActive');
			}
			document.querySelector('.js-tab:nth-child(' +index+ ')').classList.add('isActive');
		},
	}
}
</script>

<style lang="scss">
.create-ad{
	position: relative;
	height: 100%;
	padding-top: 50rem;

	@include small-tablet {
		padding-bottom: 53rem;
	}

	@include large-mobile {
		padding-top: 38rem;
		padding-bottom: 48rem;
	}

	&__step {
		position: relative;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	&__inner {
		max-width: 872rem;
		width: 100%;
		margin: 0 auto;
		flex: 1 1 auto;
	}
	&__bottom {
		width: 100%;
		margin-top: 40rem;
		padding: 20rem 0;
		position: sticky;
		z-index: 100;
		bottom: 0;
		background: #fff;
		background: linear-gradient(to top, #fff 0%, #fff 66%, rgba(#fff, 0) 100%);
		&-btn {
			min-width: 160rem;
			&:not(:last-child) {
				margin-right: 15rem;
			}
		}

		@include large-mobile {
			margin-left: -15rem;
			width: calc( 100% + 30rem );
			padding: 10rem 15rem;
			border-top: 1px solid $light-gray;
			margin-top: 30rem;
			&-btn {
				min-width: 86rem;
				padding: 0 20rem;
				height: 40rem;
				&:not(:last-child) {
					margin-right: 5rem;
				}
				&_create {
					min-width: 120rem;
				}
			}
		}
	}
	&__add-photo {
		margin-top: 40rem;

		@include large-mobile {
			margin-top: 30rem;
		}
	}

	&__title {
		text-align: center;

		@include large-mobile {
			font-size: 24rem;
		}
	}
	&__desc {
		margin-top: 15rem;
		&-skip {
			min-width: 90rem;
			margin: 0 10rem;
		}
		@include large-mobile {
			&-skip {
				margin: 0 5rem;
				min-width: inherit;
				height: auto;
				font-style: 14rem;
				color: $gray;
				padding: 0;
				background: none !important;
			}
		}
	}

	&__form {
		@include large-mobile {
			margin-top: -18rem;
		}
	}

	&__field {
		&:not(:first-child) {
			margin-top: 28rem;
		}
	}

	&__label {
		display: block;
		margin-bottom: 14rem;
		font-family: 'Gilroy';
		font-weight: 600;

		@include large-mobile {
			margin-bottom: 10rem;
		}
	}

	&__nav {
		border-bottom: 1px solid $light-gray;
		&-btn {
			margin-bottom: -1px;
			cursor: pointer;
			&.isActive {
				color: $blue;
				border-color: $blue;
			}
		}

		@include large-mobile {
			&-list {
				width: 100%;
			}
			&-btn {
				width: 33.33%;
				font-size: 16rem;
				padding-left: 15rem;
				padding-right: 15rem;
			}
		}
	}

	&__tabs {
		position: relative;
		margin-top: 53rem;
		&-list {
			margin-top: 25rem;
		}
		@include large-mobile {
			margin-top: 20rem;
		}
	}
	&__tab {
		display: none;
		&.isActive {
			display: block;
			animation: fadeIn .3s ease-in-out;
		}
	}
	&__switch {
		position: absolute;
		right: 0;
		top: 0;

		@include large-mobile {
			position: static;
			margin-top: 15rem;
		}
	}

	&__gallery {
		margin-top: 17rem;
	}
}
</style>