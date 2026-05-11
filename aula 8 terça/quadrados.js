let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


ctx.fillStyle = "#ddd";
ctx.fillRect(0, 0, 500, 500);


ctx.fillStyle = "red";
ctx.fillRect(0, 0, 50, 50);

ctx.fillStyle = "blue";
ctx.fillRect(450, 0, 50, 50);

ctx.fillStyle = "yellow";
ctx.fillRect(0, 450, 50, 50);

ctx.fillStyle = "green";
ctx.fillRect(450, 450, 50, 50);

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(500, 500);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(500, 0);
ctx.lineTo(0, 500);
ctx.stroke();


ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(0, 250);
ctx.lineTo(500, 250);
ctx.stroke();


ctx.beginPath();
ctx.arc(250, 250, 50, 0, Math.PI);
ctx.stroke();


ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(120, 200, 20, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(380, 200, 20, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

ctx.fillStyle = "black";
ctx.font = "24px Arial";
ctx.textAlign = "center";
ctx.fillText("Desenvolvimento Web", 250, 100);


