'use strict';
var morningstar = require("morningstar");
var portfolioGlobalMapChart = require('./js/global-map-chart.js');
morningstar.asterix.register('portfolioGlobalMapChart');
morningstar.components.portfolioGlobalMapChart = portfolioGlobalMapChart;
module.exports = portfolioGlobalMapChart;

