let tg = window.Telegram.WebApp;


tg.MainButton.textColor ="#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

tg.MainButton.setText("Выберите стиль");
tg.MainButton.show();

btn1.addEventListener("click", function(){

    tg.MainButton.setText("Установить стиль 1990s");
    item = "1";
    tg.MainButton.show();
});

btn2.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Magazine");
    item = "2";
    tg.MainButton.show();
});

btn3.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Pop Figure");
    item = "3";
    tg.MainButton.show();
});

btn4.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Nobody");
    item = "4";
    tg.MainButton.show();
});

btn5.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Rage");
    item = "5";
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item);
});
