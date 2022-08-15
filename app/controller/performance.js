'use strict';

const Controller = require('egg').Controller;

class PerformanceController extends Controller {
  async upload() {
    const { ctx } = this;
    console.log(ctx.request.body);
    // ctx.body = 'ok';
    // const params = ctx.request.body;
    // const res = {
    //   msg: 'ok',
    //   data: {
    //     id: '3',
    //     username: params.username,
    //     nickname: params.nickname,
    //     sex: params.sex,
    //     ...params,
    //   },
    // };
    ctx.body = 'ok';
  }
}

module.exports = PerformanceController;
