<template>
    <v-app id="demo1">
      <v-toolbar class="cyan darken-4 white--text">
        <v-toolbar-title>A chart in 2 seconds!</v-toolbar-title>
      </v-toolbar>
      <main>
      <v-content>
        <v-container fluid>
          <v-row>
            <v-col sm6 key="1">
              <v-card>
                <v-card-title>Your data</v-card-title>
                <v-card-text>
                  <v-card-row height="100px">
                    <!-- ************************************************ --> 
                      
                    <textarea class="user-data" v-model="csvdata"></textarea>
                      
                    <!-- ************************************************ -->
                  </v-card-row>
                </v-card-text>
                <v-card-row actions>
                  <!-- ******************************************************* -->

                  <v-btn v-on:click.native="clear" class="blue-grey">Clear</v-btn>

                  <!-- ******************************************************* -->                  
                </v-card-row>
              </v-card>
            </v-col>

            <v-col sm6 key="2">
              <v-card>
                <v-card-title>Data table</v-card-title>
                <v-card-text>
                  <v-card-row height="203px" class="data-table">
                    <!-- ******************************************************* -->

                    <div v-if="labels.length > 0">

                      <table>
                        <tr><th v-for="label in labels">{{ label }}</th></tr>
                        <tr><td v-for="value in values">{{ value }}</td></tr>
                      </table>
                      
                    </div>

                    <div v-else class="no-data text-xs-center">No data</div>

                    <!-- ******************************************************* -->
                  </v-card-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col sm12 key="3">
              <v-card>
                <v-card-title>Nice chart !</v-card-title>
                <v-card-text>
                  <v-card-row height="203px">
                    <!-- ******************************************************* -->

                    <pie-chart :labels="labels" :values="values" height="250" width="250"></pie-chart>

                    <!-- ******************************************************* -->
                  </v-card-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
      </main>
    </v-app>
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
        },

        clear: function () {
            this.csvdata = ''
        }
    }
}
</script>

<style scoped>
.content>.container {
  padding: 1rem 3rem;
}

.no-data {
  width: 100%;
}

.data-table {
  display: table;
  width: 100%;
}

.user-data {
  width: 100%;
  height: 100%;
}

th {
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>