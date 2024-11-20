<template>
    <el-row :gutter="20" class="mgb20">
        <el-col :span="24">
            <el-card shadow="hover">
                <div class="card-header">
                    <p class="card-header-title">术语定义</p>
                </div>
                <div class="w-full flex mb-2">
                    <el-button type="primary" class="mx-1.5" :icon="Plus" @click="addTerm" v-show="username == 'admin'">新建术语</el-button>
                    <el-input v-model="searchText" style="width: 300px;" placeholder="术语名称..."></el-input>
                    <el-button type="primary" class="ml-1.5" :icon="Search" @click="search">
                        搜索
                    </el-button>
                </div>
                <el-table :data="termDetailPage" style="width: 100%; font-size: 14px;" height="620">
                    <el-table-column prop="title" label="术语名称"></el-table-column>
                    <el-table-column prop="description" label="计算方式"></el-table-column>
                    <el-table-column prop="health" label="数据健康指数"></el-table-column>
                    <el-table-column #default="table" width="200" label="操作">
                        <el-button link type="primary" @click="editTerm(table.row)">编辑</el-button>
                        <el-button link class="ml-1.5" type="primary" @click="">删除</el-button>
                    </el-table-column>
                </el-table>

                <el-pagination :current-page="pageNow" @update:current-page="switchPage" layout="total, prev, pager, next, jumper" :total="termDetailShow.length" class="mt-2 flex justify-center"></el-pagination>
            </el-card>
        </el-col>
    </el-row>
</template>
<script setup lang="ts" name="metricdetail">
import { ref, onBeforeMount } from 'vue';
import { fetchTerms } from "@/api/index"
import { Search, Plus } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';

const searchText = ref("")
const termDetail = ref([])
const termDetailShow = ref([])
const termDetailPage = ref()
const pageNow = ref(1)
const username = localStorage.getItem("vuems_name");
const router = useRouter();
onBeforeMount(() => {
    fetchTerms().then((res) => {
        if(res.status == 200){
            processDetail(res.data)
            switchPage(1)
        }
    })
})
function processDetail(data){
    let detail = []
    for(let item of data){
        detail.push({id: item.id, title: item.name, description: item.content, health: item.health_index?.health_index})
    }
    termDetail.value = detail
    termDetailShow.value = detail
}
function switchPage(page){
    pageNow.value = page
    if(termDetailShow.value.length < page * 10){
        pageNow.value = 1
    }
    termDetailPage.value = termDetailShow.value.slice((page - 1) * 10, page * 10)
}

function editTerm(row){
    row.type = "edit"
    localStorage.setItem("edit-term", JSON.stringify(row))
    router.push('/edit-term')
}

function addTerm(){
    localStorage.setItem("edit-term", JSON.stringify({type: "add"}))
    router.push('/edit-term')
}

function search(){
    if(searchText.value == ""){
        termDetailShow.value = termDetail.value
    }
    else{
        termDetailShow.value = termDetail.value.filter((item) => {
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
