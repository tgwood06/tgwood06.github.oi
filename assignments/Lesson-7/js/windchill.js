/*The formula to calculate the wind chill factor is: 
f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16  
where f is the wind chill factor in Fahrenheit, t is 
the air temperature in Fahrenheit, and s is the wind speed in miles per hour.*/



var t= 56;
var s= 5;
var f = 35.74 + 0.6215*t - 35.75 * Math.pow(s,0.16) + 0.4275 * t *Math.pow(s,0.16);
document.getElementById("windchill").innerHTML = Math.round(f);
