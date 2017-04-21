<template>
    <div class="chart-container">
        
        <canvas v-show="labels.length > 0" 
                v-bind:id="id" 
        ></canvas>

        <div v-show="labels.length === 0" class="text-xs-center">No data</div>

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

    watch: {
        labels: 'valuesUpdated',
        values: 'valuesUpdated' 
    },

    methods: {
        valuesUpdated (n,o) {
            this.chart.data.labels = this.labels
            this.chart.data.datasets[0].data = this.values;
            this.chart.update()
        }

    },

    mounted () {
        this.chart = new Chart(this.id, {
            type: 'doughnut',
            data: { labels: this.labels, datasets: [ { data: this.values, backgroundColor: colors } ] },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { animateScale:true },
                legend: { position: 'right' }
            }
        });
    }
}
</script>

<style scoped>
.chart-container {
    width: 100%;
    height: 100%;
}
</style>