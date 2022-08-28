function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = mm+'/'+dd;
    return date
 }

function Last7Days () {
    var result = [];
    for (var i=0; i<7; i++) {
        var d = new Date();
        d.setDate(d.getDate() -6 + i);
        result.push( formatDate(d) )
    }

    return(result);
}

var xValues = Last7Days();

//document.write(xValues);
var ydict = getCookie("timetracker");
            
//  for (const [key, value] of Object.entries(ydict)) {
//    document.writeln("visualizer debug")
//    document.writeln(`${key}::${value}`);
//  }

var yValues=[];
for (i=0; i<7; i++){
  yValues.push(ydict[xValues[i]]);
  // document.writeln(xValues[i]+":")
  // document.writeln(ydict[xValues[i]])
  // document.writeln(yValues.join(";"));
}

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(204, 100.5, 193.5, 0.5)'
      ],borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(204, 100.5, 193.5)'
      ],
      borderWidth: 1,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Last 7 Days"
    },
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }]
    }
  }
});
