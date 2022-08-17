/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
require('dotenv').config('../.env')
console.log(process)
const { DB_HOST, DB_NAME, DB_PORT, DB_USER, DB_PWD } = process.env

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660478387652_5185';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单  'http://localhost:3000'
    domainWhiteList: [],
  };
  // 允许跨域的方法
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: DB_HOST,
      // 端口号
      port: DB_PORT,
      // 用户名
      user: DB_USER,
      // 密码
      password: DB_PWD,
      // 数据库名
      database: DB_NAME,
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  // 允许跨域的方法
  config.cors = {
    origin: '*',
    allowMethods: 'GET,PUT,POST,DELETE,PATCH',
  };

  return {
    ...config,
    ...userConfig,
  };
};
