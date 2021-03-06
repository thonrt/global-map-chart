define(function() {
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
});

