/*function toggleMenu() {
    console.log("it worked");
}*/

function toggleMenu(){
    /*console.log(document.getElementById("horizontalnav").classList);*/
    document.getElementById("horizontalnav").classList.toggle("hide");
}


var d = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var wholedate = day[d.getDay()] + ", " + d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear();

document.getElementById("date").innerHTML = wholedate;
/*var d = new Date();
document.getElementById("demo").innerHTML = d;
 var date = new Date(toDateString)???*/
