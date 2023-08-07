let tg = window.Telegram.WebApp;


tg.MainButton.textColor ="#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");

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

btn6.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Horror");
    item = "6";
    tg.MainButton.show();
});

btn7.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Pixel");
    item = "7";
    tg.MainButton.show();
});

btn8.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль 3DRM");
    item = "8";
    tg.MainButton.show();
});

btn9.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Manga");
    item = "9";
    tg.MainButton.show();
});

btn10.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Niji");
    item = "10";
    tg.MainButton.show();
});

btn11.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Concept");
    item = "11";
    tg.MainButton.show();
});

btn12.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Pastel");
    item = "12";
    tg.MainButton.show();
});

btn13.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Poster");
    item = "13";
    tg.MainButton.show();
});

btn14.addEventListener("click", function(){
    tg.MainButton.setText("Установить стиль Shapes");
    item = "14";
    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
  tg.sendData(item);
});
