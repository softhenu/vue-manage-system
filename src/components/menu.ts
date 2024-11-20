import { Menus } from '@/types/menu';

export const menuData: Menus[] = [
    {
        id: 'd1',
        title: '首页',
        index: '/dashboard',
        icon: 'Odometer',
    },
    {
        id: '1',
        title: '省级机构管理',
        index: '1',
        icon: 'HomeFilled',
        children: [
            {
                id: '11',
                pid: '1',
                index: '/shenga',
                title: '省A机构',
            },
            {
                id: '12',
                pid: '1',
                index: '/shengb',
                title: '省B机构',
            },
            {
                id: '13',
                pid: '1',
                index: '/shengc',
                title: '省C机构',
            },
        ],
    },
    {
        id: '2',
        title: '市级机构管理',
        index: '2-1',
        icon: 'Calendar',
        children: [
            {
                id: '21',
                pid: '3',
                index: '/city-a',
                title: '市A机构',
            },
            {
                id: '22',
                pid: '3',
                index: '/city-b',
                title: '市B机构',
            },
            {
                id: '23',
                pid: '2',
                index: '/city-c',
                title: '市D机构',
            },
            {
                id: '24',
                pid: '2',
                index: '/city-d',
                title: '市E机构',
            },
            {
                id: '25',
                pid: '2',
                index: '/city-e',
                title: '市F机构',
            },
            {
                id: '26',
                pid: '2',
                index: '/city-f',
                title: '市G机构',
            },
            {
                id: '27',
                pid: '2',
                index: '/city-g',
                title: '市H机构',
            },
            {
                id: '28',
                pid: '2',
                index: '/city-h',
                title: '市I机构',
            },
            {
                id: '29',
                pid: '3',
                index: '29',
                title: '市J机构',
                children: [
                    // {
                    //     id: '291',
                    //     pid: '29',
                    //     index: '/editor',
                    //     title: '富文本编辑器',
                    // },
                    // {
                    //     id: '292',
                    //     pid: '29',
                    //     index: '/markdown',
                    //     title: 'markdown编辑器',
                    // },
                ],
            },
        ],
    },
    {
        id: '3',
        title: '县级机构管理',
        index: '3',
        icon: 'Calendar',
        children: [
            {
                id: '31',
                pid: '3',
                index: '/county-a',
                title: 'A县机构',
            },
            {
                id: '32',
                pid: '3',
                index: '/county-b',
                title: 'B县机构',
            },
            {
                id: '33',
                pid: '3',
                index: '/county-c',
                title: 'C县机构',
            },
            {
                id: '34',
                pid: '3',
                index: '/county-d',
                title: 'D县机构',
            },
        ],
    },
    {
        id: '4',
        icon: 'User',
        index: '4',
        title: '账号管理',
        children: [
            {
                id: 'a1',
                pid: '4',
                index: '/system-user',
                title: '超级管理员用户',
            },
            {
                id: '42',
                pid: '4',
                index: '/city-user',
                title: '市级账户管理',
            },{
                id: '43',
                pid: '4',
                index: '/county-user',
                title: '县级账户管理',
            },
        ],
    },
    {
        id: '5',
        icon: 'Guide',
        index: '/detail',
        title: '指标管理',
        permiss: '5',
        children: [
            {
                id: 'm0',
                pid: '4',
                index: '/detail-0',
                title: '指标模块',
            },
            {
                id: 'm1',
                pid: '4',
                index: '/detail-1',
                title: '一级指标',
            },{
                id: 'm2',
                pid: '4',
                index: '/detail-2',
                title: '二级指标',
            },
            {
                id: 'm3',
                pid: '4',
                index: '/detail-3',
                title: '指标小项',
            },
            {
                id: 'm4',
                pid: '4',
                index: '/term',
                title: '术语',
            }
        ],
    },
    {
        id: '7',
        icon: 'Brush',
        index: '/theme',
        title: '指标组织架构',
    },
    // {
    //     id: '6',
    //     icon: 'DocumentAdd',
    //     index: '6',
    //     title: '机构指标查看',
    //     children: [
    //         {
    //             id: '61',
    //             pid: '6',
    //             index: '/ucenter',
    //             title: '个人中心',
    //         },
    //         {
    //             id: '62',
    //             pid: '6',
    //             index: '/login',
    //             title: '登录',
    //         },
    //         {
    //             id: '63',
    //             pid: '6',
    //             index: '/register',
    //             title: '注册',
    //         },
    //         {
    //             id: '64',
    //             pid: '6',
    //             index: '/reset-pwd',
    //             title: '重设密码',
    //         },
    //         {
    //             id: '65',
    //             pid: '6',
    //             index: '/403',
    //             title: '403',
    //         },
    //         {
    //             id: '66',
    //             pid: '6',
    //             index: '/404',
    //             title: '404',
    //         },
    //     ],
    // },
];
