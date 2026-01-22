let myChart = null;

function drawGraph (dataJson) {

    if (myChart) {
        myChart.destroy();
    }    
    const values = dataJson.map(value => value.close);
    const labels = [1, 2, 3, 4, 5];
   

    const ctx = document.getElementById("myChart");
    myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: values,
      datasets: [{
        label: 'stock value',
        data: values,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}