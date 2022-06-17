<template lang="pug">
	.annoucements
		h3.annoucements__inner.h3 {{title}}
		.annoucements__nav.flex.flex_justify
			.annoucements__nav-list.flex
				module-tag.annoucements__nav-btn(
					v-for="(tag, i) in tags"
					:key="i"
					:text="tag.text"
					:counter="tag.counter"
					:to="tag.to"
					:active="tag.active"
					button
				)
			.annoucements__sort
				form-select.annoucements__select(label="Sort by" :items="['Newest', 'Popular']" value="Newest" noBorder)
		.annoucements__container
			form-checkbox.annoucements__select-all
				span.color-gray.h6 Select all
			.annoucements__list
				item-annoucement.annoucements__item
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "My advertises"
		},
		desc: {
			type: String,
			default: "Your analytics on all ads"
		},
		img: {
			type: String,
			default: "analytics-box__img.svg"
		},
		tags: {
			type: Array,
			default: () => ([
				{
					text: 'Active',
					active: true,
					to: '#'
				},
				{
					text: 'Non active',
					to: '#'
				},
				{
					text: 'Draft',
					to: '#'
				}
			])
		},
	},
}
</script>

<style lang="scss">
.annoucements {
	&__nav {
		margin-top: 40rem;
		border-bottom: 1px solid $light-gray;
		&-btn {
			padding: 0 28rem 10rem 28rem;
			margin-bottom: -1px;
			border-bottom: 2px solid transparent;
			color: #9A9A9A;
			&.is-active {
				border-color: $default;
			}
		}

		@include large-mobile {
			margin-top: 15rem;
			border: 1px solid $light-gray;
			border-radius: 10rem;
			padding: 2px;
			&-list {
				@include items(3, 1);
				width: 100%;
			}
			&-btn {
				height: 38rem;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				padding: 0 10rem;
				border: 0;
				border-radius: 8rem;
				&.is-active {
					background: #F4F3F4;
				}
			}
		}
	}

	&__container {
		margin-top: 40rem;
	}

	&__item {
		padding: 25rem 15rem 25rem 0;
		border-bottom: 1px solid $light-gray;
	}

	&__sort {
		font-weight: 600;
		font-size: 17rem;
		color: $default;
		.select {
			&__value {
				color: $default;
			}
			&__arrow {
				margin-left: 6rem;
			}
			&__label {
				color: #9A9A9A;
			}
		}

		@include large-mobile {
			display: none;
		}
	}
}
</style>