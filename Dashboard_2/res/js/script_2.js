window.onload = function () {

const myChart = new Chart(document.getElementById('myChart').getContext('2d'), {

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
        ,
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
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                enable: false
            },
            crosshair: {
                line: {
                    width: 2,
                    dashPattern: [2, 2]
                }
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

const counter = {
    id: 'counter',
    beforeDraw(chart, args, options) {
        const {ctx, chartArea: {top, right, bottom, left, width, height}} = chart;
        ctx.save();
        ctx.font = options.fontSize + ' ' + options.fontFamily;
        ctx.textAlign = 'center';
        ctx.fillStyle = options.fontColor;
        ctx.fillText('Gender', (width / 2) + 20, (height / 2) + 25);
    }
}

const myChart1 = new Chart(document.getElementById('myChart2').getContext('2d'), {
    
    type: 'doughnut',
    data: {
        labels: [
            'Male',
            'Female',
            'Orther'],
        datasets: [{
            data: [68, 38, 12],
            backgroundColor: [
                'rgb(1, 126, 250)',
                'rgb(81, 203, 255)',
                'rgb(48, 218, 136)'
            ],
            borderWidth: 3,
            hoverOffset: 3
        }, ]
    },
    options: {
        responsive: true,
        stepped: false,
        cutout: '65%',
        rotation: 260,
        layout: {
            padding: 20
        },
        plugins: {
            legend: {
              display: false
            },
            counter: {
                fontColor: '#000',
                fontSize: '18px',
                fontFamily: 'sans-serif'
            },
            datalabels: {
                formatter: function(value, context) {
                    return Math.round(value) + '%';
                },
                anchor: 'end',
                backgroundColor: '#fff',
                padding: {
                    top: 13,
                    bottom: 13,
                    left: 8,
                    right: 8
                },
                color: '#000',
                font: {
                    style: 'bold',
                    size: '15px'
                },
                borderColor: '#f0f0f0',
                borderWidth: 1,
                borderRadius: 100
            }
        }
    },
    plugins: [ChartDataLabels, counter]
}

);

}









 