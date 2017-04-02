<template>

    <div :style="{ 'max-width': width + 'px', 'max-height': height + 'px' }">
        
        <canvas v-show="labels.length > 0" 
                v-bind:id="id" 
                v-bind:width="width" v-bind:height="height"></canvas>

        <div v-show="labels.length === 0">No data</div>

    </div>
</template>

<script type="text/javascript">
    
import Chart from 'chart.js'

const colors = [ "#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB" ]

export default {

    name: 'pie-chart',

    data () {
        return {
            chart: null
        }
    },

    props: {
        id: { default: 'piechart-canvas' },
        width: { type: [ String, Number ], required: true },
        height: { type: [ String, Number ], required: true },

        labels: { type: Array, required: true },
        values: { type: Array, required: true }
    },

    /*watch: {
        labels: 
    },*/

    mounted () {
        this.chart = new Chart(this.id, {
            type: 'doughnut',
            data: { labels: this.labels, datasets: [ { data: this.values, backgroundColor: colors } ] },
            options: {
                animation: { animateScale:true }
            }
        });
    }
}

</script>
