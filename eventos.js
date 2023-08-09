const div= document.getElementById('div');
const btn= document.getElementById('btn');


btn.addEventListener("click", function () {
    event.stopPropagation();
    alert("Hola!");
    });

div.addEventListener('click', function () {
    alert("Hola! soy el div");
    });


