<template>
  <div id="welcome">

    <img src="../assets/logo.png">

    <h1>{{ msg }}</h1>

    <router-link to="/dataview" tag="button" class="button-green">Graph my data</router-link>
  
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: 'Hello BreizhCamp !'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
  color: #3b8070;
}

.button-green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  background-color: transparent;
  font-size: x-large;
}

.button-green:hover {
  color: #fff;
  background-color: #3b8070;
}
</style>
