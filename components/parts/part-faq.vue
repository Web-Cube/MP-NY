<template lang="pug">
	.faq
		h2.faq__title.h2.h2_big {{ title }}
		.faq__row
			.faq__column.faq__column_left
				.faq__nav
					.faq__nav-item(v-for="(item, i) in faqList" :key="i")
						button-faq.faq__nav-btn(
							:class="{isActive:number == i}"
							@click.native="tabList(i)"
						) {{ item.question }}
			.faq__column.faq__column_right
				.faq__list
					item-faq.faq__item(
						v-for="(item, i) in faqList"
						:key="i"
						:title="item.question"
						:content="item.answer"
						:class="{isActive:number == i}"
						@click.native="tabList(i)"
					)
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Answers & Questions'
		},
		faqList: {
			type: Array,
			default: () => ([
			]),
		},
	},
	data(){
		return {
			number: 0,
			i: 0
		}
	},
	methods:{
		tabList(i) {
			this.number = i;
			console.log(this.number);
		},
	}
}
</script>

<style lang="scss">
.faq{
	&__row {
		display: flex;
		margin-top: 44rem;

		@include large-mobile {
			margin-top: 10rem;
		}
	}

	&__column {
		&_left {
			width: 225rem;
			min-width: 225rem;
		}
		&_right {
			margin-left: 80rem;
			width: 100%;
		}

		@include large-tablet {
			&_right {
				margin-left: 40rem;
			}
		}

		@include large-mobile {
			&_left {
				display: none;
			}
			&_right {
				margin-left: 0;
			}
		}
	}

	&__list {
		margin-top: -30rem;

		@include large-mobile {
			margin-top: 0;
		}
	}
}
</style>