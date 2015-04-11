'use strict';

angular.module('google-chart-example', ['googlechart']).value('googleChartApiConfig', {
    version: '1.1',
    optionalSettings: {
        packages: ['bar'],
        language: 'fr'
    }}).controller("MainCtrl", function ($scope) {

    var chart = {};
    chart.type = "Bar";
    chart.cssStyle = "height:200px; width:300px;";
    chart.data = {"cols": [
        {id: "month", label: "Month", type: "string"},
        {id: "laptop-id", label: "Laptop", type: "number"},
        {id: "desktop-id", label: "Desktop", type: "number"},
        {id: "server-id", label: "Server", type: "number"},
        {id: "cost-id", label: "Shipping", type: "number"}
    ], "rows": [
        {c: [
            {v: "January"},
            {v: 19, f: "42 items"},
            {v: 12, f: "Ony 12 items"},
            {v: 7, f: "7 servers"},
            {v: 4}
        ]},
        {c: [
            {v: "February"},
            {v: 13},
            {v: 1, f: "1 unit (Out of stock this month)"},
            {v: 12},
            {v: 2}
        ]},
        {c: [
            {v: "March"},
            {v: 24},
            {v: 0},
            {v: 11},
            {v: 6}

        ]}
    ]};

    chart.options = {
        "title": "Sales per month",
        "isStacked": true,
        "fill": 20,
        series: {
            2: {
                targetAxisIndex: 1
            },
            3: {
                targetAxisIndex: 1
            }
        },
        "displayExactValues": true,
        "vAxis": {
            "title": "Sales unit", "gridlines": {"count": 6}
        },
        "hAxis": {
            "title": "Date"
        }
    };

    chart.formatters = {};

    $scope.chart = chart;

});


