<template>
<Keynote>

  <PhotoTitleSlide id="title"
    photo="src/assets/logo.png" 
    title="Vue.js, même un dev Java peut en faire !" 
    animation="slide-in-right">
    #BreizhCamp2017 #VueJS #TODOTrouverUnTitreMoinsNaze
  </PhotoTitleSlide>

  <AuthorSlide
    photo="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
    name="Bruno Bonnin"
    animation="slide-in-right">
    Full stack developer, Dashboard maker, Data engineer @MyScript
  </AuthorSlide>

  <Slide animation="slide-in-right" class="no-padding">
    <md-layout md-gutter>
      <md-layout md-flex="25" class="big-area">
        <div class="big-area-title">
          <h1>v-on</h1>
        </div>
      </md-layout>
      <md-layout>
        <pre v-highlightjs><code class="xml">
{{ vOn }}
        </code></pre>
      </md-layout>
    </md-layout>
  </Slide>

  <Slide animation="slide-in-right" class="no-padding">
    <md-layout md-gutter>
      <md-layout md-flex="25" class="big-area">
        <div class="big-area-title">
          <h1>{...}</h1>
        </div>
      </md-layout>
      <md-layout></md-layout>
    </md-layout>
  </Slide>

  <Slide animation="slide-in-right">
    <h1 class="title">Un peu de code...</h1>
    <md-layout md-gutter>
      <md-layout>
        <pre v-highlightjs><code class="javascript">
var confdata = {
  name: 'BreizhCamp'
}
        </code></pre>
      </md-layout>
      <md-layout></md-layout>
      <md-layout></md-layout>
    </md-layout>
  </Slide>

  <Slide>
    <h1 class="title">Un peu de code...</h1>
    <md-layout md-gutter>
      <md-layout>
        <pre v-highlightjs><code class="javascript">
var confdata = {
  name: 'BreizhCamp'
}
        </code></pre>
      </md-layout>
      <md-layout>
        <pre v-highlightjs><code class="xml">
{{t}}
        </code></pre>
      </md-layout>
      <md-layout></md-layout>
    </md-layout>
    Bonjour {{ confdata.name }} !
    <form v-on:submit.prevent="onSubmitCommand">
      <input v-model="command" class="form-control">
    </form>
  </Slide>

  <Slide>
    <h1 class="title">Un peu de code...</h1>
    <md-layout md-gutter>
      <md-layout>
        <pre v-highlightjs><code class="javascript">
var confdata = {
  name: 'BreizhCamp'
}
        </code></pre>
      </md-layout>
      <md-layout>
        <pre v-highlightjs><code class="javascript">
const s = new Date().toString()
        </code></pre>
      </md-layout>
      <md-layout>
        <pre v-highlightjs><code class="javascript">
const s = new Date().toString()
        </code></pre>
      </md-layout>
    </md-layout>
  </Slide>

  <PhotoTitleSlide photo="src/assets/charts.png" title="Bruno Bonnin" vertical
                   animation="slide-in-right">
    Full stack developer, Dashboard maker, Data engineer @MyScript
  </PhotoTitleSlide>
  <PhotoTitleSlide photo="https://unsplash.it/1200/800?random=3" title="A vertical photo" vertical left
                   animation="slide-in-right">
    There is a random unsplash photo on left.
  </PhotoTitleSlide>
  <PhotoSlide photo="https://unsplash.it/1200/800?random=4" animation="slide-in-right"/>
  <TitleSlide title="Slide In - Right" animation="slide-in-right" class="top-left">
    <md-layout md-gutter>
      <md-layout>d</md-layout>
      <md-layout>f</md-layout>
      <md-layout>g</md-layout>
    </md-layout>
  </TitleSlide>
  <TitleSlide title="Slide In - Bottom" animation="slide-in-bottom" class="bottom-right">
    Text in Bottom Right
  </TitleSlide>
  <TitleSlide title="Slide In - Left" animation="slide-in-left" class="top-right">
    Text in Top Right
  </TitleSlide>
  <TitleSlide title="Rotate In" animation="rotate-in" class="bottom-left">
    Text in Bottom Left
  </TitleSlide>
  <TitleSlide title="Fade In" animation="fade-in" class="center-right">
    Text in Center Right
  </TitleSlide>
  <TitleSlide title="Fade Out" animation="fade-out" class="center-left">
    Text in Center Left
  </TitleSlide>
  <TitleSlide title="Flip" subtitle="Be expressive with Vue.js" animation="flip">
    In center! <br>
    (by default) <br>
    Be expressive with Vue.js
  </TitleSlide>
  <Slide animation="flip" class="no-margin">
    <iframe width="100%" height="100%" src="//jsfiddle.net/znck/phetsvbz/embedded/" allowfullscreen="allowfullscreen"
            frameborder="0"></iframe>
  </Slide>
</Keynote>
</template>

<script>
/* eslint-disable */
import { vOn } from './examples'

var confdata = {
  name: 'BreizhCamp'
}

console.log(vOn)

export default {
  name: 'Slides',

  data () {
    return {
      t: '<div id="app">\n    Bonjour {{ name }} !\n</div>',
      command: '',
      confdata,
      vOn
    }
  },

  methods: {
    onSubmitCommand () {
      eval(this.command); //eslint-disable-line
    }
  }
}
</script>

<style lang="css">
.big-area-title {
  display: table;
  width: 100%;
  height: 100%;
  text-align: center;
}
.big-area-title>h1 {
  display: table-cell;
  vertical-align: middle;
  color: white;
  font-size: 5rem;
}
.big-area {
  background: rgba(65, 184, 131, 0.53);
}
.no-padding {
  padding: 0;
}
.title {
  color: #41b883;
}
#title>img {
  flex-grow: 0;
}
@import "../node_modules/vue-keynote/dist/vue-keynote.css";
</style>
