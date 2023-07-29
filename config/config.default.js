/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1686967654435_2110';

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    myAppName: 'egg',
    uploadcinemaimgDir:'app/public/cinemaimg',//影片图片存贮路劲
  };
  config.mongoose = {
    client:{
      url:'mongodb://127.0.0.1/cinema',
      options:{
        useUnifiedTopology:true
      },
      plugins:[],
    }
  }
  config.multipart = {
    mode:'file'
  };
  config.security = {
    csrf:{
      enable:false,
      ignoreJSON:true
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*',//允许的端口和地址
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  return {
    ...config,
    ...userConfig,
  };
};
