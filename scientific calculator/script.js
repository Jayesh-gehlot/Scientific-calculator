function cal() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;
 
    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');
 
        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
function PI(){
    let display = document.getElementById("display");
    display.value += Math.PI;
}

function sqrt(){
    let display = document.getElementById("display");
    display.value += 'sqrt(';
}
function backSpace() {
    var display = document.querySelector('input');
    display.value = display.value.slice(0, -1);
}

function e() {
    let display = document.getElementById("display");
    display.value += Math.e;
}
function power(){
    let display = document.getElementById("display");
    display.value += '^(';
}

function clrscr(){
    let display =document.querySelector("input");
    display.value="";
}