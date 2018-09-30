export default {
    'zh-cn': {
        sidemenu: [
            {
                title: '接入文档',
                children: [
                    {
                        title: '资源下载',
                        key: 'resources',
                        link: '/zh-cn/docs/resources/resources.html',
                    },
                    {
                        title: '客户端',
                        key: 'client',
                        children: [
                            {
                                title: '接入指南',
                                link: '/zh-cn/docs/client/gamesdk.html',
                            },
                            {
                                title: 'Q&A',
                                link: '/zh-cn/docs/client/faq.html',
                            },
                        ],
                    },
                    {
                        title: '服务器',
                        key: 'server',
                        children: [
                            {
                                title: '接入指南',
                                link: '/zh-cn/docs/server/cloudgame-server-doc.html',
                            },
                            {
                                title: 'Q&A',
                                link: '/zh-cn/docs/server/faq.html',
                            },
                        ],
                    },
                ],
            },
        ],
        barText: '接入文档',
    },
};