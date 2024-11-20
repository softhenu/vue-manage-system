<template>
    <div>
        <el-row :gutter="20" class="mgb20">
            <el-col :span="12">
                <el-card shadow="hover" body-class="card-body">
                    <el-icon class="card-icon bg1">
                        <User />
                    </el-icon>
                    <div class="card-content">
                        <div style="font-size: 30px;">A市</div>
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
                        <div style="font-size: 30px;">下属机构: 6个</div>
                    </div>
                </el-card>
            </el-col>
            <!-- <el-col :span="6">
                <el-card shadow="hover" body-class="card-body">
                    <el-icon class="card-icon bg3">
                        <Goods />
                    </el-icon>
                    <div class="card-content">
                        <countup class="card-num color3" :end="8888" />
                        <div>商品数量</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" body-class="card-body">
                    <el-icon class="card-icon bg4">
                        <ShoppingCartFull />
                    </el-icon>
                    <div class="card-content">
                        <countup class="card-num color4" :end="568" />
                        <div>今日订单量</div>
                    </div>
                </el-card>
            </el-col> -->
        </el-row>

        <el-row :gutter="20" class="mgb20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <div class="card-header">
                        <p class="card-header-title">下属机构指标体系得分情况</p>
                        <!-- <p class="card-header-desc">显示下属机构的得分情况</p> -->
                    </div>
                    <v-chart class="chart" :option="dashOpt1" />
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <div class="card-header">
                        <p class="card-header-title">下属机构指标体系得分排名</p>
                        <!-- <p class="card-header-desc">显示下属机构指标体系得分的历史排名</p> -->
                    </div>
                    <v-chart class="chart" :option="dashOpt33" />
                </el-card>
            </el-col>
        </el-row>

        <p class="card-header-title">下属机构</p>
        <el-row :gutter="20" class="mgb20">
            <el-col :span="24">
                <el-table :data="items2" style="width: 100%; font-size: 14px;" :cell-style="getCellStyle"  :header-cell-style="{ 'text-align': 'center' }">
                    <el-table-column prop="title" label="机构名称"></el-table-column>
                    <el-table-column prop="value" label="满分"></el-table-column>
                    <el-table-column prop="score" label="得分"></el-table-column>
                    <el-table-column prop="rank" label="排名"></el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <el-button link size="large" type="primary" @click="router.push('/dashboard1')">查看机构详情</el-button>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts" name="dashboard">
import { ref } from 'vue';
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
import { dashOpt1, dashOpt11, dashOpt2, dashOpt3, dashOpt33, mapOptions } from './chart/options';
import chinaMap from '@/utils/china';
import router from '@/router';
import { getCellStyleWithColIndex } from "@/views/table/cell-style"
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
const items = ref([
    {
        title: '电网运维', value: '100', score: 70, tx: 30, rank: 1, py: "较差", subItems: null
    },
    {
        title: '综合协调', value: '100', score: 70, tx: 30, rank: 1, py: "较差", subItems: null
    },
    {
        title: '营销管理', value: '100', score: 70, tx: 30, rank: 1, py: "较差", subItems: null
    },
    {
        title: '基础保障', value: '100', score: 70, tx: 30, rank: 1, py: "较差", subItems: null
    }
]);
const items1 = ref([
    {
        title: '电网运维', value: '100', score: 70, rank: 1, subItems: [
            { title: '月重损台区治理率', value: '100', score: 70, rank: 1, subItems: null },
            { title: '计量箱数字化管理规范率', value: '40', score: 40, rank: 1, subItems: null },
            { title: '计量异常消缺率', value: '100', score: 20, rank: 1, subItems: null },
            { title: '智能周转柜应用率', value: '100', score: 20, rank: 1, subItems: null },
            { title: '拆回表回收率', value: '100', score: 20, rank: 1, subItems: null },
            { title: 'HPLC配送模块绑定率', value: '-', score: 210, rank: 1, subItems: null }
        ]
    },
    {
        title: '综合协调', value: '100', score: 70, rank: 1, subItems: [
            { title: '月重损台区治理率', value: '100', score: 70, rank: 1, subItems: null },
            { title: '计量箱数字化管理规范率', value: '40', score: 40, rank: 1, subItems: null },
            { title: '计量异常消缺率', value: '100', score: 20, rank: 1, subItems: null },
            { title: '智能周转柜应用率', value: '100', score: 20, rank: 1, subItems: null },
            { title: '拆回表回收率', value: '100', score: 20, rank: 1, subItems: null },
            { title: 'HPLC配送模块绑定率', value: '-', score: 210, rank: 1, subItems: null }
        ]
    },
    {
        title: '营销管理', value: '100', score: 70, rank: 1, subItems: [
            { title: '月重损台区治理率', value: '100', score: 70, rank: 1, subItems: null },
            { title: '计量箱数字化管理规范率', value: '40', score: 40, rank: 1, subItems: null },
            { title: '计量异常消缺率', value: '100', score: 20, rank: 1, subItems: null },
            { title: '智能周转柜应用率', value: '100', score: 20, rank: 1, subItems: null },
            { title: '拆回表回收率', value: '100', score: 20, rank: 1, subItems: null },
            { title: 'HPLC配送模块绑定率', value: '-', score: 210, rank: 1, subItems: null }
        ]
    },
    {
        title: '基础保障', value: '100', score: 70, rank: 1, subItems: [
            { title: '月重损台区治理率', value: '100', score: 70, rank: 1, subItems: null },
            { title: '计量箱数字化管理规范率', value: '40', score: 40, rank: 1, subItems: null },
            { title: '计量异常消缺率', value: '100', score: 20, rank: 1, subItems: null },
            { title: '智能周转柜应用率', value: '100', score: 20, rank: 1, subItems: null },
            { title: '拆回表回收率', value: '100', score: 20, rank: 1, subItems: null },
            { title: 'HPLC配送模块绑定率', value: '-', score: 210, rank: 1, subItems: null }
        ]
    }
]);
const items2 = ref([
    {
        title: 'A县', value: '100', score: 70, rank: 1, subItems: null
    },
    {
        title: 'B县', value: '100', score: 70, rank: 3, subItems: null
    },
    {
        title: 'C县', value: '100', score: 70, rank: 2, subItems: null
    },
    {
        title: 'D县', value: '100', score: 70, rank: 4, subItems: null
    },
    {
        title: 'E县', value: '100', score: 70, rank: 5, subItems: null
    },
    {
        title: 'F县', value: '100', score: 70, rank: 6, subItems: null
    }
]);
const activities = [
    {
        content: '收藏商品',
        description: 'xxx收藏了你的商品，就是不买',
        timestamp: '30分钟前',
        color: '#00bcd4',
    },
    {
        content: '用户评价',
        description: 'xxx给了某某商品一个差评，吐血啊',
        timestamp: '55分钟前',
        color: '#1ABC9C',
    },
    {
        content: '订单提交',
        description: 'xxx提交了订单，快去收钱吧',
        timestamp: '1小时前',
        color: '#3f51b5',
    },
    {
        content: '退款申请',
        description: 'xxx申请了仅退款，又要亏钱了',
        timestamp: '15小时前',
        color: '#f44336',
    },
    {
        content: '商品上架',
        description: '运营专员瞒着你上架了一辆飞机',
        timestamp: '1天前',
        color: '#009688',
    },
];

const ranks = [
    {
        title: '手机',
        value: 10000,
        percent: 80,
        color: '#f25e43',
    },
    {
        title: '电脑',
        value: 8000,
        percent: 70,
        color: '#00bcd4',
    },
    {
        title: '相机',
        value: 6000,
        percent: 60,
        color: '#64d572',
    },
    {
        title: '衣服',
        value: 5000,
        percent: 55,
        color: '#e9a745',
    },
    {
        title: '书籍',
        value: 4000,
        percent: 50,
        color: '#009688',
    },
];

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
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #00796A;
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
    color:#444444;
    font-size: 16px;
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
