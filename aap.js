// CHAPTER 1
// alert("Welcome to our website");
// var a= prompt("JavaScript Alert","Enter Password")
// if(a == 123){
//     alert("Correct Password")
// }
// else{
//     alert("Error! Please enter a valid password")
// }
// alert("Wlcome to JS Lnad... \nHappy Coding");
// alert("JavaScript Alert");
// alert("Welcome to JS Land...");
// checkbox remaining

// CHAPTER 2.
//1:
// var username;
//2:
// var myName="Faiza Jawad";
//3:
// var message;
// message = "Hello World";
// alert(message);
//4:
// var name = prompt("Enater Your Name" , "My Name is");
// var age = prompt("Enter Your Age" , "My Age is");
// var prof = prompt("Enter Your Profession" , "My Profession is");
// window.alert(name);
// window.alert(age);
// window.alert(prof);
//5:
// var a = piiza ;
// for( a in Range){
//    window.alert(--a); 
// }
//6:
// var email = "jawadfaiza97@yahoo.com";
// window.alert("My email address is" + email);
//7:
//var book = "A Smarter Way to Learn JavaScript";
//window.alert("I am trying to learn from the book " + book);
//8:
//document.write("Yah! I can Write HTML content through JavaScript");
// window.alert("“▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬”")

// CHAPTER 3
//1:
// var age = 15;
// window.alert("I am " + age + " years old");
//2:

// 3:
// var birthYear = 1999;
// document.write("My Date of Borth is" + birthYear + "\n Datatype of my declared variable is number");
//4:
// var visitorsName = prompt("Please Enter Your Name" , "My Name is")
// var tShirts = prompt("How Many T-shirts do YOu want to Order" , "Number od T-Shirts")
// document.write(visitorsName + " ordered " + tShirts + " T-shirt(s) On XYZ ONLINE STORE");

// CHAPTER 4
//1:


// CHAPTER 5
//1:
// var a = +prompt("Enter First Number" , "First Number")
// var b = +prompt("Enter Second Number" , "Second Number")
// var c = a + b
// document.write("Sun of " + a + " and " + b + " is " + c );
//2:
// var a = +prompt("Enter First Number" , "First Number")
// var b = +prompt("Enter Second Number" , "Second Number")
// var c = a - b
// document.write("Difference of " + a + " and " + b + " is " + c );
// var a = +prompt("Enter First Number" , "First Number")
// var b = +prompt("Enter Second Number" , "Second Number")
// var c = a * b
// document.write("Multiple of " + a + " and " + b + " is " + c );
// var a = +prompt("Enter First Number" , "First Number")
// var b = +prompt("Enter Second Number" , "Second Number")
// var c = a / b
// document.write("Division of " + a + " and " + b + " is " + c );
//3:
// var a = +prompt("Enter a number")
// document.write("Value after variable declaration is " +typeof(a) + "<br>");
// document.write("Value of variable/Initial Value " + a + "<br>");
// document.write("Value after Increament is " + ++a + "<br>");    
// var b = (a + 7)
// document.write("Value after adding 7 to it is " + b + "<br>");
// document.write("Value afer decrement is " + --b + "<br>");
// document.write("The Remainder is " + b%3 );
//4:
// var ticketPrice = +600
// var quantity = prompt("How many tickets do you want to buy " , "Number of tickets")
// document.write("Total cost to buy " + quantity + " tickets is " + ticketPrice*quantity + "Rs");
//5:
// var a = +prompt("Enter Number")
// for(n =0; n<=10; n++ );{
//     document.write(a + n  +"=" + a*n);
//     return a;
// }
//6:
// var cel = +prompt("Enter temprature in celcius" , "Temprature")
// var fer = ((cel*(9/5))+32)
// document.write(cel + "c is " + fer+ "F");
// var fer = +prompt("Enter temprature is feranhiet" , "Ttemrature n f")
// var cel = (fer-32)*(5/9)
// document.write(fer + "F is " + cel + "C");
//7:
// var prItem1 = +200
// var pritem2 = +600 
// var shippingCharges = +200
// var quantity1 = +prompt("Please Enter Quantity you wan to Order"  ,"Quantity of item 1")
// var quantity2 = +prompt("Please Enter Quantity you wan to Order"  ,"Quantity of item 2")
// document.write("SHOPPING CART" + "<br>");
// document.write("Price of item 1 is " + prItem1 + "Rs"  + "<br>");
// document.write("Quantity of item 1 is " + quantity1 + "<br>");
// document.write("Price of item 2 is " + pritem2 + "Rs"  + "<br>");
// document.write("Quantity of item 2 is " + quantity2 + "<br>");
// document.write("Shipping Charges " + shippingCharges + "Rs"  + "<br>");
// var tot = pritem1 + pritem2 +quantity1 + quantity2 + shippingCharges
// document.write("Total Cost of YOur Order is "+ tot + "Rs" + "<br>");
//8:
// var totalMArks = +prompt("Enter Your Total MArks" , "Tot Marks")
// var ObtainedMarks = +prompt("Enter Obtained MArks" , "Marks Obtained")
// var percentage = (totalMArks/ObtainedMarks)*100
// document.write("Mark Sheet" + "<br>");
// document.write("Total Marks " + totalMArks + "<br>");
// document.write("Marks Obtained " + ObtainedMarks + "<br>");
// document.write("Percentage " + percentage + "%" +  "<br>");
// // 9:
// document.write("CURRENCY IN PKR" + "<br>");
// var curr = +((104.80*10)+(21*25))
// document.write("TOTAL CURRENCY IN PKR " + curr + "Rs" + "<br>");
//10:
// var a = +5
// var b = +(a + 5)
// var c = b * 10
// var d = c / 2
// document.write("Initial Variable " + a + "<br>" );
// document.write("Adding 5 = " + b + "<br>" );
// document.write("Multiplying by 10 = " + c + "<br>" );
// document.write("Dividing by 2 = " + d + "<br>" );
// 11:

//12:
// var circleRaduis = +prompt("Enter radius of circle" , "Radius")
// var circleArea = 3.14 * circleRaduis * circleRaduis
// var circleCircum = 2 * 3.14 * circleRaduis 
// document.write("THE GEOMETRIZER" + "<br>" );
// document.write("Radius Of Circle = " + circleRaduis + "<br>" );
// document.write("The circumferance of Circle = " + circleCircum + "<br>" );
// document.write("The Area is = " + circleArea + "<br>" );
//13:
// var favSnack = "Cheetos Flamig Red Hot"
// var currAge = +20
// var maxAge = +40
// var perDay = +4
// var tot = (maxAge - currAge) * 4
// document.write("LIFETIME SUPPLY CALCULATOR" + "<br>" );
// document.write("Favourite Snack" + favSnack + "<br>" );
// document.write("Current Age" + currAge + "<br>" );
// document.write("Estimated Max Age" + maxAge + "<br>" );
// document.write("Amount of Snacks Per Day" + perDay + "<br>" );
// document.write("You will need " + tot + favSnack + " to last you until the ripe old age of " + maxAge + "<br>" );

// CHAPTER 6 - 9
//1:
// var num = +prompt("Enter a Number" , "Number of your choice")
// var b = ++num
// var c = b++
// var d = --c
// var e = d--
// document.write("RESULT" + "<br>" );
// document.write("The value of a is : " + num + "<br>");
// document.write("------------------------" + "<br>");
// document.write("The Value of ++a is : " + b + "<br>" );
// document.write("The value of  a is : " + b + "<br>");
// document.write("The Value of a++ is : " + c + "<br>" );
// document.write("The value of  a is : " + c + "<br>");
// document.write("The Value of --a is : " + d + "<br>" );
// document.write("The value of  a is : " + d + "<br>");
// document.write("The Value of a-- is : " + e + "<br>" );
// document.write("The value of  a is : " + e + "<br>");
//2:

// //3:
// var Greetings = prompt("Please enter your name" , "Your name")
// alert("Hello " + Greetings + " Welcome to Our Website" )
// //5:
// var num = +prompt("Please enter a number,Your number")
// if(num = int);{
//     document.write();
// }
// else{
// }
//6:
// var sub1 = prompt("Please enter your first subject","Subject no 1")
// var sub2 = prompt("Please enter your second subject","Subject no 2")
// var sub3 = prompt("Please enter your third subject","Subject no 3")

//CHAPTER 9-10
// //1:
// var cityName = prompt("Enter city name" , "City Name")
// if(cityName == "karachi");{
//     document.write("Welcome to the City Of Lights");
// }
//2:
// var gender = prompt("Please enter your gender" , "Your Gender")
// if(gender == "male"){
//     document.write("Good Morning Sir")
// }
// else{
//     document.write("Good Morning Mam")
// }
//3:
// var lightColor = prompt("Enter Color of your Traffic Light" , "Color")
// if(lightColor == "red");{
//     document.write("MUST STOP");
// }
// else if(lightColor == "yellow");{
//     document.write("READY TO MOVE");
// }
// else if(lightColor == "greem");{
//     document.write("MOVE NOW");
// }
//4:
// var currentFuel = +prompt("ENter the fuel of your car in liters " , "Fuel in numbers")
// if(currentFuel >= 0.25){
//     document.write("You Have enough fuel enjoy")
// }   
// else if(currentFuel < 2.5);{
//     document.write("Please refil the fuel in your car")
// }
//6:
// var totalMaks = +prompt("Enter total Marks" , "Total Marks")
// var percentage = (totalMaks/300) * 100
// document.write("MARK SHEET" + "<br>");
// document.write("TOTAL MARKS : 300" + "<br>");
// document.write("ONTAINED MARKS : " + totalMaks + "<br>");
// document.write("PERCENTAGE : " + percentage + "<br>");
// if(percentage >= 80){
//     document.write("GRADE : A-one" + "<br>");
//     document.write("REMARKS : Excellent" + "<br>");
// }
// elif(percentage >= 70);{
//     document.write("GRADE : A" + "<br>");
//     document.write("REMARKS : Good" + "<br>");
// }
// elif(percentage >= 60);{
//     document.write("GRADE : B" + "<br>");
//     document.write("REMARKS : You need to improve" + "<br>");
// }
// elif (percentage < 60);{
//     document.write("GRADE : Fail" + "<br>");
//     document.write("REMARKS : Fail" + "<br>");
// }
//7:
// var randomNum = console.log(Math.round(Math.random() * 10))
// var userGuess = +prompt("Enter A Random Number" , "Your guess here")
// if(randomNum = userGuess);{
//     document.write("Bingo!Correct Answer")
// }
// elif(randomNum = userGuess + 1){
//     document.write("Close Enough to the Correct Answer")
// }
//8:
// var number = +prompt("enter a anumber" , "Your Number")
// var ans = number % 3
// if(ans == 0){
//     document.write("The number you have entered is divisible by 3")
// }
// else{
//     document.write("The number you have entered is not divisible by 3")
// }
//9:
// var inputNumber = +prompt("Enter number you want to be checked" , "Your Number here")
// if(inputNumber % 2 == 0){
//     document.write("Entered number is even")
// }
// else{
//     document.write("Entered number is odd")
// }
//10:
// var temp = +prompt("Please Enter Temprature" , "Temprature here")
// if(temp > 40){
//     document.write("It is too hot outside")
// }   
// else if(temp > 30){
//     document.write("The wheather today is normal")
// }
// else if(temp > 20){
//     document.write("Todays weather is cool")
// }
// else if(temp > 10){
//     document.write("OMG!!! The weather today is so cold")
// }
// else{
//     document.write("please enter a valid value for tempratue")
// }
//11:
// var firstNumber = +prompt("Enter first number" , "First number") 
// var secondNumber = +prompt("Enter second number" , "Second Number")
// var operation = prompt("Enter the operation you want it to perform i.e + , - , * , /" , "Enter operation")
// var add = firstNumber + secondNumber 
// var subb = firstNumber - secondNumber
// var multi = firstNumber * secondNumber
// var div = firstNumber / secondNumber
// if(operation == "+"){
//     document.write(firstNumber + " + " + secondNumber + " = " + add)
// }
// else if(operation == "-"){
//     document.write(firstNumber + " - " + secondNumber + " = " + subb)
// }
// else if(operation == "*"){
//     document.write(firstNumber + " * " + secondNumber + " = " + multi)
// }
// else if(operation == "/"){
//     document.write(firstNumber + " / " + secondNumber + " = " + div)
// }
// else{
//     document.write("Please enter a valid operation")
// }
//   CHAPTER 12-13
//1


//2:










