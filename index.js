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

// 11.Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
 /* function difference(givenNum){
       if(givenNum <= 13){
           return 13 -givenNum
       }else{
           return (givenNum -13)*2
       }
  }
  difference(33)
  console.log(difference(33))
  console.log(difference(3)) */

//   12 Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum

/* var numA =3
var numB=33
  var sum=numA + numB
  if(numA === numB){
     console.log(sum *3)
  }else{
      console.log('not same num')
  } */

//  13. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50

/* function findResult(x,y){
    if((x + y ==50 )|| x== 50|| y ==50){
        return true
    }else{
        return false
    }
}
var result =findResult(5,55)
var result =findResult(50,55)
console.log(result) */


// 14.JavaScript program to  check from two given integers, whether one is positive and another one is negative
/* function positiveNegetive(c,d){
    if((c >0 && d<0) || (c<0 && d>0)){
        return true
    }else{
        return false
    }
}
var result=positiveNegetive(3,3)
var result=positiveNegetive(3,-3)
console.log(result) */

// 15. Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

/* function remove_character(str, char_pos) 
 {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }
 */
/*  let str = 'w3resources'.split('')

 str.splice(1, 1)
 str = str.join('')
 console.log(str)
 */
 //console.log(remove_character("w3resources",1)) */
 // ----------explain
 /* var str="w3resources"
 //part1 = str.substring(0, char_pos);
 part1=str.substring(0,1)
 //part2 = str.substring(char_pos + 1, str.length);
 part2=str.substring(1+1,str.length)
 console.log(part1)
 console.log(part2)
 console.log(part1 +part2) */



//  16.JavaScript program to create a new string from a given string changing the position of first and last characters.

/* var str="aaron"
 if(str.length <=0){
     return str
 }else{
     var midChar = str.substring(1,str.length-1)
    console.log(str.charAt(str.length -1) + midChar + str.charAt(0))
    
 } */



//  17.JavaScript program to create a new string from a given string with the first character of the given string added at the front and back

/* var str ="sohel"
var firstChar = str.substring(0,1)
console.log(firstChar + str +firstChar) */



// 18.Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
/* function result (num){

if(num % 3 ==0 || num % 7 ==0){
    return true
}else{
    return false
}
}
var res1=result(24)
console.log(res1) */



// 19.Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more

/* var str="aaron"
if(str.length >=3){
   
    var backStr= str.substring(str.length -3)
    console.log(backStr+str+backStr)
}else{
    return false
} */


// 20.JavaScript program to check whether a string starts with 'Java' and false otherwise.
/* var str="jvaandpython"
if(str < 4){
    return false 
}else{
    var findJava = str.substring(0,4)
    if(findJava === "java"){
        console.log(true)
    }else{
        console.log(false)
    }
} */

// 21. Write a JavaScript program to find the largest of three given integers.
 /*  var a =33, b=62,c=88
var max =0
if(a >b){
    max =a
}else{
    max =b
}
if(c > max){
    max =c
}else{
    max
}
  console.log(max) */


//   22.Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
/* function check_char(str1, char)
{
 ctr = 0;
 for (let i = 0; i < str1.length; i++)
 {
   if ((str1.charAt(i) == char) && (i >= 1 && i <= 3))
   {
       ctr=1;
       break;
   }
  }
  if (ctr==1) return true;
  return false;
}
var res=check_char('aaron','r')
console.log(res)
 */

// 23.JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
/* 
function strn_upper(str){
    if(str.length < 3){
        return str.toUpperCase()
    }else{
        first_part =(str.substring(0,3).toUpperCase())
        secnd_part =(str.substring(3,str.length).toLowerCase())
        return first_part +secnd_part
    }
}
var res =strn_upper('sel')
var res1 =strn_upper('seling')

console.log(res)
console.log(res1) */

// 24.JavaScript program to check whether a given number is presents in the range 40..10000. 

/*  function threeNum (x,y,z){
     if(z <40 || z >10000){
        return false
     }
     if(z >=x && z<= y)
     {return true}
 }

 var ser1= threeNum(44,40044,45)
 console.log(ser1)
 */

//  25. Write a JavaScript program to reverse a given string
/* var str ="aaron"
console.log(str.split('').reverse().join('')) */

// 26.Write a JavaScript program to capitalize the first letter of each word of a given string.

/* function capitalize(str){
    str = str.split(' ');

    for(let i=0; i < str.length; i++){
    str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
    }
var res=capitalize('my name is suhel')
console.log(res) */
/* 
function newCapitalize(str){
    str = str.split(' ')
    let newText=[]
    for(var x =0; x <str.length;x++){
    newText.push(str[x].charAt(0).toUpperCase() + str[x].slice(1))
    }
    return newText.join(' ')
}
var ser= newCapitalize('my name is hossain')
console.log(ser) */


// 27. Write a JavaScript program to convert a given number to hours and minutes
/* var num =450
var hour = Math.floor(num/60)
var minute = num % 60
console.log(hour +":" + minute) */

//28 Write a JavaScript program to convert a given number to hours and minutes
/* var str = 'hossain ahmed'
 var res=  str.split('').sort().join(' ')
   console.log(res) */

//    29.Write a JavaScript program to count the number of vowels in a given string. 
/*    var str = 'hossain'
       var res = str.match(/[aeiou]/gi)
       console.log(res.length) */


// 30.JavaScript program to create a new string of specified copies of a given string
     /*   var str='abc'
       console.log(str.repeat(2)) */
/* var str='abce'
console.log(str.substring(1, str.length -1))
console.log(str.slice(1,str.length -1)) */

//31.Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three

/* var str='aaron'
 
  if(str.length <= 3){
      console.log('false')
  }else{
      console.log(str.slice(-3)+str.slice(0,-3))
  } */
