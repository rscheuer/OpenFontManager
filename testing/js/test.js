window.onload=function(){
var lineChartData = [{
            date: new Date(2008, 10, 2),
            value: 5
        }, {
            date: new Date(2009, 10, 25),
            value: 30
        }, {
            date: new Date(2009, 10, 26),
            value: 72,
            customBullet: "images/redstar.png"
        }];

document.getElementById('whereToPrint').innerHTML = JSON.stringify(lineChartData, null, 4);

var fontManager = require('font-manager');
var fonts = fontManager.getAvailableFontsSync();
document.getElementById('myPrint').innerHTML = JSON.stringify(fonts, null, 4);

}//]]> 
