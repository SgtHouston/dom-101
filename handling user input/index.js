const button2 = document.getElementById("button2");

// Option 2: setting property
button2.onclick = function () {
  alert("you clicked me too!");
};

const button3 = document.getElementById("button3");
// Multiple listeners on one button
button3.addEventListener("click", function () {
  alert("Finally!!");
});
button3.addEventListener("click", function () {
  alert("Finally2");
});
button3.addEventListener("click", function () {
  alert("Finally3");
});


//Button 4 is  One Time Click.  Part of the function is to remove event listener
const button4 = document.getElementById("button4");

function clickOnce() {
  alert("one time!");
  button4.removeEventListener("click", clickOnce);
}
button4.addEventListener("click", clickOnce);






