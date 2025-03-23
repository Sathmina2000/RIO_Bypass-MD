const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=:https://github.com/sahanxpasi-MD/RIO
_Bypass-MD//github.com/sahanxpasi-MD/RIO
_Bypass-MDI' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:ASITHA-MD=W2oFWRCA#GGijDC-2Mh3qJuRPqJ6JmLEw7YH5hYp9HHTE4KrQih4' : process.env.POSTGRESQL_URL,
};
