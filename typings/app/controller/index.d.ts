// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportPerformance = require('../../../app/controller/performance');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    performance: ExportPerformance;
  }
}
