<template lang="pug">
	section.section-annoucements
		part-analytics-box.section-annoucements__analytics(:slides="slides")
		part-annoucements.section-annoucements__section
		modal-statistic
			
</template>

<script>
export default {
	
	data(){
		return{
			slides: [
				{
					title: 'Hello, Sergey!',
					desc: 'Your analytics on all ads',
					img: 'analytics-box__img.svg',
					statistics: [
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
					]
				},
				{
					title: 'Hello, Misha!',
					desc: 'Your analytics on all ads 2',
					img: 'analytics-box__img.svg',
					statistics: [
						{
							icon: 'favorites',
							name: 'Favorites',
							number: '23'
						},
						{
							icon: 'view',
							name: 'Views',
							number: '4.1 К'
						},
						{
							icon: 'call',
							name: 'Calls',
							number: '19'
						}
					]
				}
			]
		}
	}
}
</script>

<style lang="scss">
.section-annoucements{
	&__analytics {
		margin-top: 20rem;

		@include large-mobile {
			margin-top: 15rem;
		}
	}

	&__section {
		margin-top: 60rem;

		@include large-mobile {
			margin-top: 35rem;
		}
	}
}
</style>