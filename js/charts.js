


    $.getJSON({
      type: "GET",
      url: apiserver +'matchstats?match_id='+matchid,
      async: false,
      success: function(data){
        user_1 = data.team_user_1;
        user_2 = data.team_user_2;
        club_1 = data.club_1;
        club_2 = data.club_2;
      }
    });

    $.getJSON({
      type: "GET",
      url: apiserver +'gamestats?match_id=919443',
      async: false,
      success: function(data){
        console.log("data",data);
        console.log("home",data[user_1]);
        console.log("away",data[user_2]);
        home = data[user_1]
        away = data[user_2]
      }
    });
    
    new Chart(document.getElementById("pie-chart"), {
      type: 'pie',
      data: {
        labels: [user_1+"\n ("+home['dribbling_ratio']+"%)",user_2+" ("+away['dribbling_ratio']+"%)"],
        datasets: [{
          label: "Dribblings",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [home["successfull_dribblings"],away["successfull_dribblings"]]
        }]
      },
      options: {
        responsive:true,
        title: {
          display: true,
          text: 'Dribblings',
          fontColor: "white",
        },
        legend: {
          display: false
        },

      }
  });

        new Chart(document.getElementById("pie-chart-2"), {
          type: 'pie',
          data: {
            labels: [user_1+" ("+home['pass_ratio']+"%)",user_2+" ("+away['pass_ratio']+"%)"],
            datasets: [{
              label: "Passes",
              backgroundColor: ["#3e95cd", "#8e5ea2"],
              data: [home["successfull_passes"],away["successfull_passes"]]
            }]
          },
          options: {
            title: {
              display: true,
              text: 'Passes',
              fontColor: "white",
            },
            legend: {
              display: false
            },

          }
      });


      new Chart(document.getElementById("pie-chart-3"), {
        type: 'pie',
        data: {
          labels: [user_1+" ("+home['shot_ratio']+"%)",user_2+" ("+away['shot_ratio']+"%)"],
          datasets: [{
            label: ["Shots"],
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [home["shots"],away["shots"]]
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Shots',
            fontColor: "white",
          },
          labels :{
            fontColor: "white"
          },
          legend: {
            display: false
          },
        }
    });

    new Chart(document.getElementById("pie-chart-4"), {
      type: 'pie',
      data: {
        labels: [user_1,user_2],
        datasets: [{
          label: "Corners",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [home["corners"],away["corners"]]
        }]
      },
      options: {
        responsive:true,
        title: {
          display: true,
          text: 'Corners',
          fontColor: "white",
        },
        legend: {
          display: false
        },
      }
    });



    new Chart(document.getElementById("pie-chart-5"), {
      type: 'pie',
      data: {
        labels: [user_1,user_2],
        datasets: [{
          label: "Fouls",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [home["fouls"],away["fouls"]]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Fouls',
          fontColor: "white",
        },
        legend: {
          display: false
        },
      }
    });

    myChartA = new Chart(document.getElementById("pie-chart-6"), {
      type: 'pie',
      data: {
        labels: [user_1,user_2],
        datasets: [{
          label: "Goal Saves",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [home["goal_saves"],away["goal_saves"]]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Goal Saves',
          fontColor: "white",
        },
        legend: {
          display: false
        },
        plugins: {
          font: function(context) {
            var width = context.chart.width;
            var size = Math.round(width / 32);
            return {
              size: size,
              weight: 600
            };
        }
      }        
      }
    });


document.querySelector('.legend').innerHTML = myChartA.generateLegend();

var legendItems = document.querySelector('.legend').getElementsByTagName('li');
for (var i = 0; i < legendItems.length; i++) {
  legendItems[i].addEventListener("click", legendClickCallback.bind(this,i), false);
}

function legendClickCallback(legendItemIndex){
  document.querySelectorAll('.myChart').forEach((chartItem,index)=>{
    var chart = Chart.instances[index];
    var dataItem = chart.data.datasets[legendItemIndex]    
    if(dataItem.hidden == true || dataItem.hidden == null){
      dataItem.hidden = false;
    } else {
      dataItem.hidden = true;
    }
    chart.update();
  })  
}