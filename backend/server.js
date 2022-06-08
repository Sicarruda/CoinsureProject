const config = require('./config/config');
const app = require('./app');

const { serverPort } = config.development;

app.listen(serverPort);
console.log(`Rodando na porta ${serverPort}`);
