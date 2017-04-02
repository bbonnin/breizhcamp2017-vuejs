<template>
    <div>
        <h1>{{ msg }}</h1>
<md-button class="md-raised">Default</md-button>
<md-button class="md-raised md-primary">Primary</md-button>
<md-table v-once>
  <md-table-header>
    <md-table-row>
      <md-table-head>Dessert (100g serving)</md-table-head>
      <md-table-head md-numeric>Calories (g)</md-table-head>
      <md-table-head md-numeric>Fat (g)</md-table-head>
      <md-table-head md-numeric>Carbs (g)</md-table-head>
      <md-table-head md-numeric>Protein (g)</md-table-head>
    </md-table-row>
  </md-table-header>

  <md-table-body>
    <md-table-row v-for="(row, index) in 5" :key="index">
      <md-table-cell>Dessert Name</md-table-cell>
      <md-table-cell v-for="(col, index) in 4" :key="index" md-numeric>10</md-table-cell>
    </md-table-row>
  </md-table-body>
</md-table>
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