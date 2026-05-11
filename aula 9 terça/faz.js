let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

var retangulo = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'israel.png'
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

let direction =1
function animacao(){
    
    retangulo.x = retangulo.x * 1;
    retangulo.desenha();
    requestAnimationFrame(animacao)
}
animacao();
document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {retangulo.y = retangulo.y-4}  
    if(tecla == 'ArrowDown') {retangulo.y = retangulo.y+4}  
    if(tecla == 'ArrowLeft') {retangulo.x = retangulo.x-4}  
    if(tecla == 'ArrowRight'){retangulo.x = retangulo.x+4}  
})

document.addEventListener('mousemove',function(evento) {
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    
    if (x_mouse > 50 && x_mouse < 350 && y_mouse > 50 && y_mouse < 350){
    retangulo.x = x_mouse;
    retangulo.y = y_mouse;
    }
    else{
        retangulo.x = retangulo.x;
        retangulo.y = retangulo.y;
    }
})