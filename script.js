const circles = document.querySelectorAll('.circle');
const btnNext = document.getElementById('next');
const btnFormer = document.getElementById('former');
const lines = document.querySelectorAll('.linea-horizontal');
let indexStep = 0;

circles[0].classList.add('activo');
btnNext.addEventListener('click', function(){
    if(indexStep < circles.length - 1){ // Verifica si indexStep está dentro del rango válido
        lines[indexStep].classList.add('activo');
        circles[indexStep+1].classList.add('activo'); // Agrega la clase activo al círculo correspondiente
        indexStep++;
    }
    }
)

btnFormer.addEventListener('click', function(){
    if(indexStep>0){
    lines[indexStep-1].classList.remove('activo');
    circles[indexStep].classList.remove('activo');
    indexStep--;
}})

