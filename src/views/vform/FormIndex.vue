<template>
  <div ref="myChart" :style="{ width: '1600px', height: '600px' }"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  setup() {
    const myChart = ref<HTMLElement>(); //也可以用const myChart = ref<any>();
    //console.log(myChart);
    const myCharts = ref<any>();
    setTimeout(() => {
      // 绘制图表
      myCharts.value = echarts.init(myChart.value!);
      myCharts.value.setOption({
        title: { text: "降水量" },
        tooltip: {},
        xAxis: {
          data: ["6-3", "6-4", "6-5", "6-6", "6-7", "6-8","6-9", "6-10", "6-11", "6-12", "6-13", "6-14","6-15", "6-16", "6-17", "6-18", "6-19", "6-20","6-21", "6-22", "6-23", "6-24", "6-25", "6-26",
          "6-17", "6-28", "6-29", "6-30", "7-1", "7-2","7-3", "7-4", "7-5", "7-6", "7-7", "7-8","7-9", "7-10", "7-11", "7-12", "7-13", "7-14","7-15", "7-16", "7-17", "7-18", "7-19", "7-20"],
        },
        yAxis: {},
        series: [
          {
            name: "降水量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20,3, 14, 6, 10, 60, 24,44, 10, 56, 13, 40, 50,60, 20, 36, 40, 30, 20,5, 20, 36, 10, 10, 20,3, 14, 6, 10, 60, 24,44, 10, 56, 13, 40, 50,60, 20, 36, 40, 30, 20],
          },
        ],
      });
    }, 10);
    return {
      myChart,
    };
  },
});
</script>
