# jslern

---

### ۱. مبانی جاوا اسکریپت (JavaScript Basics)

#### تعریف متغیر و ثابت
در جاوا اسکریپت برای ذخیره داده‌ها از متغیرها (`let`) و ثابت‌ها (`const`) استفاده می‌کنیم. ثابت‌ها مقادیری هستند که پس از تعریف اولیه، قابل تغییر نیستند.

```javascript
// تعریف ثابت‌ها برای قیمت‌ها
const price1 = 10;
const price2 = 15;
const price3 = 4000;

// تعریف متغیر برای موجودی حساب
let balance = 500;
console.log("موجودی حساب شما:", balance); // خروجی: 500

عملگرهای ریاضی و اولویت آن‌ها
جاوا اسکریپت از عملگرهای ریاضی استاندارد (+, -, *, /) پشتیبانی می‌کند و اولویت عملیات (ضرب و تقسیم بر جمع و تفریق) را رعایت می‌کند.
// محاسبه قیمت کل با در نظر گرفتن اولویت عملگرها (ابتدا ضرب)
const totalPrice = price1 + price2 + price3 * 2; // 10 + 15 + 8000
console.log("قیمت کل:", totalPrice); // خروجی: 8025

// محاسبه میانگین
const averagePrice = totalPrice / 4;
console.log("میانگین قیمت:", averagePrice);

// محاسبه قیمت نهایی با 5% تخفیف
const finalPrice = totalPrice * 0.95;
console.log("قیمت نهایی پس از تخفیف:", finalPrice);

عملگر شرطی سه‌تایی (Ternary Operator)
یک راه کوتاه برای نوشتن دستورات if-else است. ساختار آن به این صورت است: شرط ? مقدار در صورت درستی : مقدار در صورت نادرستی.
const canBuy = balance >= finalPrice;
const message = canBuy
  ? "تبریک! شما می‌توانید خرید کنید."
  : "متاسفانه موجودی شما کافی نیست.";

console.log(message);

Template Literals (قالب‌های رشته‌ای)
این قابلیت به ما اجازه می‌دهد تا متغیرها را به سادگی درون رشته‌ها قرار دهیم. برای این کار از علامت بک‌تیک (`) و ساختار ${variable} استفاده می‌شود.
const name = "مرتضی";
const age = 26;

// روش قدیمی
// const introductionText = "سلام، نام من " + name + " است و " + age + " سال سن دارم.";

// روش جدید با Template Literals
const introductionText = `سلام، نام من ${name} است و من ${age} سال سن دارم.`;
console.log(introductionText);

۲. کار با انواع داده (Data Types)
متدهای اعداد (Number Methods)
 * toString(): یک عدد را به معادل رشته‌ای آن تبدیل می‌کند.
 * toFixed(n): یک عدد را به رشته تبدیل کرده و آن را تا n رقم اعشار گرد می‌کند.
<!-- end list -->
const number1 = 50;
console.log(typeof number1); // خروجی: "number"

const numberAsString = number1.toString();
console.log(typeof numberAsString); // خروجی: "string"

const number2 = 50.1354654;
console.log(number2.toFixed(2)); // خروجی: "50.14" (گرد شده)

متدهای رشته‌ها (String Methods)
 * charAt(index): کاراکتر موجود در یک موقعیت (index) خاص را برمی‌گرداند.
 * toUpperCase(): تمام حروف رشته را به حروف بزرگ تبدیل می‌کند.
 * replace(old, new): بخشی از رشته را با یک مقدار جدید جایگزین می‌کند.
 * slice(startIndex, endIndex): قسمتی از رشته را از ایندکس شروع تا پایان برش می‌دهد.
 * indexOf(substring): ایندکس اولین wystąpienie یک زیررشته را پیدا می‌کند.
چالش ۱: بزرگ کردن حرف اول یک متن
const text = "hi, i am morteza and i'm a developer";
const firstLetter = text.charAt(0);
const upperCaseFirstLetter = firstLetter.toUpperCase();
const finalText = text.replace(firstLetter, upperCaseFirstLetter);
console.log(finalText); // خروجی: "Hi, i am morteza and i'm a developer"

چالش ۲: مخفی کردن بخشی از شماره تلفن
const phone = "09011546532";
const partToHide = phone.slice(3, 7); // از ایندکس 3 تا 7 را برش می‌دهد
const finalPhone = phone.replace(partToHide, "****");
console.log(finalPhone); // خروجی: "090****6532"

چالش ۳: استخراج نام و نام خانوادگی
const fullName = "Morteza Azami";
const spaceIndex = fullName.indexOf(" "); // پیدا کردن ایندکس فاصله
const firstName = fullName.slice(0, spaceIndex);
const lastName = fullName.slice(spaceIndex + 1);
const nameDetailsText = `نام شما ${firstName} و نام خانوادگی شما ${lastName} است.`;
console.log(nameDetailsText);

۳. ساختارهای کنترلی (Control Flow)
دستورات شرطی if, else if, else
این دستورات به برنامه اجازه می‌دهند بر اساس درستی یا نادرستی یک شرط، کدهای مختلفی را اجرا کنند.
const age = 20;

if (age >= 18) {
  console.log("شما یک بزرگسال هستید.");
} else if (age >= 13) {
  console.log("شما یک نوجوان هستید.");
} else {
  console.log("شما یک کودک هستید.");
}

چالش: تشخیص نوع مثلث
const side1 = 5;
const side2 = 5;
const side3 = 5;

if (side1 === side2 && side2 === side3) {
  console.log("این یک مثلث متساوی‌الاضلاع است.");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
  console.log("این یک مثلث متساوی‌الساقین است.");
} else {
  console.log("این یک مثلث مختلف‌الاضلاع است.");
}

دستور switch
یک جایگزین برای if-else if های تودرتو است که خوانایی کد را در زمان مقایسه یک متغیر با مقادیر مختلف، بالا می‌برد.
const day = 3;

switch (day) {
  case 1:
    console.log("شنبه");
    break;
  case 2:
    console.log("یکشنبه");
    break;
  case 3:
    console.log("دوشنبه");
    break;
  // ... سایر روزها
  default:
    console.log("روز نامعتبر است.");
    break;
}

حلقه‌ها (Loops)
برای تکرار یک قطعه کد استفاده می‌شوند.
 * for: زمانی که تعداد تکرارها مشخص است.
 * while: تا زمانی که یک شرط برقرار است، تکرار می‌شود.
 * do...while: شبیه while است، با این تفاوت که بدنه حلقه حداقل یک بار اجرا می‌شود.
 * for...of: برای پیمایش اعضای یک آرایه (Array).
 * for...in: برای پیمایش خصوصیات (properties) یک شیء (Object).
<!-- end list -->
// حلقه for (شمارش معکوس)
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// حلقه while
let i = 1;
while (i < 5) {
  console.log(i);
  i++;
}

// حلقه for...of برای آرایه
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// حلقه for...in برای شیء
const person = {
  name: "مرتضی",
  age: 26,
  job: "توسعه‌دهنده"
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

چالش: چاپ اعداد زوج در یک آرایه
const numbers = [13, 23, 12, 45, 22, 48, 66, 100];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log("اعداد زوج:", evenNumbers); // خروجی: [12, 22, 48, 66, 100]

چالش: چاپ الگوی ستاره (یا عدد)
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += j + " ";
  }
  console.log(line);
}
/*
خروجی:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

۴. آرایه‌ها و متدهای آن‌ها (Arrays)
آرایه‌ها مجموعه‌ای از داده‌ها هستند که می‌توانند از هر نوعی باشند.
const myArray = ["مرتضی", "اعظمی", 26, true];
console.log(myArray[1]); // خروجی: "اعظمی"

متدهای مهم آرایه:
 * join(separator): تمام اعضای آرایه را به هم متصل کرده و یک رشته می‌سازد.
 * concat(otherArray): یک آرایه جدید با ترکیب آرایه فعلی و آرایه دیگر می‌سازد.
 * flat(): آرایه‌های تودرتو را به یک آرایه مسطح تبدیل می‌کند.
 * includes(value): بررسی می‌کند که آیا یک مقدار در آرایه وجود دارد یا نه (true یا false برمی‌گرداند).
 * indexOf(value): ایندکس اولین موقعیت یک مقدار را برمی‌گرداند (اگر وجود نداشته باشد، -1 برمی‌گرداند).
 * push(value): یک یا چند عنصر به انتهای آرایه اضافه می‌کند.
<!-- end list -->
const newArray = myArray.concat([1, 12, 3]);
console.log(newArray);

console.log(myArray.includes(26)); // خروجی: true
console.log(myArray.indexOf("علی")); // خروجی: -1

متدهای پیشرفته آرایه (حلقه‌های تابعی)
این متدها یک تابع (callback function) به عنوان ورودی می‌گیرند و آن را روی اعضای آرایه اجرا می‌کنند.
 * forEach(callback): تابع را برای هر عنصر آرایه اجرا می‌کند (چیزی برنمی‌گرداند).
 * map(callback): یک آرایه جدید با نتایج اجرای تابع بر روی هر عنصر ایجاد می‌کند.
 * filter(callback): یک آرایه جدید از عناصری که شرط داخل تابع برای آن‌ها true است، ایجاد می‌کند.
 * find(callback): اولین عنصری که شرط را برآورده کند، برمی‌گرداند.
 * reduce(callback, initialValue): تمام عناصر آرایه را به یک مقدار واحد (مانند مجموع اعداد) کاهش می‌دهد.
 * some(callback): بررسی می‌کند آیا حداقل یک عنصر شرط را برآورده می‌کند (true/false).
 * every(callback): بررسی می‌کند آیا همه عناصر شرط را برآورده می‌کنند (true/false).
مثال برای map, filter, reduce
const numbers = [1, 2, 3, 4, 5];

// map: همه اعداد را دو برابر کن
const doubled = numbers.map(num => num * 2);
console.log(doubled); // خروجی: [2, 4, 6, 8, 10]

// filter: فقط اعداد بزرگتر از 3 را نگه دار
const greaterThanThree = numbers.filter(num => num > 3);
console.log(greaterThanThree); // خروجی: [4, 5]

// reduce: همه اعداد را با هم جمع کن
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // خروجی: 15

۵. توابع (Functions)
توابع بلاک‌های کدی هستند که برای انجام یک کار مشخص طراحی شده‌اند و می‌توانند بارها فراخوانی شوند.
انواع تعریف تابع
 * Function Declaration (تعریف اعلانی): این نوع تابع Hoist می‌شود (یعنی می‌توان قبل از تعریف، آن را فراخوانی کرد).
   showMessage(); // کار می‌کند
function showMessage() {
  console.log("سلام!");
}

 * Function Expression (عبارت تابعی): تابع به یک متغیر اختصاص داده می‌شود و Hoist نمی‌شود.
   // showGreeting(); // خطا می‌دهد: TypeError
const showGreeting = function() {
  console.log("درود!");
};
showGreeting();

 * Arrow Function (تابع پیکانی): یک سینتکس کوتاه‌تر و مدرن‌تر برای نوشتن توابع.
   const add = (a, b) => a + b;
console.log(add(5, 3)); // خروجی: 8

پارامتر و return
توابع می‌توانند مقادیری را به عنوان ورودی (پارامتر) دریافت کرده و یک مقدار را به عنوان خروجی (return) بازگردانند. اگر تابعی return نداشته باشد، به طور پیش‌فرض undefined برمی‌گرداند.
function multiply(a, b) {
  return a * b; // نتیجه را به جایی که تابع فراخوانی شده باز می‌گرداند
}

const result = multiply(4, 5);
console.log(result); // خروجی: 20

تابع Callback
تابعی است که به عنوان آرگومان به یک تابع دیگر ارسال می‌شود تا در زمان مناسب اجرا شود. این الگو در جاوا اسکریپت ناهمگام (Asynchronous) بسیار پرکاربرد است.
function processData(data, callback) {
  const processedData = data.map(item => item.toUpperCase());
  callback(processedData); // اجرای تابع callback با داده‌های پردازش‌شده
}

const names = ["ali", "reza", "sara"];

processData(names, (result) => {
  console.log("نام‌های پردازش‌شده:", result); // خروجی: ["ALI", "REZA", "SARA"]
});

۶. مفاهیم پیشرفته جاوا اسکریپت
Scope (دامنه) و Hoisting (بالا بردن)
 * Scope: مشخص می‌کند که یک متغیر در کدام قسمت‌های کد قابل دسترسی است (سراسری، تابعی، بلاکی).
 * Hoisting: مکانیزم جاوا اسکریپت است که در آن، تعریف متغیرهای var و توابع اعلانی (Function Declarations) به بالای Scope خود منتقل می‌شوند. متغیرهای let و const نیز Hoist می‌شوند اما تا زمان مقداردهی در "Temporal Dead Zone" قرار دارند و قابل استفاده نیستند.
کلمه کلیدی this
this به شیئی اشاره می‌کند که تابع در حال اجرا به آن تعلق دارد. مقدار this بسته به نحوه فراخوانی تابع تعیین می‌شود:
 * در یک متد شیء: به خود آن شیء اشاره می‌کند.
 * در یک تابع معمولی (در حالت غیر Strict): به شیء سراسری (window در مرورگر) اشاره می‌کند.
 * در توابع Arrow: مقدار this را از محیط بیرونی (lexical scope) خود به ارث می‌برد.
 * در Event Listener ها: به عنصری که رویداد روی آن رخ داده اشاره می‌کند.
متدهای call, apply, bind
این متدها به ما اجازه می‌دهند مقدار this را به صورت دستی برای یک تابع تنظیم کنیم.
 * call(thisArg, arg1, arg2, ...): تابع را با this مشخص شده و آرگومان‌های جداگانه فراخوانی می‌کند.
 * apply(thisArg, [argsArray]): شبیه call است اما آرگومان‌ها را در قالب یک آرایه می‌گیرد.
 * bind(thisArg): یک تابع جدید ایجاد می‌کند که this آن برای همیشه به thisArg متصل (bind) شده است.
<!-- end list -->
const person1 = { name: "علی" };
const person2 = { name: "سارا" };

function greet() {
  console.log(`سلام، ${this.name}!`);
}

greet.call(person1); // خروجی: سلام، علی!
greet.apply(person2); // خروجی: سلام، سارا!

const greetForPerson1 = greet.bind(person1);
greetForPerson1(); // خروجی: سلام، علی!

Closure (کلوژر)
یک Closure زمانی ایجاد می‌شود که یک تابع داخلی به متغیرهای تابع بیرونی خود دسترسی داشته باشد، حتی پس از اینکه تابع بیرونی اجرای خود را به پایان رسانده باشد. این قابلیت برای ایجاد متغیرهای خصوصی و حفظ حالت (state) بسیار مفید است.
function createCounter() {
  let count = 0; // این متغیر در Closure محبوس می‌شود

  return function() {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1(); // خروجی: 1
counter1(); // خروجی: 2

const counter2 = createCounter(); // یک شمارنده جدید و مستقل
counter2(); // خروجی: 1

Getter و Setter
متدهایی هستند که به ما اجازه می‌دهند به صورت کنترل‌شده به خصوصیات یک شیء دسترسی پیدا کرده (get) یا آن‌ها را تغییر دهیم (set).
const user = {
  firstName: 'مرتضی',
  lastName: 'س',

  // Getter برای دریافت نام کامل
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter برای تنظیم نام کامل
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(user.fullName); // Getter فراخوانی می‌شود -> خروجی: مرتضی س

user.fullName = "علی رضایی"; // Setter فراخوانی می‌شود
console.log(user.firstName); // خروجی: علی

۷. مدیریت خطا (Error Handling)
try...catch...finally
این ساختار به ما اجازه می‌دهد کدهایی که ممکن است خطا ایجاد کنند را مدیریت کنیم.
 * try: کدی که ممکن است خطا دهد در این بلاک قرار می‌گیرد.
 * catch: اگر در بلاک try خطایی رخ دهد، اجرای کد به این بلاک منتقل می‌شود.
 * finally: این بلاک همیشه اجرا می‌شود، چه خطایی رخ دهد چه ندهد (مناسب برای پاک‌سازی منابع).
 * throw: برای ایجاد و پرتاب یک خطای سفارشی استفاده می‌شود.
<!-- end list -->
function divide(a, b) {
  if (b === 0) {
    throw new Error("تقسیم بر صفر مجاز نیست!");
  }
  return a / b;
}

try {
  console.log("در حال تلاش برای تقسیم...");
  const result = divide(10, 0);
  console.log("نتیجه:", result); // این خط اجرا نمی‌شود
} catch (error) {
  console.error("خطایی رخ داد:", error.message);
} finally {
  console.log("عملیات تقسیم پایان یافت.");
}

۸. ساختارهای داده (Data Structures)
Map
یک ساختار داده کلید-مقدار (key-value) است که برخلاف اشیاء معمولی، هر نوع داده‌ای (حتی اشیاء و توابع) می‌تواند به عنوان کلید در آن استفاده شود. Map ترتیب اضافه شدن عناصر را حفظ می‌کند.
const userRoles = new Map();

// افزودن داده با set()
userRoles.set("admin", "دسترسی کامل");
userRoles.eet("editor", "دسترسی برای ویرایش");
userRoles.set(123, "کاربر مهمان");

// دریافت داده با get()
console.log(userRoles.get("admin")); // خروجی: دسترسی کامل

// بررسی وجود کلید با has()
console.log(userRoles.has("viewer")); // خروجی: false

// مشاهده تعداد عناصر با size
console.log("تعداد نقش‌ها:", userRoles.size); // خروجی: 3

// پیمایش Map
userRoles.forEach((value, key) => {
  console.log(`نقش ${key}: ${value}`);
});


