<template lang="pug">
	section.section-support
		.wrap
			.section-support__preview
				.section-support__preview-img
					img.object-fit(:src="require(`~/assets/img/${img}`)")
				h1.section-support__title.h1 {{title}}
			part-faq.section-support__faq(:faqList="faqList")
			part-need-help.section-support__help(title="Didn't find the answer for your question?" img="need-help__img2.svg")
				| You can ask us here
			
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Support page"
		},
		img: {
			type: String,
			default: "support__img.jpg"
		},
	},
	data(){
		return{
			faqList: [
				{
					question: 'How it works?',
					answer: `
						<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo</p>
					`
				},
				{
					question: 'How is electricity saved?',
					answer: `
						<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo</p>
					`

					
				},
				{
					question: 'Beware of scrammers?',
					answer: `
						<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo</p>
					`
					
				},
				{
					question: 'Safety?',
					answer: `
						<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo</p>
					`
					
				},
				{
					question: 'How it works?',
					answer: `
						<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo</p>
					`
					
				},
				{
					question: 'How is electricity saved?',
					answer: `
						<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo</p>
					`
					
				},
			]
		}
	}
}
</script>

<style lang="scss">
.section-support{
	padding-bottom: 120rem;
	@include large-mobile {
		padding-bottom: 50rem;
	}
	&__preview {
		position: relative;
		&-img {
			position: relative;
			overflow: hidden;
			padding-top: div(500, 1400) * 100%;
			border-radius: 20rem;
		}
		@include large-mobile {
			margin-left: -15rem;
			margin-right: -15rem;
			&-img {
				padding-top: div(220, 375) * 100%;
			}
		}
	}
	&__title {
		position: absolute;
		left: 50rem;
		top: 50rem;
		color: #fff;
		font-weight: 500;

		@include small-tablet {
			left: 40rem;
			top: 40rem;
		}

		@include large-mobile {
			left: 20rem;
			top: 20rem;
			font-size: 26rem;
			line-height: 1;
			font-weight: 500;
		}
	}
	&__help {
		margin-top: 120rem;
		@include large-mobile {
			margin-top: 20rem;
		}
	}

	&__faq {
		margin-top: 96rem;

		@include large-mobile {
			margin-top: 50rem;
		}
	}
}
</style>