let myChart = null;

function drawGraph (dataJson) {

    if (myChart) {
        myChart.destroy();
    }    
    const values = dataJson.map(value => value.close);
    console.log(values.length)
    const graphValues = Array.from({length : values.length}, (_, i) => i+1)
    console.log(graphValues)

    const ctx = document.getElementById("myChart");
    myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: graphValues,
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