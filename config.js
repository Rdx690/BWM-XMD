const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V2Y7qRhD9l36FCd4XpJHSGG/AsAyYLcqDsRu7sfHSbmObK/49MsxkRsldJlLeWm3XqVOnTlV/A0mKCzRGDeh/AxnBF5ei9kibDIE+GJTHIyKgC3yXuqAP7Gk4bV70vGrsGdRFo7JPVmBCLhztC2EbHeAZOStfKqy1/QxuXZCVhxh7PwEcBD0hGGnM9XixehIbmKqy3zPVoV4rzFbd+L1F4FTEvVr87hncWkQXE5wEehaiMyJuPEbN3MXka/R1c3KEvjwOO6LsJ1tbP/EvUm9U7gjrydqmx4aMXwT5deJ4X6PfvK4ah9RXYzA8HWQNV6W5cLDlR1les2eckmHtnS8Mhss3+gUOEuTbPkoops2Xddf0cVH76WK70sqY4Tuvs9Hpsr2KPH/cH9AlxOflOj+Y8Warf424qPpkN5NqY6bN14lNJta8cOd5EoZnOOwkq61YjMbBa7KAi8/E5+TdK9F/0X0zMsX9OI1mu3U6a8axxYqyTRfj3mznNtKILYeBt4fXk6WnX6T/6uz9wKcMocTb+Jo5FUL1YCRqai61pspiTpsaVfZaDpkP+i4tyc9Ysmtc59pehqxiIWhXGtHyE3mRtuuDKWwOIV3rdSRgv14sO2tcVkFCFk5SHJJOWB9Ue4jVKuLMXjCP6WhENqOGh0NcPd8rilBj+6DP3rqAoAAXlLgUp8n9TpC7wPUvS+QRRO/ygsV+K2izrRTNeWakyc6US8x571WTWWhEwuFqrGZY9C91rkbPoAsyknqoKJBv4YKmpHlBReEGqAD9P+6daosm6JxSNMI+6AOVVThRYSSVYfjfi9+q0KWFm2W/JYiCLjiS9PyCQJ+SEnXBPYAdGtJQUQRFEThN5wcChKwoKrwiSVBkRK4t8fxIusJnVFD3nIE+KwsMrygKy926/w8PVZQHgyEcsBwjQkUeiJICdXYoslASNFYc/JLHn12QoJo+fNyqz7NdcMSkoE5SZnHq+u8mf//oel5aJnTZJJ7WHhABfebjGlGKk6BoKysTl3ghviCtrQP0j25coFsX+OiCPWTfdeTHzlLN6TJwZSwoT7tzeZ3DtoNhmjx+UQRXUDmFf5KOjPgkHATuSVUk9YmXGVEVOOEoyxJo5XiskDbmh472oqEbWPPJkik3RixWxYI0S3jxkolyd+XDiogg/13lg+tFZbZKI5T8BHc9gH7CXQ1BUKedA+dBu+ckUBvysvMJ92Fx0P/2sba11G/xoAG348lgAdputXn+5Ya++k8/3P7WvA3wEXVxXLSr8aXcc/bO0ifXqzJhTBPqAdSCVtT3Hr3P/mO2NO8kxqGncQVHWG6mG4HDSqI6T0/QjHbrmmwVM4RSCgf283dAQB/k0V7UGjyzpg0uK6eHDnCeI07ynQkReONyXV0tJWSYcBd6S5ZdIj/M4IUynlRVYk2211ooTpJRRVRwcpjJ+06yGi6e22wPr3xORrAx2Vrn3cQuzpiJF5OJNAwKJavmHYkXcs+I9BUcQ5bNrJp9zZVxaMR65ejHdFrOzpOgPB5fwmlErz2xPElQQOudh4PHVrpvxfjtNcJv++LhrCNG9+WeuG2HftGbzx5nbt1PEG+vxY9e/0Vid/a7LaRkmqv+KRzsjCkqjyvJrgaZaXgu2xuki1kO4RLc2uHNYpceU3IGfeAmPkmxD7ogdgsKP8b0O5PPKLe/AG5e7qnrCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/y16skc.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

