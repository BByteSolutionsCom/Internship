window.onload = function () {
    var ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {

    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            type: 'line',
            data: [110000, 100000, 140000, 120000, 110000, 145000, 122000, 152000, 109000, 112000, 149000, 130000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 3,
           
        }, 
        {
            type: 'line',
            data: [52000, 65000, 55000, 50000, 155000, 70000, 85000, 65000, 50000, 70000, 65000, 80000],
            backgroundColor: [
                'rgba(1, 126, 250, 0.2)',
            ],
            borderColor: [
                'rgba(1, 126, 250, 1)',
            ],
            borderWidth: 3,
        }, 
        {
            type: 'line',
            data: [12000, 45000, 85000, 67000, 72000, 60000, 50000, 55000, 150000, 65000, 85000, 70000],
            backgroundColor: [
                'rgba(98, 255, 145, 0.2)',
            ],
            borderColor: [
                'rgba(98, 255, 145, 1)',
            ],
            borderWidth: 3,
           
        }
    ]
    },
    options: {
        responsive: true,
        stepped: false,
        
        plugins: {
            legend: {
              display: false
            },
            tooltip: {
                mode: 'index',
                intersect: false
              }
        
        },
        scales: {
            
            y: {
                beginAtZero: true,
                ticks: {
                    min: 0, //minimum tick
                    max: 200000, //maximum tick
                    stepSize: 50000,
                    callback: function(value, index, values) {
                      return value > 0 ? Number((value / 1000).toString()) + 'K' : value; //pass tick values as a string into Number function
                    },
                  },
                
                grid: {
                
                    borderJoinStyle: 'round',
                   
                }
               
            },

            x: {
                beginAtZero: true,
                
                grid: {
                    lineWidth: 0,
                    drawBorder: false,
                   
                }
               
            }
        }
    }
});


}





 