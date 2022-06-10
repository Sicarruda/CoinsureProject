// https://create-react-app.dev/docs/proxying-api-requests-in-development/
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware(
      '/api',
      {
        target: 'http://localhost:3001',
        changeOrigin: true,
        // https://stackoverflow.com/questions/36745592/node-http-proxy-middleware-not-working-with-local-servers-as-targert
        pathRewrite: {
          '^/api' : '/'
      }
      }
    )
  );
};
