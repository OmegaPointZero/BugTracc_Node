// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx1 = document.getElementById("resolvedPieChart");
var ctx2 = document.getElementById("openPieChart");
var ctx3 = document.getElementById("totalPieChart");
var data = JSON.parse(document.getElementById("resolvedBugTracker").textContent);
var data2 = JSON.parse(document.getElementById("openBugTracker").textContent);
var d1 = [data["Critical"], data["High"], data["Medium"], data["Low"], data["Documentation"], data["Feature Request"]]
var d2 = [data2["Critical"], data2["High"], data2["Medium"], data2["Low"], data2["Documentation"], data2["Feature Request"]]
var d3 = []
for(var i=0;i<d2.length;i++){
    d3[i] = d1[i] + d2[i]
}

var resolvedPieChart = new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ["Critical", "High", "Medium", "Low", "Documentation", "Feature Request"],
    datasets: [{
      data: d1,
      backgroundColor: ['#e74a3b', '#e0893c', '#f6c23e',  '#1cc88a', '#4e73df', '#36b9cc'],
      hoverBackgroundColor: ['#cc4227', '#da6e27', '#e2af26', '#17a673', '#2e59d9',  '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

var openPieChart = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["Critical", "High", "Medium", "Low", "Documentation", "Feature Request"],
    datasets: [{
      data: d2,
      backgroundColor: ['#e74a3b', '#e0893c', '#f6c23e',  '#1cc88a', '#4e73df', '#36b9cc'],
      hoverBackgroundColor: ['#cc4227', '#da6e27', '#e2af26', '#17a673', '#2e59d9',  '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

var totalPieChart = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ["Critical", "High", "Medium", "Low", "Documentation", "Feature Request"],
    datasets: [{
      data: d3,
      backgroundColor: ['#e74a3b', '#e0893c', '#f6c23e',  '#1cc88a', '#4e73df', '#36b9cc'],
      hoverBackgroundColor: ['#cc4227', '#da6e27', '#e2af26', '#17a673', '#2e59d9',  '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
