<template>
    <div class="border border-green-200 rounded-lg p-4">
        <div
            class="bg-green-100 flex justify-between items-center p-4 border border-green-200 rounded-lg">
            <template v-for="header in headers">
                <span class="flex-1 text-center">{{ header }}</span>
            </template>
        </div>
        
        <!-- Expandable Items -->
        <!-- <AccordionItem v-for="item in items2" :key="item.title" :item="item"
            to="/dashboard2">
            <el-col :span="24">指标定义</el-col>
        </AccordionItem> -->
    </div>
</template>
<script setup>
const props = defineProps({
    headers: Object,
    keys: Array[String],
    data: Object
})
</script>
<style>

</style>