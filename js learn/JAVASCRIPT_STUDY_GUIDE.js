////////////////////////////////////////////////////////////////////////////////
//                    راهنمای یادگیری جاوا اسکریپت
//                 JavaScript Comprehensive Study Guide
//
//  نویسنده: دیکتاتور (Dictator)
//  تاریخ: نوامبر 2025
//  موضوع: یادگیری کامل اصول JavaScript
////////////////////////////////////////////////////////////////////////////////

/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                              فهرست مطالب                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 1. مبانی JavaScript و متغیرها                                              │
│ 2. انواع داده‌ها (Data Types)                                              │
│ 3. عملگرها (Operators)                                                      │
│ 4. رشته‌های کاراکتری (Strings)                                             │
│ 5. آرایه‌ها (Arrays)                                                       │
│ 6. شرط‌های منطقی (Conditional Statements)                                 │
│ 7. حلقه‌ها (Loops)                                                          │
│ 8. توابع (Functions)                                                       │
│ 9. شیء‌ها (Objects)                                                       │
│ 10. DOM Manipulation (دستکاری DOM)                                          │
│ 11. Event Handling (مدیریت رویدادها)                                       │
│ 12. Asynchronous Programming (برنامه‌نویسی غیرهمزمان)                    │
└─────────────────────────────────────────────────────────────────────────────┘
*/

// ═══════════════════════════════════════════════════════════════════════════
// بخش 1: مبانی JavaScript و متغیرها
// ═══════════════════════════════════════════════════════════════════════════

/*
تعریف متغیر:
متغیر یک ظرف برای ذخیره داده است. در JavaScript، سه روش برای تعریف متغیر داریم:
- var (روش قدیمی، محدود‌تر)
- let (روش جدید، محدود‌تر از var)
- const (ثابت، نمی‌تواند تغییر کند)
*/

console.log("\n══════ بخش 1: مبانی JavaScript و متغیرها ══════");

// تعریف متغیرها:
let name = "علی";          // متغیر متغیرپذیر
const age = 26;            // ثابت (immutable)
var city = "تهران";        // روش قدیمی (تجنب کنید)

console.log("نام:", name);
console.log("سن:", age);
console.log("شهر:", city);

// تغییر مقدار متغیر let:
name = "محمد";  // ✓ درست - می‌توانیم تغییر دهیم
// age = 27;     // ✗ خطا - const نمی‌تواند تغییر کند

/*
نکات مهم:
✓ از const به طور پیش‌فرض استفاده کنید
✓ از let استفاده کنید هنگامی که نیاز به تغییر دارید
✓ از var استفاده نکنید (روش قدیمی است)
✓ نام متغیرها باید معنی‌دار باشند
*/

// ═══════════════════════════════════════════════════════════════════════════
// بخش 2: انواع داده‌ها (Data Types)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 2: انواع داده‌ها ══════");

/*
انواع داده در JavaScript:
1. String: متن (علامت‌گذاری با "" یا '' یا ``)
2. Number: عدد (صحیح یا اعشاری)
3. Boolean: true یا false
4. undefined: مقدار نامعریف‌شده
5. null: هیچ مقدار
6. Object: شیء (آرایه، تابع، شیء عادی)
7. Symbol: نماد منحصربه‌فرد
*/

// انواع داده‌های Primitive:
const stringType = "سلام جهان";           // String
const numberType = 42;                   // Number
const decimalType = 3.14;                // Float
const booleanType = true;                // Boolean
const undefinedType = undefined;         // Undefined
const nullType = null;                   // Null

console.log("String:", stringType, typeof stringType);
console.log("Number:", numberType, typeof numberType);
console.log("Boolean:", booleanType, typeof booleanType);
console.log("Undefined:", undefinedType, typeof undefinedType);
console.log("Null:", nullType, typeof nullType);  // توجه: typeof null === "object"

// Type Coercion (تبدیل نوع):
console.log("\nتبدیل نوع:");
console.log("'5' + 3 =", '5' + 3);       // "53" (String concatenation)
console.log("5 + 3 =", 5 + 3);          // 8 (Numeric addition)
console.log("'5' - 3 =", '5' - 3);      // 2 (Numeric subtraction)

// ═══════════════════════════════════════════════════════════════════════════
// بخش 3: عملگرها (Operators)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 3: عملگرها ══════");

// عملگرهای ریاضی:
console.log("\nعملگرهای ریاضی:");
console.log("10 + 5 =", 10 + 5);        // جمع
console.log("10 - 5 =", 10 - 5);        // تفریق
console.log("10 * 5 =", 10 * 5);        // ضرب
console.log("10 / 5 =", 10 / 5);        // تقسیم
console.log("10 % 3 =", 10 % 3);        // باقی‌مانده
console.log("2 ** 3 =", 2 ** 3);        // توان

// عملگرهای مقایسه:
console.log("\nعملگرهای مقایسه:");
console.log("10 > 5:", 10 > 5);         // بزرگ‌تر از
console.log("10 < 5:", 10 < 5);         // کوچک‌تر از
console.log("10 >= 5:", 10 >= 5);       // بزرگ‌تر یا مساوی
console.log("10 <= 5:", 10 <= 5);       // کوچک‌تر یا مساوی
console.log("10 == 10:", 10 == 10);     // مساوی (loose comparison)
console.log("10 === '10':", 10 === '10'); // مساوی دقیق (strict comparison)
console.log("10 !== '10':", 10 !== '10'); // نامساوی دقیق

// عملگرهای منطقی:
console.log("\nعملگرهای منطقی:");
console.log("true && false:", true && false);    // AND
console.log("true || false:", true || false);    // OR
console.log("!true:", !true);                    // NOT

// عملگرهای انتساب:
let x = 10;
x += 5;  // x = x + 5
console.log("x += 5:", x);  // 15
x *= 2;  // x = x * 2
console.log("x *= 2:", x);  // 30

// عملگرهای افزایش/کاهش:
let counter = 0;
console.log("++counter:", ++counter);   // پیش‌افزایش
console.log("counter++:", counter++);   // پس‌افزایش
console.log("counter:", counter);       // 2

// ═══════════════════════════════════════════════════════════════════════════
// بخش 4: رشته‌های کاراکتری (Strings)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 4: رشته‌های کاراکتری ══════");

const text = "سلام، نام من علی است";

// خصوصیات و متدهای String:
console.log("طول رشته:", text.length);
console.log("حرف اول:", text[0]);
console.log("حرف آخر:", text[text.length - 1]);

// متدهای مهم:
console.log("بزرگ‌حروف:", text.toUpperCase());
console.log("کوچک‌حروف:", text.toLowerCase());
console.log("ابتدا:", text.charAt(0));
console.log("شاخص 'علی':", text.indexOf("علی"));
console.log("آیا شامل 'نام' است؟", text.includes("نام"));
console.log("تکه‌رشته (0-4):", text.slice(0, 4));
console.log("جایگزین:", text.replace("علی", "محمد"));
console.log("تقسیم:", "a,b,c".split(","));

// Template Literals (رشته‌های الگو):
const firstName = "علی";
const lastName = "احمدی";
const age_user = 26;

const introduction = `سلام، نام من ${firstName} ${lastName} است و من ${age_user} ساله‌ام.`;
console.log("\nTemplate Literal:", introduction);

// مثال عملی: استخراج نام و نام‌خانوادگی
const fullName = "محمد حسن";
const spaceIndex = fullName.indexOf(" ");
const first = fullName.slice(0, spaceIndex);
const last = fullName.slice(spaceIndex + 1);
console.log(`نام: ${first}, نام‌خانوادگی: ${last}`);

// ═══════════════════════════════════════════════════════════════════════════
// بخش 5: آرایه‌ها (Arrays)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 5: آرایه‌ها ══════");

const fruits = ["سیب", "موز", "نارنجی"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["متن", 42, true, null];

console.log("میوه‌ها:", fruits);
console.log("طول آرایه:", fruits.length);
console.log("عنصر اول:", fruits[0]);
console.log("عنصر آخر:", fruits[fruits.length - 1]);

// متدهای مهم آرایه:
console.log("\nمتدهای آرایه:");

// push: اضافه کردن به انتهای آرایه
fruits.push("انار");
console.log("بعد از push:", fruits);

// pop: حذف از انتهای آرایه
const removed = fruits.pop();
console.log("حذف شده:", removed, "، آرایه:", fruits);

// unshift: اضافه کردن به ابتدای آرایه
fruits.unshift("تمشک");
console.log("بعد از unshift:", fruits);

// shift: حذف از ابتدای آرایه
const first_removed = fruits.shift();
console.log("حذف شده:", first_removed, "، آرایه:", fruits);

// join: ترکیب با جدا‌کننده
console.log("join با -:", fruits.join(" - "));

// slice: برش آرایه
console.log("slice(0, 2):", fruits.slice(0, 2));

// includes: بررسی وجود عنصر
console.log("آیا 'موز' وجود دارد؟", fruits.includes("موز"));

// indexOf: شاخص عنصر
console.log("شاخص 'سیب':", fruits.indexOf("سیب"));

// map: تبدیل عناصر
const doubled = numbers.map(num => num * 2);
console.log("اعداد دوبرابر:", doubled);

// filter: فیلتر کردن عناصر
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("اعداد زوج:", evenNumbers);

// forEach: تکرار روی عناصر
console.log("چاپ هر میوه:");
fruits.forEach((fruit, index) => {
  console.log(`  ${index + 1}. ${fruit}`);
});

// concat: ترکیب دو آرایه
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log("ترکیب آرایه‌ها:", combined);

// ═══════════════════════════════════════════════════════════════════════════
// بخش 6: شرط‌های منطقی (Conditional Statements)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 6: شرط‌های منطقی ══════");

// if/else if/else:
const userAge = 20;

if (userAge < 18) {
  console.log("شما زیر‌سن هستید");
} else if (userAge < 65) {
  console.log("شما بالغ هستید");
} else {
  console.log("شما بازنشسته هستید");
}

// Ternary Operator (عملگر سه‌تایی):
const status = userAge >= 18 ? "بالغ" : "زیر‌سن";
console.log("وضعیت:", status);

// switch statement:
const day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "شنبه";
    break;
  case 2:
    dayName = "یک‌شنبه";
    break;
  case 3:
    dayName = "دوشنبه";
    break;
  default:
    dayName = "نامعلوم";
}
console.log("روز:", dayName);

// مثال: بررسی اعتبار مثلث
const side1 = 5, side2 = 5, side3 = 5;
let triangleType;

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  if (side1 === side2 && side2 === side3) {
    triangleType = "مثلث متساوی‌الاضلاع";
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    triangleType = "مثلث متساوی‌الساقین";
  } else {
    triangleType = "مثلث مختلف‌الاضلاع";
  }
} else {
  triangleType = "مثلث نامعتبر";
}
console.log(`اضلاع: ${side1}, ${side2}, ${side3} → ${triangleType}`);

// ═══════════════════════════════════════════════════════════════════════════
// بخش 7: حلقه‌ها (Loops)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 7: حلقه‌ها ══════");

// حلقه for:
console.log("حلقه for - اعداد 1 تا 5:");
for (let i = 1; i <= 5; i++) {
  console.log(`  ${i}`);
}

// حلقه while:
console.log("حلقه while - اعداد 1 تا 3:");
let counter_while = 1;
while (counter_while <= 3) {
  console.log(`  ${counter_while}`);
  counter_while++;
}

// حلقه do...while:
console.log("حلقه do...while:");
let counter_do = 1;
do {
  console.log(`  ${counter_do}`);
  counter_do++;
} while (counter_do <= 3);

// حلقه for...of (برای آرایه‌ها):
console.log("حلقه for...of:");
const colors = ["قرمز", "سبز", "آبی"];
for (const color of colors) {
  console.log(`  ${color}`);
}

// حلقه for...in (برای شیء‌ها و ایندکس‌ها):
console.log("حلقه for...in:");
for (const index in colors) {
  console.log(`  ${index}: ${colors[index]}`);
}

// break و continue:
console.log("مثال break و continue:");
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue;  // از 2 بگذر
  if (i === 4) break;     // توقف در 4
  console.log(`  ${i}`);
}

// ═══════════════════════════════════════════════════════════════════════════
// بخش 8: توابع (Functions)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 8: توابع ══════");

// تعریف تابع با function declaration:
function greet(name) {
  return `سلام ${name}!`;
}
console.log(greet("علی"));

// تعریف تابع با function expression:
const add = function(a, b) {
  return a + b;
};
console.log("2 + 3 =", add(2, 3));

// Arrow Function (تابع پیکان‌دار):
const multiply = (a, b) => a * b;
console.log("4 * 5 =", multiply(4, 5));

// Arrow Function با چندین خط:
const calculateArea = (radius) => {
  const pi = 3.14159;
  return pi * radius * radius;
};
console.log("مساحت دایره (r=5):", calculateArea(5));

// پارامترهای پیش‌فرض:
function introduce(name = "دوست", age = 25) {
  return `${name} است و ${age} ساله است`;
}
console.log(introduce());
console.log(introduce("محمد", 30));

// Rest Parameters (پارامترهای باقی‌مانده):
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("مجموع [1,2,3,4,5]:", sum(1, 2, 3, 4, 5));

// Higher Order Functions (توابع مرتبه‌بالا):
const numbers_arr = [1, 2, 3, 4, 5];
const evens = numbers_arr.filter(n => n % 2 === 0);
const doubled_nums = numbers_arr.map(n => n * 2);
const total = numbers_arr.reduce((acc, n) => acc + n, 0);

console.log("فیلتر (زوج):", evens);
console.log("نقشه (دوبرابر):", doubled_nums);
console.log("تقلیل (مجموع):", total);

// ═══════════════════════════════════════════════════════════════════════════
// بخش 9: شیء‌ها (Objects)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 9: شیء‌ها ══════");

// تعریف شیء:
const person = {
  name: "علی احمدی",
  age: 26,
  city: "تهران",
  email: "ali@example.com",
  isStudent: false,
  
  // متد (تابع داخل شیء):
  greet: function() {
    return `سلام، من ${this.name} هستم`;
  },
  
  // Arrow Function به عنوان متد:
  getInfo: () => {
    return `${person.name} - ${person.age} ساله`;
  },
  
  // متد دیگر:
  updateAge: function(newAge) {
    this.age = newAge;
  }
};

console.log("نام:", person.name);
console.log("سن:", person["age"]);
console.log("متد greet:", person.greet());

// اضافه کردن ویژگی:
person.phone = "09111234567";
console.log("تلفن:", person.phone);

// حذف ویژگی:
delete person.isStudent;

// حلقه over object:
console.log("\nتمام ویژگی‌های person:");
for (const key in person) {
  if (typeof person[key] !== 'function') {
    console.log(`  ${key}: ${person[key]}`);
  }
}

// Object.keys, Object.values, Object.entries:
console.log("کلیدها:", Object.keys(person));
console.log("مقادیر:", Object.values(person));
console.log("ورودی‌ها:", Object.entries(person));

// Destructuring (تخریب):
const { name: personName, age: personAge } = person;
console.log(`${personName} - ${personAge} ساله`);

// ساختار شیء‌های تودرتو:
const company = {
  name: "شرکت فناوری",
  employees: [
    { id: 1, name: "علی", position: "توسعه‌دهنده" },
    { id: 2, name: "فاطمه", position: "طراح" },
    { id: 3, name: "محمد", position: "مدیر" }
  ],
  location: {
    city: "تهران",
    country: "ایران",
    zip: "11111"
  }
};

console.log("شرکت:", company.name);
console.log("شهر:", company.location.city);
console.log("اولین کارمند:", company.employees[0].name);

// ═══════════════════════════════════════════════════════════════════════════
// بخش 10: DOM Manipulation (دستکاری DOM)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 10: DOM Manipulation ══════");

/*
توضیح: DOM (Document Object Model) نمایشی از ساختار HTML صفحه وب است.
JavaScript می‌تواند عناصر HTML را انتخاب کند، تغییر دهد، و جدید ایجاد کند.

اینجا کدهایی هستند که فقط در مرورگر کار می‌کنند:
*/

/*
// انتخاب عناصر:
const element1 = document.getElementById("myId");
const element2 = document.querySelector(".myClass");
const elements = document.querySelectorAll("p");

// تغییر محتوا:
element1.textContent = "متن جدید";
element1.innerHTML = "<b>متن غلیظ</b>";

// تغییر سبک‌ها:
element1.style.color = "red";
element1.style.fontSize = "20px";

// اضافه کردن/حذف کلاس:
element1.classList.add("active");
element1.classList.remove("inactive");
element1.classList.toggle("highlight");

// ایجاد عنصر جدید:
const newElement = document.createElement("div");
newElement.textContent = "عنصر جدید";
document.body.appendChild(newElement);

// ویژگی‌های HTML:
element1.setAttribute("data-id", "123");
const id = element1.getAttribute("data-id");
element1.removeAttribute("disabled");
*/

// نمایش توضیح برای مثال‌های DOM:
console.log("مثال‌های DOM Manipulation در بخش نظرات کد موجود است");
console.log("(این کدها تنها در مرورگر و روی صفحه HTML کار می‌کنند)");

// ═══════════════════════════════════════════════════════════════════════════
// بخش 11: Event Handling (مدیریت رویدادها)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 11: Event Handling ══════");

/*
رویدادهای مهم در JavaScript:
- click: کلیک روی عنصر
- mouseover: موس روی عنصر
- mouseout: موس خارج از عنصر
- input: تغییر مقدار input
- change: تغییر مقدار select یا textarea
- submit: ارسال فرم
- keydown/keyup: فشردن/رها کردن کلید

مثال‌های کد (برای HTML):

// روش 1: در HTML
<button onclick="handleClick()">کلیک کنید</button>

function handleClick() {
  console.log("دکمه کلیک شد!");
}

// روش 2: با JavaScript
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("دکمه کلیک شد!");
});

// روش 3: با event object
button.addEventListener("click", (event) => {
  console.log("کلیک کننده:", event.target);
  console.log("نوع رویداد:", event.type);
  event.preventDefault();  // جلوگیری از رفتار پیش‌فرض
});

// حذف event listener:
button.removeEventListener("click", handleClick);
*/

console.log("مثال‌های Event Handling در بخش نظرات کد موجود است");

// ═══════════════════════════════════════════════════════════════════════════
// بخش 12: Asynchronous Programming (برنامه‌نویسی غیرهمزمان)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n══════ بخش 12: Asynchronous Programming ══════");

/*
Asynchronous برنامه‌نویسی (برنامه‌نویسی غیرهمزمان) به معنای انجام عملیات‌هایی است
که سریع تکمیل نمی‌شوند و برنامه نباید منتظر بماند تا آن‌ها کامل شوند.
*/

// 1. Callback Functions:
console.log("\n1. Callback Functions:");

function fetchData(callback) {
  console.log("  درحال بارگذاری داده‌ها...");
  setTimeout(() => {
    const data = { id: 1, name: "علی" };
    callback(data);
  }, 1000);
}

// fetchData((result) => {
//   console.log("  داده‌ها دریافت شدند:", result);
// });

// 2. Promise:
console.log("\n2. Promise:");

function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "محمد" });
      } else {
        reject("شناسه نامعتبر است");
      }
    }, 1000);
  });
}

// استفاده:
// fetchUserData(1)
//   .then(user => {
//     console.log("  کاربر:", user);
//   })
//   .catch(error => {
//     console.error("  خطا:", error);
//   });

// 3. Async/Await:
console.log("\n3. Async/Await:");

async function getUserInfo(userId) {
  try {
    console.log("  درحال واکشی اطلاعات...");
    const user = await fetchUserData(userId);
    console.log("  اطلاعات:", user);
    return user;
  } catch (error) {
    console.error("  خطا:", error);
  }
}

// استفاده:
// getUserInfo(5);

// 4. Promise.all (اجرای موازی):
console.log("\n4. Promise.all:");

function task(num) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`تسک ${num} تکمیل`), 500);
  });
}

// استفاده:
// Promise.all([task(1), task(2), task(3)])
//   .then(results => {
//     console.log("  تمام تسک‌ها:", results);
//   });

// Event Loop (ترتیب اجرا):
console.log("\nEvent Loop - ترتیب اجرا:");
console.log("1. شروع");

setTimeout(() => {
  console.log("4. Macro Task (setTimeout)");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3. Micro Task (Promise)");
  });

console.log("2. پایان");

/*
خروجی:
1. شروع
2. پایان
3. Micro Task (Promise)
4. Macro Task (setTimeout)

ترتیب اجرا:
- ابتدا: Synchronous code
- دوم: Micro Tasks (Promise, async/await)
- سوم: Macro Tasks (setTimeout, setInterval)
*/

// ═══════════════════════════════════════════════════════════════════════════
// نکات و بهترین‌رویه‌ها (Best Practices)
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n════════════════ نکات و بهترین‌رویه‌ها ════════════════");

/*
✓ نام‌گذاری متغیرها:
  - از camelCase استفاده کنید: myVariable
  - از UPPER_CASE برای ثابت‌ها: PI = 3.14
  - نام‌های معنی‌دار انتخاب کنید

✓ استفاده از const به طور پیش‌فرض
✓ استفاده از let هنگام نیاز به تغییر
✓ از var استفاده نکنید

✓ یکپارچگی نوع:
  - === و !== استفاده کنید، نه == و !=
  - Type coercion در نظر بگیرید

✓ خطاگیری:
  - از try/catch استفاده کنید
  - console.log برای رفع عیب‌ها استفاده کنید
  - از debugger استفاده کنید

✓ کد پاک‌تر:
  - تابع‌ها کوچک و یک‌کاره باشند
  - نام‌های معنی‌دار برای متغیرها و توابع
  - کد خود را مستند‌سازی کنید

✓ کارایی:
  - حلقه‌های غیر‌ضروری در نظر نگیرید
  - از algorithm‌های موثرتر استفاده کنید
  - از Lazy Loading استفاده کنید

✓ Asynchronous:
  - async/await را ترجیح دهید
  - Error handling را فراموش نکنید
  - Promise.all برای موازی‌سازی استفاده کنید

✓ DOM:
  - از querySelector استفاده کنید (modern)
  - Event delegation استفاده کنید
  - از Debounce/Throttle برای رویدادهای فرکانس‌بالا استفاده کنید
*/

// ═══════════════════════════════════════════════════════════════════════════
// مثال‌های عملی پیشرفته
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n════════════════ مثال‌های عملی پیشرفته ════════════════");

// مثال 1: کلاس و این‌ستنس
console.log("\n1. کلاس‌ها:");

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  
  introduce() {
    return `من ${this.name} هستم، ${this.age} ساله، و نمره‌ام ${this.grade} است`;
  }
  
  getGradeLevel() {
    if (this.grade >= 90) return "عالی";
    if (this.grade >= 80) return "خوب";
    if (this.grade >= 70) return "متوسط";
    return "ضعیف";
  }
}

const student1 = new Student("علی", 16, 95);
console.log(student1.introduce());
console.log("سطح نمره:", student1.getGradeLevel());

// مثال 2: Closure (بسته)
console.log("\n2. Closure:");

function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log("شمارنده:", counter.increment());  // 1
console.log("شمارنده:", counter.increment());  // 2
console.log("شمارنده:", counter.decrement());  // 1
console.log("مقدار:", counter.getCount());     // 1

// مثال 3: Spread Operator (عملگر پخش)
console.log("\n3. Spread Operator:");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log("ترکیب آرایه‌ها:", merged);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log("ترکیب شیء‌ها:", mergedObj);

// مثال 4: Destructuring (تخریب پیشرفته)
console.log("\n4. Destructuring:");

const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log("اول:", first, "دوم:", second, "باقی:", rest);

const { name: n, age: a, city: c } = person;
console.log(`${n} - ${a} - ${c}`);

// ═══════════════════════════════════════════════════════════════════════════
// خلاصه‌ای از موضوعات
// ═══════════════════════════════════════════════════════════════════════════

console.log("\n═══════════════════════════════════════════════════════════");
console.log("                  خلاصه راهنمای یادگیری");
console.log("═══════════════════════════════════════════════════════════");

const summary = {
  "متغیرها": "const، let، var",
  "انواع داده": "String، Number، Boolean، Object، Array، null، undefined",
  "عملگرها": "ریاضی، مقایسه، منطقی، انتساب",
  "رشته‌ها": "تقسیم، ترکیب، slice، substring، replace",
  "آرایه‌ها": "push، pop، map، filter، reduce، forEach",
  "شرط‌ها": "if/else، switch، ternary operator",
  "حلقه‌ها": "for، while، for...of، for...in",
  "توابع": "Function Declaration، Arrow Function، Rest Parameters",
  "شیء‌ها": "Properties، Methods، Destructuring",
  "DOM": "querySelector، getElementById، appendChild، innerHTML",
  "رویدادها": "addEventListener، click، input، submit",
  "Asynchronous": "Callback، Promise، async/await، Promise.all"
};

Object.entries(summary).forEach(([topic, details]) => {
  console.log(`✓ ${topic}: ${details}`);
});

console.log("\n════════════════════════════════════════════════════════════");
console.log("              پایان راهنمای یادگیری JavaScript");
console.log("════════════════════════════════════════════════════════════");
console.log("\nبرای استفاده بهتر:");
console.log("1. تمام مثال‌ها را اجرا کنید و درک کنید");
console.log("2. تمرین کنید و پروژه‌ای بسازید");
console.log("3. مستندات MDN را برای جزئیات بیشتر بخوانید");
console.log("4. کد دیگران را بخوانید و یاد بگیرید");
console.log("5. خطاهایتان را درک کنید و از آن‌ها یاد بگیرید\n");
