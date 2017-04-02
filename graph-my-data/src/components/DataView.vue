<template>
    <div>
        <h1>Data View</h1>
        <textarea v-model="csvdata"></textarea>
        <table>
            <tr>
                <th v-for="label in labels">{{ label }}</th>
            </tr>
            <tr>
                <td v-for="value in values">{{ value }}</td>
            </tr>
        </table>
        <pie-chart width="200" height="200" v-bind:values="values" v-bind:labels="labels"></pie-chart>
    </div>
</template>

<script type="text/javascript">

import PieChart from './PieChart.vue'

export default {
    name: 'dataview',

    data () {
        return {
            csvdata: ''
        }
    },

    components: {
        'pie-chart': PieChart
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
        }
    }
}
</script>

<style type="text/css">
    
</style>