// String Methods

// Question 1

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName + " " +lastName;
// document.write(fullName);


// Question 2

// var mobileName = "Samsung Galaxy S6 Edge PLus"
// var lengthNum = mobileName.length
// document.write("My favorite phon is: "+ mobileName + "<br>" + "Length of String: " + lengthNum)



//Question 3

// var text = "Pakistani";
// var indexNum = text.indexOf("n");
// document.write("String: " + text + "<br>" + "Index of 'n': " + indexNum)



// Qeustion 4 

// var text = "Hello World";
// var lastIndexNum = text.lastIndexOf("l");
// document.write("String: " + text + "<br>" + "Last index of 'l': " + lastIndexNum)



//Question 5

// var text = "Pakistani";
// document.write("String: " + text + "<br>")
// var indexNum = text.indexOf("i");
// var char = text.charAt(indexNum);
// document.write("Character at index " + indexNum + ": " + char)



//Question 6

// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var fullName = firstName.concat(" ",lastName)
// document.write(fullName);



//Qeustion 7

// var cityName = "Hyderabad"
// var citReplac = cityName.replace("Hyderabad","Islamabad");
// document.write("City: " + cityName + "<br>" + "After replacment: " + citReplac)



//Question 8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var msgReplace = message.replace(/and/g,"&");
// document.write(msgReplace)



//Question 9

// var value1 = 472;
// var convString = value1.toString();
// document.write("Value: " + value1 + "<br>" + "Type: " + convString + "<br>")
// var value2 = "472"
// var convNum = Number(value2);
// document.write("Value: " + value2 + "<br>" + "Type: " + convNum)



//Question 10

// var input = prompt("Enter Product Name")
// var UpperCase = input.toUpperCase();
// document.write("User input: "+ input + "<br>" + "Upper case: " + UpperCase)



// Question 11

// var input = prompt("Enter your Name")
// var firstChar = input.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = input.slice(1);
// otherChar = otherChar.toLowerCase();
// var names = firstChar + otherChar;
// document.write("User input: " + input + "<br>" + "Title case: " + names)



//Question 12

// var num = 35.36;
// var convString = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>" + "Result: " + convString)



//Question 13

//Part 1
// var UserName =prompt("Enter User name");
// for(var i = 0;i < UserName.length;i++){
//     if(UserName[i].charCodeAt() === 64){
//         alert("UserName Invailed")
//     }else if(UserName[i].charCodeAt() === 33){
//         alert("UserName Invailed")
//     }else if(UserName[i].charCodeAt() === 44){
//         alert("UserName Invailed")
//     }else if(UserName[i].charCodeAt() === 46){
//         alert("UserName Invailed")
//     }
// }


// Part 2

// var UserName = prompt("Enter User name");
// for(var i = 0;i < UserName.length;i++){
//     if(UserName[i].charCodeAt() === 64 || 33 || 44 || 46){
//         alert("UserName Invailed")
//     }
// }


// var names = "Ghous"
// var char = names.charCodeAt(4);
// console.log(char)




// Question 14

// var userInput = prompt("Welcom to ABC bakery. What do you want sir/ma'am ?");
// userInput = userInput.toLowerCase();
// var arr =  ["cake","apple pie","cookie","chips","patties"];
// var matchFound = false;
// for (var i = 0; i < arr.length; i++){
//     if (arr[i] === userInput ){
//         matchFound = true;
//         alert(userInput + "is available in our bakery"+ arr.indexOf(userInput));
//         break;
//     }
// } 
// if(matchFound === false){
//     alert(userInput+" is not available in our bakery")
// }



//Question 15

// var userPass = prompt("Enter Password")
// var numArray = [0,1,2,3,4,5,6,7,8,9];
// var matchFound = false;
// for(var i = 0;i < userPass.length;i++){
//     if(userPass.length <= 6){
//         alert("Error! It must at least 6 characters long")
//      break;
//     }else if(userPass.charAt(0) == numArray[i]){
//         alert("Password can not being with a number \nPlease enter a valid password")
//     }
// }



//Question 16

// Part 2
// var university = "University of Karachi";
// for (var i = 0; i < 21; i++) {
//     document.write(university[i] + "<br>")
// }

//Part 2
// var university = "University of Karachi";
//  var spl = university.split("");
//  for(var i = 0;i < 21 ;i++)
//  document.write(spl[i]+"<br>")




//Question 17

// var userInput = prompt("Enter Word");
// document.write("User Input: " + userInput +"<br>")
// var value = userInput;
// var lastChar = value.charAt(userInput.length - 1)
// document.write("Last character of input: "+lastChar)



// Question 18

// var text = "“the quick brown fox jumps over the lazy dog”";
// document.write("Text: "+ text + "<br>")
// var count = text.match(/the/g).length;
// document.write("There are "+ count + " occurrences of word 'the'")






//Math Methods


//Question 1

// Part 1
// var num = 3.45214;
// document.write("Number: " + num +"<br>")
// var round = Math.round(num);
// var floor = Math.floor(round);
// var ceil = Math.ceil(num);
// document.write("round off value: " + round + "<br>" + "floor value: " + floor + "<br>" + "ceil value: " +  ceil)

//Part 2
// var num = prompt("Entr num");
// document.write("Number: " + num +"<br>")
// var round = Math.round(num);
// var floor = Math.floor(round);
// var ceil = Math.ceil(num);
// document.write("round off value: " + round + "<br>" + "floor value: " + floor + "<br>" + "ceil value: " +  ceil)



//Question 2

// var num = -2.673;
// document.write("Number: " + num +"<br>")
// var round = Math.round(num);
// var floor = Math.floor(round);
// var ceil = Math.ceil(num);
// document.write("round off value: " + round + "<br>" + "floor value: " + floor + "<br>" + "ceil value: " +  ceil)


// Question 3

// var num = -4;
// var abs = Math.abs(num);
// document.write("The absolute value of "+ num + " is " + abs);



//Question 4

// // Part 1
// var diceRoll1 = Math.floor( Math.random() * 6) +1;
// var diceRoll2 = Math.floor(Math.random() * 6) +1;
// document.write("random dice value: " + diceRoll1 + "<br>" + 
// "random dice value: " + diceRoll2);


// //Part 2
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: " + diceRoll);



//Question 5

// //Part 1
// var roll1 = Math.floor(Math.random() * 2) +1;
// var roll2 = Math.floor(Math.random() * 2) +1;
// if(roll1 === 2){
//     document.write(roll1 + "<br>" + "randam coin value: Heads" )
// }else if(roll2 === 1){
//     document.write(roll2 + "<br>" + "randam coin value: Tails" )
// }


// //Part 2
// var headUser = "Heads"
// var tailUser = "Tails"
// var coin = Math.floor(Math.random() * 2) +1;
// if(coin === 1){
//     document.write(coin + "<br>" + "random coin value: " + headUser)
// }else{
//     document.write(coin + "<br>" + "random coin value: " + tailUser)
// }


//Question 6

// var randomNum = Math.floor(Math.random() * 101) +1;
// document.write("Random number between 1 and 100: " + randomNum);


//Question 7

// var inputW8 = prompt("Enter your Weight");
// var value = ("{50,50kgs,50.2kgs,50.2kilograms}");

// var parse = JSON.parse(value)
// console.log(parse)

// const obj = JSON. parse('{"name":"John", "age":30, "city":"New York"}');


// search
// const json = '{"result":true, "count":50}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// // expected output: true




//Question 8

// var userInput = prompt("Enter a number betwern 1 to 10")
// var sec = Math.floor(Math.random() * 10) +1;
// if(userInput === sec){
//     document.write("Congratulate")
// }else{
//     document.write("Try Again!")
// }






//Date Methods


//Question 1 

// var date = new Date();
// document.write(date);



//Question 2

// var monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// var now = new Date();
// var theMonth = now.getMonth();
// var namsOfMonth = monthName[theMonth]
// document.write("Current Month: " + namsOfMonth)  




//Question 3

// var now = new Date();
// var toString = now.toString();
// var day = toString.slice(0,3)
// document.write("Today is "+day)




// Question 4

// var now = new Date();
// var toString = now.toString();
// var day = toString.slice(0,3)
// if(day === "Sat" || day === "Sun"){
//     document.write("It's Fun Day!")
// }




//Qustion 5

// var now = new Date();
// var today = now.getDate();
// if (today <= 15) {
//     document.write("First fifteen days of the month")
// }else{
//     document.write("Last days of the month")
// }




//Question 6

// Part 1
// var now = new Date ();
// document.write("Current Date: " + now + "<br>")
// var millisec = now.getTime();
// document.write("Elapsed milliseconds since January 1,1970: " + millisec + "<br>")
// var totalMin = millisec/(1000*60*60)
// document.write("Elapsed minutes since January 1,1970: " +totalMin)


//Part 2
// var now = new Date();
// var millisec = now.getTime();
// var totalMin = millisec/(1000*60*60)
// console.log(totalMin)




//Question 7


// var now = new Date();
// var hours = now.getHours();
// if (hours < 12) {
//     document.write("It's AM")
// }else{
//     document.write("It's PM")
// }



//Question 8

// var date = new Date("December 31, 2022");
//     alert(date)





//Question 9

// var date = new Date("June 18, 2021");
// var totalMili = date.getTime();
// var date1 = new Date();
// var totalMili1 = date1.getTime();
// var total = totalMili1-totalMili;
// var diffday = total/(1000*60*60*24)
// var accuday = Math.floor(diffday);
// document.write(accuday + " days have passed since 1st ramdan,2021")





//Question 10

// var date = new Date("Dec 05, 2015");
// date.setTime(7)
// document.write("On refernce date "+ date +"<br>")
// var totalMili = date.getTime();
// var date1 = new Date();
// var totalMili1 = date1.getTime();
// var total = totalMili1-totalMili;
// var diffsec = total/(1000*60*60)
// var accusec = Math.floor(diffsec);
// document.write(accusec + " days have passed since beginning of 2015")





//Question 11

// var date = new Date();
//     var hourAgo = new Date(2020,9,4,18,19,0,0);
//     document.write("Current date "+date+"<br>"+"1 hours ago,it was "+hourAgo)




// //Question 12

// var date = new Date();
// var hourAgo = new Date(1922,9,4,18,19,0,0);
// document.write("Current date "+date+"<br>"+"100 Years back,it was " +hourAgo)




//Question 13

// var dob = new Date("Mar 5,2000")
// var dobMilli = dob.getTime();
// var today = new Date ();
// var todayMilli = today.getTime();
// var diff = todayMilli - dobMilli;
// var diffYear = diff/(1000*60*60*24*30*12)
// var accuAge = Math.floor(diffYear);
// document.write("Your age is "+accuAge+ "<br>" + "Your birth year is " + dob)






//Question 14


// var cusName = "Ghous Ali"
// var monthName = ["January","Februar","March","April","May","June","July","August","Sepember","October","Novamber","Decamber"];
// var now = new Date ();
// var theMonth = now.getMonth();
// var nameOfMonth = monthName[theMonth]
// document.write("<h1>"+"K-Electric Bill"+"</h1>"+"<br>"+"Customer Name: " + cusName + "<br>" +"Month: " + nameOfMonth + "<br>")
// var numOfUnits = 410;
// var chargPerUnit = 16;
// document.write("Number of units: "+ numOfUnits + "<br>" + "Charges per unit: " + chargPerUnit + "<br>"+ "<br>")
// var netAmount = numOfUnits * chargPerUnit;
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>")
// var latePAychar = 350 
// document.write("Late payment surgcharge: "+ latePAychar + "<br>")
// var latePaySurcharg = netAmount + latePAychar;
// document.write("Gross Amount Payable (after Due Date): " + latePaySurcharg)








//Function 35-38



//Question 1

// function dateTime(){
//     var date = new Date();
//     document.write(date);
// }
// dateTime();



//Question 2

//Part 1
// function greeting(fname ,lname){
//     var c = fname + " " +lname;
//     alert(c)
// }
// greeting("Ghous","Ali");



//Part 2
// function greeting(fname,lname){
//     var fname = prompt("Enter First Name")
//     var lname = prompt("Enter Last NAme")
//     var c = fname + " " +lname;
//     alert(c)
// }

// greeting();




//Question 3

// var input1 = +prompt("Enter your Value")
// var input2 = +prompt("Enter your Value")
// function sum(input1,input2){
//     var add = input1 + input2;
//     return add 
// }
// var r = sum(input1,input2)
// document.write(r)




//Question 4 Calculator

// var num1 = prompt("Enter First Value");
// var opr = prompt("Enter opr");
// var num2 = prompt("Enter Second Value")
// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return (+num1) + (+num2)
//     }else if(opr === "-"){
//         return num1 - num2
//     }else if(opr === "/"){
//         return num1 / num2
//     }else if(opr === "%"){
//         return num1/num2*100 + "%"
//     }else if(opr === "*"){
//         return num1 * num2
//     }else {
//         return "Incorrect operator"
//     }
// }
// var result = calc(num1,opr,num2);
// document.write(result)





//Question 5

// var input = prompt("Enter value")
// function add(value){
//     return value * value
// }

// var r = add(input);
// document.write(r)





//Question 6

// function facorial(n){

//    if (n > 0 && n <= 1){
//        return 1;
//    }else{
//        return n * facorial(n-1);
//    }
// }

// var g = facorial(n = +prompt("Enter number"));
// alert(g)



//Question 7 

// function count(){
//     var a = prompt("Enter Value");
//     var b = prompt("Enter Value");
//     for(var i = a; i <= b ;i++)
//     document.write(i)
// }
// count();



//Question 8

// Advance

// function hypot(){
//     var x = +prompt("Enter base value");
//     var y = +prompt("Enter Perpendicular value");
//     var base = Math.pow(x,2);
//     var perpendicular = Math.pow(y,2);
//     return  " Hypoteneus "+(base+perpendicular)+" Base "+base+ " Perpendicular "+perpendicular;
// }
// var g = hypot();
// document.write(g)



//Question 9

// function pal(w,h){
//     var a = w * h;
//     return a
// }
// var g = pal(2,"3")
// document.write(g)




//Question 10

// function pla(){
//     var word = prompt("Ener your Word");
//     var check = "";
//     for (var i = word.length - 1; i >= 0; i--) {
//         check += word[i];
//     } if (check === word) {
//     alert (word +" is Palindram word");
//     } else {
//         alert ("This not a palindram word");
//     }
// }
// pla();





//Question 11

// function qu(string){
// var str = "the quick brown fox";
// var arr = str.split(" ")
// for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// var str2 = arr.join(" ")
// document.write(str2)
// }
// qu();





//Question 12

// function web(string){
//     var str = "Wb Development Tutorial";
//     var arr = str.slice(3,15)
//     document.write(arr)
// }
// web()







// var a = "uniof";
// for(var i = 1;i <= 19 ;i++){
//     document.write(i + "<br>")
// }





// for(var i = 1;i < 19 ;i++){
//     document.write("Hello World" + "<br>")
// }




