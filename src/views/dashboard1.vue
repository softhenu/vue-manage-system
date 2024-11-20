<template>
    <div>
        <el-row :gutter="20" class="mgb20">
            <el-col :span="12">
                <el-card shadow="hover" body-class="card-body">
                    <el-icon class="card-icon bg1">
                        <User />
                    </el-icon>
                    <div class="card-content">
                        <div style="font-size: 30px;">总指标</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover" body-class="card-body">
                    <el-icon class="card-icon bg2">
                        <ChatDotRound />
                    </el-icon>
                    <div class="card-content">
                        <!-- <countup class="card-num color2" :end="168" /> -->
                        <div style="font-size: 30px;">660分</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mgb20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <div class="card-header">
                        <p class="card-header-title">子指标得分情况</p>
                        <!-- <p class="card-header-desc">显示子指标的得分情况</p> -->
                    </div>
                    <v-chart class="chart" :option="barOptions" :update-options="{notMerge: true,}"/>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <div class="card-header">
                        <p class="card-header-title">机构指标体系得分排名</p>
                        <!-- <p class="card-header-desc">显示本机构指标体系得分的历史排名</p> -->
                    </div>
                    <v-chart class="chart" :option="dashOpt3" />
                </el-card>
            </el-col>
        </el-row>

        <p class="card-header-title">模块</p>
        <!-- <button>指标定义显示按钮</button> -->
        <el-row :gutter="20" class="mgb20">
            <el-col :span="24">
                <el-table :data="items" style="width: 100%; font-size: 16px;" :cell-style="getCellStyle" :header-cell-style="{ 'text-align': 'center' }">
                    <el-table-column prop="name" label="指标名称"></el-table-column>
                    <el-table-column prop="total_goal" label="满分"></el-table-column>
                    <el-table-column prop="value" label="得分"></el-table-column>
                    <el-table-column prop="improve_space" label="进步空间"></el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template #default="scope">
                            <el-button link type="primary" size="large" @click="$router.push({path:'/dashboard2', query: {id:scope.row.id}})"style="font-size: 14px;">查看板块详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mgb20">
            <el-col :span="24">
                <el-card shadow="hover">
                    <div class="card-header">
                        <p class="card-header-title">指标得分分布</p>
                        <!-- <p class="card-header-desc">显示各个指标得分的分布情况</p> -->
                    </div>
                    <v-chart class="chart" :option="dashOpt2" />
                </el-card>
            </el-col>
        </el-row>
        <p class="card-header-title">指标得分分析</p>
        <el-row :gutter="20" class="mgb20">
            <el-col :span="24">
                <el-table :data="metric2Score" style="width: 100%; font-size: 14px;" :cell-style="getCellStyle" :header-cell-style="{ 'text-align': 'center' }">
                    <el-table-column prop="title" label="指标名称"></el-table-column>
                    <el-table-column prop="value" label="满分"></el-table-column>
                    <el-table-column prop="score" label="得分"></el-table-column>
                    <el-table-column prop="score_up" label="提升空间"></el-table-column>
                    <el-table-column prop="sa" label="晋升空间排名"></el-table-column>
                    <el-table-column prop="co" label="评语"></el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <el-button link type="primary" size="large" @click="$router.push('/detail-2')">查看指标定义</el-button>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <!-- <el-row :gutter="20" class="mgb20">
            <el-col :span="24">
                <el-card shadow="hover">
                    <div class="card-header">
                        <p class="card-header-title">指标得分分布</p>
                        <p class="card-header-desc">显示各个指标的得分情况</p>
                    </div>
                    <v-chart class="chart" :option="dashOpt2" />
                </el-card>
            </el-col>
        </el-row> -->



        <!-- <el-row :gutter="20">
            <el-col :span="7">
                <el-card shadow="hover" :body-style="{ height: '400px' }">
                    <div class="card-header">
                        <p class="card-header-title">时间线</p>
                        <p class="card-header-desc">最新的销售动态和活动信息</p>
                    </div>
                    <el-timeline>
                        <el-timeline-item v-for="(activity, index) in activities" :key="index" :color="activity.color">
                            <div class="timeline-item">
                                <div>
                                    <p>{{ activity.content }}</p>
                                    <p class="timeline-desc">{{ activity.description }}</p>
                                </div>
                                <div class="timeline-time">{{ activity.timestamp }}</div>
                            </div>
                        </el-timeline-item>
                    </el-timeline>
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card shadow="hover" :body-style="{ height: '400px' }">
                    <div class="card-header">
                        <p class="card-header-title">渠道统计</p>
                        <p class="card-header-desc">最近一个月的订单来源统计</p>
                    </div>
                    <v-chart class="map-chart" :option="mapOptions" />
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card shadow="hover" :body-style="{ height: '400px' }">
                    <div class="card-header">
                        <p class="card-header-title">排行榜</p>
                        <p class="card-header-desc">销售商品的热门榜单Top5</p>
                    </div>
                    <div>
                        <div class="rank-item" v-for="(rank, index) in ranks">
                            <div class="rank-item-avatar">{{ index + 1 }}</div>
                            <div class="rank-item-content">
                                <div class="rank-item-top">
                                    <div class="rank-item-title">{{ rank.title }}</div>
                                    <div class="rank-item-desc">销量：{{ rank.value }}</div>
                                </div>
                                <el-progress :show-text="false" striped :stroke-width="10" :percentage="rank.percent"
                                    :color="rank.color" />
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row> -->

    </div>
</template>

<script setup lang="ts" name="dashboard">
import { ref, onBeforeMount} from 'vue';
import { fetchA02Data, fetchA03Data } from '@/api/index';
// import countup from '@/components/countup.vue';
import { use, registerMap } from 'echarts/core';
import { BarChart, LineChart, PieChart, MapChart, TreeChart } from 'echarts/charts';
import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';
import { dashOpt1, dashOpt2, dashOpt3, mapOptions } from './chart/options';
import { makeBarChartOptions } from '@/views/chart/makeOptions'
import chinaMap from '@/utils/china';
import { getCellStyleWithColIndex } from './table/cell-style';

use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    LineChart,
    PieChart,
    TooltipComponent,
    LegendComponent,
    TitleComponent,
    VisualMapComponent,
    MapChart,
    TreeChart
]);
registerMap('china', chinaMap);

const getCellStyle = getCellStyleWithColIndex(4)
const items = ref([]);
const barOptions = ref();
const metric2Score = ref([])
onBeforeMount(() => {
    fetchA02Data().then((res) => {
        if(res.status == 200){
            items.value = res.data
            let xaxis = []
            let series = []
            for(let item of items.value){
                xaxis.push(item.name)
                series.push(item.value)
            }
            barOptions.value = makeBarChartOptions(xaxis, [{"name": "得分", data: series}])
        }
    })
    fetchA03Data().then((res) => {
        if(res.status == 200){
            metric2Score.value = []
            for(let item of res.data){
                metric2Score.value.push({id: item.id, title: item.name, value: item.total_goal, score: item.value, score_up: item.improve_space, sa: 1, co: '合格'})
            }
        }
    })
})
</script>

<style>
.card-body {
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0;
}
</style>
<style>
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
</style>
<style scoped>
.card-content {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #00796A;
    padding: 0 20px;
}

.card-num {
    font-size: 30px;
}

.card-icon {
    font-size: 50px;
    width: 100px;
    height: 100%;
    text-align: center;
    line-height: 100px;
    color: #00796A;
    padding: 0; /* 确保内边距为 0 */
    box-sizing: border-box; 
}

.bg1 {
    background: #E3EFED;
}

.bg2 {
    background: #E3EFED;
}

.bg3 {
    background: #f25e43;
}

.bg4 {
    background: #e9a745;
}

.color1 {
    color: #2d8cf0;
}

.color2 {
    color: #64d572;
}

.color3 {
    color: #f25e43;
}

.color4 {
    color: #e9a745;
}

.chart {
    width: 100%;
    height: 400px;
}

.card-header {
    padding-left: 10px;
    margin-bottom: 20px;
}

.card-header-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center; /* 添加这一行来使文本居中 */
}

.card-header-desc {
    font-size: 14px;
    color: #999;
}

.timeline-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #000;
}

.timeline-time,
.timeline-desc {
    font-size: 12px;
    color: #787878;
}

.rank-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.rank-item-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f2f2f2;
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
}

.rank-item-content {
    flex: 1;
}

.rank-item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #343434;
    margin-bottom: 10px;
}

.rank-item-desc {
    font-size: 14px;
    color: #999;
}

.map-chart {
    width: 100%;
    height: 350px;
}
.header::after{
	content: "";
	width: 10px;
	height: 24px;
	display: block;
}
</style>
