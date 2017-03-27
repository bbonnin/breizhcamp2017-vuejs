const vOn = `<h3> Talk: {{ title }} </h3>
<button v-on:click="like"> J'aime </button> 

<script>
new Vue({
  data: {

     title: "BeerScript, le langage pour l'apéro"
  },

  methods: {
      like (event) { ... }
  }
})
</script>`

module.exports = { vOn }
