var myName = prompt("Enter your name");
var dud = document.getElementById("SSS");
var du = document.getElementById("2");
myName=myName.toLowerCase();
console.log(myName);
if(myName=="duddu"){
    dud.classList.add("display");
    du.classList.add("hide");
}