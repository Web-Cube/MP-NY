<template lang="pug">
	.item-annoucement
		.item-annoucement__row
			.item-annoucement__column.item-annoucement__column_left
				form-checkbox.item-annoucement__checkbox
				NuxtLink.item-annoucement__preview(:to="to")
					img.object-fit(:src="require(`~/assets/img/${preview}`)" v-if="preview")
				.item-annoucement__info
					.item-annoucement__name
						.item-annoucement__title.h4 {{name}}
					.item-annoucement__distance.color-gray.h6 {{distance}}
					.item-annoucement__date.color-gray.h6 {{date}}
					.item-annoucement__nav.flex
						button-medium.item-annoucement__nav-btn(icon="chatBorder") Chat
						button-medium.item-annoucement__nav-btn(icon="closeBig" white) Deactivate
			.item-annoucement__column.item-annoucement__column_right
				.item-annoucement__price $ {{ numberWithSpaces(price) }}
				part-statistic.item-annoucement__statistic(:statistics="statistics" light)
				.item-annoucement__bottom.flex.flex_justify
					.item-annoucement__bottom-column
						button-medium.item-annoucement__bottom-btn(icon="chart") Statistics
					.item-annoucement__bottom-column.flex
						button-medium.item-annoucement__bottom-btn(icon="zipper" blue) Sale faster
						button-medium.item-annoucement__more(icon="dots" border square)
</template>

<script>
import {numberWithSpaces} from '~/assets/js/functions';
export default{
	props: {
		name: {
			type: String,
			default: "Объектив SLR Magic. Sony E. 25mm f1.4 Sony E. 25mm f1.4"
		},
		city: {
			type: String,
			default: "New Your"
		},
		distance: {
			type: String,
			default: "2 km near you"
		},
		date: {
			type: String,
			default: "11.12.2022 - 13.12.2022"
		},
		price: {
			type: Number,
			default: 228
		},
		status: {
			type: String,
			default: ""
		},
		phoneNumber: {
			type: String,
			default: "+ 1 376 266 5353"
		},
		to: {
			type: String,
			default: "#"
		},
		preview: {
			type: String,
			default: "item-card__img1.jpg"
		},
		statistics: {
			type: Array,
			default: () => ([
				{
					icon: 'favorites',
					name: 'Favorites',
					number: '20'
				},
				{
					icon: 'view',
					name: 'Views',
					number: '2.1 К'
				},
				{
					icon: 'call',
					name: 'Calls',
					number: '9'
				}
			])
		},
	},
	data(){
		return {
			phone: false,
			numberWithSpaces
		}		
	},
	methods: {
		showPhone() {
			this.phone = true;
		},
	}
}
</script>

<style lang="scss">
.item-annoucement{
	position: relative;
	&__row {
		display: flex;
		justify-content: space-between;
		@include items (2, 15);
	}
	&__column {
		&_left {
			display: flex;
		}
		&_right {
			max-width: 600rem;
		}

		@include small-desktop {
			&_left {
				width: calc( 60% - 30rem );
			}
			&_right {
				width: calc( 40% - 30rem );
			}
		}
	}

	&__preview {
		position: relative;
		overflow: hidden;
		width: 226rem;
		height: 172rem;
		border-radius: 10rem;
		margin-right: 20rem;
		flex-shrink: 0;
	}
	&__info {
		padding-top: 8rem;
		width: 100%;
	}

	&__name {
		position: relative;
		height: 24rem;
	}

	&__title {
		font-family: 'Gilroy';
		font-weight: 600;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	&__distance {
		margin-top: 15rem;
	}
	&__date {
		margin-top: 10rem;
	}

	&__nav {
		margin-top: 35rem;
		&-btn {
			&:not(:last-child) {
				margin-right: 20rem;
				padding: 0 15rem;
			}
		}
	}

	&__price {
		padding-top: 3rem;
		font-size: 24rem;
		line-height: 1;
		text-align: right;
		font-weight: 600;
		letter-spacing: 0.01em;
	}

	&__statistic {
		margin-top: 20rem;
	}

	&__bottom {
		margin-top: 30rem;
	}

	&__more {
		margin-left: 6rem;
	}
}
</style>