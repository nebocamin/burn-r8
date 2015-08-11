$(function () {
  $('#container').highcharts({
    title: {
      text: 'Bug Burndown',
    },
    plotOptions: {
      line: {
        lineWidth: 3
      },
      tooltip: {
        hideDelay: 200
      }
    },
    xAxis: {
      categories: ['Day 31', 'Day 30', 'Day 29','Day 28','Day 27','Day 26','Day 25','Day 24','Day 23','Day 22','Day 21','Day 20','Day 19','Day 18','Day 17','Day 16','Day 15','Day 14','Day 13','Day 12','Day 11','Day 10','Day 9','Day 8', 'Day 7', 'Day 6', 'Day 5', 'Day 4', 'Day 3', 'Day 2', 'Day 1','Day 0',]
    },
    yAxis: {
      min: 0,
      title: {
        text: null
      },
      plotLines: [{
        value: 0,
        width: 1
      }]
    },
    tooltip: {
      valueSuffix: ' Bugs',
      crosshairs: true,
      shared: true
    },
    series: [
      {
        name: 'Ideal',
        color: 'rgba(0,255,0,0.25)',
        lineWidth: 1,
        data: [63, 61, 59, 57,55,53,51,49,47,45,43,41,39,37,35,33,31,29,27,25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]
      }, {
        name: 'Actual',
        color: 'rgba(0,120,200,0.75)',
        marker: {
          radius: 10
        },
        data: [63,67,65,61,57,60,58,52,54,52,49,49,50,50,50,48,45,45,43,39,36,36,36,40,39,43,43,43,43,43]
      }, {
        name: 'Pending',
        color: 'rgba(0,200,200,0.75)',
        marker: {
          radius: 2
        },
        data: [63,53,53,53,54,55,50,48,48,48,44,43,46,45,45,41,35,35,35,30,30,30,30,36,33,39,37,37,38,39]
      }, {
        name: 'High & Critical',
        color: 'rgba(225,0,0,0.75)',
        marker: {
          radius: 2
        },
        data: [20,19,17,17,16,16,14,13,13,12,9,9,10,10,10,9,6,6,5,5,5,5,5,8,8,9,7,7,7,7]
      }, {
        name: 'Normal',
        color: 'rgba(225,200,0,0.75)',
        marker: {
          radius: 2
        },
        data: [25,25,23,23,22,24,22,17,19,20,20,20,20,20,20,20,18,18,17,14,11,11,11,14,13,15,15,15,15,15]
      }
    ]
  });
});
