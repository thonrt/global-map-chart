define(function() {
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
});