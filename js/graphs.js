var lineC = document.getElementById('lineChart');
var lineChart = new Chart(lineC, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Rituraj's 1st Dataset",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
        },
        {
            label: "Rituraj's 2nd Dataset",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,72,192,0.4)",
            borderColor: "rgba(75,53,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,75,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [38, 67, 58, 40, 36, 47, 39],
            spanGaps: false,
        }
    ]
  },
  options: {
    scales : {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

var barC = document.getElementById('barChart');
var barChart = new Chart(barC, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Some other dataset',
        borderColor: 'rgb(250,0,0)',
        borderWidth: 2,
        backgroundColor: 'rgba(100,0,0,0.1)',
        data: [10, 56, 73, 13, 25, 40]
      }
    ]
  },
  options: {
    scales: {
      yAxes :[{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

var radarC = document.getElementById('radarChart');
var radarChart = new Chart(radarC, {
  type: 'radar',
  data: {
    labels: ['Strength', 'Skills', 'Weakness', 'Health', 'Agility'],
    datasets: [
      {
        label: 'First dataset',
        borderColor: 'rgb(0,255,0)',
        borderWidth: 2,
        backgroundColor: 'rgba(0,255,0,0.1)',
        data: [30, 56, 13, 25, 40]
      },
      {
        label: 'Second dataset',
        borderColor: 'rgb(0,0,250)',
        borderWidth: 2,
        backgroundColor: 'rgba(0,0,255,0.1)',
        data: [48, 39, 46, 18, 37]
      }
    ]
  },
  options: {
    scales: {
      ticks: {
        beginAtZero: true
      }
    }
  }
});
