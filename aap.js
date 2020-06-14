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
var num = +prompt("Enter a Number" , "Number of your choice")
document.write("RESULT" + "<br>" );
document.write("The Value of a is : " + num + "<br>" );













