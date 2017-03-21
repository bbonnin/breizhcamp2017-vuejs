<template>
	<div>
		<h1>Pie Chart</h1>
		<textarea v-model="csvdata"></textarea>
		<table>
			<tr>
				<th v-for="label in labels">{{ label }}</th>
			</tr>
			<tr>
				<td v-for="value in values">{{ value }}</td>
			</tr>
		</table>
		<pie-chart v-bind:values="values" v-bind:labels="labels"></pie-chart>
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
			let lines = this.csvdata.split('\n')
			return lines[0].split(',')
		},

		values () {
			let lines = this.csvdata.split('\n')
			if (lines.length > 1) {
				return lines[1].split(',')
			}
			return []
		}
	}
}
</script>

<style type="text/css">
	
</style>