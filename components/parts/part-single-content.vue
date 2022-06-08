<template lang="pug">
	.single-content
		h3.single-content__heading.h3 Description

		ul.single-content__list.color-gray.flex.flex_vertical.p
			li.single-content__list-item(v-for="(LI, i) in Labels" :key="i")
				| {{ LI.name }}
				b {{ LI.value }}
		
		.single-content__content.content.h4
			p "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
			p Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat vo

		span.single-content__more.blue-link.p Моrе
</template>

<script>
export default {
	data(){
		return {
			Labels: [
				{
					name: "Condition:",
					value: "Used",
				},
				{
					name: "Production:",
					value: "Apple",
				},
			]
		}
	}
}
</script>

<style lang="scss">
.single-content{


	
	&__content{
		line-height: 150%;
		font-weight: 400;
		padding-right: 45rem;
		

		& > * {
			&:not(:last-child){
				margin-bottom: 28rem;
			}
		}

		@include small-tablet {
			padding-right: 0;
		}

		@include large-mobile {
			line-height: 21rem;

			& > * {
				&:not(:last-child){
					margin-bottom: 20rem;
				}
			}
		}
	}

	&__more{
		margin-top: 30rem;

		@include large-mobile {
			margin-top: 20rem;	
		}
	}

	&__heading{
		margin-bottom: 30rem;
	}

	&__list{
		margin-bottom: 15rem;

		&-item{
			display: block;
			margin-right: 30rem;

			margin-bottom: 15rem;
		}

		b{
			color: #212D38;
			margin-left: 10rem;
		}

		@include large-mobile {
			margin-bottom: 10rem;

			&-item{
				margin-bottom: 10rem;
			}
		}
	}
}
</style>