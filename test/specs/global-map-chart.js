describe('globalMapChart', function() {
    'use strict';

    var GlobalMap = require('../../src/js/global-map-chart.js');

    var common = require('portfolio-components-common');

    var Popup = common.ui.Popup;

    var container = $("<div></div>").height(350).appendTo(document.body);

    var showPopupRegion = function(e, chart) {
        var id = e.data;
        var elem = $(e.target);
        var popup = new Popup({
            target: elem,
            data: "html"
        });
        popup.unbind('close').bind('close', function() {
            chart.unFocus();
        }).unbind('open').bind('open', function() {
            chart.setFocusRegion(id);
        });
        popup.show();

    };

    var showPopupRange = function(e, chart) {
        var id = e.data;
        var elem = $(e.target);
        var popup = new Popup({
            target: elem,
            data: "html"
        });
        popup.unbind('close').bind('close', function() {
            chart.unFocus();
        }).unbind('open').bind('open', function() {
            chart.setFocusRange(id);
        });
        popup.show();

    };

    var c = new GlobalMap();
    c.getRangeList();

    c.bind("item_click", function(e, d) {

        if (d.className === "range") {
            showPopupRange(d, this);
        } else {
            showPopupRegion(d, this);
        }

    });

    var data = [{
        id: "1",
        dataId: 26729,
        name: "United States",
        color: "",
        value: 100
    }, {
        id: "2",
        dataId: 26718,
        name: "Canada",
        color: "",
        value: 0
    }, {
        id: "3",
        dataId: 26725,
        name: "Latin America",
        color: "",
        value: 0
    }, {
        id: "4",
        dataId: 26728,
        name: "United Kingdom",
        color: "",
        value: 0
    }, {
        id: "5",
        dataId: 26723,
        name: "Eurozone",
        color: "",
        value: 0
    }, {
        id: "6",
        dataId: 26722,
        name: "Europe - ex Euro",
        color: "",
        value: 0
    }, {
        id: "7",
        dataId: 26721,
        name: "Europe - Emerging",
        color: "",
        value: 0
    }, {
        id: "8",
        dataId: 26714,
        name: "Africa",
        color: "",
        value: -120
    }, {
        id: "9",
        dataId: 26726,
        name: "Middle East",
        color: "",
        value: 0
    }, {
        id: "10",
        dataId: 26724,
        name: "Japan",
        color: "",
        value: 0
    }, {
        id: "11",
        dataId: 26717,
        name: "Australasia",
        color: "",
        value: 0
    }, {
        id: "12",
        dataId: 26715,
        name: "Asia - Developed",
        color: "",
        value: 0
    }, {
        id: "13",
        dataId: 26716,
        name: "Asia - Emerging",
        color: "",
        value: 0
    }, {
        id: "14",
        dataId: 14,
        name: "Emerging Market",
        color: "",
        value: 0
    }, {
        id: "15",
        dataId: 15,
        name: "Developed Country",
        color: "",
        value: 0
    }, {
        id: "16",
        dataId: 29660,
        name: "Not Classified",
        color: "",
        value: 0
    }];

    c.setOption({
        container: container,
        data: data
    });
    c.zoomIn();
    c.zoomOut();
    c.highlight();


    it('GlobalMap new', function() {
        expect(c).toBeTruthy();
        expect(c.toString()).toBe("[object GlobalMap]");

    });

    it('GlobalMap draw', function(done) {

        c.setOption({
            container: container,
            data: data
        });
        c.draw();

        setTimeout(function() {
            expect(c.data).toBeTruthy();

            done();

        }, 100);

    });

    it('GlobalMap resize', function(done) {

        c.setSize(500, 500);

        setTimeout(function() {
            expect(c.data).toBeTruthy();

            done();

        }, 100);

    });

    it('GlobalMap hover tip when highlight is true', function(done) {

        var svg_region = c.find('.region').first();
        svg_region.trigger("mouseover");
        svg_region.trigger("mouseout");

        setTimeout(function() {
            expect(c.tip.visible).toBe(false);
            done();

        }, 100);

    });

    it('GlobalMap highlight', function(done) {

        var total = c.svg_region_hover_list.selectAll('.region_hover[display="none"]').size();

        c.highlight(["1"]);

        setTimeout(function() {

            var svg_region = c.svg_region_hover_list.selectAll('.region_hover[display="none"]');

            expect(total - svg_region.size()).toBe(1);

            done();

        }, 200);

    });



    it('GlobalMap region hover tip when highlight is false', function(done) {

        var svg_region = c.find('.region').first();
        svg_region.trigger("mouseover");
        expect(c.tip.visible).toBe(true);
        svg_region.trigger("mouseout");

        setTimeout(function() {
            expect(c.tip.visible).toBe(false);
            done();

        }, 100);


    });

    it('GlobalMap range hover', function(done) {

        var svg_range = c.find('.range').first();
        svg_range.trigger("mouseover");
        expect(c.tip.visible).toBe(true);
        svg_range.trigger("mouseout");

        setTimeout(function() {
            expect(c.tip.visible).toBe(false);
            done();

        }, 100);


    });



    it('GlobalMap region click', function(done) {

        var svg_region = c.find('.region').first();
        svg_region.trigger("click");

        setTimeout(function() {
            expect(c.tip.visible).toBe(false);

            var id = svg_region.attr("data");
            var region = c.getRegionById(id);

            //console.log(id, region);

            expect(region).toBe(c.focusRegion);

            //off focus
            var nid = svg_region.next().attr("data");
            var next = c.getRegionById(nid);
            //console.log(nid, next);
            expect(next.offfocus).toBe(true);

            done();

        }, 100);

    });


    it('GlobalMap region hover tip when offfocus is true', function(done) {

        var svg_region = c.find('.region').first().next();
        svg_region.trigger("mouseover");
        expect(c.tip.visible).toBe(true);
        svg_region.trigger("mouseout");

        setTimeout(function() {
            expect(c.tip.visible).toBe(false);
            done();

        }, 100);


    });


    it('GlobalMap range click', function(done) {

        var svg_range = c.find('.range').first();
        svg_range.trigger("click");

        setTimeout(function() {
            expect(c.tip.visible).toBe(false);

            var range = c.getRangeByIndex(svg_range.attr("data"));

            expect(range).toBe(c.focusRange);

            //off focus
            var next = c.getRangeByIndex(svg_range.next().attr("data"));
            expect(next.offfocus).toBe(true);

            done();

        }, 100);

    });


    it('GlobalMap zoom', function(done) {
        //TODO
        c.find(".main").trigger("dblclick");
        c.find(".main").trigger("mousedown");
        c.find(".main").trigger("contextmenu");
        c.zoomIn();
        c.zoomOut();

        var svg_region = c.find('.region').first();
        svg_region.trigger("click");

        setTimeout(function() {
            expect(c.tip.visible).toBe(false);
            done();

        }, 100);

    });


    it('GlobalMap range click', function(done) {

        $(c.svg_coordinate.node()).trigger($.Event("click", {
            target: c.svg_coordinate.select(".range_rect").node(),
            pageX: 816,
            pageY: 331
        }));

        expect(c.tip.visible).toBe(false);

        done();

    });

    it('BubbleChart marqueeZoom', function(done) {

        c.pointerHandler();
        c.marqueeZoom();

        $(c.marquee.container.node()).trigger($.Event("mousedown", {
            pageX: 10,
            pageY: 10
        }));

        $(window).trigger($.Event("mousemove", {
            pageX: 20,
            pageY: 20
        }));

        $(window).trigger($.Event("mouseup", {
            pageX: 20,
            pageY: 20
        }));


        setTimeout(function() {
            expect(c.zoom.scale > 1).toBe(true);
            done();
        }, 500);


    });

    it('GlobalMap drag', function(done) {

        c.find(".main").trigger("dblclick");
        c.find(".main").trigger("mousedown");
        c.find(".main").trigger("contextmenu");
        c.zoomIn();

        $(window).trigger($.Event("mousemove", {
            pageX: 20,
            pageY: 20
        }));

        $(window).trigger($.Event("mousemove", {
            pageX: 30,
            pageY: 30
        }));

        $(window).trigger($.Event("mouseup", {
            pageX: 30,
            pageY: 30
        }));

        setTimeout(function() {
            expect(c.zoom.scale > 1).toBe(true);
            done();
        }, 500);

    });

});