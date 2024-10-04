/*----------------------------------------------------------------Event Listeners----------------------------------------------------*/
// element.addEventListener("click", function);

const button2 = document.querySelector(".btn-2");

function alertBtn(){
    alert(" I love also JavaScript");
}

button2.addEventListener("click", alertBtn);

//MouseOver

const boxes = document.querySelectorAll('.box');
boxes.forEach(function(box){
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor = 'red';
    });
    box.addEventListener('mouseout', function(){
        box.style.backgroundColor = 'blue';
    });
});


