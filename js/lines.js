"use strict"
//fetch csv data -> convert to object format -> plot line chart
app.controller("lineCtrl", function($scope, $http) {//angular controller
  $http.get("js/dataset/sachin.csv")//asyncronous request to file location
  .then(function(res) {

    var labelS = [], dataS = [];//lists declarations
    var objSachin = $.csv.toObjects(res.data);//csv data | jquery-csv plugin -> object format
    for(var i = 0; i < objSachin.length; i++) {
      if(objSachin[i].batting_score >= 100) {
        labelS.push(objSachin[i].date+" "+objSachin[i].opposition);//update labels
        //console.log(labelS);//test
        dataS.push(objSachin[i].batting_score);//update data
        //console.log(dataS);//test
      }
    }

    var lineC = document.getElementById("lineChart");//grab line canvas ID for further rendering
    var lineChart = new Chart(lineC, {//create line chart
      type: "line",//specify chart type
      data: {//chart configuration data
        labels: labelS,//y-axis labels
        datasets: [
          {
            label: "Batting score",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgb(255,255,255)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dataS,//page relevant data
            spanGaps: false,
          }
        ],
        options: {
          scales : {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    });
  });
});
