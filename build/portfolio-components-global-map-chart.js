(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("morningstar"), require("portfolio-components-chart-base"));
	else if(typeof define === 'function' && define.amd)
		define("portfolio-components-global-map-chart", ["morningstar", "portfolio-components-chart-base"], factory);
	else if(typeof exports === 'object')
		exports["portfolio-components-global-map-chart"] = factory(require("morningstar"), require("portfolio-components-chart-base"));
	else
		root["portfolio-components-global-map-chart"] = factory(root["morningstar"], root["portfolio-components-chart-base"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var morningstar = __webpack_require__(1);
	var portfolioGlobalMapChart = __webpack_require__(2);
	morningstar.asterix.register('portfolioGlobalMapChart');
	morningstar.components.portfolioGlobalMapChart = portfolioGlobalMapChart;
	module.exports = portfolioGlobalMapChart;
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    "use strict";
	    //var d3 = require("d3");
	    var CB = __webpack_require__(3);
	    var S = CB.S;
	    var T = CB.T;
	    var E = CB.E;
	
	    var map_direct = __webpack_require__(4);
	    var map_office = __webpack_require__(5);
	
	    var GlobalMap = CB.ChartBase.extend({
	
	        constructor: function() {
	            this.init();
	        },
	
	        defaultOption: function() {
	            return {
	                className: "global_map_chart",
	                margin: {
	                    top: 0,
	                    left: 0,
	                    right: 0,
	                    bottom: 30
	                },
	
	                //direct or office
	                mapType: "direct",
	                map: {
	                    direct: map_direct,
	                    office: map_office
	                },
	
	                //==============================
	
	                labelRegions: "{num} Region(s)",
	
	                numberFormat: 2,
	                effectDuration: 100,
	
	                //==============================
	
	                region: {
	                    cursor: "pointer",
	                    stroke: "#ffffff",
	                    "stroke-width": 0.8,
	                    opacity: null
	                },
	
	                region_highlight: {
	                    stroke: "#666666"
	                },
	
	                region_offfocus: {
	                    opacity: 0.4
	                },
	
	                //==============================
	
	                range_bar: {
	                    height: 4,
	                    padding: 5,
	                    maxWidth: 500
	                },
	
	                range_icon: {
	                    width: 23,
	                    height: 23,
	                    display: "none",
	                    d: "M17,13L11.5,21,6,13H6A6.5,6.5,0,1,1,17,13h0Z"
	                },
	
	                range_rect: {
	                    opacity: null,
	                    cursor: "pointer"
	                },
	
	                range_text: {
	                    cursor: "pointer",
	                    dy: "1em",
	                    "font-size": "14px",
	                    "font-weight": null,
	                    display: null
	                },
	
	                range_text_highlight: {
	                    "font-weight": "bold"
	                },
	
	                range_rect_offfocus: {
	                    opacity: 0.4
	                },
	
	                rangeList: [{
	                    label: "-100",
	                    labelStyle: {
	                        dx: 0,
	                        "text-anchor": "start"
	                    },
	                    isMatch: function(v) {
	                        return v < 0;
	                    },
	                    color: "#bd335c"
	                }, {
	                    label: "0",
	                    labelStyle: {
	                        dx: 0.5,
	                        "text-anchor": "middle"
	                    },
	                    isMatch: function(v) {
	                        return v === 0;
	                    },
	                    color: "#cccccc"
	                }, {
	                    label: "20",
	                    labelStyle: {
	                        dx: 1,
	                        "text-anchor": "end"
	                    },
	                    isMatch: function(v) {
	                        return v <= 20;
	                    },
	                    color: "#b2cfe0"
	                }, {
	                    label: "40",
	                    labelStyle: {
	                        dx: 1,
	                        "text-anchor": "end"
	                    },
	                    isMatch: function(v) {
	                        return v <= 40;
	                    },
	                    color: "#7fafcb"
	                }, {
	                    label: "60",
	                    labelStyle: {
	                        dx: 1,
	                        "text-anchor": "end"
	                    },
	                    isMatch: function(v) {
	                        return v <= 60;
	                    },
	                    color: "#4c8fb7"
	                }, {
	                    label: "80",
	                    labelStyle: {
	                        dx: 1,
	                        "text-anchor": "end"
	                    },
	                    isMatch: function(v) {
	                        return v <= 80;
	                    },
	                    color: "#1970a2"
	                }, {
	                    label: "100",
	                    labelStyle: {
	                        dx: 1,
	                        "text-anchor": "end"
	                    },
	                    isMatch: function(v) {
	                        return v > 80;
	                    },
	                    color: "#04517e"
	                }],
	
	                data: []
	            };
	        },
	
	        init: function() {
	
	            var self = this;
	
	            this.drag = new CB.Drag();
	            this.drag.bind(E.DRAG_BEFORE, function(e, d) {
	                self.tipHide();
	                var cursor = self.zoom.scale > 1 ? "grabbing" : null;
	                CB.Cursor.setCursor(self.svg_main.node(), cursor);
	            }).bind(E.DRAG_START, function(e) {
	                self.zoom.stop();
	            }).bind(E.DRAG_UPDATE, function(e) {
	                var o = this.option;
	                self.zoom.setOffset(o.mouseMoveX, o.mouseMoveY);
	            }).bind(E.DRAG_COMPLETE, function(e) {
	                CB.Cursor.setCursor(self.svg_main.node(), "grab");
	                self.zoom.fixBeyond();
	            });
	
	
	            this.zoom = new CB.Zoom();
	            this.zoom.bind(E.ZOOM_UPDATE, function(e, d) {
	                self.zoomUpdate();
	            }).bind(E.ZOOM_COMPLETE, function(e) {
	                var cursor = this.scale > 1 ? "grab" : null;
	                CB.Cursor.setCursor(self.svg_main.node(), cursor);
	                var zoomOptions = {
	                    level: this.level,
	                    maxLevel: this.option.maxLevel
	                };
	                self.trigger(E.ZOOM_COMPLETE, zoomOptions);
	            });
	
	            this.marquee = new CB.Marquee();
	            this.marquee.bind(E.MARQUEE_COMPLETE, function(e, d) {
	                self.marqueeCompleteHandler(d);
	            });
	
	
	            //=====================================================
	
	            this.bind(E.ITEM_OVER, function(e, d) {
	                self.itemHoverHandler(d, true);
	            }).bind(E.ITEM_OUT, function(e, d) {
	                self.itemHoverHandler(d, false);
	            }).bind(E.ITEM_CLICK, function(e, d) {
	
	            }).bind(E.ITEM_DBLCLICK, function(e, d) {
	
	            });
	
	            //=====================================================
	
	            this.bind(E.MAIN_CLICK, function(e, d) {
	
	            }).bind(E.MAIN_DBLCLICK, function(e, d) {
	                self.tipHide();
	
	                var offset = self.getMainOffset();
	                var px = d.pageX - offset.x;
	                var py = d.pageY - offset.y;
	                self.zoomIn({
	                    x: px,
	                    y: py
	                });
	
	            }).bind(E.MAIN_OVER, function(e, d) {
	
	            }).bind(E.MAIN_OUT, function(e, d) {
	                self.tipHide();
	            }).bind(E.MAIN_CONTEXTMENU, function(e, d) {
	                self.tipHide();
	            });
	
	            return this;
	        },
	
	        //======================================================================================
	
	        clean: function() {
	
	            if (this.drawType === E.RESIZE) {
	                return this;
	            }
	
	            var cList = [this.svg_region_list, this.svg_region_hover_list];
	
	            for (var i = 0, l = cList.length; i < l; i++) {
	                var item = cList[i];
	                if (item) {
	                    item.remove();
	                }
	            }
	
	            this.zoom.reset();
	
	            return this;
	        },
	
	        //======================================================================================
	
	        initData: function() {
	
	            this.data = this.getData();
	
	            if (this.drawType === E.RESIZE) {
	                return this;
	            }
	
	            var getRegionFromData = function(id) {
	                if (T.islist(this.data)) {
	                    for (var i = 0, l = this.data.length; i < l; i++) {
	                        var item = this.data[i];
	                        if (item.id === id) {
	                            return item;
	                        }
	                    }
	                }
	                return {};
	            };
	
	            var initRegionData = function() {
	                this.dataCache = {};
	                this.regionList = [];
	
	                var o = this.option;
	                var mapList = o.map[o.mapType];
	                if (!T.islist(mapList)) {
	                    return;
	                }
	
	                for (var i = 0, l = mapList.length; i < l; i++) {
	                    var map = mapList[i];
	                    var regionData = getRegionFromData.call(this, map.id);
	                    var region = $.extend(regionData, map);
	                    region.value = T.tonum(region.value);
	
	                    var range = this.getRegionRange(region.value);
	                    region.range = range;
	                    region.color = region.color || range.color;
	
	                    this.dataCache[region.id] = region;
	                    this.regionList.push(region);
	                }
	            };
	
	            initRegionData.call(this);
	
	            var initRangeData = function() {
	                var rangeList = this.getRangeList();
	                for (var i = 0, l = rangeList.length; i < l; i++) {
	                    var range = rangeList[i];
	                    range.regions = this.getRangeRegions(range);
	                }
	            };
	
	            initRangeData.call(this);
	
	            return this;
	        },
	
	        drawMain: function() {
	
	            this.clean();
	
	            this.initData();
	
	            this.drawList();
	
	            this.zoomInit();
	
	            this.bindEvents();
	            //done events
	            this.drawComplete();
	            return this;
	        },
	
	        //======================================================================================
	
	        drawList: function() {
	
	            this.drawRegionMap();
	
	            this.drawRangeBar();
	
	            return this;
	        },
	
	        drawRegionMap: function() {
	
	            this.svg_region_map = this.selectBy(this.svg_main, '.region_map', "g", {
	                "class": "region_map",
	                "shape-rendering": "geometricPrecision"
	            });
	
	            this.svg_region_list = this.selectBy(this.svg_region_map, '.region_list', "g", {
	                "class": "region_list"
	            });
	
	            this.svg_region_hover_list = this.selectBy(this.svg_region_map, '.region_hover_list', "g", {
	                "pointer-events": "none",
	                "class": "region_hover_list"
	            });
	
	            var o = this.option;
	
	            for (var i = 0, l = this.regionList.length; i < l; i++) {
	                var region = this.regionList[i];
	                if (!region || !region.path) {
	                    //console.log(region);
	                    continue;
	                }
	
	                var svg_region = this.selectBy(this.svg_region_list, '.region[data="' + region.id + '"]', "path", {
	                    "class": "region",
	                    data: region.id
	                });
	
	                var svg_region_hover = this.selectBy(this.svg_region_hover_list, '.region_hover[data="' + region.id + '"]', "path", {
	                    "class": "region_hover",
	                    data: region.id
	                });
	
	                var attr_region = $.extend({}, o.region, {
	                    name: region.name,
	                    value: region.value,
	                    fill: region.color,
	                    d: region.path
	                });
	
	                svg_region.attr(attr_region);
	
	                region.elem = svg_region;
	
	                var attr_region_hover = $.extend({}, o.region, o.region_highlight, {
	                    fill: "none",
	                    display: region.highlight ? "null" : "none",
	                    d: region.path
	                });
	
	                svg_region_hover.attr(attr_region_hover);
	
	                region.elem_hover = svg_region_hover;
	
	            }
	
	            this.initRegionMap();
	
	            return this;
	        },
	
	        initRegionMap: function() {
	            var rect = T.getRect(this.svg_region_list.node());
	            //console.log(rect);
	
	            //fit handler
	            this.fit = T.fit(this.main_width - 2, this.main_height - 2, rect.width + rect.x * 2, rect.height + rect.y * 2, 1);
	            var translate = T.translate(this.fit.x + 1, this.fit.y + 1);
	            var scale = T.scale(this.fit.sx, this.fit.sy);
	            var transform = translate + scale;
	            this.svg_region_list.attr({
	                transform: transform
	            });
	            this.svg_region_hover_list.attr({
	                transform: transform
	            });
	
	            //zoom handler
	            translate = T.translate(this.zoom.x, this.zoom.y);
	            scale = T.scale(this.zoom.scale, this.zoom.scale);
	            transform = translate + scale;
	            this.svg_region_map.attr({
	                transform: transform
	            });
	
	            return this;
	        },
	
	        drawRangeBar: function() {
	
	            var svg_range_bar = this.selectBy(this.svg_coordinate, '.range_bar', "g", {
	                "class": "range_bar",
	                "shape-rendering": "geometricPrecision"
	            });
	
	            var svg_range_rect = this.selectBy(svg_range_bar, '.range_rect', "g", {
	                "class": "range_rect"
	            });
	
	            var svg_range_text = this.selectBy(svg_range_bar, '.range_text', "g", {
	                "class": "range_text"
	            });
	
	            var svg_range_icon = this.selectBy(svg_range_bar, '.range_icon', "g", {
	                "class": "range_icon"
	            });
	
	            var o = this.option;
	            var range_bar = o.range_bar;
	            var rangeList = this.getRangeList();
	            var l = rangeList.length;
	
	            var barWidth = Math.min(this.main_width, range_bar.maxWidth);
	            var barX = (this.main_width - barWidth) * 0.5;
	            var barY = this.main_height + range_bar.padding;
	
	            var rangeWidth = barWidth / l;
	            var rangeHeight = range_bar.height;
	
	            var drawRangeRect = function(i, range, svg_range_rect) {
	                var svg_rect = this.selectBy(svg_range_rect, 'rect[data="' + i + '"]', "rect", {
	                    "class": "range",
	                    data: i
	                });
	                var attr_rect = $.extend({}, o.range_rect, {
	                    x: barX + rangeWidth * i,
	                    y: barY,
	                    width: rangeWidth,
	                    height: rangeHeight,
	                    fill: range.color
	                });
	                svg_rect.attr(attr_rect);
	                range.elem = svg_rect;
	            };
	
	            var drawRangeText = function(i, range, svg_range_text) {
	                var svg_text = this.selectBy(svg_range_text, 'text[data="' + i + '"]', "text", {
	                    "class": "range",
	                    data: i
	                });
	                var attr_text = $.extend({}, o.range_text, range.labelStyle, {
	                    x: barX + rangeWidth * i,
	                    y: barY + range_bar.padding,
	                    dx: rangeWidth * range.labelStyle.dx
	                });
	                svg_text.text(range.label).attr(attr_text);
	                range.text = svg_text;
	            };
	
	            var drawRangeIcon = function(i, range, svg_range_icon) {
	                var svg_icon = this.selectBy(svg_range_icon, 'path[data="' + i + '"]', "path", {
	                    data: i
	                });
	                var attr_icon = $.extend({}, o.range_icon, {
	                    fill: range.color
	                });
	                var icon_x = barX + rangeWidth * (i + 0.5) - attr_icon.width * 0.5;
	                var icon_y = barY - attr_icon.height;
	                attr_icon.transform = T.translate(icon_x, icon_y);
	                svg_icon.attr(attr_icon);
	                range.icon = svg_icon;
	            };
	
	            for (var i = 0; i < l; i++) {
	                var range = rangeList[i];
	
	                //=============================================
	                //rect
	                drawRangeRect.call(this, i, range, svg_range_rect);
	
	                //=============================================
	                //text
	                drawRangeText.call(this, i, range, svg_range_text);
	
	                //=============================================
	                //icon
	                drawRangeIcon.call(this, i, range, svg_range_icon);
	            }
	
	            //auto hide overlay text
	            //remove it since Firefox does not works well
	            /*
	            this.textOverlayHandler(svg_range_text, {
	                type: "x",
	                space: 0,
	                min: barX,
	                max: barX + barWidth
	            }, true);
	            */
	
	            return this;
	        },
	
	        //======================================================================================
	
	        bindEvents: function() {
	            var self = this;
	
	            //is global_map item
	            var isItem = function(e) {
	                return T.inlist(e.className, ["range", "region"]);
	            };
	
	            var eventHandler = {};
	
	            eventHandler[E.MOUSEOVER] = function(e) {
	                if (isItem(e) && !self.zoom.playing) {
	                    self.trigger(E.ITEM_OVER, e);
	                }
	            };
	
	            eventHandler[E.MOUSEOUT] = function(e) {
	                if (isItem(e)) {
	                    self.trigger(E.ITEM_OUT, e);
	                }
	            };
	
	            eventHandler[E.MOUSEENTER] = function(e) {
	                self.trigger(E.MAIN_OVER, e);
	            };
	
	            eventHandler[E.MOUSELEAVE] = function(e) {
	                self.trigger(E.MAIN_OUT, e);
	            };
	
	            eventHandler[E.MOUSEDOWN] = function(e) {
	                if (self.zoom.scale <= 1 || self.marquee.enabled || !self.dragEnabled) {
	                    return;
	                }
	                self.drag.start(e);
	            };
	
	            eventHandler[E.CLICK] = function(e) {
	                if (isItem(e)) {
	                    self.trigger(E.ITEM_CLICK, e);
	                }
	            };
	
	            eventHandler[E.DBLCLICK] = function(e) {
	                if (isItem(e)) {
	                    self.trigger(E.ITEM_DBLCLICK, e);
	                } else {
	                    self.trigger(E.MAIN_DBLCLICK, e);
	                }
	                return false;
	            };
	            eventHandler[E.CONTEXTMENU] = function(e) {
	                self.trigger(E.MAIN_CONTEXTMENU, e);
	                //return false;
	            };
	
	            var type = [E.MOUSEOVER, E.MOUSEOUT, E.MOUSEENTER, E.MOUSELEAVE, E.MOUSEDOWN];
	            type = [E.CLICK, E.DBLCLICK, E.CONTEXTMENU].concat(type);
	
	            var main = $(this.svg_main.node()).unbind();
	            main.bind(type.join(S.SPACE), function(e) {
	                //console.log(e);
	                var dom = $(e.target);
	                e.className = dom.attr(S.CLASS);
	                e.data = dom.attr(S.DATA);
	                var handler = eventHandler[e.type];
	                if (handler) {
	                    return handler(e);
	                }
	            });
	
	            // fix drag issue for zooming in FF, can NOT add "select" event in chrome
	            main.bind("drop drag dragstart dragend dragenter dragleave dragover", function(e) {
	                return false;
	            });
	
	            //==================================================================
	            //axis 
	            var coordinate = $(this.svg_coordinate.node()).unbind();
	            coordinate.bind([E.CLICK, E.MOUSEOVER, E.MOUSEOUT].join(S.SPACE), function(e) {
	                //console.log(e);
	                var dom = $(e.target);
	                e.className = dom.attr(S.CLASS);
	                e.data = dom.attr(S.DATA);
	                var handler = eventHandler[e.type];
	                if (handler) {
	                    return handler(e);
	                }
	            });
	
	            return this;
	        },
	
	        //==================================================
	        //hover
	
	        itemHoverHandler: function(e, hover) {
	            if (e.className === "range") {
	                this.rangeHoverHandler(e, hover);
	                return this;
	            }
	            this.regionHoverHandler(e, hover);
	            this.rangeIconHandler(e.data, hover);
	            return this;
	        },
	
	        rangeHoverHandler: function(e, hover) {
	            var data = this.getRangeByIndex(e.data);
	            if (!data) {
	                return this;
	            }
	
	            this.hoveringRange = hover ? data : null;
	
	            if (data === this.focusRange) {
	                return this;
	            }
	
	            this.tipShowRange(e, data, hover);
	            this.hoverRange(data, hover);
	            return this;
	        },
	
	        regionHoverHandler: function(e, hover) {
	            var data = this.getRegionById(e.data);
	            if (!data) {
	                return this;
	            }
	
	            this.hoveringRegion = hover ? data : null;
	
	            if (data === this.focusRegion) {
	                return this;
	            }
	
	            this.tipShowRegion(e, data, hover);
	            this.hoverRegion(data, hover);
	            return this;
	        },
	
	        //======================================================================================
	        //highlight
	        highlight: function(ids) {
	            if (!this.drawCompleted) {
	                return this;
	            }
	            for (var i = 0, l = this.regionList.length; i < l; i++) {
	                var item = this.regionList[i];
	                var selected = T.inlist(item.id, ids);
	                item.highlight = selected ? true : false;
	                this.hoverRegion(item, item.highlight);
	            }
	
	            return this;
	        },
	
	        hoverRegion: function(item, hover) {
	
	            var o = this.option;
	
	            item.elem_hover.attr("display", "none");
	
	            var status = {};
	            if (hover || item.highlight || item.range === this.focusRange) {
	
	                item.elem_hover.attr("display", null);
	
	            } else if (item.offfocus) {
	                status = o.region_offfocus;
	            }
	
	            var attr = $.extend({}, o.region, status);
	            this.showEffect(item.elem, attr);
	
	            //can NOT append, the IE events will be wrong
	
	            return this;
	        },
	
	        rangeIconHandler: function(id, hover) {
	
	            var item = this.getRegionById(id);
	            if (!item) {
	                return this;
	            }
	
	            var display = "none";
	            if (hover && this.hoveringRange !== item.range && this.focusRegion !== item) {
	                display = null;
	            }
	
	            //show range icon
	            this.showEffect(item.range.icon, {
	                display: display
	            });
	
	            return this;
	        },
	
	
	        hoverRange: function(item, hover) {
	
	            var o = this.option;
	
	            var status = hover ? o.range_text_highlight : {};
	            var attr = $.extend({}, o.range_text, status);
	
	            this.showEffect(item.text, attr);
	
	            //hover range's region
	            this.hoverRangeRegions(item, hover);
	
	            return this;
	        },
	
	        hoverRangeRegions: function(item, hover) {
	            if (!T.islist(item.regions)) {
	                return this;
	            }
	
	            var regions = item.regions;
	            for (var i = 0, l = regions.length; i < l; i++) {
	                var region = regions[i];
	                this.hoverRegion(region, hover);
	            }
	
	            return this;
	        },
	
	        //======================================================================================
	
	        offfocusRegion: function(item, offfocus) {
	
	            var o = this.option;
	
	            var getRegionAttr = function(item, region, offfocus) {
	                var status = offfocus ? o.region_offfocus : {};
	
	                //handler highlight
	                if (region.highlight) {
	                    region.offfocus = false;
	                    status = {};
	                }
	
	                var attr = $.extend({}, o.region, status);
	
	                return attr;
	            };
	
	            var regionList = this.regionList;
	            for (var i = 0, l = regionList.length; i < l; i++) {
	                var region = regionList[i];
	
	                region.offfocus = offfocus;
	
	                if (item === region) {
	                    if (offfocus) {
	                        region.offfocus = false;
	                    }
	                    continue;
	                }
	
	                var attr = getRegionAttr(item, region, offfocus);
	
	                this.showEffect(region.elem, attr);
	
	                if (region.highlight) {
	                    region.elem_hover.attr("display", null);
	                } else {
	                    region.elem_hover.attr("display", "none");
	                }
	
	            }
	
	            return this;
	        },
	
	        offfocusRange: function(item, offfocus) {
	
	            var o = this.option;
	
	            var status = offfocus ? o.range_rect_offfocus : {};
	            var attr = $.extend({}, o.range_rect, status);
	
	            var rangeList = this.getRangeList();
	            for (var i = 0, l = rangeList.length; i < l; i++) {
	                var range = rangeList[i];
	                if (item === range) {
	                    range.offfocus = false;
	                    continue;
	                }
	                range.offfocus = offfocus;
	                this.showEffect(range.elem, attr);
	            }
	
	            this.offfocusRangeRegions(item, offfocus);
	
	            return this;
	        },
	
	        offfocusRangeRegions: function(item, offfocus) {
	
	            var o = this.option;
	            var status = offfocus ? o.region_offfocus : {};
	            var attr = $.extend({}, o.region, status);
	
	            var regions = item.regions;
	            var regionList = this.regionList;
	            for (var i = 0, l = regionList.length; i < l; i++) {
	                var region = regionList[i];
	                if (T.inlist(region, regions) || region.highlight) {
	                    region.offfocus = false;
	                    continue;
	                }
	                region.offfocus = offfocus;
	                this.showEffect(region.elem, attr);
	            }
	
	            return this;
	        },
	
	        //======================================================================================
	        //focus
	        setFocusRegion: function(id) {
	            this.tipHide();
	            this.rangeIconHandler(id, false);
	
	            var data = this.getRegionById(id);
	            if (!data) {
	                return this;
	            }
	
	            this.focusRegion = data;
	
	            this.offfocusRegion(data, true);
	            this.hoverRegion(data, true);
	            return this;
	        },
	
	        setFocusRange: function(index) {
	            this.tipHide();
	
	            var data = this.getRangeByIndex(index);
	            if (!data) {
	                return this;
	            }
	
	            this.focusRange = data;
	
	            this.offfocusRange(data, true);
	            this.hoverRange(data, true);
	
	            return this;
	        },
	
	        unFocus: function() {
	
	            var focusRegion = this.focusRegion;
	            if (focusRegion) {
	                this.offfocusRegion(focusRegion, false);
	                this.focusRegion = null;
	                if (!focusRegion.highlight) {
	                    this.hoverRegion(focusRegion, false);
	                }
	            }
	
	            var focusRange = this.focusRange;
	            if (focusRange) {
	                this.offfocusRange(focusRange, false);
	                this.focusRange = null;
	                if (!focusRange.highlight) {
	                    this.hoverRange(focusRange, false);
	                }
	            }
	
	            return this;
	        },
	
	        //======================================================================================
	
	        tipShowRegion: function(e, data, hover) {
	
	            if (!hover) {
	                this.tipHide();
	                return this;
	            }
	
	            this.tipInit();
	
	            if (!data) {
	                this.tip.hideNow();
	                return this;
	            }
	
	            var offset = this.getMainOffset();
	
	            var bound = data.elem.node().getBoundingClientRect();
	
	            var margin = this.option.margin;
	
	            var targetRect = {
	                x: bound.left + margin.left - offset.x,
	                y: bound.top + margin.top - offset.y,
	                width: bound.width,
	                height: bound.height
	            };
	
	            var value = this.numberFormat(data.value, {
	                numberSymbol: "%"
	            });
	
	            var option = {
	                animate: null,
	                holder: {
	                    exact: true,
	                    x: 0,
	                    y: 0,
	                    width: this.width,
	                    height: this.height
	                },
	                target: targetRect,
	                back: {
	                    style: {
	                        opacity: 0.8,
	                        stroke: "none",
	                        fill: data.color
	                    }
	                },
	                text: {
	                    style: {
	                        fill: "#ffffff"
	                    }
	                },
	                data: [{
	                    value: data.name,
	                    style: {
	                        "font-weight": "bold"
	                    }
	                }, {
	                    value: value,
	                    style: {
	                        y: 45
	                    }
	                }]
	            };
	            //$.d(option);
	            this.tip.show(option);
	
	            return this;
	        },
	
	        tipShowRange: function(e, data, hover) {
	            if (!hover) {
	                this.tipHide();
	                return this;
	            }
	
	            this.tipInit();
	
	            if (!data) {
	                this.tip.hideNow();
	                return this;
	            }
	
	            var rect = T.getRect(data.elem.node());
	            var margin = this.option.margin;
	
	            var targetRect = {
	                x: rect.x + margin.left,
	                y: rect.y + margin.top,
	                width: rect.width,
	                height: rect.height
	            };
	
	            var num = data.regions.length;
	            var value = T.replace(this.option.labelRegions, {
	                num: num
	            });
	            value = value.replace("(s)", num === 1 ? "" : "s");
	
	            var option = {
	                animate: null,
	                position: "top",
	                holder: {
	                    exact: true,
	                    x: 0,
	                    y: 0,
	                    width: this.width,
	                    height: this.height
	                },
	                target: targetRect,
	                back: {
	                    style: {
	                        opacity: 0.8,
	                        stroke: "none",
	                        fill: data.color
	                    }
	                },
	                text: {
	                    style: {
	                        fill: "#ffffff"
	                    }
	                },
	                data: [{
	                    value: value,
	                    style: {}
	                }]
	            };
	            //$.d(option);
	            this.tip.show(option);
	
	            return this;
	        },
	
	        tipInit: function() {
	            if (!this.tip) {
	                this.svg_tip = this.svg_top.append("g").attr({
	                    "class": "tip"
	                });
	                this.tip = new CB.Tip(this.svg_tip);
	            }
	            return this;
	        },
	
	        tipHide: function() {
	            if (this.tip) {
	                this.tip.hide();
	            }
	            return this;
	        },
	
	        //======================================================================================
	        zoomInit: function() {
	            this.zoom.setOption({
	                width: this.main_width,
	                height: this.main_height
	            });
	            return this;
	        },
	
	        zoomIn: function() {
	            if (!this.drawCompleted) {
	                return this;
	            }
	            this.dragEnabled = true;
	            this.zoom.zoomIn.apply(this.zoom, arguments);
	            return this;
	        },
	
	        zoomOut: function() {
	            if (!this.drawCompleted) {
	                return this;
	            }
	            this.dragEnabled = true;
	            this.zoom.zoomOut.apply(this.zoom, arguments);
	            return this;
	        },
	
	        zoomUpdate: function() {
	
	            //set draw type
	            this.drawType = E.RESIZE;
	
	            this.drawList();
	
	            //reset draw type
	            this.drawType = "";
	
	            return this;
	        },
	
	        marqueeZoom: function() {
	            if (!this.drawCompleted) {
	                return this;
	            }
	            this.marqueeClean();
	            this.dragEnabled = true;
	            var offset = this.getMainOffset();
	            this.marquee.start({
	                holder: this.svg_main,
	                x: offset.x,
	                y: offset.y,
	                width: this.main_width,
	                height: this.main_height
	            });
	
	            return this;
	        },
	
	        marqueeCompleteHandler: function(d) {
	            var px = d.x + d.width * 0.5;
	            var py = d.y + d.height * 0.5;
	            var scale = this.zoom.scale;
	            if (d.width && d.height) {
	                var sw = this.main_width / d.width;
	                var sh = this.main_height / d.height;
	                var s = Math.min(sw, sh);
	                scale += s - 1;
	            }
	            this.zoomIn({
	                x: px,
	                y: py,
	                scale: scale,
	                toCenter: true
	            });
	            return this;
	        },
	
	        marqueeClean: function() {
	            this.marquee.clean();
	            return this;
	        },
	
	        pointerHandler: function() {
	            this.dragEnabled = false;
	            CB.Cursor.setCursor(this.svg_main.node(), "default");
	        },
	
	        //======================================================================================
	
	        getMainOffset: function() {
	            var margin = this.option.margin;
	            //every time should update, do not use this.offset
	            var offset = this.container.offset();
	            var main_offset = {
	                x: offset.left + margin.left,
	                y: offset.top + margin.top
	            };
	            return main_offset;
	        },
	
	        getRegionRange: function(value) {
	            var rangeList = this.getRangeList();
	            var range;
	            for (var i = 0, l = rangeList.length; i < l; i++) {
	                range = rangeList[i];
	                if (typeof(range.isMatch) === "function" && range.isMatch(value)) {
	                    return range;
	                }
	            }
	            return range;
	        },
	
	        getRangeRegions: function(range) {
	            var regions = [];
	            for (var i = 0, l = this.regionList.length; i < l; i++) {
	                var region = this.regionList[i];
	                if (region.range === range) {
	                    regions.push(region);
	                }
	            }
	            return regions;
	        },
	
	        getRangeByIndex: function(index) {
	            var rangeList = this.getRangeList();
	            var range = rangeList[index];
	            return range;
	        },
	
	        getRegionById: function(id) {
	            return this.dataCache[id];
	        },
	
	        getRangeList: function() {
	            if (!this.option) {
	                this.option = this.getOption();
	            }
	            return this.option.rangeList;
	        },
	
	        showEffect: function(elem, attr) {
	            if (elem) {
	                //elem.attr(attr);
	                elem.transition().duration(this.option.effectDuration).attr(attr);
	            }
	            return this;
	        },
	
	        //class print
	        toString: function() {
	            return "[object GlobalMap]";
	        }
	    });
	
	    return GlobalMap;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    "use strict";
	
	    /*
	    var map = require("./map_direct.html");
	
	    var mapList = [];
	
	    var getPath = function(elem) {
	        var path = "";
	        elem.children().each(function(index, dom) {
	            var nodeName = dom.nodeName.toLowerCase();
	            if (nodeName === "path") {
	                path += $(dom).attr("d");
	                return;
	            }
	        });
	        path = path.replace(/\n/g, "");
	        path = path.replace(/(\s)+/g, "$1");
	        return path;
	    };
	
	    var elem = $("<div>").html(map).find("g");
	
	    elem.each(function(index, dom) {
	        var elem = $(dom);
	        var map = {
	            id: elem.attr("id"),
	            name: elem.attr("name"),
	            path: getPath(elem)
	        };
	        mapList.push(map);
	    });
	
	    console.log(JSON.stringify(mapList));
	    */
	
	    /* jshint ignore:start */
	
	    var mapList = [{
	        "id": "1",
	        "name": "United States",
	        "path": "M119.472,75.404l-8.373,8.373h-8.859v10.936l-10.055,10.055v5.602l-3.463,3.463v-5.115l-3.308-3.309H74.802 v14.725l-14.723-14.725H48.028l-9.634-9.633V75.404h52.263v11.611l11.612-11.611H119.472zM30.769,65.611l-1.085,1.084l-8.274-8.273l-9.342,9.342H8.6v-5.24l5.386-5.387L0,43.15V28.83l10.914-10.914 h14.192v42.031L30.769,65.611z"
	    }, {
	        "id": "2",
	        "name": "Canada",
	        "path": "M104.094,47.201l10.487-10.486L91.53,13.664l6.142-6.143H53.84L43.447,17.916H25.106v42.031l5.663,5.664 l-1.085,1.084l8.709,8.709h37.702l7.935-7.935l13.087,13.088l5.152-5.152h17.203l6.412-6.412L104.094,47.201z M89.376,34.789V57.65 L71.711,39.984l9.542-9.541v-4.064h16.532L89.376,34.789z"
	    }, {
	        "id": "3",
	        "name": "Latin America",
	        "path": "M97.962,121.389h-4.124l-4.512-4.512h4.124L97.962,121.389zM104.785,123.812h-4.658l-0.025,0.025l-0.026-0.025l-1.789-1.789h4.708L104.785,123.812zM142.56,162.115v19.205l-16.59,16.59v4.402l-21.293,21.293v8.408h-2.258v15.135h-5.895v0.01l-0.009-0.01 l-8.822-8.822v-27.072l4.678-4.678V183.32l-10.882-10.883v-20.5l12.582-12.582H72.413h-0.001l-34.018-34.018v-9.562l9.634,9.633 h12.051l14.723,14.725v6.904h4.728l5.666-5.666v12.273h4.86l0.021-0.019v0.019v4.262h5.441v-3.44l4.821-4.82h9.659h0.091 L142.56,162.115z"
	    }, {
	        "id": "4",
	        "name": "United Kingdom",
	        "path": "M230.958,60.969l-8.751,8.75V52.217L230.958,60.969z"
	    }, {
	        "id": "5",
	        "name": "Eurozone",
	        "path": "M269.9,20.01v14.318l-8.195,8.195V20.01H269.9zM256.952,86.209v4.174l-4.176-4.174H256.952zM219.699,63.607h-5.87l5.87-5.871V63.607zM267.976,44.154v8.81h-10.849l8.811-8.81H267.976zM256.781,75.473h-4.245h-2.826l-3.711-3.711h4.854V59.24h-13.056l-13.823,13.822l3.657,3.658v6.367h-8.318 v7.328l6.438,6.44l14.266-14.268l6.226,6.225v3.918l4.242-4.244l-5.924-5.922l2.285-2.285h5.65h0.039v-2.764h6.287L256.781,75.473z M236.185,78.756l3.281-3.283l3.282,3.283H236.185z"
	    }, {
	        "id": "6",
	        "name": "Europe - ex Euro",
	        "path": "M126.683,0h7.277l9.97,9.971v20.857l-5.616,5.615l-16.458-16.457h-3.648l-5.756-5.756L126.683,0zM158.129,39.119l-5.237,5.236l-2.704-2.703v-5.199h5.275L158.129,39.119zM261.705,24.092v11.221l-18.534,18.535h-0.011V47.17l-5.372,5.373V41.568l17.477-17.477H261.705zM244.682,53.848l-5.393,5.393h-0.027v-5.393h3.909H244.682zM242.748,78.756h-6.564l3.281-3.283L242.748,78.756z"
	    }, {
	        "id": "7",
	        "name": "Europe - Emerging",
	        "path": "M433.791,28.162l-10.257-10.258h-21.434L391.729,7.533h-50.693L322.63,25.938l-13.059-13.057 l-19.372,19.373L277.956,20.01H269.9v14.318l3.951,3.951l-5.876,5.875v8.81h-10.849l-6.274,6.275v12.521h-4.854l3.711,3.711h7.071 l2.042,2.043h-6.287v2.764v0.039l-0.039-0.039h-5.65l2.848,2.848l3.082,3.082h4.176l6.586,6.586h9.145h14.668v-6.586h-20.838V78.01 h12.67l0.007-0.006l0.007,0.006l4.535,4.535h12.42v-4.051h6.729v-9.535l5.508-5.508h5.135l9.902-9.902h21.329l11.403,11.402h0.203 h15.974l2.377-2.377h15.974l12.068-12.068l18.396,18.396l4.776-4.775l-10.577-10.578l7.162-7.162l19.001,19.002l28.808-28.809 v-8.418H433.791z"
	    }, {
	        "id": "8",
	        "name": "Africa",
	        "path": "M268.537,118.285v-14.107h-35.783l-6.944-6.943l-30.526,30.525v11.234l14.998,14.998h23.556l5.006,5.006 v27.521l3.806,3.807v22.939h14.44l16.196-16.197v-6.762l7.569-7.57v-25.238l13.447-13.447L268.537,118.285zM285.665,183.959l8.148-8.148v13.109l-8.148,8.148V183.959z"
	    }, {
	        "id": "9",
	        "name": "Middle East",
	        "path": "M304.245,97.668l-4.873-4.873h-26.689v5.764l-5.62,5.619h1.475v4.549l22.017,22.018l-0.007,7.988 l21.371-21.371l-3.991-3.99h-9.087l-7.401-7.402v-9.086l16.488,16.488h8.186V97.668H304.245z"
	    }, {
	        "id": "10",
	        "name": "Japan",
	        "path": "M428.27,104.584h-13.446l26.864-26.863v13.445L428.27,104.584z"
	    }, {
	        "id": "11",
	        "name": "Australasia",
	        "path": "M441.351,222.061l16.785-16.785v14.012l-9.779,9.779L441.351,222.061zM422.154,172.734l14.96,14.961v24.949l-14.276,14.277l-13.384-13.385h-33.885v-19.189l21.613-21.613 H422.154z"
	    }, {
	        "id": "12",
	        "name": "Asia - Developed",
	        "path": "M394.715,120.984l-2.201-2.199l2.201-2.189l2.201,2.197L394.715,120.984zM372.633,156.557v-4.744l2.373,2.373L372.633,156.557zM399.343,116.596l2.201,2.197l-2.201,2.191l-2.201-2.199L399.343,116.596zM397.905,100.24h4.011v4.01L397.905,100.24zM360.319,119.375v19.881l-9.941-9.939L360.319,119.375z"
	    }, {
	        "id": "13",
	        "name": "Asia - Emerging",
	        "path": "M299.372,92.795h-12.021v-6.586h0.043l-0.043-0.043l-3.619-3.621h12.42v7.029L299.372,92.795zM376.202,154.584l17.555-17.555v17.555H376.202zM394.715,154.584h18.353l-9.176,9.178L394.715,154.584zM327.199,159.912l7.046-7.045v7.045H327.199zM383.156,167.154h-9.292l-14.652-14.652h9.09l-3.857-3.857h5.021l3.167,3.168v4.744v0.074L383.156,167.154z M398.603,124.785l9.289,9.289l-9.289,9.289V124.785zM438.809,154.584l-12.707,12.707l-0.058-0.057l-12.649-12.65H438.809zM421.149,68.902l-18.396-18.396l-12.068,12.068h-15.974l-2.377,2.377H356.36l-0.102,0.102l-0.102-0.102 l-11.403-11.402h-21.329l-9.902,9.902h-5.135l-5.508,5.508v9.535h2.719h0.035v0.035v8.66l10.479,10.479v15.703h2.093l4.995,4.994 v38.129l37.119-37.119v19.881l5.786,5.787l6.603-6.604l6.514-6.514l-10.431-10.432h23.531V97.728l1.423-1.422l0.113-0.113 l4.047,4.047h4.011V88.136L421.149,68.902z"
	    }];
	
	    return mapList;
	
	    /* jshint ignore:end */
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    "use strict";
	
	
	    /* jshint ignore:start */
	
	    var mapList = [{
	        "id": "1",
	        "name": "North America",
	        "path": "M125.9,69l-21.8-21.8l10.5-10.5L91.5,13.7l6.1-6.1H53.8L43.4,17.9H25.1H10.9L0,28.8v14.3l14,14l-5.4,5.4v5.2h3.5l9.3-9.3l8.3,8.3l8.7,8.7h0v20.4l9.6,9.6h12.1l14.7,14.7v-14.7h10.6l3.3,3.3v5.1l3.5-3.5v-5.6l10.1-10.1V83.8h8.9l8.4-8.4h0L125.9,69z M81.3,30.4v-4.1h16.5l-8.4,8.4v22.9L71.7,40L81.3,30.4z M90.7,87V75.4H76.1l7.9-7.9l13.1,13.1L90.7,87z"
	    }, {
	        "id": "2",
	        "name": "Australasia",
	        "path": "M441.4,222.1l16.8-16.8v14l-9.8,9.8L441.4,222.1zM422.2,172.7l15,15v24.9l-14.3,14.3l-13.4-13.4h-33.9v-19.2l21.6-21.6H422.2z"
	    }, {
	        "id": "3",
	        "name": "Euope Emerging",
	        "path": "M433.8,28.2l-10.3-10.3h-21.4L391.7,7.5H341l-18.4,18.4l-13.1-13.1l-19.4,19.4L278,20h-8.1v14.3l4,4l-5.9,5.9V53h-10.8l-6.3,6.3v12.5H246l3.7,3.7h7.1l2,2h-6.3v2.8v0l0,0h-5.6l2.8,2.8l3.1,3.1h4.2l6.6,6.6h9.1h14.7v-6.6h-20.8V78h12.7l0,0l0,0l4.5,4.5h12.4v-4.1h6.7V69l5.5-5.5h5.1l9.9-9.9h21.3L356.2,65h0.2h16l2.4-2.4h16l12.1-12.1l18.4,18.4l4.8-4.8l-10.6-10.6l7.2-7.2l19,19l28.8-28.8v-8.4C470.3,28.2,433.8,28.2,433.8,28.2z"
	    }, {
	        "id": "4",
	        "name": "Japan",
	        "path": "M428.3,104.6h-13.4l26.9-26.9v13.4L428.3,104.6z"
	    }, {
	        "id": "5",
	        "name": "Asia Emerging",
	        "path": "M394.7,121l-2.2-2.2l2.2-2.2l2.2,2.2L394.7,121zM372.6,156.6v-4.7l2.4,2.4L372.6,156.6zM399.3,116.6l2.2,2.2l-2.2,2.2l-2.2-2.2L399.3,116.6zM397.9,100.2h4v4L397.9,100.2zM360.3,119.4v19.9l-9.9-9.9L360.3,119.4z"
	    }, {
	        "id": "6",
	        "name": "Asia Developed",
	        "path": "M299.4,92.8h-12v-6.6h0l0,0l-3.6-3.6h12.4v7L299.4,92.8zM376.2,154.6l17.6-17.6v17.6L376.2,154.6L376.2,154.6zM394.7,154.6h18.4l-9.2,9.2L394.7,154.6zM327.2,159.9l7-7v7H327.2zM383.2,167.2h-9.3l-14.7-14.7h9.1l-3.9-3.9h5l3.2,3.2v4.7v0.1L383.2,167.2zM398.6,124.8l9.3,9.3l-9.3,9.3V124.8zM438.8,154.6l-12.7,12.7l-0.1-0.1l-12.6-12.6H438.8zM421.1,68.9l-18.4-18.4l-12.1,12.1h-16l-2.4,2.4h-16l-0.1,0.1l-0.1-0.1l-11.4-11.4h-21.3l-9.9,9.9h-5.1l-5.5,5.5v9.5h2.7h0v0v8.7l10.5,10.5v15.7h2.1l5,5v38.1l37.1-37.1v19.9l5.8,5.8l6.6-6.6l6.5-6.5l-10.4-10.4h23.5V97.7l1.4-1.4l0.1-0.1l4,4h4V88.1L421.1,68.9z"
	    }, {
	        "id": "7",
	        "name": "Africa Middle East",
	        "path": "M285.7,197.1L293.8,188.9L293.8,175.8L285.7,184zM316.1,97.7L304.2,97.7L299.4,92.8L272.7,92.8L272.7,98.6L267.1,104.2L232.8,104.2L225.8,97.2L195.3,127.8L195.3,139L210.3,154L233.8,154L238.8,159L238.8,186.5L242.6,190.3L242.6,213.3L257.1,213.3L273.3,197.1L273.3,190.3L280.9,182.7L280.9,157.5L294.3,144.1L268.5,118.3L268.5,104.2L268.5,104.2L268.5,108.7L290.6,130.7L290.5,138.7L311.9,117.4L307.9,113.4L298.8,113.4L291.4,106L291.4,96.9L307.9,113.4L316.1,113.4z"
	    }, {
	        "id": "8",
	        "name": "Latin America",
	        "path": "M98,121.4h-4.1l-4.5-4.5h4.1L98,121.4zM104.8,123.8h-4.7l0,0l0,0l-1.8-1.8h4.7L104.8,123.8zM142.6,162.1v19.2L126,197.9v4.4l-21.3,21.3v8.4h-2.3v15.1h-5.9v0l0,0l-8.8-8.8v-27.1l4.7-4.7v-23.3l-10.9-10.9v-20.5l12.6-12.6H72.4h0l-34-34v-9.6l9.6,9.6h12.1l14.7,14.7v6.9h4.7l5.7-5.7v12.3h4.9l0,0v0v4.3h5.4v-3.4l4.8-4.8h9.7h0.1L142.6,162.1z"
	    }, {
	        "id": "9",
	        "name": "United Kingdom",
	        "path": "M231,61l-8.8,8.8V52.2L231,61z"
	    }, {
	        "id": "10",
	        "name": "Europe Developed",
	        "path": "M261.7,20v4.1h-6.4l-17.5,17.5v11l5.4-5.4v6.7h-3.9v5.4h-1.5L224,73.1l3.7,3.7v6.4h-8.3v7.3l6.4,6.4L240,82.6l6.2,6.2v3.9l4.2-4.2l-5.9-5.9l2.3-2.3h5.6h0v-2.8h6.3l-2-2h-4.2h-2.8l-3.7-3.7h4.9V59.2h-11.6l5.4-5.4h-1.5l18.5-18.5v7.2l8.2-8.2V20H261.7zM257,90.4L257,86.2L252.8,86.2zM219.7,57.7L213.8,63.6L219.7,63.6zM257.1,53L268,53L268,44.2L265.9,44.2zM126.7,0L112.5,14.2L118.2,20L121.9,20L138.3,36.4L143.9,30.8L143.9,10L134,0zM150.2,36.5L150.2,41.7L152.9,44.4L158.1,39.1L155.5,36.5z"
	    }];
	
	    return mapList;
	
	    /* jshint ignore:end */
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	


/***/ }
/******/ ])
});
;
//# sourceMappingURL=portfolio-components-global-map-chart.js.map