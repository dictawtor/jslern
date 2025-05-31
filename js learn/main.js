
// تمرین ترو و فالس

// const price1 = 10;
// const price2 = 15;
// const price3 = 4000;
// const balance = 500;
// console.log("your account balance is :", balance);
// const totalPrice = price1 + price2 + price3 * 2;

// console.log("TotalPrice :", totalPrice);
// const averagePrice = totalPrice / 4;
// console.log("AveragePrice :", averagePrice);
// const finalPrice = totalPrice * 0.95;
// console.log("finalPrice :", finalPrice);
// const canBuy = balance >= finalPrice;
// // console.log("Can buy : " , canBuy);
// const message = canBuy
//   ? "horaaa you can buy"
//   : " sorry your account balance is not enough";
// console.log(message);

// // متد های toFixde و toString
// const number = 50;
// console.log(number);
// console.log(typeof number);

// const mesal = number.toString();
// console.log(mesal);
// console.log(typeof mesal);
// // متد toFixed
// const number2 = 50.1354654464164;
// console.log(number2.toFixed(3));

// challange: Capitalize first letter of a text
// const text = "hi, i am morteza and im a developer"
// const firstLetter = text.charAt(0)
// const upperCaseFirstLetter = firstLetter.toUpperCase()
// const finaltext = text.replace(firstLetter, upperCaseFirstLetter)
// console.log(finaltext);

// chalange : replace a part op phone number
// const phone = "09011546532"
// const substring = phone.slice(3,7)
// const signs = "****"
// const finalPhone = phone.replace(substring ,signs)
// console.log(finalPhone);

// // template literals
// const name = "morteza"
// const age  = "26"
// // const text = "Hello my name is morteza "
// const introductionText = `Hello my name is ${name} and im ${age} years old`
// console.log(text);

// challange  Extract name an last name
// const fullname = "Morteza Azami"
// const spaceIndex = fullname.indexOf(" ")
// const name = fullname.slice(0 , spaceIndex)
// const lastName = fullname.slice(spaceIndex +1)
// const nameDetailsText = `Your name is ${name } and your last name is ${lastName}`
// console.log(text);
// console.log(spaceIndex);

// Array
//   const myArray = ["morteza", "azami" ,26]
// console.log(myArray);
// console.log(myArray[1]);
//  const string = myArray.join( )
//  const string1 = myArray.join( " and ")
//  const Array2 = [1,12,3]
// const newArray = myArray.concat(Array2)
// //concat ezaFE MIKONE be array asli
// console.log(newArray);
// const new1 = [[ "qwa" , "as"  , "aa"  ] , [ "df1" ,23 ,23, 2] ]
// const finalarray = new1.flat ( )
// console.log(finalarray);
// console.log(typeof finalarray);

// includes / index of
// console.log(myArray.indexOf(26));
// console.log(myArray.includes(26));
// ba include mitunim befahmim ye array vjod dare ya na  va ba index makanesho peyda mikonim

// conditional statement
// const age = 20
// if (age >= 20) {
//   console.log("you are an adult");
// }
// else if (age >= 18) {
//   console.log("you are adult");
// }
// else if (age >= 13) {
//   console.log("you are a teenager");
// }

// check triangle // challange
// const side1 = 5
// const side2 = 5
// const side3 = 5
// if (side1 === side2 && side2 === side3){
//   console.log("this is mosalas motesavi azlaah");
// }else if (side1 === side2 || side1 === side3 || side2 ===side3){
//   console.log("this is mosalas motesavi sagein");
// }else {
//   console.log("this is mosalas gheyre motesavi azlaah");
// }

// // check number is positive or negative

// const number = -5
// if (number > 0) {
//   console.log("this is positive number");
// } else if (number < 0) {
//   console.log("this is negative number");
// } else {
//   console.log("this is zero");
// }

// Switch case
// const day = 5
// switch (day) {
//   case 1:
//     console.log("saturday");
//     break;
//   case 2:
//     console.log("sunday");
//     break;
//   case 3:
//     console.log("monday");
//     break;
//   case 4:
//     console.log("tuesday");
//     break;
//   case 5:
//     console.log("wednesday");

//     break;
//   case 6:
//     console.log("thursday");
//     break;
//   case 7:
//     console.log("friday");
//     break;

//   default:
//     console.log("this is not a valid day");
//     break;
// }

// for loop

// for (let i = 10; i > 1; i--) {
//   console.log(i);

// }
// const myArray = [2,4,6,8,10]
// for (let i = myArray.length; i > 0; i) {
// for (let i = myArray.length; i > 0; i--) {
// }

// for of loop
// const array = [2,4,6,8]
// for (const i of array) {
//     console.log(i +2 );

// }
// for in loop
// const object = {
//   name: "morteza",
//   age: 26,
//   job: "developer"
// }
// for (const key in object) {
//   console.log(`${key} : ${object[key]}`);
// }
// const keys = Object.keys(object)
// for (let i =0 ; i < keys.length; i++){
//     console.log(object[keys[i]]);
// }

//while
// let i = 1
// while (i < 10){
//     console.log(i);
//     i++
// }

//do while
// let i = 11
// do{
//      console.log(i);
//      i++
// }while (i < 10)

// challenge write a js code to print even numbers in given array
// const numbers = [13,23 , 12 ,45 , 22, 48, 66, 100]
// const evenNumbers = []
// for ( let i = 0  ; i < numbers.length ; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i])
    
//   } 
// }
// console.log(evenNumbers);
 //challenge star  
 // in male mane
// let star = []
// for(let i = 1 ; i <= 5 ; i++){
//     if (i <= 5) {
//         // const star = i
//         star.push(i)
//         console.log(...star);
        
//     }
    
// }
// inm male ostad 
// for (let i = 1 ; i <= 5 ;i++){
//     let string = " "
//     for (let j = 1 ; j <= i ; j++){
//         string += j + " " ;
//     }
//     console.log(string);
// }

// const array = [ 4, 12 , 2, 34 , 4, 1, 12, 1, 4, 4 ]
// const newArray = []
// for (let i = 0; i < array.length; i++) {
//     let current = array[i];
//   // اگر عنصر بیشتر از یک بار در آرایه وجود داره و هنوز توی duplicates اضافه نشده
//   if (
//     array.indexOf(current) !== array.lastIndexOf(current) &&
//     newArray.indexOf(current) === -1
//   ) {
//     newArray.push(current);
//   }
    
    
// }
// console.log(newArray);




// function
// function showMessage() {
//   console.log("hello");
// }
// showMessage(); // calling function

// function duplicates(number) { //number dar inja vorodiye (parameter)
//     const result = number * 2;
//     console.log(result);
// }
// duplicates(2);

// فانکشن میتونه چند تا ورودی داشته باشه
// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }
// sum(2, 3); 

//مبحث return  در فانکشن 

/**
 * مبحث return در فانکشن:
 * 
 * در جاوااسکریپت، کلمه کلیدی `return` برای بازگرداندن مقدار از یک تابع استفاده می‌شود.
 * زمانی که تابعی به دستور `return` می‌رسد، اجرای تابع متوقف شده و مقدار مشخص‌شده به جایی که تابع فراخوانی شده بازگردانده می‌شود.
 * اگر در تابع از `return` استفاده نشود، مقدار بازگشتی تابع به طور پیش‌فرض `undefined` خواهد بود.
 * 
 * مثال:
 * 
 * function sum(a, b) {
 *   return a + b;
 * }
 * 
 * const result = sum(2, 3); // مقدار result برابر با 5 خواهد بود
 * 
 * نکته: بعد از اجرای دستور `return`، هیچ کدی در ادامه‌ی تابع اجرا نخواهد شد.
 */

// function sum(a, b) {
//     // return a + b; // مقدار حاصل جمع را باز می‌گرداند
//     // console.log("This line will not be executed"); // این خط هرگز اجرا نخواهد شد  
// }
// const result = sum(2, 3);
// console.log(result);



/**
 * مبحث Scope (دامنه متغیرها) در جاوااسکریپت:
 *
 * در جاوااسکریپت، Scope به محدوده‌ای گفته می‌شود که یک متغیر یا تابع در آن قابل دسترسی است.
 * به طور کلی سه نوع Scope وجود دارد:
 *
 * 1. Global Scope (دامنه سراسری):
 *    متغیرهایی که خارج از هر تابع یا بلاک تعریف می‌شوند، در کل برنامه قابل دسترسی هستند.
 *
 * 2. Function Scope (دامنه تابع):
 *    متغیرهایی که با کلیدواژه var درون یک تابع تعریف می‌شوند، فقط در همان تابع قابل دسترسی هستند.
 *
 * 3. Block Scope (دامنه بلاک):
 *    متغیرهایی که با let یا const درون یک بلاک ({ ... }) تعریف می‌شوند، فقط در همان بلاک قابل دسترسی هستند.
 *
 * مثال:
 * 
 * let a = 10; // Global Scope
 * function test() {
 *   let b = 20; // Function Scope
 *   if (true) {
 *     let c = 30; // Block Scope
 *   }
 *   // متغیر c اینجا قابل دسترسی نیست
 * }
 * // متغیر b و c اینجا قابل دسترسی نیستند
 *
 * نکته: استفاده صحیح از Scope باعث جلوگیری از تداخل متغیرها و افزایش خوانایی و امنیت کد می‌شود.
 */

/**
 * مفهوم Hoisting (بالا بردن) در جاوااسکریپت:
 *
 * Hoisting به این معناست که اعلان متغیرها و توابع در زمان اجرای برنامه به بالای Scope مربوطه منتقل می‌شوند.
 * به عبارت دیگر، جاوااسکریپت قبل از اجرای کد، ابتدا متغیرها (با var) و توابع را در حافظه ثبت می‌کند.
 *
 * نکات مهم:
 * - فقط اعلان متغیرها (نه مقداردهی اولیه) با var و اعلان توابع (Function Declaration) Hoist می‌شوند.
 * - متغیرهای تعریف‌شده با let و const Hoist می‌شوند اما مقداردهی اولیه ندارند و قبل از مقداردهی قابل استفاده نیستند (Temporal Dead Zone).
 * - Function Expressionها (تخصیص تابع به متغیر) مانند متغیرها رفتار می‌کنند و فقط اعلان متغیر Hoist می‌شود.
 *
 * مثال:
 * 
 * console.log(a); // undefined
 * var a = 5;
 * 
 * foo(); // "Hello"
 * function foo() {
 *   console.log("Hello");
 * }
 * 
 * // اما:
 * bar(); // TypeError: bar is not a function
 * var bar = function() {
 *   console.log("Hi");
 * }
 *
 * استفاده صحیح از Hoisting باعث جلوگیری از خطاهای رایج و افزایش خوانایی کد می‌شود.
 */



// "use strict"; // فعال کردن حالت سختگیرانه

// در strict mode:
// 1. متغیرها حتما باید با let, const یا var تعریف شوند
// 2. حذف متغیرها و توابع ممنوع است 
// 3. استفاده از this در سطح global به undefined اشاره می‌کند
// 4. تکرار نام پارامتر در تابع مجاز نیست
// 5. استفاده از کلمات رزرو شده برای نام متغیر ممنوع است

// function example() {
//     let x = 10;
//     console.log(x);
// }

// example();

// strict mode یک مکانیزم برای نوشتن کد تمیزتر و امن تر در JavaScript است

//function expression چیه 
// function expression یک نوع تعریف تابع است که در آن تابع به یک متغیر نسبت داده می‌شود.
// این نوع تعریف تابع به ما اجازه می‌دهد که تابع را به عنوان یک مقدار به متغیرها، آرایه‌ها یا اشیاء نسبت دهیم.    
// function expression به دو صورت تعریف می‌شود:
// 1. با استفاده از کلمه کلیدی `function` و نام تابع (Function Declaration) 
// 2. بدون نام (Anonymous Function) که به یک متغیر نسبت داده می‌شود
// function expression به ما اجازه می‌دهد که توابع را به عنوان مقادیر در جاوااسکریپت استفاده کنیم.

//function declaration چیه
// function declaration یک نوع تعریف تابع است که در آن تابع با استفاده از کلمه کلیدی `function` و نام تابع تعریف می‌شود.
// این نوع تعریف تابع به ما اجازه می‌دهد که تابع را به عنوان یک مقدار به متغیرها، آرایه‌ها یا اشیاء نسبت دهیم.
// function declaration به ما اجازه می‌دهد که توابع را به عنوان مقادیر در جاوااسکریپت استفاده کنیم.




//IIFE (Immediately Invoked Function Expression)  
// یک الگوی طراحی در جاوااسکریپت است که به ما اجازه می‌دهد که یک تابع را بلافاصله پس از تعریف آن اجرا کنیم.
 //مثال 
// (function() {
//     console.log("This is an IIFE");  
// })(); // بلافاصله اجرا می‌شود

// arrow function
// یک نوع تعریف تابع در جاوااسکریپت است که با استفاده از علامت `=>` تعریف می‌شود.    
// این نوع تعریف تابع به ما اجازه می‌دهد که توابع را به صورت مختصرتر و با سینتکس ساده‌تری تعریف کنیم.
// example
// const add = (a, b) => a + b; 
// const result = add(2, 3);
// console.log(result); // 5 

//callback function
// یک تابع است که به عنوان آرگومان به یک تابع دیگر ارسال می‌شود و در آن تابع اجرا می‌شود.
// این الگو به ما اجازه می‌دهد که توابع را به صورت غیرهمزمان اجرا کنیم و از نتایج آن‌ها در زمان مناسب استفاده کنیم.
// مثال 
// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);  
//     callback(); // اجرای تابع callback
// }    
// function sayGoodbye() {
//     console.log("Goodbye!");
// }    
// greet("Morteza", sayGoodbye); // خروجی: Hello, Morteza! \n Goodbye!
// //example 2
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, name: "Morteza" };
//         callback(data); // اجرای تابع callback با داده‌های دریافتی
//     }, 2000);
// }
// fetchData((data) => {
//     console.log("Data received:", data); // خروجی: Data received: { id: 1, name: "Morteza" }
// });
// // example 3
// function processData(data, callback) {
//     const processedData = data.map(item => item * 2); // پردازش داده‌ها
//     callback(processedData); // اجرای تابع callback با داده‌های پردازش‌شده
// }   
// const numbers = [1, 2, 3, 4, 5];
// processData(numbers, (result) => {
//     console.log("Processed data:", result); // خروجی: Processed data: [2, 4, 6, 8, 10]
// }); 


//Challange :Write a functhion to finde the count of a letter in string

// function countLetter (str , Letter){
//    let count = 0;       
//     for (let i = 0; i < str.length; i++) {
//       if(str[i] === Letter) {
//         count++
//       }
//     }
//     return count
// }
//  const result = countLetter( "hi i am morteza" , "i")
//  console.log(result); // 2



//   for Each   چیه
//   forEach یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا بر روی هر عنصر آرایه یک تابع را اجرا کنیم.
//   این متد به صورت زیر استفاده می‌شود:
// array.forEach((element) => {
//     // کد مورد نظر برای هر عنصر
// });
//example 
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//     console.log(number);
// });
// // خروجی:
// // 1
// // 2
// // 3
// // 4
// // 5
// // این متد به ما اجازه می‌دهد که بر روی هر عنصر آرایه یک تابع را اجرا کنیم و از آن برای انجام عملیات مختلف بر روی عناصر آرایه استفاده کنیم.
// // نکته: متد forEach هیچ مقداری را بازنمی‌گرداند و فقط برای اجرای یک تابع بر روی هر عنصر آرایه استفاده می‌شود.    
// // مثال دیگر
// const fruits = ["apple", "banana", "orange"];
// fruits.forEach((fruit) => {
//     console.log(fruit);
// });
// // خروجی:
// // apple
// // banana
// // orange   

// map
// map یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا بر روی هر عنصر آرایه یک تابع را اجرا کنیم و نتیجه آن را در یک آرایه جدید ذخیره کنیم.   
// این متد به صورت زیر استفاده می‌شود:
// array.map((element) => { 
//     // کد مورد نظر برای هر عنصر
//     return newValue; // مقدار جدید برای عنصر
// });
// example
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => {
//     return number * 2; // ضرب هر عدد در 2
// });
// console.log(doubledNumbers); // خروجی: [2, 4, 6, 8, 10]
// // این متد به ما اجازه می‌دهد که بر روی هر عنصر آرایه یک تابع را اجرا کنیم و نتیجه آن را در یک آرایه جدید ذخیره کنیم.
// نکته: متد map یک آرایه جدید با مقادیر جدید بازمی‌گرداند و آرایه اصلی را تغییر نمی‌دهد. 
// مثال دیگر
// const fruits = ["apple", "banana", "orange"];
// const fruitLengths = fruits.map((fruit) => {
//     return fruit.length; // طول هر میوه
// });
// console.log(fruitLengths); // خروجی: [5, 6, 6]
// // این متد به ما اجازه می‌دهد که بر روی هر عنصر آرایه یک تابع را اجرا کنیم و نتیجه آن را در یک آرایه جدید ذخیره کنیم.
// نکته: متد map یک آرایه جدید با مقادیر جدید بازمی‌گرداند و آرایه اصلی را تغییر نمی‌دهد. 

//find
// find یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا اولین عنصری را که با شرط مشخص شده مطابقت دارد، پیدا کنیم.
// این متد به صورت زیر استفاده می‌شود:
// array.find((element) => {
//     // شرط مورد نظر برای پیدا کردن عنصر
//     return condition; // اگر شرط برقرار باشد، عنصر را برمی‌گرداند
// });
// example
// const numbers = [1, 2, 3, 4, 5];
// const foundNumber = numbers.find((number) => {
//     return number > 3; // پیدا کردن اولین عدد بزرگتر از 3
// });
// console.log(foundNumber); // خروجی: 4
// // این متد به ما اجازه می‌دهد که اولین عنصری را که با شرط مشخص شده مطابقت دارد، پیدا کنیم.
// نکته: اگر هیچ عنصری با شرط مشخص شده مطابقت نداشته باشد، متد find مقدار undefined را برمی‌گرداند.
 //findIndex
// findIndex یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا ایندکس اولین عنصری را که با شرط مشخص شده مطابقت دارد، پیدا کنیم.
// این متد به صورت زیر استفاده می‌شود:
// array.findIndex((element) => {
//     // شرط مورد نظر برای پیدا کردن عنصر  
//     return condition; // اگر شرط برقرار باشد، ایندکس عنصر را برمی‌گرداند
// });
// example
// const numbers = [1, 2, 3, 4, 5];
// const foundIndex = numbers.findIndex((number) => {
//     return number > 3; // پیدا کردن ایندکس اولین عدد بزرگتر از 3
// });
// console.log(foundIndex); // خروجی: 3
// // این متد به ما اجازه می‌دهد که ایندکس اولین عنصری را که با شرط مشخص شده مطابقت دارد، پیدا کنیم.
// نکته: اگر هیچ عنصری با شرط مشخص شده مطابقت نداشته باشد، متد findIndex مقدار -1 را برمی‌گرداند.    
