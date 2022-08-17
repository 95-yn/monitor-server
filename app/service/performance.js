'use strict';

const Service = require('egg').Service;

class PerformanceService extends Service {
  async upload(row) {
    const {
      url,
      prevUrl,
      title,
      globalData,
      time,
      dnsParseTime,
      tcpLinkTime,
      reqTime,
      domParseTime,
      domReadyTime,
      loadTime,
      fpTime,
      fcpTime,
      timeToInteract,
      firstByte,
      timeToFirstByte,
      navigationType,
    } = row;
    console.log(row);
    const result = await this.app.mysql.insert('performance', {
      url,
      prevUrl,
      globalData,
      title,
      dnsParseTime,
      tcpLinkTime,
      reqTime,
      domParseTime,
      domReadyTime,
      loadTime,
      fpTime,
      fcpTime,
      timeToInteract,
      firstByte,
      timeToFirstByte,
      navigationType,
      occurTime: new Date(time),
    });

    return result;
  }

  async getList(params = {}) {
    const { url,page =1,pageSize =10 } = params;
    let content = []; //参数
    let sql = 'select * from performance';
    if (url) {
      sql += ' where url like ?';
      content.push('%' + url + '%');
    }
    sql += ' limit ?,?';
    content.push((page - 1) * pageSize, parseInt(pageSize));
    const result = await this.app.mysql.query(sql, content);
    return {
      code: 200,
      message: 'ok',
      result: { page: page, pageSize: pageSize, pageCount: 3, list: result },
      type: 'success',
    };
  }
}
module.exports = PerformanceService;
