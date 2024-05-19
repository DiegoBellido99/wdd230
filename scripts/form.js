const contra1 = document.querySelector("#contra1");
const contra2 = document.querySelector("#contra2");
const mensaje = document.querySelector("#mensaje");

contra2.addEventListener("focusout", checkSame);

function checkSame() {
    if (contra1.value !== contra2.value) {
        mensaje.textContent = "❗Key Phrases DO NOT MATCH!";
        mensaje.style.visibility = "visible";
        contra2.style.backgroundColor = "#fff0f3";
        contra2.value = "";
        contra2.focus();
    } else {
        mensaje.style.visibility = "hidden";
        contra2.style.backgroundColor = "#fff";
        contra2.style.color = "#000";
    }
}

const displayRange=document.querySelector("#rangevalue");

const value=document.querySelector("#r");

value.addEventListener("change",displayValue);

value.addEventListener("input",displayValue);

function displayValue(){
    displayRange.innerHTML=value.value;
}