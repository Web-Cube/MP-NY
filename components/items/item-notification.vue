<template lang="pug">
	.item-notification(:class="Mods")

		.item-notification__row(v-if="columns")
			.item-notification__column.item-notification__column_left.flex
				.item-notification__cell.item-notification__cell_left
					.item-notification__title.h4(v-html="title") {{title}}
				.item-notification__cell.item-notification__cell_right
					module-date.item-notification__date.hidden {{date}}
					.item-notification__desc.content(v-html="desc" 
						:class="Class" 
					)
					button-link-arrow.item-notification__more(
						more 
						black 
						showText="More detailed" 
						hideText="Roll up" 
						:class="Class"
						@click.native="toggleContent"
					)
			.item-notification__column.item-notification__column_right
				.item-notification__top.flex.flex_right.flex_start
					module-date.item-notification__date {{date}}
				.item-notification__bottom.flex.flex_right
					button-medium.item-notification__btn(blue) Actions
					button-medium.item-notification__btn(gray v-b-modal.modal-notification) Delete
				button-medium.item-notification__actions(icon="dots" border square v-b-modal.modal-notification)
		.item-notification__row(v-else)
			.item-notification__column.item-notification__column_left
				.item-notification__title.h4 {{title}}
				.item-notification__desc {{desc}}
				module-date.item-notification__date {{date}}
			.item-notification__column.item-notification__column_right
				.item-notification__top.flex.flex_right
					button-close.item-notification__close
				.item-notification__bottom.flex.flex_right
					button-medium.item-notification__btn(gray v-b-modal.modal-notification) More detailed
					button-medium.item-notification__btn(blue) Actions
				button-medium.item-notification__dots(
					icon="dotsRotate" 
					borderWhite 
					square 
					v-b-modal.modal-notification
				)


</template>

<script>
export default{
	props: {
		title: {
			type: String,
			default: ""
		},
		desc: {
			type: String,
			default: ""
		},
		date: {
			type: String,
			default: ""
		},
		columns: {
			type: Boolean,
			default: false
		},
		unread: {
			type: Boolean,
			default: false
		},
	},

	data(){
		return {
			active: false
		}
	},

	computed: {
		Mods(){
			return {
				'item-notification_unread': this.unread,
			}
		},
		Class(){
			return {
				'isActive': this.active,
			}
		}
	},
	methods: {
		toggleContent(){
			this.active = !this.active;
		}
	}
}
</script>

<style lang="scss">
.item-notification{
	padding-left: 52rem;
	position: relative;

	&_unread {
		.item-notification {
			&__title {
				color: $blue;
				&:before {
					content: '';
					display: block;
					position: absolute;
					left: -32rem;
					top: 9rem;
					width: 8rem;
					height: 8rem;
					border-radius: 5px;
					background: $blue;
				}
			}
		}
	}

	@include large-tablet {
		padding-left: 23rem;
		&_unread {
			.item-notification {
				&__title {
					&:before {
						left: -23rem;
					}
				}
			}
		}
	}

	&__row {
		display: flex;
		@include large-mobile {
			flex-wrap: wrap;
		}
	}

	&__column {
		&_left {
			width: 66.66%;
		}
		&_right {
			width: 33.33%;
			display: flex;
			flex-direction: column;
		}

		@include large-tablet {
			&_left {
				width: 75%;
			}
			&_right {
				width: 25%;
			}
		}

		@include large-mobile {
			width: 100%;
		}
	}

	&__top {
		flex: 1 1 auto;
		@include large-mobile {
			display: none;
		}
	}

	&__bottom {
		margin-top: 30rem;
		@include large-mobile {
			display: none;
		}
	}

	&__title {
		position: relative;

		@include large-mobile {
			font-size: 16rem;
			line-height: 1.2;
			width: calc( 100% - 50rem );
		}
	}

	&__desc {
		font-size: 17rem;
		line-height: 1.3;
		color: $gray;
		max-width: 796rem;
		p {
			&:not(:first-child) {
				display: none;
			}
		}
		&.isActive {
			p {
				&:not(:first-child) {
					display: block;
					animation: fadeIn .3s ease-in-out;
				}
			}
		}
		&:not(:first-child) {
			margin-top: 15rem;
		}

		@include large-tablet {
			font-size: 14rem;
		}
	}

	&__date {
		&:not(:first-child) {
			margin-top: 25rem;
		}
		&.hidden {
			display: none;
		}

		@include large-mobile {
			&.hidden {
				display: inline-flex;
			}
		}
	}

	&__btn {
		min-width: 135rem;
		&:not(:last-child) {
			margin-right: 10rem;
		}

		@include large-tablet {
			&:not(:last-child) {
				margin-right: 0;
				margin-bottom: 10rem;
			}
		}
	}
	&__actions {
		position: absolute;
		right: 0;
		top: 30rem;
		display: none;
		@include large-mobile {
			display: inline-flex;
		}
	}
	&__dots {
		position: absolute;
		right: -5rem;
		top: 22rem;
		display: none;
		@include large-mobile {
			display: inline-flex;
		}
	}
	&__cell {
		&_left {
			width: 39%;
			padding-right: 30rem;
		}
		&_right {
			width: 61%;
		}

		@include large-tablet {
			width: 100%;
			&_right {
				margin-top: 15rem;
			}
		}
	}
	&__more {
		margin-top: 20rem;

		@include large-mobile {
			margin-top: 15rem;
		}
	}
}
</style>