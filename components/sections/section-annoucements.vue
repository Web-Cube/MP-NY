<template lang="pug">
	section.section-annoucements
		part-analytics-box.section-annoucements__analytics(:statistics="statistics")
		part-annoucements.section-annoucements__section
			
</template>

<script>
export default {
	
	data(){
		return{
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