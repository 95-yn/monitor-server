'use strict';

const Controller = require('egg').Controller;

class PerformanceController extends Controller {
  async upload() {
    const { ctx } = this;
    const result = await this.ctx.service.performance.upload(ctx.request.body);
    ctx.body = result;
  }

  async getList() {
    const { ctx } = this;
    console.log(ctx.request);
    const result = await this.ctx.service.performance.getList(ctx.request.query);
    ctx.body = result;
  }

}

module.exports = PerformanceController;
