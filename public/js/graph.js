$(function () {

    $.getJSON('https://api.mlab.com/api/1/databases?apiKey=2jtlnQ_QQGBUsPvQNztbewJaHaRcEYha', function (data) {
        // Create the chart
       var chart1 = new Highcharts.StockChart({

    chart:  {
            renderTo: 'view'
            },
            rangeSelector : {
                selected : 1
            },

            title : {
                text : 'Power Vs Timestamp'
            },

            series : [{
                name : 'Power',
                data : data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });

});