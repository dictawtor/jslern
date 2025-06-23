// // // تمرین ترو و فالس

// // // const price1 = 10;
// // // const price2 = 15;
// // // const price3 = 4000;
// // // const balance = 500;
// // // console.log("your account balance is :", balance);
// // // const totalPrice = price1 + price2 + price3 * 2;

// // // console.log("TotalPrice :", totalPrice);
// // // const averagePrice = totalPrice / 4;
// // // console.log("AveragePrice :", averagePrice);
// // // const finalPrice = totalPrice * 0.95;
// // // console.log("finalPrice :", finalPrice);
// // // const canBuy = balance >= finalPrice;
// // // // console.log("Can buy : " , canBuy);
// // // const message = canBuy
// // //   ? "horaaa you can buy"
// // //   : " sorry your account balance is not enough";
// // // console.log(message);

// // // // متد های toFixde و toString
// // // const number = 50;
// // // console.log(number);
// // // console.log(typeof number);

// // // const mesal = number.toString();
// // // console.log(mesal);
// // // console.log(typeof mesal);
// // // // متد toFixed
// // // const number2 = 50.1354654464164;
// // // console.log(number2.toFixed(3));

// // // challange: Capitalize first letter of a text
// // // const text = "hi, i am morteza and im a developer"
// // // const firstLetter = text.charAt(0)
// // // const upperCaseFirstLetter = firstLetter.toUpperCase()
// // // const finaltext = text.replace(firstLetter, upperCaseFirstLetter)
// // // console.log(finaltext);

// // // chalange : replace a part op phone number
// // // const phone = "09011546532"
// // // const substring = phone.slice(3,7)
// // // const signs = "****"
// // // const finalPhone = phone.replace(substring ,signs)
// // // console.log(finalPhone);

// // // // template literals
// // // const name = "morteza"
// // // const age  = "26"
// // // // const text = "Hello my name is morteza "
// // // const introductionText = `Hello my name is ${name} and im ${age} years old`
// // // console.log(text);

// // // challange  Extract name an last name
// // // const fullname = "Morteza Azami"
// // // const spaceIndex = fullname.indexOf(" ")
// // // const name = fullname.slice(0 , spaceIndex)
// // // const lastName = fullname.slice(spaceIndex +1)
// // // const nameDetailsText = `Your name is ${name } and your last name is ${lastName}`
// // // console.log(text);
// // // console.log(spaceIndex);

// // // Array
// // //   const myArray = ["morteza", "azami" ,26]
// // // console.log(myArray);
// // // console.log(myArray[1]);
// // //  const string = myArray.join( )
// // //  const string1 = myArray.join( " and ")
// // //  const Array2 = [1,12,3]
// // // const newArray = myArray.concat(Array2)
// // // //concat ezaFE MIKONE be array asli
// // // console.log(newArray);
// // // const new1 = [[ "qwa" , "as"  , "aa"  ] , [ "df1" ,23 ,23, 2] ]
// // // const finalarray = new1.flat ( )
// // // console.log(finalarray);
// // // console.log(typeof finalarray);

// // // includes / index of
// // // console.log(myArray.indexOf(26));
// // // console.log(myArray.includes(26));
// // // ba include mitunim befahmim ye array vjod dare ya na  va ba index makanesho peyda mikonim

// // // conditional statement
// // // const age = 20
// // // if (age >= 20) {
// // //   console.log("you are an adult");
// // // }
// // // else if (age >= 18) {
// // //   console.log("you are adult");
// // // }
// // // else if (age >= 13) {
// // //   console.log("you are a teenager");
// // // }

// // // check triangle // challange
// // // const side1 = 5
// // // const side2 = 5
// // // const side3 = 5
// // // if (side1 === side2 && side2 === side3){
// // //   console.log("this is mosalas motesavi azlaah");
// // // }else if (side1 === side2 || side1 === side3 || side2 ===side3){
// // //   console.log("this is mosalas motesavi sagein");
// // // }else {
// // //   console.log("this is mosalas gheyre motesavi azlaah");
// // // }

// // // // check number is positive or negative

// // // const number = -5
// // // if (number > 0) {
// // //   console.log("this is positive number");
// // // } else if (number < 0) {
// // //   console.log("this is negative number");
// // // } else {
// // //   console.log("this is zero");
// // // }

// // // Switch case
// // // const day = 5
// // // switch (day) {
// // //   case 1:
// // //     console.log("saturday");
// // //     break;
// // //   case 2:
// // //     console.log("sunday");
// // //     break;
// // //   case 3:
// // //     console.log("monday");
// // //     break;
// // //   case 4:
// // //     console.log("tuesday");
// // //     break;
// // //   case 5:
// // //     console.log("wednesday");

// // //     break;
// // //   case 6:
// // //     console.log("thursday");
// // //     break;
// // //   case 7:
// // //     console.log("friday");
// // //     break;

// // //   default:
// // //     console.log("this is not a valid day");
// // //     break;
// // // }

// // // for loop

// // // for (let i = 10; i > 1; i--) {
// // //   console.log(i);

// // // }
// // // const myArray = [2,4,6,8,10]
// // // for (let i = myArray.length; i > 0; i) {
// // // for (let i = myArray.length; i > 0; i--) {
// // // }

// // // for of loop
// // // const array = [2,4,6,8]
// // // for (const i of array) {
// // //     console.log(i +2 );

// // // }
// // // for in loop
// // // const object = {
// // //   name: "morteza",
// // //   age: 26,
// // //   job: "developer"
// // // }
// // // for (const key in object) {
// // //   console.log(`${key} : ${object[key]}`);
// // // }
// // // const keys = Object.keys(object)
// // // for (let i =0 ; i < keys.length; i++){
// // //     console.log(object[keys[i]]);
// // // }

// // //while
// // // let i = 1
// // // while (i < 10){
// // //     console.log(i);
// // //     i++
// // // }

// // //do while
// // // let i = 11
// // // do{
// // //      console.log(i);
// // //      i++
// // // }while (i < 10)

// // // challenge write a js code to print even numbers in given array
// // // const numbers = [13,23 , 12 ,45 , 22, 48, 66, 100]
// // // const evenNumbers = []
// // // for ( let i = 0  ; i < numbers.length ; i++) {
// // //   if (numbers[i] % 2 === 0) {
// // //     evenNumbers.push(numbers[i])

// // //   }
// // // }
// // // console.log(evenNumbers);
// // //challenge star
// // // in male mane
// // // let star = []
// // // for(let i = 1 ; i <= 5 ; i++){
// // //     if (i <= 5) {
// // //         // const star = i
// // //         star.push(i)
// // //         console.log(...star);

// // //     }

// // // }
// // // inm male ostad
// // // for (let i = 1 ; i <= 5 ;i++){
// // //     let string = " "
// // //     for (let j = 1 ; j <= i ; j++){
// // //         string += j + " " ;
// // //     }
// // //     console.log(string);
// // // }

// // // const array = [ 4, 12 , 2, 34 , 4, 1, 12, 1, 4, 4 ]
// // // const newArray = []
// // // for (let i = 0; i < array.length; i++) {
// // //     let current = array[i];
// // //   // اگر عنصر بیشتر از یک بار در آرایه وجود داره و هنوز توی duplicates اضافه نشده
// // //   if (
// // //     array.indexOf(current) !== array.lastIndexOf(current) &&
// // //     newArray.indexOf(current) === -1
// // //   ) {
// // //     newArray.push(current);
// // //   }

// // // }
// // // console.log(newArray);

// // // function
// // // function showMessage() {
// // //   console.log("hello");
// // // }
// // // showMessage(); // calling function

// // // function duplicates(number) { //number dar inja vorodiye (parameter)
// // //     const result = number * 2;
// // //     console.log(result);
// // // }
// // // duplicates(2);

// // // فانکشن میتونه چند تا ورودی داشته باشه
// // // function sum(a, b) {
// // //   const result = a + b;
// // //   console.log(result);
// // // }
// // // sum(2, 3);

// // //مبحث return  در فانکشن

// // /**
// //  * مبحث return در فانکشن:
// //  *
// //  * در جاوااسکریپت، کلمه کلیدی `return` برای بازگرداندن مقدار از یک تابع استفاده می‌شود.
// //  * زمانی که تابعی به دستور `return` می‌رسد، اجرای تابع متوقف شده و مقدار مشخص‌شده به جایی که تابع فراخوانی شده بازگردانده می‌شود.
// //  * اگر در تابع از `return` استفاده نشود، مقدار بازگشتی تابع به طور پیش‌فرض `undefined` خواهد بود.
// //  *
// //  * مثال:
// //  *
// //  * function sum(a, b) {
// //  *   return a + b;
// //  * }
// //  *
// //  * const result = sum(2, 3); // مقدار result برابر با 5 خواهد بود
// //  *
// //  * نکته: بعد از اجرای دستور `return`، هیچ کدی در ادامه‌ی تابع اجرا نخواهد شد.
// //  */

// // // function sum(a, b) {
// // //     // return a + b; // مقدار حاصل جمع را باز می‌گرداند
// // //     // console.log("This line will not be executed"); // این خط هرگز اجرا نخواهد شد
// // // }
// // // const result = sum(2, 3);
// // // console.log(result);

// // /**
// //  * مبحث Scope (دامنه متغیرها) در جاوااسکریپت:
// //  *
// //  * در جاوااسکریپت، Scope به محدوده‌ای گفته می‌شود که یک متغیر یا تابع در آن قابل دسترسی است.
// //  * به طور کلی سه نوع Scope وجود دارد:
// //  *
// //  * 1. Global Scope (دامنه سراسری):
// //  *    متغیرهایی که خارج از هر تابع یا بلاک تعریف می‌شوند، در کل برنامه قابل دسترسی هستند.
// //  *
// //  * 2. Function Scope (دامنه تابع):
// //  *    متغیرهایی که با کلیدواژه var درون یک تابع تعریف می‌شوند، فقط در همان تابع قابل دسترسی هستند.
// //  *
// //  * 3. Block Scope (دامنه بلاک):
// //  *    متغیرهایی که با let یا const درون یک بلاک ({ ... }) تعریف می‌شوند، فقط در همان بلاک قابل دسترسی هستند.
// //  *
// //  * مثال:
// //  *
// //  * let a = 10; // Global Scope
// //  * function test() {
// //  *   let b = 20; // Function Scope
// //  *   if (true) {
// //  *     let c = 30; // Block Scope
// //  *   }
// //  *   // متغیر c اینجا قابل دسترسی نیست
// //  * }
// //  * // متغیر b و c اینجا قابل دسترسی نیستند
// //  *
// //  * نکته: استفاده صحیح از Scope باعث جلوگیری از تداخل متغیرها و افزایش خوانایی و امنیت کد می‌شود.
// //  */

// // /**
// //  * مفهوم Hoisting (بالا بردن) در جاوااسکریپت:
// //  *
// //  * Hoisting به این معناست که اعلان متغیرها و توابع در زمان اجرای برنامه به بالای Scope مربوطه منتقل می‌شوند.
// //  * به عبارت دیگر، جاوااسکریپت قبل از اجرای کد، ابتدا متغیرها (با var) و توابع را در حافظه ثبت می‌کند.
// //  *
// //  * نکات مهم:
// //  * - فقط اعلان متغیرها (نه مقداردهی اولیه) با var و اعلان توابع (Function Declaration) Hoist می‌شوند.
// //  * - متغیرهای تعریف‌شده با let و const Hoist می‌شوند اما مقداردهی اولیه ندارند و قبل از مقداردهی قابل استفاده نیستند (Temporal Dead Zone).
// //  * - Function Expressionها (تخصیص تابع به متغیر) مانند متغیرها رفتار می‌کنند و فقط اعلان متغیر Hoist می‌شود.
// //  *
// //  * مثال:
// //  *
// //  * console.log(a); // undefined
// //  * var a = 5;
// //  *
// //  * foo(); // "Hello"
// //  * function foo() {
// //  *   console.log("Hello");
// //  * }
// //  *
// //  * // اما:
// //  * bar(); // TypeError: bar is not a function
// //  * var bar = function() {
// //  *   console.log("Hi");
// //  * }
// //  *
// //  * استفاده صحیح از Hoisting باعث جلوگیری از خطاهای رایج و افزایش خوانایی کد می‌شود.
// //  */

// // // "use strict"; // فعال کردن حالت سختگیرانه

// // // در strict mode:
// // // 1. متغیرها حتما باید با let, const یا var تعریف شوند
// // // 2. حذف متغیرها و توابع ممنوع است
// // // 3. استفاده از this در سطح global به undefined اشاره می‌کند
// // // 4. تکرار نام پارامتر در تابع مجاز نیست
// // // 5. استفاده از کلمات رزرو شده برای نام متغیر ممنوع است

// // // function example() {
// // //     let x = 10;
// // //     console.log(x);
// // // }

// // // example();

// // // strict mode یک مکانیزم برای نوشتن کد تمیزتر و امن تر در JavaScript است

// // //function expression چیه
// // // function expression یک نوع تعریف تابع است که در آن تابع به یک متغیر نسبت داده می‌شود.
// // // این نوع تعریف تابع به ما اجازه می‌دهد که تابع را به عنوان یک مقدار به متغیرها، آرایه‌ها یا اشیاء نسبت دهیم.
// // // function expression به دو صورت تعریف می‌شود:
// // // 1. با استفاده از کلمه کلیدی `function` و نام تابع (Function Declaration)
// // // 2. بدون نام (Anonymous Function) که به یک متغیر نسبت داده می‌شود
// // // function expression به ما اجازه می‌دهد که توابع را به عنوان مقادیر در جاوااسکریپت استفاده کنیم.

// // //function declaration چیه
// // // function declaration یک نوع تعریف تابع است که در آن تابع با استفاده از کلمه کلیدی `function` و نام تابع تعریف می‌شود.
// // // این نوع تعریف تابع به ما اجازه می‌دهد که تابع را به عنوان یک مقدار به متغیرها، آرایه‌ها یا اشیاء نسبت دهیم.
// // // function declaration به ما اجازه می‌دهد که توابع را به عنوان مقادیر در جاوااسکریپت استفاده کنیم.

// // //IIFE (Immediately Invoked Function Expression)
// // // یک الگوی طراحی در جاوااسکریپت است که به ما اجازه می‌دهد که یک تابع را بلافاصله پس از تعریف آن اجرا کنیم.
// // //مثال
// // // (function() {
// // //     console.log("This is an IIFE");
// // // })(); // بلافاصله اجرا می‌شود

// // // arrow function
// // // یک نوع تعریف تابع در جاوااسکریپت است که با استفاده از علامت `=>` تعریف می‌شود.
// // // این نوع تعریف تابع به ما اجازه می‌دهد که توابع را به صورت مختصرتر و با سینتکس ساده‌تری تعریف کنیم.
// // // example
// // // const add = (a, b) => a + b;
// // // const result = add(2, 3);
// // // console.log(result); // 5

// // //callback function
// // // یک تابع است که به عنوان آرگومان به یک تابع دیگر ارسال می‌شود و در آن تابع اجرا می‌شود.
// // // این الگو به ما اجازه می‌دهد که توابع را به صورت غیرهمزمان اجرا کنیم و از نتایج آن‌ها در زمان مناسب استفاده کنیم.
// // // مثال
// // // function greet(name, callback) {
// // //     console.log(`Hello, ${name}!`);
// // //     callback(); // اجرای تابع callback
// // // }
// // // function sayGoodbye() {
// // //     console.log("Goodbye!");
// // // }
// // // greet("Morteza", sayGoodbye); // خروجی: Hello, Morteza! \n Goodbye!
// // // //example 2
// // // function fetchData(callback) {
// // //     setTimeout(() => {
// // //         const data = { id: 1, name: "Morteza" };
// // //         callback(data); // اجرای تابع callback با داده‌های دریافتی
// // //     }, 2000);
// // // }
// // // fetchData((data) => {
// // //     console.log("Data received:", data); // خروجی: Data received: { id: 1, name: "Morteza" }
// // // });
// // // // example 3
// // // function processData(data, callback) {
// // //     const processedData = data.map(item => item * 2); // پردازش داده‌ها
// // //     callback(processedData); // اجرای تابع callback با داده‌های پردازش‌شده
// // // }
// // // const numbers = [1, 2, 3, 4, 5];
// // // processData(numbers, (result) => {
// // //     console.log("Processed data:", result); // خروجی: Processed data: [2, 4, 6, 8, 10]
// // // });

// // //Challange :Write a functhion to finde the count of a letter in string

// // // function countLetter (str , Letter){
// // //    let count = 0;
// // //     for (let i = 0; i < str.length; i++) {
// // //       if(str[i] === Letter) {
// // //         count++
// // //       }
// // //     }
// // //     return count
// // // }
// // //  const result = countLetter( "hi i am morteza" , "i")
// // //  console.log(result); // 2

// // //   for Each   چیه
// // //   forEach یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا بر روی هر عنصر آرایه یک تابع را اجرا کنیم.
// // //   این متد به صورت زیر استفاده می‌شود:
// // // array.forEach((element) => {
// // //     // کد مورد نظر برای هر عنصر
// // // });
// // //example
// // // const numbers = [1, 2, 3, 4, 5];
// // // numbers.forEach((number) => {
// // //     console.log(number);
// // // });
// // // // خروجی:
// // // // 1
// // // // 2
// // // // 3
// // // // 4
// // // // 5
// // // // این متد به ما اجازه می‌دهد که بر روی هر عنصر آرایه یک تابع را اجرا کنیم و از آن برای انجام عملیات مختلف بر روی عناصر آرایه استفاده کنیم.
// // // // نکته: متد forEach هیچ مقداری را بازنمی‌گرداند و فقط برای اجرای یک تابع بر روی هر عنصر آرایه استفاده می‌شود.
// // // // مثال دیگر
// // // const fruits = ["apple", "banana", "orange"];
// // // fruits.forEach((fruit) => {
// // //     console.log(fruit);
// // // });
// // // // خروجی:
// // // // apple
// // // // banana
// // // // orange

// // // map
// // // map یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا بر روی هر عنصر آرایه یک تابع را اجرا کنیم و نتیجه آن را در یک آرایه جدید ذخیره کنیم.
// // // این متد به صورت زیر استفاده می‌شود:
// // // array.map((element) => {
// // //     // کد مورد نظر برای هر عنصر
// // //     return newValue; // مقدار جدید برای عنصر
// // // });
// // // example
// // // const numbers = [1, 2, 3, 4, 5];
// // // const doubledNumbers = numbers.map((number) => {
// // //     return number * 2; // ضرب هر عدد در 2
// // // });
// // // console.log(doubledNumbers); // خروجی: [2, 4, 6, 8, 10]
// // // // این متد به ما اجازه می‌دهد که بر روی هر عنصر آرایه یک تابع را اجرا کنیم و نتیجه آن را در یک آرایه جدید ذخیره کنیم.
// // // نکته: متد map یک آرایه جدید با مقادیر جدید بازمی‌گرداند و آرایه اصلی را تغییر نمی‌دهد.
// // // مثال دیگر
// // // const fruits = ["apple", "banana", "orange"];
// // // const fruitLengths = fruits.map((fruit) => {
// // //     return fruit.length; // طول هر میوه
// // // });
// // // console.log(fruitLengths); // خروجی: [5, 6, 6]
// // // // این متد به ما اجازه می‌دهد که بر روی هر عنصر آرایه یک تابع را اجرا کنیم و نتیجه آن را در یک آرایه جدید ذخیره کنیم.
// // // نکته: متد map یک آرایه جدید با مقادیر جدید بازمی‌گرداند و آرایه اصلی را تغییر نمی‌دهد.

// // //find
// // // find یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا اولین عنصری را که با شرط مشخص شده مطابقت دارد، پیدا کنیم.
// // // این متد به صورت زیر استفاده می‌شود:
// // // array.find((element) => {
// // //     // شرط مورد نظر برای پیدا کردن عنصر
// // //     return condition; // اگر شرط برقرار باشد، عنصر را برمی‌گرداند
// // // });
// // // example
// // // const numbers = [1, 2, 3, 4, 5];
// // // const foundNumber = numbers.find((number) => {
// // //     return number > 3; // پیدا کردن اولین عدد بزرگتر از 3
// // // });
// // // console.log(foundNumber); // خروجی: 4
// // // // این متد به ما اجازه می‌دهد که اولین عنصری را که با شرط مشخص شده مطابقت دارد، پیدا کنیم.
// // // نکته: اگر هیچ عنصری با شرط مشخص شده مطابقت نداشته باشد، متد find مقدار undefined را برمی‌گرداند.
// // //findIndex
// // // findIndex یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا ایندکس اولین عنصری را که با شرط مشخص شده مطابقت دارد، پیدا کنیم.
// // // این متد به صورت زیر استفاده می‌شود:
// // // array.findIndex((element) => {
// // //     // شرط مورد نظر برای پیدا کردن عنصر
// // //     return condition; // اگر شرط برقرار باشد، ایندکس عنصر را برمی‌گرداند
// // // });
// // // example
// // // const numbers = [1, 2, 3, 4, 5];
// // // const foundIndex = numbers.findIndex((number) => {
// // //     return number > 3; // پیدا کردن ایندکس اولین عدد بزرگتر از 3
// // // });
// // // console.log(foundIndex); // خروجی: 3
// // // // این متد به ما اجازه می‌دهد که ایندکس اولین عنصری را که با شرط مشخص شده مطابقت دارد، پیدا کنیم.
// // // نکته: اگر هیچ عنصری با شرط مشخص شده مطابقت نداشته باشد، متد findIndex مقدار -1 را برمی‌گرداند.

// // //filter
// // // filter یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا عناصری را که با شرط مشخص شده مطابقت دارند، پیدا کنیم و در یک آرایه جدید ذخیره کنیم.
// // // این متد به صورت زیر استفاده می‌شود:
// // // array.filter((element) => {
// // //     // شرط مورد نظر برای پیدا کردن عناصر
// // //     return condition; // اگر شرط برقرار باشد، عنصر را در آرایه جدید قرار می‌دهد
// // // });
// // // example
// // // const numbers = [1, 2, 3, 4, 5];
// // // const filteredNumbers = numbers.filter((number) => {
// // //     return number > 3; // پیدا کردن اعداد بزرگتر از 3
// // // });
// // // console.log(filteredNumbers); // خروجی: [4, 5]
// // // // این متد به ما اجازه می‌دهد که عناصری را که با شرط مشخص شده مطابقت دارند، پیدا کنیم و در یک آرایه جدید ذخیره کنیم.

// // // نکته: متد filter یک آرایه جدید با عناصری که با شرط مشخص شده مطابقت دارند، بازمی‌گرداند و آرایه اصلی را تغییر نمی‌دهد.

// // //reduce
// // // reduce یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا یک مقدار واحد را از آرایه محاسبه کنیم.
// // // این متد به صورت زیر استفاده می‌شود:
// // // array.reduce((accumulator, currentValue) => {
// // //     // کد مورد نظر برای محاسبه مقدار جدید
// // //     return newValue; // مقدار جدید برای accumulator
// // // }, initialValue);
// // // example
// // // const numbers = [1, 2, 3, 4, 5];
// // // const sum = numbers.reduce((accumulator, currentValue) => {
// // //     return accumulator + currentValue; // جمع کردن مقادیر
// // // }, 0);
// // // console.log(sum); // خروجی: 15
// // // // این متد به ما اجازه می‌دهد که یک مقدار واحد را از آرایه محاسبه کنیم.

// // // some & every
// // // some یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا بررسی کنیم آیا حداقل یک عنصر در آرایه با شرط مشخص شده مطابقت دارد یا خیر.
// // // این متد به صورت زیر استفاده می‌شود:
// // // array.some((element) => {
// // //     // شرط مورد نظر برای بررسی عنصر
// // //     return condition; // اگر شرط برقرار باشد، true برمی‌گرداند
// // // });
// // // example
// // // const numbers = [1, 2, 3, 4, 5];
// // // const hasEvenNumber = numbers.some((number) => {
// // //     return number % 2 === 0; // بررسی وجود عدد زوج
// // // });
// // // console.log(hasEvenNumber); // خروجی: true
// // // // این متد به ما اجازه می‌دهد تا بررسی کنیم آیا حداقل یک عنصر در آرایه با شرط مشخص شده مطابقت دارد یا خیر.

// // // every یک متد در آرایه‌ها است که به ما اجازه می‌دهد تا بررسی کنیم آیا همه عناصر در آرایه با شرط مشخص شده مطابقت دارند یا خیر.
// // // این متد به صورت زیر استفاده می‌شود:
// // // array.every((element) => {
// // //     // شرط مورد نظر برای بررسی عنصر
// // //     return condition; // اگر شرط برقرار باشد، true برمی‌گرداند
// // // });
// // // example
// // // const numbers = [1, 2, 3, 4, 5];
// // // const allPositive = numbers.every((number) => {
// // //     return number > 0; // بررسی مثبت بودن همه اعداد
// // // });
// // // console.log(allPositive); // خروجی: true
// // // // این متد به ما اجازه می‌دهد تا بررسی کنیم آیا همه عناصر در آرایه با شرط مشخص شده مطابقت دارند یا خیر.
// // // نکته: متد some اگر حداقل یک عنصر با شرط مشخص شده مطابقت داشته باشد، مقدار true برمی‌گرداند و در غیر این صورت مقدار false. متد every نیز اگر همه عناصر با شرط مشخص شده مطابقت داشته باشند، مقدار true برمی‌گرداند و در غیر این صورت مقدار false.

// // // Challenge 1. Find customers with age>60 and age<10
// // // Challenge 2. Build customer data with title and full name

// // // const customers = [
// // //   {
// // //     id: 1,
// // //     f_name: "Abby",
// // //     l_name: "Thomas",
// // //     gender: "M",
// // //     married: true,
// // //     age: 32,
// // //     expense: 500,
// // //     purchased: ["Shampoo", "Toys", "Book"],
// // //   },
// // //   {
// // //     id: 2,
// // //     f_name: "Jerry",
// // //     l_name: "Tom",
// // //     gender: "M",
// // //     married: true,
// // //     age: 64,
// // //     expense: 100,
// // //     purchased: ["Stick", "Blade"],
// // //   },
// // //   {
// // //     id: 3,
// // //     f_name: "Dianna",
// // //     l_name: "Cherry",
// // //     gender: "F",
// // //     married: true,
// // //     age: 22,
// // //     expense: 1500,
// // //     purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
// // //   },
// // //   {
// // //     id: 4,
// // //     f_name: "Dev",
// // //     l_name: "Currian",
// // //     gender: "M",
// // //     married: true,
// // //     age: 82,
// // //     expense: 90,
// // //     purchased: ["Book"],
// // //   },
// // //   {
// // //     id: 5,
// // //     f_name: "Maria",
// // //     l_name: "Gomes",
// // //     gender: "F",
// // //     married: false,
// // //     age: 7,
// // //     expense: 300,
// // //     purchased: ["Toys"],
// // //   },
// // // ];
// // // console.log("ok");
// // // Challenge 1: Find customers with age > 60 and age < 10
// // // const filteredCustomers = customers.filter ( (customers ) => {
// // //     return customers.age > 40 || customers.age < 10;
// // // })
// // // console.log(filteredCustomers);
// // // Challenge 2: Build customer data with title and full name
// // // const customerData = customers.map((customer) => {
// // //   if (customer.gender === "M") {
// // //     console.log("hi mr", `${customer.f_name} ${customer.l_name}`);
// // //   } else if (customer.married === true) {
// // //     console.log("hi mrs", `${customer.f_name} ${customer.l_name}`);
// // //   } else {
// // //     console.log("hi miss", `${customer.f_name} ${customer.l_name}`);
// // //   }
// // //   //     return {
// // //   //         title: "hi",
// // //   //         // f_name: customer.f_name,
// // //   //         // l_name: customer.l_name,
// // //   //         full_name: `${customer.f_name} ${customer.l_name}`
// // //   //     };
// // // });


// // //111 
// // //this  در جاوااسکریپت
// // // this یک کلمه کلیدی در جاوااسکریپت است که به شیء فعلی اشاره می‌کند که در آن کد اجرا می‌شود.     
// // // در محیط‌های مختلف، this می‌تواند به اشیاء مختلف اشاره کند. در اینجا چند مثال از نحوه استفاده از this در جاوااسکریپت آورده شده است:
// // // 1. در تابع معمولی:
// // // function showThis() {
// // //     console.log(this); // در اینجا this به شیء global اشاره می‌کند
// // // }
// // // showThis(); // خروجی: Window یا global در محیط Node.js
// // // 2. در یک شیء:
// // // const person = {
// // //     name: "Morteza",
// // //     showName: function() {
// // //         console.log(this.name); // در اینجا this به شیء person اشاره می‌کند   
// // //     }
// // // };
// // // person.showName(); // خروجی: Morteza
// // // 3. در کلاس‌ها:
// // // class Person {
// // //     constructor(name) {
// // //         this.name = name; // در اینجا this به شیء جدید اشاره می‌کند
// // //     }
// // //     showName() {
// // //         console.log(this.name); // در اینجا this به شیء فعلی اشاره می‌کند
// // //     }
// // // }
// // // }
// // // const person1 = new Person("Morteza");
// // // person1.showName(); // خروجی: Morteza
// // // 4. در رویدادها:
// // // const button = document.querySelector("button");
// // // button.addEventListener("click", function() {
// // //     console.log(this); // در اینجا this به عنصر button اشاره می‌کند
// // // });
// // // 5. در تابع‌های arrow:
// // // const person = {
// // //     name: "Morteza",
// // //     showName: () => {
// // //         console.log(this.name); // در اینجا this به شیء global اشاره می‌کند، زیرا arrow function از this محیط بیرونی خود استفاده می‌کند
// // //     }
// // // };
// // // person.showName(); // خروجی: undefined (اگر در محیط global اجرا شود)
// // // 6. در متدهای شیء:
// // const Car = {
// //     brand: "Toyota",
// //     showBrand: function() {
// //         console.log(this.brand); // در اینجا this به شیء car اشاره می‌کند
// //     }
// // };
// // car.showBrand(); // خروجی: Toyota
// // 7. در تابع‌های constructor:
// // function Car(brand) {
// //     this.brand = brand; // در اینجا this به شیء جدید اشاره می‌کند
// // }
// //     this.showBrand = function() {
// //         console.log(this.brand); // در اینجا this به شیء فعلی اشاره می‌کند
// //     };
// // }
// // const myCar = new Car("Honda");
// // myCar.showBrand(); // خروجی: Honda
// // 8. در متدهای prototype:
// // function Car(brand) {
// //     this.brand = brand; // در اینجا this به شیء جدید اشاره می‌کند
// // }
// // }
// // Car.prototype.showBrand = function() {
// //     console.log(this.brand); // در اینجا this به شیء فعلی اشاره می‌کند
// // };
// // const myCar = new Car("Honda");
// // myCar.showBrand(); // خروجی: Honda
// // // 9. در تابع‌های callback:
// // // function greet(name) {
// // //     console.log(`Hello, ${name}!`);
// // // }
// // // setTimeout(greet, 1000, "Alice"); // خروجی: Hello, Alice!
// // // 10. در تابع‌های constructor با استفاده از bind:
// // function Person(name) {
// //     this.name = name; // در اینجا this به شیء جدید اشاره می‌کند
// // }
// //     this.showName = function() {
// //         console.log(this.name); // در اینجا this به شیء فعلی اشاره می‌کند
// //     };

// // // const person1 = new Person("Morteza");
// // // const boundShowName = person1.showName.bind(person1);
// // // boundShowName(); // خروجی: Morteza
// // // 11. در تابع‌های constructor با استفاده از call و apply:
// // // function Person(name) {
// // //     this.name = name; // در اینجا this به شیء جدید اشاره می‌کند
// // // }
// // //     this.showName = function() {
// // //         console.log(this.name); // در اینجا this به شیء فعلی اشاره می‌کند 
// // //     };
// // // }
// // const person1 = new Person("Morteza");
// // const person2 = new Person("Ali");
// // person1.showName.call(person2); // خروجی: Ali
// // // person1.showName.apply(person2); // خروجی: Ali
// // // 12. در تابع‌های constructor با استفاده از bind:
// // // function Person(name) {
// // //     this.name = name; // در اینجا this به شیء جدید اشاره می‌کند
// // // }
// // //     this.showName = function() {
// // //         console.log(this.name); // در اینجا this به شیء فعلی اشاره می‌کند
// // //     };
// // // }

// //bind
// // bind یک متد در جاوااسکریپت است که به ما اجازه می‌دهد تا this را به یک شیء خاص متصل کنیم و یک تابع جدید ایجاد کنیم که در آن this همیشه به آن شیء اشاره می‌کند.
// // این متد به صورت زیر استفاده می‌شود:
// // functionName.bind(thisArg, arg1, arg2, ...);
// // example
// // const person = {
// //     name: "Morteza",
// //     showName: function() {
// //         console.log(this.name);
// //     }
// // };

// // const boundShowName = person.showName.bind(person);
// // boundShowName(); // خروجی: Morteza
// // نکته: متد bind یک تابع جدید ایجاد می‌کند که در آن this همیشه به شیء مشخص شده اشاره می‌کند. این متد همچنین می‌تواند آرگومان‌های اضافی را نیز بپذیرد که به تابع اصلی ارسال می‌شوند.
// // // const person = {
// //     name: "Morteza",
// //     showName: function(greeting) {
// //         console.log(`${greeting}, ${this.name}!`);
// //     }
// // };

// // const boundShowName = person.showName.bind(person, "Hello");
// // boundShowName(); // خروجی: Hello, Morteza!   
// // نکته: متد bind به ما اجازه می‌دهد تا this را به یک شیء خاص متصل کنیم و یک تابع جدید ایجاد کنیم که در آن this همیشه به آن شیء اشاره می‌کند. این متد همچنین می‌تواند آرگومان‌های اضافی را نیز بپذیرد که به تابع اصلی ارسال می‌شوند.

// // call & apply
// // call و apply دو متد در جاوااسکریپت هستند که به ما اجازه می‌دهند تا this را به یک شیء خاص متصل کنیم و یک تابع را با آن شیء اجرا کنیم.
// // متد call به ما اجازه می‌دهد تا یک تابع را با یک شیء خاص به عنوان this اجرا کنیم و می‌توانیم آرگومان‌های جداگانه را نیز به آن ارسال کنیم.
// // مثال:
// function greet() {
//     console.log(`Hello, ${this.name}!`);
// }
// const person = { name: "Morteza" };
// greet.call(person); // خروجی: Hello, Morteza!

// // متد apply مشابه call است، با این تفاوت که آرگومان‌ها را به صورت یک آرایه دریافت می‌کند.
// // مثال:
// function introduce(greeting) {
//     console.log(`${greeting}, I'm ${this.name}.`);
// }
// const person2 = { name: "Ali" };
// introduce.apply(person2, ["Hi"]); // خروجی: Hi, I'm Ali.

// // نکته: هر دو متد call و apply به ما اجازه می‌دهند تا this را به یک شیء خاص متصل کنیم و یک تابع را با آن شیء اجرا کنیم. تفاوت اصلی بین این دو در نحوه ارسال آرگومان‌ها است: call آرگومان‌ها را به صورت جداگانه می‌پذیرد، در حالی که apply آرگومان‌ها را به صورت یک آرایه می‌پذیرد.function Person(name) {
// // this.name = name; // در اینجا this به شیء جدید اشاره می‌کند  

// // setter & getter  توی جاوااسکریپت
// // setter و getter دو مفهوم مهم در برنامه‌نویسی شیءگرا هستند که به ما اجازه می‌دهند تا به صورت کنترل‌شده به ویژگی‌های یک شیء دسترسی پیدا کنیم و آن‌ها را تغییر دهیم.
// // setter یک متد است که به ما اجازه می‌دهد تا مقدار یک ویژگی را تنظیم کنیم. این متد معمولاً با پیشوند "set" تعریف می‌شود و یک پارامتر می‌پذیرد که مقدار جدید برای ویژگی است.
// // getter یک متد است که به ما اجازه می‌دهد تا مقدار یک ویژگی را دریافت کنیم. این متد معمولاً با پیشوند "get" تعریف می‌شود و هیچ پارامتری نمی‌پذیرد.// مثال:function Person(name) 
//  //مثال ساده 
// class Person {
//     constructor(name) {
//         this.name = name; // در اینجا this به شیء جدید اشاره می‌کند
//         let age = 0; // ویژگی خصوصی


//         // تعریف setter برای ویژگی age
//         this.setAge = function (newAge) {
//             if (newAge > 0) {
//                 age = newAge;
//             } else {
//                 console.log("Please enter a valid age.");
//             }
//         };

//         // تعریف getter برای ویژگی age
//         this.getAge = function () {
//             return age;
//         };

//         this.showName = function () {
//             console.log(this.name); // در اینجا this به شیء فعلی اشاره می‌کند
//         };

//     }
// }
// const person1 = new Person("Morteza");
// person1.setAge(1); // تنظیم سن با استفاده از setter
// console.log(person1.getAge()); // دریافت سن با استفاده از getter
// console.log(person1.name); // خروجی: Morteza
// //  // نکته: استفاده از setter و getter به ما اجازه می‌دهد تا کنترل بیشتری بر روی دسترسی و تغییر ویژگی‌های یک شیء داشته باشیم. با استفاده از این متدها، می‌توانیم اعتبارسنجی و منطق خاصی را هنگام تنظیم یا دریافت مقادیر اعمال کنیم.

// //// شیء user با مشخصات زیر:
// const user = {
//   firstName: 'مرتضی',
//   lastName: 'س',
//   age: 22,

//   // یک getter که fullName رو برگردونه
//   // یک setter که fullName بگیره و اسم و فامیل رو جدا کنه
// };

// // بعد یک تابع مستقل بساز که اطلاعات کامل کاربر رو چاپ کنه
// // از call یا apply استفاده کن که اون تابع رو با user اجرا کنی
// const fullName = `${user.firstName} ${user.lastName}`;
// Setter: function(fullName) {
//   const names = fullName.split(' ');
//   this.firstName = names[0];
//   this.lastName = names[1];
// },
// function printUserInfo() {
//   console.log(`کاربر: ${this.fullName} | سن: ${this.age}`);
// }

// // با call این تابع رو روی user اجرا کن
// printUserInfo.call(user);

//closure
// Closure یک مفهوم در برنامه‌نویسی است که به ما اجازه می‌دهد تا یک تابع داخلی به متغیرهای تابع خارجی دسترسی داشته باشد حتی زمانی که تابع خارجی اجرا شده است.
// این مفهوم به ما اجازه می‌دهد تا داده‌ها را در یک محیط محصور شده نگه داریم و از آن‌ها در توابع داخلی استفاده کنیم.       
// مثال ساده از Closure:
// function outerFunction() {
//     let outerVariable = 'Hello, ';

//     function innerFunction(name) {
//         console.log(outerVariable + name); // دسترسی به متغیر outerVariable
//     }

//     return innerFunction; // بازگشت تابع داخلی
// }   

// const closureFunction = outerFunction();
// closureFunction('World'); // خروجی: Hello, World
// // نکته: در این مثال، innerFunction به متغیر outerVariable دسترسی دارد حتی زمانی که outerFunction اجرا شده است. این به دلیل مفهوم Closure است که اجازه می‌دهد تابع داخلی به محیط خارجی خود دسترسی داشته باشد.
// // مثال پیچیده‌تر از Closure:
// function createCounter() {
//     let count = 0;

//     return {
//         increment: function() {
//             count++;
//             console.log(count);
//         },
//         decrement: function() {
//             count--;
//             console.log(count);
//         }
//     };
// }

// const counter = createCounter();
// counter.increment(); // خروجی: 1
// counter.increment(); // خروجی: 2
// counter.decrement(); // خروجی: 1    
// // نکته: در این مثال، createCounter یک Closure ایجاد می‌کند که به متغیر count دسترسی دارد. توابع increment و decrement می‌توانند به این متغیر دسترسی داشته باشند و آن را تغییر دهند، حتی زمانی که createCounter اجرا شده است. این مفهوم به ما اجازه می‌دهد تا داده‌ها را در یک محیط محصور شده نگه داریم و از آن‌ها در توابع داخلی استفاده کنیم.
// // Challenge: Write a function that returns a closure to count the number of times it has been called
// function createCallCounter() {
//     let callCount = 0;

//     return function() {
//         callCount++;
//         console.log(`Function has been called ${callCount} times.`);
//     };
// }

// const callCounter = createCallCounter();
// callCounter(); // خروجی: Function has been called 1 times.
// callCounter(); // خروجی: Function has been called 2 times.  
// callCounter(); // خروجی: Function has been called 3 times.
// // نکته: در این مثال، createCallCounter یک Closure ایجاد می‌کند که به متغیر callCount دسترسی دارد. تابع داخلی می‌تواند به این متغیر دسترسی داشته باشد و آن را تغییر دهد، حتی زمانی که createCallCounter اجرا شده است. این مفهوم به ما اجازه می‌دهد تا تعداد دفعاتی که تابع فراخوانی شده است را شمارش کنیم.     
// // Challenge: Write a function that returns a closure to create a private variable
// function createPrivateVariable(initialValue) {
//     let privateVariable = initialValue;

//     return {
//         getValue: function() {
//             return privateVariable; // دسترسی به متغیر خصوصی
//         },
//         setValue: function(newValue) {
//             privateVariable = newValue; // تغییر مقدار متغیر خصوصی
//         }
//     };
// }   

// //privateVariable
// const privateVar = createPrivateVariable(10);   
// console.log(privateVar.getValue()); // خروجی: 10
// privateVar.setValue(20);
// console.log(privateVar.getValue()); // خروجی: 20
// // نکته: در این مثال، createPrivateVariable یک Closure ایجاد می‌کند که به متغیر privateVariable دسترسی دارد. توابع getValue و setValue می‌توانند به این متغیر دسترسی داشته باشند و آن را تغییر دهند، حتی زمانی که createPrivateVariable اجرا شده است. این مفهوم به ما اجازه می‌دهد تا یک متغیر خصوصی ایجاد کنیم که فقط از طریق توابع مشخص شده قابل دسترسی است.
// // Challenge: Write a function that returns a closure to create a counter with increment and decrement methods  
// function createCounterWithMethods() {
//     let count = 0;

//     return {
//         increment: function() {
//             count++;
//             console.log(`Count incremented: ${count}`);
//         },
//         decrement: function() {
//             count--;
//             console.log(`Count decremented: ${count}`);
//         },
//         getCount: function() {
//             return count; // دسترسی به مقدار شمارنده
//         }
//     };
// }   
// const counterWithMethods = createCounterWithMethods();
// counterWithMethods.increment(); // خروجی: Count incremented: 1
// counterWithMethods.increment(); // خروجی: Count incremented: 2
// counterWithMethods.decrement(); // خروجی: Count decremented: 1
// console.log(`Current count: ${counterWithMethods.getCount()}`); // خروجی: Current count: 1
// // نکته: در این مثال، createCounterWithMethods یک Closure ایجاد می‌کند که به متغیر count دسترسی دارد. توابع increment، decrement و getCount می‌توانند به این متغیر دسترسی داشته باشند و آن را تغییر دهند یا مقدار آن را دریافت کنند، حتی زمانی که createCounterWithMethods اجرا شده است. این مفهوم به ما اجازه می‌دهد تا یک شمارنده با متدهای افزایش و کاهش ایجاد کنیم که وضعیت آن در یک محیط محصور شده نگه داشته می‌شود.
// // Challenge: Write a function that returns a closure to create a private object with methods to get and set properties
// function createPrivateObject() {
//     let privateObject = {};

//     return {
//         getProperty: function(key) {
//             return privateObject[key]; // دسترسی به ویژگی خصوصی
//         },
//         setProperty: function(key, value) {
//             privateObject[key] = value; // تغییر مقدار ویژگی خصوصی
//         },
//         getAllProperties: function() {
//             return privateObject; // دریافت تمام ویژگی‌های خصوصی
//         }
//     };
// }   
// const privateObj = createPrivateObject();
// privateObj.setProperty('name', 'Morteza');
// console.log(privateObj.getProperty('name')); // خروجی: Morteza
// privateObj.setProperty('age', 22);
// console.log(privateObj.getAllProperties()); // خروجی: { name: 'Morteza', age: 22 }  
// // نکته: در این مثال، createPrivateObject یک Closure ایجاد می‌کند که به متغیر privateObject دسترسی دارد. توابع getProperty، setProperty و getAllProperties می‌توانند به این متغیر دسترسی داشته باشند و آن را تغییر دهند یا ویژگی‌های آن را دریافت کنند، حتی زمانی که createPrivateObject اجرا شده است. این مفهوم به ما اجازه می‌دهد تا یک شیء خصوصی با متدهای مشخص شده ایجاد کنیم که فقط از طریق آن‌ها قابل دسترسی است.

// // pure - impure function
// // تابع خالص (Pure Function) تابعی است که برای هر ورودی مشخص، همیشه همان خروجی را تولید می‌کند و هیچ‌گونه عوارض جانبی ندارد. به عبارت دیگر، این تابع فقط بر اساس ورودی‌های خود عمل می‌کند و هیچ‌گونه تغییری در وضعیت خارجی یا متغیرهای جهانی ایجاد نمی‌کند.   
// // مثال از تابع خالص:
// function add(a, b) {
//     return a + b; // تابع خالص: برای هر ورودی مشخص، همیشه همان خروجی را تولید می‌کند
// }   
// console.log(add(2, 3)); // خروجی: 5
// // نکته: تابع add هیچ‌گونه عوارض جانبی ندارد و فقط بر اساس ورودی‌های خود عمل می‌کند. برای هر بار فراخوانی با همان ورودی‌ها، همیشه همان خروجی را تولید می‌کند.
// // تابع غیرخالص (Impure Function) تابعی است که برای هر ورودی مشخص، ممکن است خروجی متفاوتی تولید کند یا عوارض جانبی داشته باشد. به عبارت دیگر، این تابع ممکن است بر اساس وضعیت خارجی یا متغیرهای جهانی عمل کند یا وضعیت خارجی را تغییر دهد.
// // مثال از تابع غیرخالص:
// let externalVariable = 10;
// function addWithSideEffect(a, b) {
//     externalVariable++;
//     return a + b + externalVariable;
// }
// console.log(addWithSideEffect(2, 3)); // خروجی: 16
// console.log(addWithSideEffect(2, 3)); // خروجی: 17
// // نکته: تابع addWithSideEffect دارای عوارض جانبی است زیرا مقدار externalVariable را تغییر می‌دهد و برای هر بار فراخوانی با همان ورودی‌ها، خروجی متفاوتی تولید می‌کند. این تابع به وضعیت خارجی وابسته است و ممکن است در طول زمان تغییر کند.
// // نکته: تابع خالص به ما اجازه می‌دهد تا کدهای قابل پیش‌بینی و تست‌پذیرتری بنویسیم، در حالی که تابع غیرخالص ممکن است باعث ایجاد مشکلاتی در تست و نگهداری کد شود. استفاده از توابع خالص معمولاً توصیه می‌شود زیرا باعث افزایش قابلیت اطمینان و خوانایی کد می‌شود.

// challenge : generate a random integer
// function generateRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(generateRandomInteger(1, 10)); // خروجی: یک عدد تصادفی بین 1 و 10
// console.log(generateRandomInteger(5, 15)); // خروجی: یک عدد تصادفی بین 5 و 15   
// // نکته: تابع generateRandomInteger یک عدد صحیح تصادفی بین min و max (شامل هر دو) تولید می‌کند. این تابع از Math.random() برای تولید یک عدد تصادفی در بازه [0, 1) استفاده می‌کند و سپس آن را به بازه مورد نظر مقیاس می‌دهد و با Math.floor() به عدد صحیح تبدیل می‌کند. این تابع غیرخالص است زیرا برای هر بار فراخوانی ممکن است خروجی متفاوتی تولید کند.



// const randomnum = (min, max) => {
//     if (!min , !max) {
//         max = min;
//         min = 0;
//     }
//     const result = Math.floor(Math.random() * (max - min + 1)) + min;
//     return result

// }
// console.log(randomnum(50));

// date 
// date یک شیء در جاوااسکریپت است که به ما اجازه می‌دهد تا تاریخ و زمان را مدیریت کنیم. این شیء شامل متدها و ویژگی‌هایی است که به ما امکان می‌دهد تاریخ و زمان فعلی را دریافت کنیم، تاریخ‌های خاصی را ایجاد کنیم و با آن‌ها کار کنیم.
// // مثال ساده از استفاده از شیء date:
const currentDate = new Date(); // ایجاد یک شیء date با تاریخ و زمان فعلی
console.log(currentDate); // خروجی: تاریخ و زمان فعلی به صورت یک شیء date
// // نکته: شیء date به ما اجازه می‌دهد تا تاریخ و زمان را به صورت دقیق مدیریت کنیم. می‌توانیم از متدهای مختلف این شیء برای دریافت اطلاعات مختلف مانند سال، ماه، روز، ساعت و دقیقه استفاده کنیم.

// // مثال از دریافت سال، ماه و روز از یک شیء date:
const year = currentDate.getFullYear(); // دریافت سال   
const month = currentDate.getMonth() + 1; // دریافت ماه (ماه‌ها از 0 شروع می‌شوند، بنابراین باید 1 اضافه کنیم)    
const day = currentDate.getDate(); // دریافت روز
console.log(`Current Date: ${year}-${month}-${day}`); // خروجی: Current
// Date: 2023-10-1 (به عنوان مثال)
// // نکته: متدهای getFullYear، getMonth و getDate به ما    
// اجازه می‌دهند تا سال، ماه و روز را از یک شیء date دریافت کنیم. ماه‌ها در جاوااسکریپت از 0 شروع می‌شوند، بنابراین برای دریافت ماه صحیح باید 1 به آن اضافه کنیم.
// // مثال از ایجاد یک شیء date با تاریخ خاص:   
const specificDate = new Date(2023, 9, 1); // ایجاد یک شیء date با تاریخ 1 اکتبر 2023 (ماه‌ها از 0 شروع می‌شوند)
console.log(specificDate); // خروجی: تاریخ 1 اکتبر 2023 
// // نکته: می‌توانیم یک شیء date را با تاریخ خاصی ایجاد کنیم. در این مثال، شیء date با تاریخ 1 اکتبر 2023 ایجاد شده است. ماه‌ها در جاوااسکریپت از 0 شروع می‌شوند، بنابراین ماه اکتبر برابر با 9 است.  
// // مثال از تبدیل یک شیء date به رشته:
const dateString = specificDate.toISOString(); // تبدیل شیء date به رشته در قالب ISO
console.log(dateString); // خروجی: 2023-10-01T00:       
//  00:00.000Z
// // نکته: می‌توانیم یک شیء date را به رشته تبدیل کنیم. در این مثال، شیء date به رشته‌ای در قالب ISO تبدیل شده است که شامل تاریخ و زمان است.
// // مثال از مقایسه دو شیء date:
const date1 = new Date(2023, 9, 1); 
const date2 = new Date(2023, 9, 2); // ایجاد یک شیء date با تاریخ 2 اکتبر 2023
if (date1 < date2) {    
    console.log("date1 is earlier than date2"); // خروجی: date1 is earlier than date2
}   
else if (date1 > date2) {
    console.log("date1 is later than date2");
} else {
    console.log("date1 is the same as date2");
}   
// // نکته: می‌توانیم دو شیء date را با استفاده از عملگرهای مقایسه مقایسه کنیم. در این مثال، date1 قبل از date2 است و بنابراین پیام مربوطه چاپ می‌شود.        

//setTimeout  
// setTimeout یک تابع در جاوااسکریپت است که به ما اجازه می‌دهد تا یک تابع را پس از یک مدت زمان مشخص اجرا کنیم. این تابع معمولاً برای ایجاد تأخیر در اجرای یک کد یا برای اجرای یک کد در آینده استفاده می‌شود.
setTimeout(() => {
    console.log("This message is displayed after 2 11seconds");
}, 2000);   // // نکته: در این مثال، تابعی که یک پیام را چاپ می‌کند، پس از 2 ثانیه اجرا می‌شود. مدت زمان تأخیر به میلی‌ثانیه مشخص شده است (2000 میلی‌ثانیه برابر با 2 ثانیه است).
//setInterval
// setInterval یک تابع در جاوااسکریپت است که به ما اجازه می‌دهد تا یک تابع را به صورت مکرر و با یک فاصله زمانی مشخص اجرا کنیم. این تابع معمولاً برای ایجاد تایمرها یا برای اجرای یک کد در فواصل زمانی منظم استفاده می‌شود.
// setInterval(() => {
//     console.log("This message is displayed every 2 seconds");
// }, 2000);  // // نکته: در این مثال، تابعی که یک پیام را چاپ می‌کند، هر 2 ثانیه اجرا می‌شود. مدت زمان بین هر بار اجرای تابع به میلی‌ثانیه مشخص شده است (2000 میلی‌ثانیه برابر با 2 ثانیه است).     

//Challenge : Determine age based on day
// const DetermineAge = (birthdate) => {
//     const birthdateMs = new Date(birthdate).getTime();
//     const currentDateMs = Date.now();
//     const ageInMs = currentDateMs - birthdateMs;
//     const ageInYears = new Date(ageInMs).getUTCFullYear() - 1970;
//     return ageInYears;  

// }

// console.log(DetermineAge("1998-09-17"));

//trycatch 
// try...catch یک ساختار در جاوااسکریپت است که به ما اجازه می‌دهد تا خطاها را مدیریت کنیم و از برنامه‌مان در برابر خطاهای غیرمنتظره محافظت کنیم. این ساختار شامل دو بخش اصلی است: بخش try که کدی را که ممکن است خطا ایجاد کند، در بر می‌گیرد و بخش catch که کدی را که در صورت بروز خطا اجرا می‌شود، در بر می‌گیرد.
// // مثال ساده از استفاده از try...catch:
