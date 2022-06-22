<template lang="pug">
	section.favorites-ad
		h1.favorites-ad__title.h3 {{title}}
		.favorites-ad__nav.flex.flex_justify
			.favorites-ad__nav-list.flex
				module-tag.favorites-ad__nav-btn(
					v-for="(tag, i) in tags"
					:key="i"
					:text="tag.text"
					:counter="tag.counter"
					:to="tag.to"
					:active="tag.active"
					button
				)
			.favorites-ad__buttons.flex
				.favorites-ad__sort
					form-select.favorites-ad__select(label="Sort by" :items="['Newest', 'Popular']" value="Newest" noBorder)
				module-grid-switch.favorites-ad__grid-switch

		.favorites-ad__list.flex
			item-card.favorites-ad__item(
				v-for="(item, i) in list" 
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
				favorite="true"
			)
		button-primary.favorites-ad__more(gray) Show more
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Favorites ad"
		},
		tags: {
			type: Array,
			default: () => ([
				{
					text: 'Favorites',
					active: true,
					to: '#'
				},
				{
					text: 'Recently viewed',
					to: '#'
				}
			])
		},
		list: {
			type: Array,
			default: () => ([
			])
		},
	}
}
</script>

<style lang="scss">
.favorites-ad{
	position: relative;
	height: 100%;
	padding-top: 50rem;
	padding-bottom: 30rem;

	@include small-tablet {
		padding-bottom: 80rem;
	}

	@include large-mobile {
		padding-top: 18rem;
		padding-bottom: 68rem;
	}

	&__title {
		font-family: 'Atyp Display';
		font-weight: 500;
	}

	&__nav {
		margin-top: 30rem;
		border-bottom: 1px solid $light-gray;
		&-btn {
			margin-bottom: -1px;
		}

		@include large-mobile {
			margin: 10rem -15rem 0 -15rem;
			padding: 0 15rem;
			&-list {
				display: none;
			}
		}
	}

	&__buttons {
		@include large-mobile {
			min-height: 50rem;
			width: 100%;
			align-items: center;
			justify-content: space-between;
		}
	}

	&__sort {
		.select {
			&__label {
				color: #9A9A9A;
			}
		}
	}
	&__grid-switch {
		margin-left: 30rem;
		padding-top: 3rem;
	}

	&__list {
		@include items(5, 8);
		padding-top: 28rem;

		@include large-tablet {
			@include items(3, 8);
		}

		@include large-mobile {
			@include items(2, 5);
			padding-top: 8rem;
		}
	}

	&__item {
		margin-top: 12rem;
	}

	&__more {
		min-width: 190rem;
		margin-top: 40rem;
		@include large-mobile {
			width: 100%;
			margin-top: 30rem;
		}
	}
}
</style>