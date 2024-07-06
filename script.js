//Bar Chart
const ctx = document.getElementById('myChart');

let bar = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//Line Chart
var type = 'line';
var data = {
  labels: [2014, 2015, 2016, 2017, 2018],
  datasets: [
    {
      label: '优酷',
      data: [100, 200, 400, 800, 2200],
    },
    {
      label: 'Youtube',
      data: [50, 100, 200, 400, 600],
    },
  ],
};
var myLineChart = document.getElementById('myLineChart');
var chart = new Chart(myLineChart, {
  type: type,
  data: data,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            //min: 0,
            //max: 2000,
            suggestedMin: 0,
            suggestedMax: 2000,
            stepSize: 400,
            callback: function (value, index, values) {
              return value + '人';
            },
          },
        },
      ],
    },
    title: {
      display: true,
      text: '小马视频',
      fontColor: 'green',
      fontSize: '24',
    },
  },
});
