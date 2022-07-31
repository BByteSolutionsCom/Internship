window.onload = function () {
    var ctx = document.getElementById('myChart').getContext('2d');
    var ctx2 = document.getElementById('myChart2').getContext('2d');

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
            data: [52000, 65000, 55000, 50000, 70000, 70000, 85000, 65000, 50000, 70000, 65000, 80000],
            backgroundColor: [
                'rgba(1, 126, 250, 0.2)',
            ],
            fill: {
                target: {
                    value:0
                },
                below: (context) => {
                    const chart = context.chart;
                    const {ctx, chartArea, data, scales} = chart;
                    if(!chartArea) {
                        return null;
                    }
                    return belowGradient(ctx, chartArea, data, scales);
                }
            },
            borderColor: [
                'rgba(1, 126, 250, 1)',
            ],
            borderWidth: 3,
           
        }, 
        {
            type: 'bar',
            label: '# of Votes',
            data: [200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000, 200000],
            backgroundColor: [
                'rgba(54, 162, 235, 0.04)'
            ],
            hoverBackgroundColor: 'rgba(255,255,255)',
            borderRadius: 10,
            borderWidth: 0,
            options: {
                scales: {
                    x: {
                        
                        ticks: {
                            backgroundColor: 'rgba(0,0,0,0)',
                            display: false
                        }
                    }
                }
            }
        }
    ]
    },
    options: {
       
        responsive: true,
        stepped: false,
        
        plugins: {
            legend: {
              display: false
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
                    display: false,
                    drawBorder:false,
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

const myChart2 = new Chart(ctx2, {

    data: {
        labels: ['Apr 21', 'May 21', 'Jun 21', ' Aug 21', 'Sep 21'],
        datasets: [{
            type: 'bar',
            data: [150000, 150000, 150000, 150000, 150000],
            backgroundColor: [
                'rgba(54, 162, 235, 0.04)'
            ],
            hoverBackgroundColor: 'rgba(255,255,255)',
            borderRadius: 10,
            borderWidth: 0,
           
        },

        
    ]
    },
    options: {
       
        responsive: true,
        stepped: false,
        
        plugins: {
            legend: {
              display: false
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
                    display: false,
                    drawBorder:false,
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

function belowGradient(ctx, chartArea, data, scales) {
    const {left, right, bottom, width, height} = chartArea;
    const {x, y} = scales;
    const gradientBackground = ctx.createLinearGradient(0, y.getPixelForValue(data.datasets[0].data[0]), 0, bottom);
    gradientBackground.addColorStop(0, 'rgba(1, 126, 250, 0)');
    gradientBackground.addColorStop(0, 'rgba(1, 126, 250, 0.02)');
    return gradientBackground;
}




 