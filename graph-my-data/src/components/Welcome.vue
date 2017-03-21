<template>
	<div>
		<h1>{{ msg }}</h1>

		<router-link to="/dataview" tag="button">Graph my data</router-link>
	</div>
</template>

<script>
export default {
	name: 'welcome',
	data () {
	    return {
      		msg: 'Welcome to Your Vue.js App'
    	}
    }
}
</script>

<style scoped>
</style>