var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var addSum = document.getElementById('add-sum');

numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    addSum.innerHTML = one + two;
}

var firstName = document.getElementById("first-name");
var secondName = document.getElementById("second-name");
var thirdName = document.getElementById("third-name");

var firstPic = document.getElementById("first-pic");
var secondPic = document.getElementById("second-pic");
var thirdPic = document.getElementById("third-pic");

firstName.addEventListener("click", showPic);
secondName.addEventListener("click", showPic);
thirdName.addEventListener("click", showPic);

function showPic() {
    var picID = this.attributes["data-img"].value;
    var pic = document.getElementById(picID);
    console.log(pic.className);
    if (pic.className == "hide") {
        pic.className = "show";
    }
    else {
        pic.className = "hide";
    }
}