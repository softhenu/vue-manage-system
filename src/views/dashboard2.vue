<template>
    <div>
        <el-row :gutter="20" class="mgb20">
            <el-col :span="12">
                <el-card shadow="hover" body-class="card-body">
                    <el-icon class="card-icon bg1">
                        <User />
                    </el-icon>
                    <div class="card-content">
                        <div style="font-size: 30px;">指标名称: {{ moduleName }}</div>
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
                        <div style="font-size: 30px;">100分</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mgb20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <div class="card-header">
                        <p class="card-header-title">子指标得分情况</p>
                        <p class="card-header-desc">显示子指标的得分情况</p>
                    </div>
                    <v-chart class="chart" :option="optionLeftTop" />
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <div class="card-header">
                        <p class="card-header-title">该指标历史得分情况</p>
                        <p class="card-header-desc">显示该指标的历史得分</p>
                    </div>
                    <v-chart class="chart" :option="dashOpt333" />
                </el-card>
            </el-col>
        </el-row>

        <p class="card-header-title">电网运维指标</p>
        <el-row :gutter="20" class="mgb20">
            <el-col :span="5">
                <div class="h-full flex flex-col bg-white ">
                    一级指标
                    <div class="grow w-full rounded flex flex-col">
                        <template v-for="(item, index) in metricsResult">
                            <div class="w-full p-2 h-16 hover:bg-gray-200 flex items-center" @click="switchTable(index)">
                                <div class="text-base grow font-bold">{{ item.title }}</div>
                                <div class="ml-1 w-32">
                                    <div class="w-full text-center">{{ item.score }} / {{ item.value }}</div>
                                    <div class="w-full text-center">排名：{{ item.rank }}</div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                
            </el-col>
            <el-col :span="19">
                <div class="bg-white">二级指标</div>
                <el-table :data="metricsNowShow" style="width: 100%; font-size: 14px;" :cell-style="getCellStylelv2" :header-cell-style="{ 'text-align': 'center' }">
                    <el-table-column type="expand">
                        <template #default="item">
                            <div class="p-4">
                                <h3>指标小项</h3>
                                <el-table :data="item.row.subItems"  :cell-style="getCellStylelv3" :header-cell-style="{ 'text-align': 'center' }">
                                    <el-table-column label="指标名称" prop="title" />
                                    <el-table-column label="满分" prop="value" />
                                    <el-table-column label="得分" prop="score" />
                                    <el-table-column label="提升空间" prop="score_up" />
                                    <el-table-column label="晋升空间排名" prop="sa" />
                                    <el-table-column label="评语" prop="co" />
                                    <el-table-column label="操作" fixed="right" >
                                        <template #default="subItem">
                                            <el-button link size="large" type="primary" @click="$router.push('/detail-2')">查看指标定义</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="title" label="指标名称"></el-table-column>
                    <el-table-column prop="value" label="满分"></el-table-column>
                    <el-table-column prop="score" label="得分"></el-table-column>
                    <el-table-column prop="score_up" label="提升空间"></el-table-column>
                </el-table>
            </el-col>
        </el-row>

        <el-row :gutter="20" class="mgb20">
            <el-col :span="24">
                <el-card shadow="hover">
                    <div class="card-header">
                        <p class="card-header-title">指标得分分布</p>
                        <p class="card-header-desc">显示各个指标得分的分布情况</p>
                    </div>
                    <v-chart class="chart" :option="dashOpt2" />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts" name="dashboard">
import { ref, onBeforeMount, onUnmounted, onDeactivated } from 'vue';
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
import { fetchA04Data, fetchB01Data } from '@/api/index';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { CanvasRenderer } from 'echarts/renderers';
import VChart from 'vue-echarts';
import { dashOpt1, dashOpt11, dashOpt111, dashOpt2, dashOpt3, dashOpt333, mapOptions } from './chart/options';
import chinaMap from '@/utils/china';
import { makeBarChartOptions } from './chart/makeOptions';
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
const getCellStylelv2 = getCellStyleWithColIndex(-1)
const getCellStylelv3 = getCellStyleWithColIndex(6)
const route = useRoute()
const metricsResult = ref(null)
const optionLeftTop = ref(null)
const metricsNowShow = ref(null)
const moduleName = ref(null)
onBeforeMount(() => {
    fetchB01Data().then((res) => {
        if(res.status == 200){
            processMetrics(res.data)
            setLeftTopOption()
        }
    })
})

onBeforeRouteUpdate((to, from, next) => {
    console.log(to, from)
    if(to.query.id !== route.query.id){
        fetchB01Data().then((res) => {
            if(res.status == 200){
                processMetrics(res.data)
                setLeftTopOption()
            }
        })
    }
    next()
})

onDeactivated(() => {
    console.log(11)
})

function processMetrics(data){
    let metrics1 = [] // 所有一级指标
    let metrics1Visit = new Set() // 访问过的一级指标name
    let metrics1Map = new Map() // 一级指标->二级指标
    let metrics2Visit = new Set()  // 访问过的二级指标name
    let metrics2Map = new Map()  // 二级指标->三级指标
    let id = route.query.id
    data.forEach(element => {
        if(element['p_3'] && element['p_3'].id === Number(id)){
            moduleName.value = element['p_3'].name
            // 三级指标元素
            let elementNow3 = {
                title: element.name,
                value: element.total_score,
                score: element.value,
                score_up: element.improve_space,
                sa: 1,
                co: element.content
            }
            // 一级指标
            if(!metrics1Visit.has(element['p_2'].name)){
                metrics1Visit.add(element['p_2'].name)
                metrics1.push({title: element['p_2'].name, value: element['p_2'].total_goal, score: element['p_2'].value, rank: 1, subItems: null})
            }
            // 一级指标与二级指标连接，一级name -> 二级[items]
            let metricChildren1 = metrics1Map.get(element['p_2'].name)
            if(metricChildren1){
                if(!metrics2Visit.has(element['p_1'].name)){
                    metrics2Visit.add(element['p_1'].name)
                    metricChildren1.push({title: element['p_1'].name, value: element['p_1'].total_goal, score: element['p_1'].value, score_up: element['p_1'].improve_space, subItems: null})
                    metrics1Map.set(element['p_2'].name, metricChildren1)
                }
            }
            else{
                metrics1Map.set(element['p_2'].name, [{title: element['p_1'].name, value: element['p_1'].total_goal, score: element['p_1'].value, score_up: element['p_1'].improve_space, subItems: null}])
                metrics2Visit.add(element['p_1'].name)
            }
            // 二级指标与三级指标连接，同上
            let metricChildren2 = metrics2Map.get(element['p_1'].name)
            if(metricChildren2){
                metricChildren2.push(elementNow3)
                metrics2Map.set(element['p_1'].name, metricChildren2)
            }
            else{
                metrics2Map.set(element['p_1'].name, [elementNow3])
            }
        }
    });
    for(let item of metrics1Map.values()){
        for(let subItem of item){
            subItem.subItems = metrics2Map.get(subItem.title)
        }
    }
    for(let item of metrics1){
        item.subItems = metrics1Map.get(item.title)
    }
    metricsResult.value = metrics1
    metricsNowShow.value = metrics1[0].subItems
}

function setLeftTopOption(){
    let xaxis = []
    let yaxis = []
    for(let item of metricsResult.value){
        xaxis.push(item.title)
        yaxis.push(item.score)
    }
    optionLeftTop.value = makeBarChartOptions(xaxis, [{name: "得分", data: yaxis}])
}
function switchTable(index){
    metricsNowShow.value = metricsResult.value[index].subItems
    console.log(metricsNowShow.value)
}
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
    color: #999;
    padding: 0 20px;
}

.card-num {
    font-size: 30px;
}

.card-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.bg1 {
    background: #2d8cf0;
}

.bg2 {
    background: #64d572;
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
.list-line::after{
	content: "";
	width: 10px;
	height: 24px;
	display: block;
}
.grow{
    flex-grow: 1;
}
</style>
