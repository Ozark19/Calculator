let elements = document.getElementsByClassName('operator');
let screen = document.getElementById('result');
let clear = document.getElementById('clear');

window.onload = function () {

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {

            if (elements[i].innerHTML === "÷") {
                screen.innerHTML += "/";
            } else if (elements[i].innerHTML === "x") {
                screen.innerHTML += "*";
            } else if (elements[i].innerHTML === "=") {
                calculate();
            } else {

                let buttonValue = this.innerHTML;
                screen.innerHTML = (screen.innerHTML + buttonValue).substr(-10);
            };

            clear.addEventListener('click', function () {
                screen.innerHTML = '';
            });

            function calculate() {
                screen.innerHTML = (eval(screen.innerHTML));
            };
         });
     }
 }






