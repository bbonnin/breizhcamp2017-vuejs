<template>
	<div class="svg-container">
		<svg viewBox="-1 -1 2 2" style="transform: rotate(-90deg)" class="svg-content" preserveAspectRatio="xMinYMin meet">
			<path v-for="path in paths" v-bind:d="path.d" v-bind:fill="path.color">
				<title>{{ path.label }} : {{ path.value }}</title>
			</path>
		</svg>
	</div>
</template>

<script type="text/javascript">

const colors = [ '#ddfee4', '#28cc9e', '#196b69', '#132f2b' ]

export default {
	name: 'piechart',

	props: [ 'values', 'labels' ],

	computed: {
		paths () {
			const paths = []
			const total = this.values.reduce((v1, v2) => parseFloat(v1) + parseFloat(v2), 0)
			let cumulativePercent = 0
			
			this.values.forEach((value, idx) => {
				const percent = value / total
				console.log(value, percent, total)
				const [startX, startY] = this.getCoordinatesForPercent(cumulativePercent)
				cumulativePercent += percent
				const [endX, endY] = this.getCoordinatesForPercent(cumulativePercent)
				const largeArcFlag = percent > .5 ? 1 : 0

				const pathData = [
					`M ${startX} ${startY}`, // Move
					`A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
					`L 0 0`, // Line
				].join(' ')

				paths.push({ d: pathData, color: colors[idx % colors.length], value: value, label: this.labels[idx] })
			})

			return paths
		}
	},

	methods: {
		getCoordinatesForPercent (percent) {
			const x = Math.cos(2 * Math.PI * percent)
			const y = Math.sin(2 * Math.PI * percent)
			return [x, y]
		}
	}
}
</script>

<style type="text/css">
.svg-container {
	/*height: 200px;*/
	display: inline-block;
	position: relative;
	width: 100%;
	padding-bottom: 100%;
	vertical-align: middle;
	overflow: hidden;
}
.svg-content {
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
}
</style>