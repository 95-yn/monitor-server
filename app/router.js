'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  console.log(controller);
  router.get('/', controller.home.index);
  router.post('/performance/upload', controller.performance.upload);
};
