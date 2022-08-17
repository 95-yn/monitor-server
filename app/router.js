'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // console.log(server);
  router.post('/performance/upload', controller.performance.upload);
  router.get('/performance/getList', controller.performance.getList);
};
