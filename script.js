let value = '';

document.getElementById(1).onclick = function(){
    value += '1';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById(2).onclick = function(){
    value += '2';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById(3).onclick = function(){
    value += '3';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById(4).onclick = function(){
    value += '4';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById(5).onclick = function(){
    value += '5';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById(6).onclick = function(){
    value += '6';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById(7).onclick = function(){
    value += '7';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById(8).onclick = function(){
    value += '8';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById(9).onclick = function(){
    value += '9';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById(0).onclick = function(){
    value += '0';
    console.log(value);
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById("plus").onclick = function(){
    value += '+';
    console.log(value)
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById("minus").onclick = function(){
    value += '-';
    console.log(value)
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById("multiply").onclick = function(){
    value += '*';
    console.log(value)
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById("devide").onclick = function(){
    value += '/';
    console.log(value)
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById("dot").onclick = function(){
    value += '.'
    console.log(value)
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById("Reset").onclick = function(){
    value = '';
    document.querySelector('.Total').innerHTML = value;
}
document.getElementById("equals").onclick = function() {
    try {
        value = Function('"use strict";return (' + value + ')')();
        document.querySelector('.Total').innerHTML = value;
    } catch (error) {
        document.querySelector('.Total').innerHTML = "Error";
    }
    setTimeout(() => {
        value = '';
    }, 500);
}

