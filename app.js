// const d= new Date();
// document.getElementById("show").innerText=d.getDate();
// document.getElementById("show1").innerText=d.getMonth();
// document.getElementById("show2").innerText=d.getFullYear();
// document.getElementById("show").innerText=d.getDate();
const d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("show").innerHTML = days[d.getDay()];
// document.write(d.getHours(), "   ",d.getMinutes(),"     ",d.getSeconds());
// document.write();
// document.write();
document.write("Today is: " , days[d.getDay()],"  ");
let t=d.getHours();
if (t>12){
    document.write("Time is:  ",t-12,"  PM", "  ",d.getMinutes(),"  Minutes ",d.getSeconds(), "  Seconds ");
}
else{
    document.write("Time is:",t,"  AM", "  ",d.getMinutes(),"Minutes ",d.getSeconds(), "   Seconds");

}
document.write("<br>");
document.write(d.getMonth(),"-",d.getDay(),"-",d.getFullYear());
// 5, 6, 7

var a=5;
var b=6;
var c=7; 
var s= (a+b+c)/2;

var area=(s*(s-a)*(s-b)*(s-c))^1/2;
document.write("<br>");
document.write("the area of triangle is:", area);

// let str="Saylani";
// let str1="";
// for (let i = str.length - 1; i >= 0; i--) {
//     str1 += str[i];
// }
// }
// return str1
// document.write("<br>");
// document.write(str1);

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // take input from the user
// string="Saylani"
// const result = reverseString(string);
// document.write("<br><br>",result);

let str="Saylani";
let newStr="";
let l=str.length;

for (let i=l-1 ;i>=0; i--){
    newStr+=str[i];
}

document.write("<br>",newStr);

let year=d.getFullYear();
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    document.write("<br>"," Current Year is Leap Year");

}
else{
    document.write("<br>","The Current year is not a leap year");
}


let calSun=0;
for (i=2014;i<=2050;i++){
    let check =new Date(`January 1, ${i}`).getDay();
    if (check==0){
        calSun+=1;
    }

}
document.write("<br>","Number of Sundays:   ",calSun);
// Math.floor(Math.random() * 10);
// let b= document.getElementById("guess").value;

// if (b==Math.floor(Math.random() * 10)){
//     document.write("<br>","You got it right");
// }
// else{
//     document.write("<br>","Try Again");
// }
 
function check() {
    var x = Math.floor((Math.random() * 10) + 1);
    var i = document.getElementById('inputFiled').value;
 
    if (i === x) {
      document.getElementById("sh").innerText="Good JOb";
    }else {
       document.getElementById("sh").innerText= "Not matched";
    }

   
}
// // let currentYear = d.getFullYear();

//  // Get the current date
//  let today = new Date();
  
//  // Get the year of the current date
//  let christmasYear = today.getFullYear();

//  // Check if the current date is
//  // already past by checking if the month
//  // is December and the current day
//  // is greater than 25
//  if (today.getMonth() == 7 &&
//      today.getDate() > 14) {

//    // Add an year so that the next
//    // Christmas date could be used
//    aYear = aYear + 1;
//  }

//  // Get the date of the next Christmas
//  let aDate = 
//      new Date(aYear, 7, 14);

//  // Get the number of milliseconds in 1 day
//  let dayMilliseconds =
//      1000 * 60 * 60 * 24;

//  // Get the remaining amount of days
//  let remainingDays = Math.ceil(
//    (christmaDate.getTime() - today.getTime()) /
//    (dayMilliseconds)
//  );

//  // Write it to the page
//  document.write("There are " + remainingDays +
//                 " days remaining until 14 August.");

