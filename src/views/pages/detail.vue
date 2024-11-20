<template>
    <el-row :gutter="20" class="mgb20">
        <el-col :span="24">
            <el-card shadow="hover">
                <div class="card-header">
                    <p class="card-header-title">二级指标定义</p>
                </div>
                <div class="w-full flex mb-2">
                    <el-button type="primary" class="mx-1.5" :icon="Plus" @click="addDetail" v-show="username == 'admin'">新建定义</el-button>
                    <el-input v-model="searchText" style="width: 300px;" placeholder="指标名称..."></el-input>
                    <el-button type="primary" class="ml-1.5" :icon="Search" @click="search">
                        搜索
                    </el-button>
                </div>
                <el-table :data="metricDetailPage" style="width: 100%; font-size: 14px;" height="620">
                    <el-table-column prop="title" label="指标名称"></el-table-column>
                    <el-table-column prop="description" label="计算方式"></el-table-column>
                    <el-table-column label="指标涉及的术语">
                        <template #default="table">
                            <template v-for="(term, index) in table.row.terms" :key="index">
                                <el-button link :class="index == 0 ? '': 'ml-1.5'" type="primary" @click="$router.push('/term')">{{ term.name }}</el-button>
                            </template>
                        </template>
                    </el-table-column>
                    <el-table-column #default="table" width="200" label="操作">
                        <el-button link type="primary" @click="editDetail(table.row)">编辑</el-button>
                        <el-button link class="ml-1.5" type="primary" @click="">删除</el-button>
                    </el-table-column>
                </el-table>
                <el-pagination :current-page="pageNow" @update:current-page="switchPage" layout="total, prev, pager, next, jumper" :total="metricDetailShow.length" class="mt-2 flex justify-center"></el-pagination>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup lang="ts" name="metricdetail">
import { ref, onBeforeMount } from 'vue';
import { Search, Plus } from '@element-plus/icons-vue'
import { fetchMetricDetail } from "@/api/index"
import { useRouter } from 'vue-router';

const searchText = ref("")
const metricDetail = ref([])
const metricDetailShow = ref([])
const metricDetailPage = ref(null)
const pageNow = ref(1)
const username = localStorage.getItem("vuems_name");
const router = useRouter();
onBeforeMount(() => {
    fetchMetricDetail().then((res) => {
        if(res.status == 200){
            processDetail(res.data)
            switchPage(1)
        }
    })
})
function processDetail(data){
    let detail = []
    for(let item of data){
        let terms = []
        for(let term of item.f_defi){
            terms.push({id: term.id, name: term.name})
        }
        detail.push({id: item.id, title: item.name, description: item.content, terms: terms, lv0id: item.e_id ? item.e_id.p_3.id : null , lv1id: item.e_id ? item.e_id.p_2.id : null, lv2score: item.e_id ? item.e_id.total_score : 0})
    }
    metricDetail.value = detail
    metricDetailShow.value = detail
}
function switchPage(page){
    pageNow.value = page
    if(metricDetailShow.value.length < page * 10){
        pageNow.value = 1
    }
    metricDetailPage.value = metricDetailShow.value.slice((page - 1) * 10, page * 10)
}

function editDetail(row){
    row.type = "edit"
    localStorage.setItem("edit-detail-2", JSON.stringify(row))
    router.push('/edit-detail-2')
}

function addDetail(){
    localStorage.setItem("edit-detail-2", JSON.stringify({type: "add"}))
    router.push('/edit-detail-2')
}

function search(){
    if(searchText.value == ""){
        metricDetailShow.value = metricDetail.value
    }
    else{
        metricDetailShow.value = metricDetail.value.filter((item) => {
            return item.title.indexOf(searchText.value) != -1
        })
    }
    switchPage(pageNow.value)
}
</script>
<style>
@import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
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
