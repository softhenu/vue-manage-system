import { graphic } from 'echarts/core';
export const barOptions = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    color: ['#009688', '#f44336'],
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
        },
        {
            data: [180, 230, 190, 120, 110, 230, 235],
            type: 'bar',
        },
    ],
};

export const lineOptions = {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    color: ['#009688', '#f44336'],
    series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310],
        },
    ],
};

export const pieOptions = {
    title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};

export const wordOptions = {
    series: [
        {
            type: 'wordCloud',
            rotationRange: [0, 0],
            autoSize: {
                enable: true,
                minSize: 14,
            },
            textStyle: {
                fontFamily: '微软雅黑,sans-serif',
                color: function () {
                    return (
                        'rgb(' +
                        [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                        ].join(',') +
                        ')'
                    );
                },
            },
            data: [
                {
                    name: 'Vue',
                    value: 10000,
                },
                {
                    name: 'React',
                    value: 9000,
                },
                {
                    name: '图表',
                    value: 4000,
                },
                {
                    name: '产品',
                    value: 7000,
                },
                {
                    name: 'vue-manage-system',
                    value: 2000,
                },
                {
                    name: 'element-plus',
                    value: 6000,
                },
                {
                    name: '管理系统',
                    value: 5000,
                },
                {
                    name: '前端',
                    value: 4000,
                },
                {
                    name: '测试',
                    value: 3000,
                },
                {
                    name: '后端',
                    value: 8000,
                },
                {
                    name: '软件开发',
                    value: 6000,
                },
                {
                    name: '程序员',
                    value: 4000,
                },
            ],
        },
    ],
};

export const ringOptions = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '5%',
        left: 'center',
    },

    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
            ],
        },
    ],
};

export const dashOpt1 = {
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
    data: [
      'A县',
      'B县',
      'C县',
      'D县',
      'E县',
      'F县'
    ],
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
    {
      type: 'bar',
      data: [333, 320,330, 350,660,254],
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0, 150, 136,0.8)' },
          { offset: 1, color: 'rgba(0, 150, 136,0.2)' },
        ]),
      },
      name: '得分', // 设置系列名称
      barWidth: '50%' // 调整宽度，可以是百分比或具体数值
    },
  ],
};

export const dashOpt11 = {
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
    data: [
      '电网运维',
      '综合协调',
      '营销管理',
      '基础保障',
    ], 
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
    {
      type: 'bar',
      data: [333, 320,330, 350],
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0, 150, 136,0.8)' },
          { offset: 1, color: 'rgba(0, 150, 136,0.2)' },
        ]),
      },
      name: '得分', // 设置系列名称
      barWidth: '40%' // 调整宽度，可以是百分比或具体数值
    },
  ],
};

export const dashOpt111 = {
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
    data: [
      '配电业务管理指数',
      '中压线路线损率'
    ],
  },
  yAxis: {
    type: 'value',
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
    {
      type: 'bar',
      data: [60, 40],
      itemStyle: {
        color: new graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0, 150, 136,0.8)' },
          { offset: 1, color: 'rgba(0, 150, 136,0.2)' },
        ]),
      },
      name: '得分', // 设置系列名称
      barWidth: '20%' // 调整宽度，可以是百分比或具体数值
    },
  ],
};
export const dashOpt2 = {
    legend: {
        bottom: '1%',
        left: 'center',
    },
    color: ['#3f51b5', '#009688', '#f44336', '#00bcd4', '#1ABC9C'],
    series: [
        {
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            data: [
                { value: 200, name: '优秀指标个数' },
                { value: 100, name: '合格指标个数' },
                { value: 100, name: '不合格指标个数' }
            ],
        },
    ],
};

export const dashOpt3 = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    // data: [ '得分','排名']
    data: [ '排名']
  },
  xAxis: {
    type: 'category',
    data: ['电网运维', '综合协调', '营销管理', '基础保障'],
    axisLabel: {
      fontSize: 14, // 设置X轴字体大小
      color: '#333' // 设置X轴字体颜色
  }
  },
  yAxis: [
    {
      type: 'value',
      name: '得分',
      position: 'left',
      min: 0,
      max: 0,
      axisLabel: {
        fontSize: 14, // 设置Y轴字体大小
        color: '#333' // 设置Y轴字体颜色
    }
    },
    {
      type: 'value',
      name: '排名',
      position: 'right',
      min: 0,
      max: 10,
      axisLabel: {
        fontSize: 14, // 设置Y轴字体大小
        color: '#333' // 设置Y轴字体颜色
    }
    }
  ],
  series: [
    {
      name: '得分',
      type: 'bar',
      data: [0, 0, 0, 0],
      itemStyle: {
        color: '#60C9FF'
      }
    },
    {
      name: '排名',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 3, 4, 2],
      itemStyle: {
        color: '#FFB140'
      }
    }
  ]
};

export const dashOpt333 = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    // data: [ '得分','排名']
    data: [ '得分']
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月','三月','四月']
  },
  yAxis: [
    {
      type: 'value',
      name: '得分',
      position: 'left',
      min: 0,
      max: 150
    }
  ],
  series: [
    {
      name: '得分',
      type: 'bar',
      data: [90, 100, 80, 80,],
      itemStyle: {
        color: '#60C9FF'
      },
      barWidth: '40%'
    }
  ]
};


export const dashOpt33 = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    // data: [ '得分','排名']
    data: [ '排名']
  },
  xAxis: {
    type: 'category',
    data: ['A县', 'B县', 'C县', 'D县','E县','F县'],
    axisLabel: {
      fontSize: 14, // 设置X轴字体大小
      color: '#333' // 设置X轴字体颜色
  }
  },
  yAxis: [
    {
      type: 'value',
      name: '得分',
      position: 'left',
      min: 0,
      max: 0,
      axisLabel: {
        fontSize: 14, // 设置Y轴字体大小
        color: '#333' // 设置Y轴字体颜色
    }
    },
    {
      type: 'value',
      name: '排名',
      position: 'right',
      min: 0,
      max: 10,
      axisLabel: {
        fontSize: 14, // 设置Y轴字体大小
        color: '#333' // 设置Y轴字体颜色
    }
    }
  ],
  series: [
    {
      name: '得分',
      type: 'bar',
      data: [0, 0, 0, 0,0,0],
      itemStyle: {
        color: '#60C9FF'
      }
    },
    {
      name: '排名',
      type: 'line',
      yAxisIndex: 1,
      data: [1, 3, 4, 2,6,5],
      itemStyle: {
        color: '#FFB140'
      },
      smooth: true,
      label: {
        show: true,
        position: 'bottom'
      }
    }
  ]
};

// export const dashOpt3 = {
//     tooltip: {
//       trigger: 'item',
//       triggerOn: 'mousemove'
//     },
//     series: [
//       {
//         type: 'tree',
//         data: [
//           {
//             name: '指标体系',
//             children: [
//               {
//                 name: '电网运维',
//                 children: [
//                   {
//                     name: '配电业务管理指数',
//                     children: [
//                       { name: '配电线路非计划停运率' },
//                       { name: '公用配变停运率' },
//                       { name: '低电压台区占比' },
//                       { name: '低电压工单数' },
//                       {
//                         name: '检修工单驱动业务成效',
//                         children: [
//                           { name: '主动抢修按时完成率' },
//                           { name: '主动检修工单完成率' }
//                         ]
//                       },
//                       { name: '营配调异常稽查工单治理完成率' },
//                       {
//                         name: '配网透明化指数',
//                         children: [
//                           { name: '配电自动化终端在线率' },
//                           { name: '配电自动化终端遥信动作正确率' },
//                           { name: '低压用户运行信息接入率' }
//                         ]
//                       }
//                     ]
//                   },
//                   {
//                     name: '中压线路线损率',
//                     children: [
//                       { name: '10(6)千伏分压线损率' },
//                       {
//                         name: '10(6)千伏分线线损率',
//                         children: [
//                           { name: '10(6)千伏统计线损率' },
//                           { name: '10(6)千伏理论线损率' },
//                           { name: '10(6)千伏线路模型打包率' }
//                         ]
//                       }
//                     ]
//                   }
//                 ]
//               },
//               {
//                 name: '综合协调',
//                 children: [
//                   {
//                     name: '综合协调机制运转成效',
//                     children: [
//                       { name: '月度综合协调会议成效' },
//                       { name: '供电所问题整改率' }
//                     ]
//                   }
//                 ]
//               },
//               {
//                 name: '营销管理',
//                 children: [
//                   {
//                     name: '电费管理',
//                     children: [
//                       {
//                         name: '电费回收率',
//                         children: [
//                           { name: '当期电费发行到账率' }
//                         ]
//                       },
//                       {
//                         name: '电价数字化普查质效',
//                         children: [
//                           { name: '电价系统普查质效' },
//                           { name: '电价现场普查质效' },
//                           { name: '用户解析地址治理质效' }
//                         ]
//                       }
//                     ]
//                   },
//                   {
//                     name: '低压线损、计量资产管理',
//                     children: [
//                       { name: '台区线损率' },
//                       { name: '月重损台区治理率' },
//                       { name: '计量箱数字化管理规范率' },
//                       { name: '计量异常消缺率' },
//                       { name: '智能周转柜应用率' },
//                       { name: '拆回计量装置回收率' },
//                       { name: '低压分布式光伏调控成功率' }
//                     ]
//                   },
//                   {
//                     name: '供电、业扩服务指数',
//                     children: [
//                       { name: '业扩报装成效' },
//                       { name: '供电服务投诉管控成效' },
//                       { name: '百户红线问题客户诉求率' }
//                     ]
//                   }
//                 ]
//               },
//               {
//                 name: '基础保障',
//                 children: [
//                   {
//                     name: '数字化供电所建设指数',
//                     children: [
//                       {
//                         name: '自主工单及晨会管理规范率',
//                         children: [
//                           { name: '外勤人员自主工单派发率' },
//                           { name: '自主工单合格率' },
//                           { name: '供电所数字化晨会规范率' }
//                         ]
//                       },
//                       { name: '供电所档案信息准确率' },
//                       { name: '租赁设备资产档案准确率' },
//                       { name: '豫电学堂应用成效' },
//                       { name: '服务行为监督管控设备应用率' },
//                       {
//                         name: '营销现场作业平台应用率',
//                         children: [
//                           { name: '安全管控执行率' },
//                           { name: '安全管理规范率' }
//                         ]
//                       },
//                       { name: '绩效应用率' },
//                       {
//                         name: '供电所自主稽查完成率',
//                         children: [
//                           { name: '上级稽查工单处理完成率' },
//                           { name: '所级自主稽查完成率' }
//                         ]
//                       }
//                     ]
//                   },
//                   {
//                     name: '用电信息采集数据应用率',
//                     children: [
//                       { name: '采集成功率' }
//                     ]
//                   }
//                 ]
//               }
//             ]
//           }
//         ],
//         top: '1%',
//         left: '7%',
//         bottom: '1%',
//         right: '20%',
//         symbolSize: 7,
//         label: {
//           position: 'left',
//           verticalAlign: 'middle',
//           align: 'right',
//           fontSize: 9
//         },
//         leaves: {
//           label: {
//             position: 'right',
//             verticalAlign: 'middle',
//             align: 'left'
//           }
//         },
//         expandAndCollapse: true,
//         initialTreeDepth: 2,
//         animationDuration: 550,
//         animationDurationUpdate: 750
//       }
//     ]
//   };
  
export const mapOptions = {
    tooltip: {
        trigger: 'item',
    },
    geo: {
        map: 'china',
        roam: false,
        emphasis: {
            label: {
                show: false,
            },
        },
    },
    visualMap: {
        show: false,
        min: 0,
        max: 100,
        realtime: false,
        calculable: false,
        inRange: {
            color: ['#d2e0f5', '#71A9FF'],
        },
    },
    series: [
        {
            geoIndex: 0,
            name: '地域分布',
            type: 'map',
            coordinateSystem: 'geo',
            map: 'china',
            data: [
                { name: '北京', value: 100 },
                { name: '上海', value: 100 },
                { name: '广东', value: 100 },
                { name: '浙江', value: 90 },
                { name: '江西', value: 80 },
                { name: '山东', value: 70 },
                { name: '广西', value: 60 },
                { name: '河南', value: 50 },
                { name: '河南', value: 40 },
                { name: '青海', value: 70 },
                { name: '河南', value: 30 },
                { name: '黑龙江', value: 20 },
                { name: '新疆', value: 20 },
                { name: '云南', value: 20 },
                { name: '甘肃', value: 20 },
            ],
        },
    ],
};
