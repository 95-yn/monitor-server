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
      host: '139.198.176.106',
      // 端口号
      port: '3306',
      // 用户名
      user: 'monitor',
      // 密码
      password: '6iZrdh2ZYFTtSMP2',
      // 数据库名
      database: 'monitor',
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
