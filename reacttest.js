var times = new Array();
var avgTime = 0;
var beginTime;
var endTime; 


function myFunction() {
  for (var i = 0; i < 20; i++) {
    var randomTime = Math.random() * 3000;
    setTimeout(showCircle(randomTime));
    document.getElementById("myCanvas").onclick=function() { 
  endTime = Date.now();
				
				reactionTime=(endTime-beginTime)/1000;
  alert(reactionTime)
  
}
  }
}


function showCircle() {
  
  var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
    beginTime = Date.now();

}
