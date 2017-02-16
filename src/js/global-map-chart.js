define(function() {
    "use strict";
    //var d3 = require("d3");
    var CB = require("portfolio-components-chart-base");
    var S = CB.S;
    var T = CB.T;
    var E = CB.E;

    var map_direct = require("./map_direct.js");
    var map_office = require("./map_office.js");

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
});