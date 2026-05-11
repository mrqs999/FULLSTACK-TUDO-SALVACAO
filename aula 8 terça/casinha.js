let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// estrutura da casa
ctx.beginPath();
ctx.fillStyle = 'SaddleBrown';
ctx.fillRect(815,350,300,340);
ctx.closePath();

// primeira janela da casa
ctx.beginPath();
ctx.fillStyle = 'DeepSkyBlue'
ctx.fillRect(828,410,95,95);
ctx.closePath();

// segunda janela da casa
ctx.beginPath();
ctx.fillStyle = 'DeepSkyBlue'
ctx.fillRect(1008,410,95,95);
ctx.closePath();

// porta da casa
ctx.beginPath();
ctx.fillStyle = '#4e342e'
ctx.fillRect(920,507,90,182);
ctx.closePath();

// telhado da casa
ctx.beginPath();
ctx.fillStyle = 'Tomato';
ctx.moveTo(815, 350);
ctx.lineTo(965, 200);
ctx.lineTo(1115, 350);
ctx.fill();
ctx.closePath();

// chao
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(0,690,3000,500);
ctx.closePath();


// rio pi 1
ctx.beginPath();
ctx.fillStyle = 'DodgerBlue';
ctx.arc(0,705,100,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

// ajuste do rio retangulo vertical
ctx.beginPath();
ctx.fillStyle = 'DodgerBlue';
ctx.fillRect(0,700,100,220);
ctx.closePath();

// ajuste do rio retangulo horizontal
ctx.beginPath();
ctx.fillStyle = 'DodgerBlue';
ctx.fillRect(0,790,800,220);
ctx.closePath();

// ajuste do rio pi 2
ctx.beginPath();
ctx.fillStyle = 'DodgerBlue';
ctx.arc(800,890,100,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.closePath();

// sol
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(1350,200,100,1*Math.PI,3*Math.PI);
ctx.fill();
ctx.closePath();

// arvore esquerda
ctx.beginPath();
ctx.fillStyle = 'SaddleBrown';
ctx.fillRect(100,450,70,240);
ctx.closePath();

// folha arvore esquerda
ctx.beginPath();
ctx.fillStyle = 'Green';
ctx.arc(135,450,100,1*Math.PI,3*Math.PI);
ctx.fill();
ctx.closePath();

// arvore direita
ctx.beginPath();
ctx.fillStyle = 'SaddleBrown';
ctx.fillRect(1660,630,70,240);
ctx.closePath();

// folha arvore direita
ctx.beginPath();
ctx.fillStyle = 'Green';
ctx.arc(1695,620,100,1*Math.PI,3*Math.PI);
ctx.fill();
ctx.closePath();

