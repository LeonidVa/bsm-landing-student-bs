const path = require('path');
const bn = path.basename(__dirname);
const wdir = path.resolve(__dirname + '/../../');
console.log(wdir, bn);
module.exports = {
  apps: [
    {
      name: bn,
      script: wdir+'/server.js',
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
        SOURCE: "besmarter landing 20181122",
        RECAPTCHA: "6LdEPVcUAAAAADLIyn6B2QGmxCGxED0Os2ElIwWS"
      },
    },
  ],
};
