


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
        labels: [user_1+" ("+home['dribbling_ratio']+"%)",user_2+" ("+away['dribbling_ratio']+"%)"],
        datasets: [{
          label: "Dribblings",
          backgroundColor: ["#3e95cd", "#8e5ea2"],
          data: [home["successfull_dribblings"],away["successfull_dribblings"]]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Dribblings',
          fontColor: "white",
          fontSize:17
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
              fontSize:17
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
            fontSize:17
          },
          labels :{
            fontColor: "white"
          }
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
          fontSize:17
        }
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
          fontSize:17
        }
      }
    });

    new Chart(document.getElementById("pie-chart-6"), {
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
          fontSize:17
        }
      }
    });
