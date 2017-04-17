import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)


window.demo = new Vue({
    el: '#demo1',

    data: {
        csvdata: ''
    },

    computed: {
        labels () {
            return this.getRow(0)
        },

        values () {
            return this.getRow(1)
        }
    },

    methods: {

        getRow (i) {
            let lines = this.csvdata.split('\n')
            if (lines.length > 1) {
                return lines[i].split(',')
            }
            return []   
        },

        clear: function () {
            this.csvdata = ''
        }
    }
})