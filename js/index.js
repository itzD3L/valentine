let i = 0;
let txt = " I Just Want To Give You Something....Digitally.";
let txtSpeed = 80;
let loadSpeed = 1000;

window.onload = function() {
  setTimeout(VDiscription, loadSpeed);
  setTimeout(clickHere, 5600);
};

function VDiscription() {
  if (i < txt.length) {
    document.querySelector(".description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(VDiscription, txtSpeed);
  }
}

function clickHere() {
  document.querySelector(".chButton").innerHTML = "(Click Me)";
}

function openNewPage1() {
  const newPageFileName1 = "index2.html";
  window.location.href = newPageFileName1;
}

