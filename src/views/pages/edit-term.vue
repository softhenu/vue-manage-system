<template>
    <el-row :gutter="20" class="mgb20">
        <el-col :span="24">
            <el-card shadow="hover">
                <div class="card-header">
                    <p class="card-header-title">{{ title }}</p>
                </div>
                <div class="flex flex-row w-full">
                    <div class="w-64">术语名称：</div>
                    <el-input class="grow" v-model="name"></el-input>
                </div>
                <el-divider></el-divider>
                <div class="flex flex-row w-full mt-5">
                    <div class="w-64">计算方式：</div>
                    <el-input class="grow" type="textarea" :autosize="{minRows: 3, maxRows: 6}" resize="none" v-model="calc"></el-input>
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
import { editTerm } from '@/api';
import { ElMessage } from 'element-plus';
import { useTabsStore } from '@/store/tabs'
import { useRoute, useRouter } from 'vue-router';

onBeforeMount(() => {
    setMetric()
})

const tabs = useTabsStore()
const route = useRoute();
const router = useRouter();
let title = "新建术语"
let mode = "add" // 编辑还是新建

//表单
const idIfEdit = ref()
const name = ref("")
const calc = ref("")

function back(){
    localStorage.removeItem("edit-detail-2")
    tabs.closeCurrentTag({
        $router: router,
        $route: route,
    })
}

function setMetric(){
    let params = localStorage.getItem("edit-term")
    if(params == null){
        return
    }
    console.log(params);
    let editData = JSON.parse(params)
    if(editData.type == "edit"){
        mode = "edit"
        title = "编辑术语"
    }
    else{
        mode = "add"
        title = "新建术语"
        return
    }
    idIfEdit.value = editData.id
    name.value = editData.title
    calc.value = editData.description
}

function submit(){
    console.log(metricTypeList, metricType);
    let data = {
        "name": name.value,
        "score_define": calc.value,
    }
    // if(mode.value == "add"){
    //     postDetail(data).then((res) => {
    //         if(res.status < 300){
    //             ElMessage.success("提交成功！")
    //             back()
    //         }
    //     })
    // }
    // else{
    //     editDetail(data, idIfEdit.value).then((res) => {
    //         if(res.status < 300){
    //             ElMessage.success("提交成功！")
    //             back()
    //         }
    //     })
    // }
    
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