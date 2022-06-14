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
	@include large-tablet {
		.modal-content {
			padding-left: 30rem;
			padding-right: 30rem;
		}
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