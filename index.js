// 1. Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38 

/* var today =new Date()
var day =today.getDay()
var dayList=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
console.log('today is '+dayList[day]+ ".")

var hour=today.getHours();
var minute=today.getMinutes();
var second =today.getSeconds();
var prepand =(hour >= 12)?"pm":"am";

console.log(hour,minute,second)

  hour = (hour >= 12)? hour-12:hour
  if(hour ===0 && prepand==="pm"){
      if(minute === 0 && second ===0){
          hour= 12
          prepand="noon"
      }else{
          hour=12
          prepand="pm"
      }
  }
  if(hour ===0 && prepand==="am"){
      if(minute===0 && second===0){
          hour=12
          prepand="midnight"
      }else{
          hour=12
          prepand="am"
      }


  }
  console.log('current time: ' + hour + prepand + ':'+minute+ ':' +second) */


//   2. Write a JavaScript program to get the current date.
//   Expected Output :
//   mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

/* var date =new Date()
console.log(date)
var day = date.getDay()
var month =date.getMonth()
var year =date.getFullYear()
console.log(month+"-"+day + "-"+year)
console.log(day+"/"+month + "/"+year) */




// 3. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
/* var side1 =5
var side2 =6
var side3= 7
var semiParameter = (side1+side2+side3)/2
var area = Math.sqrt(semiParameter*((semiParameter-side1)*(semiParameter-side2)*(semiParameter-side3)))
console.log('area of triangle ' + area.toFixed()) */



//4. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
/*  var year = 2020
 var leapYear= (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
console.log(leapYear) */
//answer is true or false 


// 5.Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
/* for (var year = 2014; year <= 2050; year++)
    {
    var day = new Date(year, 0, 1);
    if ( day.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
 */

//    6 Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
/* 
var num = Math.ceil(Math.random() *10)
console.log(num)
 var inpNum =4
 if(num === inpNum){
     console.log('number match')
 }else{
     console.log('not match')
 }
 */


 //7. Write a JavaScript program to calculate days left until next Christmas.
/* today =new Date() // get a date
var xmas = new Date(today.getFullYear(),11,25)//set xmas date
console.log(xmas)
if(today.getMonth ==11 && today.getDay()>25){
    xmas.setFullYear(xmas.setFullYear()+1)
}
var oneDay= 1000*60*60*24
 var findDay= xmas.getTime()-today.getTime()
 var getOriginTime= findDay/oneDay

 console.log(findDay)
 console.log(getOriginTime)
 console.log(Math.ceil(getOriginTime) +' days left to xmas') */



//  8. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

// const cToFahr = cTemp * 9 / 5 + 32;
// const fToCel = (fTemp - 32) * 5 / 9;
/* function cToF(celsius) 
{
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  return console.log(cToFahr);
  //const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    //console.log(message);
}
cToF(60)
function fToC(farenheight){
    const fTemp =farenheight
    const fToCel= (fTemp-32)*5/9
    console.log(Math.ceil(fToCel))
}
fToC(120)
 */

// 9.Write a JavaScript program to get the website URL (loading page).

/* console.log(document.URL); */


//10 Write a JavaScript exercise to get the extension of a filename.
/* var filename ="index.js"
filename.split('.').pop()
console.log(filename.split('.').pop());
 */