<template>
    <div class="tabs-container">
        <el-tabs v-model="activePath" class="tabs" type="card" closable @tab-click="clickTabls" @tab-remove="closeTabs">
            <el-tab-pane
                v-for="item in tabs.list"
                :key="item.path"
                :label="item.title"
                :name="item.path"
                @click="setTags(item)"
                class="custom-tab-pane"
            ></el-tab-pane>
        </el-tabs>
        <div class="Tabs-close-box">
            <el-dropdown @command="handleTags">
                <el-button size="large" style="border: none; background-color: transparent;" plain>
                <span class="button-text">标签选项</span>
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu size="small">
                        <el-dropdown-item command="other" class="hover-red">关闭其他</el-dropdown-item>
                        <el-dropdown-item command="current" class="hover-red">关闭当前</el-dropdown-item>
                        <el-dropdown-item command="all" class="hover-red">关闭所有</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTabsStore } from '../store/tabs';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const activePath = ref(route.fullPath);
const tabs = useTabsStore();
// 设置标签
const setTags = (route: any) => {
    const isExist = tabs.list.some((item) => {
        return item.path === route.fullPath;
    });
    if (!isExist) {
        tabs.setTabsItem({
            name: route.name,
            title: route.meta.title,
            path: route.fullPath,
        });
    }
};
setTags(route);
onBeforeRouteUpdate((to) => {
    setTags(to);
});

// 关闭全部标签
const closeAll = () => {
    tabs.clearTabs();
    router.push('/');
};
// 关闭其他标签
const closeOther = () => {
    const curItem = tabs.list.filter((item) => {
        return item.path === route.fullPath;
    });
    tabs.closeTabsOther(curItem);
};
const handleTags = (command: string) => {
    switch (command) {
        case 'current':
            console.log(1)
            // 关闭当前页面的标签页
            tabs.closeCurrentTag({
                $router: router,
                $route: route,
            });
            break;
        case 'all':
            closeAll();
            break;

        case 'other':
            closeOther();
            break;
    }
};

const clickTabls = (item: any) => {
    router.push(item.props.name);
};
const closeTabs = (path: string) => {
    const index = tabs.list.findIndex((item) => item.path === path);
    tabs.delTabsItem(index);
    const item = tabs.list[index] || tabs.list[index - 1];
    router.push(item ? item.path : '/');
};

watch(
    () => route.fullPath,
    (newVal, oldVal) => {
        activePath.value = newVal;
    }
);
</script>

<style scss>
.hover-red:hover {
    background-color: #f48839 !important; 
    color: #ffffff !important; 
}
.button-text {
    color: #444444; 
    transition: color 0.3s; 
}

.button-text:hover {
    color: #00796A;
}
.el-tabs__nav.is-top{

    .el-tabs__item.is-active,
    .el-tabs__item:hover{
        color: #3eb1a2;
        background:#ffffff;
        font-size:14px;
        //border: 20px !important; /* 边框样式及颜色 */
    }
    .el-tabs__item {
        background: #dfe5e5; 
        color:#666666;
        font-size:14px;
        //margin-right: 10px !important;
    }
}
.el-tabs--card>.el-tabs__header{
    border-bottom: 0px !important;
}

.tabs-container{
    //border-bottom: 1px solid var(--el-border-color-light);
    border-bottom: 1px solid #E3EFED;
}

.tabs-container {
    position: relative;
    overflow: hidden;
    background: #fff;
    padding: 2px 120px 0 0;
}

.tabs {
    .el-tabs__header {
        margin-bottom: 0;
    }

    .el-tabs__nav {
        height: 28px;
    }

    .el-tabs__nav-next,
    .el-tabs__nav-prev {
        line-height: 32px;
    }

    &.el-tabs {
        --el-tabs-header-height: 28px;
    }
}

.Tabs-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #E3EFED;
    //box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
}
</style>
