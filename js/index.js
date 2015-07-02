$(function () {
  $('#container').highcharts({
    title: {
      text: 'Bug Burndown Haufe R8',
      x: -20 //center
    },
    colors: ['blue', 'green'],
    plotOptions: {
      line: {
        lineWidth: 3
      },
      tooltip: {
        hideDelay: 200
      }
    },
    subtitle: {
      text: 'fupp',
      x: -20
    },
    xAxis: {
      categories: ['Day 31', 'Day 30', 'Day 29','Day 28','Day 27','Day 26','Day 25','Day 24','Day 23','Day 22','Day 21','Day 20','Day 19','Day 18','Day 17','Day 16','Day 15','Day 14','Day 13','Day 12','Day 11','Day 10','Day 9','Day 8', 'Day 7', 'Day 6', 'Day 5', 'Day 4', 'Day 3', 'Day 2', 'Day 1','Day 0',]
    },
    yAxis: {
      title: {
        text: 'Hours'
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
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Ideal Burn',
      color: 'rgba(0,255,0,0.25)',
      lineWidth: 2,
      data: [63, 61, 59, 57,55,53,51,49,47,45,43,41,39,37,35,33,31,29,27,25, 23, 21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]
    }, {
      name: 'Actual Burn',
      color: 'rgba(0,120,200,0.75)',
      marker: {
        radius: 6
      },
      data: [63,64]
    }]
  });
});
