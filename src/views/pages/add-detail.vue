<template>
    <el-row :gutter="20" class="mgb20">
        <el-col :span="24">
            <el-card shadow="hover">
                <div class="card-header">
                    <p class="card-header-title">{{ title }}</p>
                </div>
                <div class="flex flex-row w-full">
                    <div class="w-64">指标名称：</div>
                    <el-input class="grow" v-model="name"></el-input>
                </div>
                <el-divider></el-divider>
                <!-- <div class="flex flex-row w-full">
                    <div class="w-64">指标定义：</div>
                    <el-input class="grow" type="textarea" :autosize="{minRows: 3, maxRows: 6}" resize="none" v-model="content"></el-input>
                </div> -->

                <div class="flex flex-row w-full mt-5">
                    <div class="w-64">指标得分计算方法：</div>
                    <el-input class="grow" type="textarea" :autosize="{minRows: 3, maxRows: 6}" resize="none" v-model="calc"></el-input>
                </div>

                <div class="flex flex-row w-full mt-5">
                    <div class="w-64">指标数据查询路径/关键事项描述及提升方式：</div>
                    <!-- <el-input class="grow" type="textarea" :autosize="{minRows: 3, maxRows: 6}" resize="none" v-model="terms"></el-input>
                     -->
                    <el-select multiple v-model="selectedTerms">
                        <el-option v-for="item in termsList" :key="item.id" :value="item.id" :label="item.name"></el-option>
                    </el-select>
                </div>
                <el-divider></el-divider>
                <div class="flex flex-row w-full">
                    <div class="w-64">二级指标分值：</div>
                    <div class="grow w-full">
                        <el-input class="w-64" v-model="lv2score" type="number"></el-input>
                    </div>
                </div>

                <div class="flex flex-row w-full mt-5">
                    <div class="w-64">一级指标：</div>
                    <div class="grow w-full">
                        <el-select v-model="lv1metric" class="w-64">
                            <el-option v-for="item in lv1metricList" :label="item.label" :key="item.value" :value="item.value"></el-option>
                        </el-select>
                    </div>
                </div>

                <div class="flex flex-row w-full mt-5">
                    <div class="w-64">模块：</div>
                    <div class="grow w-full">
                        <el-select v-model="metricType" class="w-64" @change="changelv1">
                            <el-option v-for="item in metricTypeList" :label="item.label" :key="item.value" :value="item.value"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="flex flex-row w-full mt-10">
                    <el-button type="primary" class="ml-1.5" @click="submit">提交</el-button>
                    <el-button type="default" class="ml-1.5" @click="back">取消</el-button>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { postDetail, fetchA03Data, fetchTerms, editDetail } from '@/api';
import { ElMessage } from 'element-plus';
import { useTabsStore } from '@/store/tabs'
import { useRoute, useRouter } from 'vue-router';

onBeforeMount(() => {
    fetchA03Data().then((res) => {
        if(res.status == 200){
            processData(res.data)
        }
    }).then(fetchTerms).then((res) => {
        if(res.status == 200){
            termsList.value = res.data
        }
    }).then(setMetric)
})

const lv1metricList = ref([]) // 一级指标列表
const metricTypeList = ref([]) // 指标模块列表
const metricData = ref()  // 指标模块与一级指标的对应关系
const termsList = ref()

const tabs = useTabsStore()
const route = useRoute();
const router = useRouter();
let title = "新建指标"
let mode = "add" // 编辑还是新建

//表单
const idIfEdit = ref()
const name = ref("")
const calc = ref("")
const selectedTerms = ref()
const lv2score = ref()
const lv1metric = ref()
const metricType = ref()

function processData(data){
    let lv0metricSet = new Set()
    let lv0metrics = []
    let metricTree = {}
    for(let item of data){
        if(!lv0metricSet.has(item["f_A02指标模块"].name)){
            lv0metricSet.add(item["f_A02指标模块"].name)
            lv0metrics.push({label: item["f_A02指标模块"].name, value: item["f_A02指标模块"].id})
            metricTree[item["f_A02指标模块"].id] = []
        }
        metricTree[item["f_A02指标模块"].id].push({label: item.name, value: item.id})
    }
    metricData.value = metricTree
    metricTypeList.value = lv0metrics
}

function back(){
    localStorage.removeItem("edit-detail-2")
    tabs.closeCurrentTag({
        $router: router,
        $route: route,
    })
}

function setMetric(){
    let params = localStorage.getItem("edit-detail-2")
    if(params == null){
        return
        
    }
    let editData = JSON.parse(params)
    if(editData.type == "edit"){
        mode = "edit"
        title = "编辑指标"
    }
    else{
        mode = "add"
        title = "新建指标"
        return
    }
    idIfEdit.value = editData.id
    name.value = editData.title
    calc.value = editData.description
    selectedTerms.value = editData.terms.map((item) => item.id)
    lv2score.value = editData.lv2score
    metricType.value = metricTypeList.value.find((item) => Number(item.value) == Number(editData.lv0id))
    lv1metricList.value = metricData.value[String(editData.lv0id)]
    lv1metric.value = lv1metricList.value.find((item) => Number(item.value) == Number(editData.lv1id))
}

function submit(){
    console.log(metricTypeList, metricType);
    let data = {
        "name": name.value,
        "score_define": calc.value,
        "path_methond": selectedTerms.value,
        "score": Number(lv2score.value),
        "f一级指标": lv1metric.value.label,
        "f模块": metricType.value.label
    }
    if(mode.value == "add"){
        postDetail(data).then((res) => {
            if(res.status < 300){
                ElMessage.success("提交成功！")
                back()
            }
        })
    }
    else{
        editDetail(data, idIfEdit.value).then((res) => {
            if(res.status < 300){
                ElMessage.success("提交成功！")
                back()
            }
        })
    }
    
}

function changelv1(e){
    lv1metricList.value = metricData.value[e]
    lv1metric.value = lv1metricList.value[0]
}
</script>
<style scoped>
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
.grow{
    flex-grow: 1;
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
</style>