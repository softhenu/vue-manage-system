import { graphic } from 'echarts/core';
export function makeBarChartOptions(xAxis, series){
    let barOpt = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow', // 使用阴影指示器
          },
          formatter: function (params) {
            let result = params[0].name + '<br/>';
            params.forEach(function (item) {
              result += item.seriesName + ': ' + item.value + '<br/>';
            });
            return result;
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: xAxis, 
          axisLabel: {
            fontSize: 14, // 设置X轴字体大小
            color: '#333' // 设置X轴字体颜色
        }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            fontSize: 14, // 设置Y轴字体大小
            color: '#333' // 设置Y轴字体颜色
        }
        },
        grid: {
          top: '2%',
          left: '2%',
          right: '3%',
          bottom: '20%', // 增加底部间距以容纳标签
          containLabel: true,
        },
        color: ['#009688', '#f44336'],
        series: [
        ],
      };
    for(let item of series){
        barOpt.series.push(
            {
                type: 'bar',
                data: item.data,
                itemStyle: {
                  color: new graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: 'rgba(0, 150, 136,0.8)' },
                    { offset: 1, color: 'rgba(0, 150, 136,0.2)' },
                  ]),
                },
                name: item.name, // 设置系列名称
                barWidth: '40%' // 调整宽度，可以是百分比或具体数值
              },
        )
    }
    return barOpt
}