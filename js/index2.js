let x = 0;


function ch() {
  document.querySelector(".chButton").innerHTML = "(Click Me)";
}

function change() {
  let checkBox = document.querySelector(".chButton");
  if(x === 0) {
    setTimeout(ch, 9000);
    x++;
  } else if (x === 1) {
    checkBox.innerHTML;
    x--;
  }
}

function openNewPage2() {
  const newPageFileName2 = "index3.html";
  window.location.href = newPageFileName2;
}


