"use strict"
//fetch csv data -> convert to object format -> plot radar chart
app.controller("radarCtrl", function($scope, $http) {//angular controller
  $http.get("http://cricapi.com/api/playerStats?pid=35320")//asyncronous request to api
  .then(function(res) {

    var objSachin = res.data;//create valid object
    
    /* !!! I initailly thought of iterating over the parent element of each "key:value" pair
    to create a list of the values obtained but the object structure of this particular api
    changed(almost flipped) right after 2 nights(I'm usually a nocturnal coder) of completion
    so I kept these variables intact so as to make sure no other value crept into those variables !!! */
    
    //batting data
    var batTwenty20 = objSachin.data.batting.twenty20.Ave;
    var batListA = objSachin.data.batting.listA.Ave;
    var batFirstClass = objSachin.data.batting.firstClass.Ave;
    var batT20I = objSachin.data.batting.T20Is.Ave;
    var batODI = objSachin.data.batting.ODIs.Ave;
    var batTest = objSachin.data.batting.tests.Ave;

    //bowling data
    var ballTwenty20 = objSachin.data.bowling.twenty20.Ave;
    var ballListA = objSachin.data.bowling.listA.Ave;
    var ballFirstClass = objSachin.data.bowling.firstClass.Ave;
    var ballT20I = objSachin.data.bowling.T20Is.Ave;
    var ballODI = objSachin.data.bowling.ODIs.Ave;
    var ballTest = objSachin.data.bowling.tests.Ave;
    
    //wickets taken data
    var wicTwenty20 = objSachin.data.bowling.twenty20.Wkts;
    var wicListA = objSachin.data.bowling.listA.Wkts;
    var wicFirstClass = objSachin.data.bowling.firstClass.Wkts;
    var wicT20I = objSachin.data.bowling.T20Is.Wkts;
    var wicODI = objSachin.data.bowling.ODIs.Wkts;
    var wicTest = objSachin.data.bowling.tests.Wkts;


    var radarC = document.getElementById("radarChart");//grab line canvas id
    var radarChart = new Chart(radarC, {//create radar chart
      type: "radar",//specify chart type
      data: {//chart configuration data
        labels: ["Twenty20","List-A","First Class","T20I","ODI","Test"],//radar labels
        datasets: [
          {//batting radar
            label: "Batting Averages",
            borderColor: "rgb(255,165,0)",
            borderWidth: 2,
            backgroundColor: "rgba(255,165,0,0.2)",
            data: [batTwenty20,batListA,batFirstClass,batT20I,batODI,batTest]
          },
          {//bowling radar
            label: "Bowling Averages",
            borderColor: "rgb(0,165,255)",
            borderWidth: 2,
            backgroundColor: "rgba(0,165,255,0.2)",
            data: [ballTwenty20,ballListA,ballFirstClass,ballT20I,ballODI,ballTest]
          },
          {//wickets radar
            label: "Wickets taken",
            borderColor: "rgb(255,0,200)",
            borderWidth: 2,
            backgroundColor: "rgba(255,0,100,0.2)",
            data: [wicTwenty20,wicListA,wicFirstClass,wicT20I,wicODI,wicTest]
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
  });
});
