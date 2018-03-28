/**
 * Created by THINK on 2017/9/15.
 */
import {Line} from 'vue-chartjs'
export default {
  extends: Line,
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
  watch: {
    options () {
      //避免数据发生错乱混淆
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
      this.renderChart(this.chartData, this.options);
    },
    chartData () {
      //避免数据发生错乱混淆
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
      this.renderChart(this.chartData, this.options);
    }
  }
}
