var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "startDuration": 2,
    "dataProvider": [{
        "country": "Jan",
        "visits": 1025,
        "color": "#23c6c8"
    }, {
        "country": "Feb",
        "visits": 982,
        "color": "#23c6c8"
    }, {
        "country": "Mar",
        "visits": 1009,
        "color": "#23c6c8"
    }, {
        "country": "Apr",
        "visits": 1022,
        "color": "#23c6c8"
    }, {
        "country": "May",
        "visits": 1122,
        "color": "#23c6c8"
    }, {
        "country": "Jun",
        "visits": 1114,
        "color": "#23c6c8"
    }, {
        "country": "Jul",
        "visits": 984,
        "color": "#23c6c8"
    }, {
        "country": "Aug",
        "visits": 1111,
        "color": "#23c6c8"
    }],
    "valueAxes": [{
        "position": "left",
        "axisAlpha": 0,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius": 1,
        "valueField": "visits"
    }],
    "depth3D": 40,
    "angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0
    },
    "export": {
        "enabled": true
    }

}, 0);