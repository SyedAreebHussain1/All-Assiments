//  Functions, Switch Statments, While… Dowhile loop


// Question 1

// function power(a,b){
//     var c = 0;
//     var i = 1;
//     do {
//         if(c == 0){
//             c = a * a
//             i++
//         }
//         else{
//             c = c * a
//             i++
//         }
//     } while (i < b);
//     return c
// }
// console.log(power(10,4))



// Question 2

// function leapYear(year) {
//     return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapYear(2022))



// Question 3

// function area(a,b,c){
//     var s = (a+b+c)/2
//     return s
// }
// var ss = area(10,5,20)
// console.log(ss)

// function S(a,b,c){
//     var d = ss*(ss - a)*(ss - b)*(ss - c)
//     return d
// }
// var f = S(10,5,20)
// console.log(f)



// Question 4

// function sum(Math, Eng, Sci) {
//     var s = (Math + Eng + Sci) / 2;
//     return s;
// }

// function percen(tt) {
//     var per = tt / 400 * 100
//     return per
// }


// function main() {
//     var total = sum(55, 65, 78)
//     var percent = percen(total)
//     document.write(percent)
// }
// main()



// //Question 5

// function indexOff(text, word) {
//     var arr = text.split(" ")
//     for (var i = 0; i < arr?.length; i++) {
//         if (arr[i] == word) {
//             return i
//         }
//     }
// }
// console.log(indexOff("Hello world, welcome to the universe.", "to"))




// Question 6

// part 1

// function removeVowel(){
//     var remove = "You are looking awesome today"
//     console.log(remove)
//     var arr1 = remove.split("");
//     var reg =/[aeiou]/ig;
//     var arr2 = remove.match(reg)
//     var noVowels = []
//     var i = 0;
//     while (i<arr1.length) {
//        if (arr2.indexOf(arr1[i])===-1){
//            noVowels.push(arr1[i])
//        }
//         i++
//     }
// return noVowels.join("")
// }

// console.log(removeVowel())



// part 2

// function d(){
//     var txt = "What is your name"
//     var rep = txt.replace(/[aeiou]/g,"")
//     console.log(rep)
// }
// d()



// Question 7

// function occurrences() {
//     var txt = "Pleases read this application and give me gratuity";
//     var coun = 0
//     switch (txt) {
//         case 'a':
//             coun++
//         case 'A':
//             coun++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1
//         default:
//             return 0

//     }
// }
// console.log(occurrences())




// Question 8

// var km = 400
// function kmm() {
//     var m = km * 1000
//     return m
// }
// console.log(kmm())

// function inch() {
//     var i = km * 39370.08;
//     return i
// }
// console.log(inch())

// function fiit() {
//     var f = km * 3280.84;
//     return f
// }
// console.log(fiit())
// function centiMeters() {
//     var cmm = km * 1000 * 100
//     return cmm
// }
// console.log(centiMeters())



// Question 9

// var total = 40;
// var rs = 12
// function get(hours){
//     var overTime = hours - total
//     var overtime_pay = overTime*rs
//     return overtime_pay 
// } 
// console.log(get(23))



// Question 10

// function main() {
//     var rs = prompt('Enter amount to withdraw')
//     var hundred = 0, fifty = 0, ten = 0
//     if (rs >= 100) {
//         hundred = rs / 100
//         rs = rs % 100
//     } else if (rs >= 50) {
//         fifty = (rs % 100) / 50
//         rs = rs / 50
//     } else if (rs >= 10){
//         ten = (rs % 50)/10
//         rs = rs/10
//     }
//     document.write("Rs 100 = "+hundred+" Rs 50 = "+fifty+" Rs 10 = " +ten)
//     return 0;
// }
// main()



// Event Ch 43-48 

// Question 1

// function clicka(){
//     alert('Hello World!')
// }



// Question 2

// function mobileBuy(){
//     alert('Thanks for purchasing a phone from us')
// }



// Question 3

// part 1
// var arr = ['jhone 10','Doe 9','Mark 10','james 8']
// for(var i = 0;i < arr.length;i++){
//     arr[i]
//     console.log(arr[i])
//     var p1 = document.getElementById('p1')
//     p1.innerHTML = arr[0]
//     var p2 = document.getElementById('p2')
//     p2.innerHTML = arr[1]
//     var p3 = document.getElementById('p3')
//     p3.innerHTML = arr[2]
//     var p4 = document.getElementById('p4')
//     p4.innerHTML = arr[3]
// }
// function dele(id){
//     var d = document.getElementById(id)
//     d.innerHTML = ''
// }


// part2

var list = document.getElementById('list')
var arr = ['jhone 10', 'Doe 9', 'Mark 10', 'james 8']
var ul = document.getElementById('list')

for (var i = 0; i < arr.length; i++) {
    // arr[i]
    // console.log(arr[i])
    var li = document.createElement('li')
    var txt = document.createTextNode(arr[i])
    li.appendChild(txt)
    ul.appendChild(li)
    var delBtnC = document.createElement('button')
    var txtDel = document.createTextNode('Delete')
    delBtnC.appendChild(txtDel)
    delBtnC.setAttribute('onclick','delte(this)')
    li.appendChild(delBtnC)
}
function delte(e){
    e.parentNode.remove()
}




// Question 4

// part 1
// function changeImg(id,src){
//     var img = document.getElementById(id)
//     img.src = src
// }


// part 2
// function changeImg(){
//     console.log("changeImg");
//     var mimg = document.getElementById('mobile')
//     mimg.scr = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80'
// }

// function changeImgBefore(){
//     console.log("changeImgBefore");

//     var mimg = document.getElementById('mobile')
//     mimg.scr = 'https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/legacy/nameplate/cars/20_FRD_MST_42360_32.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg'
// }




// Question 5

// var clicks = 0;
// function clickBtn(){
//     clicks += 1
//     var c = document.getElementById('clickss')
//     c.innerHTML = clicks
// }








// Event Ch 49-52


// Question 1

// function sign(){
//     var input1 = document.getElementById('Ename')
//     var ce = document.createElement('p')
//     var txt = document.createTextNode('Email: '+input1.value)
//     ce.appendChild(txt)
//     var putE = document.getElementById('sign')
//     putE.appendChild(ce)

//     var inputPass = document.getElementById('pass')
//     var ceP = document.createElement('p')
//     var txtP = document.createTextNode('Password: '+inputPass.value)
//     ceP.appendChild(txtP)
//     var putP = document.getElementById('sign')
//     putP.appendChild(ceP)

//     var inputPass2 = document.getElementById('pasR')
//     var cePr = document.createElement('p')
//     var txtPr = document.createTextNode('Password Repeat: '+inputPass2.value)
//     cePr.appendChild(txtPr)
//     var putPr = document.getElementById('sign')
//     putPr.appendChild(cePr)

// }




// Question 2

// function readMore(){
//     var txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur delectus ipsam quo deserunt sequi dolorum velit accusamus. Consequatur voluptatem hic earum, atque mollitia asperiores cupiditate excepturi quae recusandae ab delectus.'
//     var para = document.getElementById('pera')
//     pera.innerHTML = txt
// }




// Queston 3







// Topic modal ch-53-58

// part 1
// Bootstrap
// function showImg(e){
//     console.log(e.src)
//     var modalImg = document.getElementById('modalImg')
//     modalImg.src = e.src
// }



// Part 2
// function showImg(e){
//     console.log(e.src)
//     var modalImg = document.getElementById('modalImg')
//     modalImg.src = e.src
// }



// Top DOM Ch 58-67

// Question 1

// // Get element of id “main-content” and assign them in a variable
// var get1 = document.getElementById('main-content')
// console.log(get1)

// // Display all child elements of “main-content” element
// var child = document.childNodes[1].childNodes[2].childNodes[51].childNodes[5]
// console.log(child)

// // Get all elements of class “render” and show their innerHTML in browser.

// var classGet = document.getElementsByClassName('render')
// console.log(classGet)


// // Fill input value whose element id first-name using javascript.
// var fval = document.getElementById('first-name')
// console.log(fval.value = "ALex")

// var lval = document.getElementById('last-name')
// console.log(lval.value = "Bank")

// var email = document.getElementById('email')
// console.log( email.value = "alexbank@example.com")

// var country = document.getElementById('country-name')
// console.log(country.value = "Pakistan")

// var phone = document.getElementById('phone-number')
// console.log(phone.value = '923001234567')




// Question 2

// What is node type of element having id “form-content”
// var nodeT = document.getElementById('form-content')
// console.log(nodeT.nodeType)

// // Show node type of element having id “lastName” and its child node.
// var lname = document.getElementById('lastName')
// console.log(lname.childNodes[0].nodeType)


// // Update child node of element having id “lastName”.
// var chil = document.getElementById('lastName')
// console.log(chil.childNodes[0].nodeValue="abc")


// // Get First and last child of id “main-content”
// var fl = document.getElementById('main-content')
// console.log(fl.firstChild)
// console.log(fl.lastChild)


// // Get next and previous siblings of id “lastName”.
// var lnsib = document.getElementById('lastName')
// console.log(lnsib.nextSibling)
// console.log(lnsib.previousSibling)



// // Get parent node and node type of element having id “email”
// var p = document.getElementById('email')
// console.log(p.parentNode)

























