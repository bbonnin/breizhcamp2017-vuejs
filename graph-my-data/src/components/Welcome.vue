<template>
    <div>
        <h1>{{ msg }}</h1>
        
        <router-link to="/dataview" tag="button" class="md-raised">Graph my data</router-link>
    </div>
</template>

<script>
export default {

    name: 'welcome',
    
    data () {
        return {
            msg: 'Welcome to '
        }
    }
}
</script>

<style scoped>
</style>