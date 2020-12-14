var barChartData = {
    labels: [
      "1900s",
      "1910s",
      "1920s",
      "1930s",
      "1940s",
      "1950s",
      "1960s",
      "1970s",
      "1980s",
      "1990s",
      "2000s",
      "2010s"
    ],
    datasets: [
      {
        label: "Military",
        backgroundColor: "#b0000a",
        borderColor: "#b0000a",
        borderWidth: 1,
        data: [1, 9, 1, 5, 15, 3, 2, 0, 1, 1, 4, 1]
      },
      {
        label: "Non-military",
        backgroundColor: "#5d8aa8",
        borderColor: "#5d8aa8",
        borderWidth: 1,
        data: [8, 17, 21, 18, 15, 7, 8, 5, 3, 1, 2, 0]
      },
      {
        label: "Engine",
        backgroundColor: "#bbbbbb",
        borderColor: "#bbbbbb",
        borderWidth: 1,
        data: [6, 33, 21, 10, 9, 2, 0, 2, 0, 0, 0, 0]
      }
    ]
  };
  
  var chartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Development Trends of Aerospace Industry"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  
  window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: chartOptions
    });
  };