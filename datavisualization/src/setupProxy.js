const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api/daynews', {
        target : 'http://v.juhe.cn/toutiao/index',
        changeOrigin : true,
        ws: true,
        pathRewrite : {
            '^/api/daynews' : ''
        },
    }));
};