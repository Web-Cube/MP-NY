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
	}

	&__column {
		&_left {
			width: 225rem;
			min-width: 225rem;
		}
	}

	&__nav {
	}
}
</style>