<template lang="pug">
	b-modal(
		id="modal-card" 
		size="card-size" 
		modal-class="modal-card" 
		body-class="modal-card__body" 
		header-class="modal-card__header"
		footer-class="modal-card__footer"
		centered 
		:hide-footer="true"
	)
	
		template(#modal-header='{ close }')
			button-close.modal__close(@click.native='close()')
		swiper-nav.modal-card__nav(light)
		.modal-card__row.flex.flex_justify
			.modal-card__column.modal-card__column_left
			
				part-single-gallery.modal-card__gallery

			.modal-card__column.modal-card__column_right

				part-single-sidebar.modal-card__info(
					:title="SINGLE_INFO.title"
					:cost="SINGLE_INFO.cost"
					:user="SINGLE_INFO.user"
					moreDetails
				)

</template>

<script>
export default {
	data(){
		const SINGLE_INFO = {
			title: "Объектив SLR Magic. Sony E. 25mm f1.4",
			cost: 2800,
			user: {
				avatar: "user-avatar.jpg",
				name: "Antony Watson",
				about: "Registered mart 2022",
				verified: true,
			}
		}

		return {
			SINGLE_INFO
		}
	}
}
</script>

<style lang="scss">
.modal-card {
	.modal-dialog.modal-card-size {
	 	transform: none;
	}
	.modal-content {
		position: relative;
	}
	@include large-tablet {
		.modal-content {
			padding-left: 30rem;
			padding-right: 30rem;
		}
		.modal-dialog.modal-card-size {
		 	transform: translate(0, 30rem);
		}
		&.show .modal-dialog.modal-card-size {
			transform: none;
		}
	}
	&__nav {
		.swiper-button {
			position: absolute;
			top: 50%;
			margin-top: -25rem;
			z-index: 100;
			&.swiper-button-prev, &-prev {
				right: 100%;
				margin-right: 20rem;
			}
			&-next {
				left: 100%;
				margin-left: 20rem;
			}
		}

		@include large-tablet {
			.swiper-button {
				&.swiper-button-prev, &-prev {
					margin-right: -40rem;
				}
				&-next {
					margin-left: -40rem;
				}
			}
		}
	}
	&__body {
		position: static;
	}
	&__row {
		flex-wrap: nowrap;
	}
	&__column {
		&_left {
			width: calc( 100% - 400rem );
			padding-right: 20rem;
		}
		&_right {
			width: 400rem;
			min-width: 400rem;
			position: relative;
		}

		@include large-desktop {
			&_right {
				width: 350rem;
				min-width: 350rem;
			}
			&_left {
				width: calc( 100% - 350rem );
			}
		}
	}

	&__info {
		height: 100%;
	}
	.single-sidebar {
		&__user {
			margin-top: 30rem;
		}
	}
	.single-gallery {
		&__preview {
			padding-top: 61%;
		}
	}

	@include large-desktop {
		.single-gallery {
			&__preview {
				padding-top: 72%;
			}
		}
	}
}
</style>