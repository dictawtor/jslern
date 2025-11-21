# راهنمای جامع یادگیری JavaScript

**نویسنده:** دیکتاتور (Dictator)  
**تاریخ:** نوامبر 2025  
**موضوع:** یادگیری کامل اصول JavaScript

---

## فهرست مطالب

1. [مبانی JavaScript و متغیرها](#1-مبانی-javascript-و-متغیرها)
2. [انواع داده‌ها](#2-انواع-دادهها)
3. [عملگرها](#3-عملگرها)
4. [رشته‌های کاراکتری](#4-رشتههای-کاراکتری)
5. [آرایه‌ها](#5-آرایهها)
6. [شرط‌های منطقی](#6-شرطهای-منطقی)
7. [حلقه‌ها](#7-حلقهها)
8. [توابع](#8-توابع)
9. [شیء‌ها](#9-شیءها)
10. [DOM Manipulation](#10-dom-manipulation)
11. [Event Handling](#11-event-handling)
12. [Asynchronous Programming](#12-asynchronous-programming)

---

## 1. مبانی JavaScript و متغیرها

### تعریف متغیر

متغیر یک ظرف برای ذخیره داده است. در JavaScript، سه روش برای تعریف متغیر داریم:

| روش | توضیح | مثال |
|-----|-------|------|
| `const` | ثابت (نمی‌تواند تغییر کند) | `const age = 26;` |
| `let` | متغیر (می‌تواند تغییر کند) | `let name = "علی";` |
| `var` | روش قدیمی (تجنب کنید) | `var city = "تهران";` |

### نکات مهم

✓ از `const` به طور پیش‌فرض استفاده کنید  
✓ از `let` استفاده کنید هنگامی که نیاز به تغییر دارید  
✓ از `var` استفاده نکنید (روش قدیمی است)  
✓ نام متغیرها باید معنی‌دار باشند

### مثال

```javascript
const name = "علی";        // ثابت
let age = 26;              // متغیر (می‌تواند تغییر کند)
console.log(name, age);
```

---

## 2. انواع داده‌ها

### اقسام داده در JavaScript

| نوع | توضیح | مثال |
|------|-------|------|
| String | متن | `"سلام"` یا `'سلام'` |
| Number | عدد صحیح یا اعشاری | `42` یا `3.14` |
| Boolean | true یا false | `true` یا `false` |
| undefined | مقدار نامعریف‌شده | `undefined` |
| null | بدون مقدار | `null` |
| Object | شیء | `{ name: "علی" }` |
| Array | آرایه | `[1, 2, 3]` |

### مثال‌ها

```javascript
const text = "سلام";           // String
const number = 42;              // Number
const isActive = true;          // Boolean
const empty = null;             // Null
let undefValue;                 // Undefined (خودکار)

// بررسی نوع:
console.log(typeof text);       // "string"
console.log(typeof number);     // "number"
console.log(typeof isActive);   // "boolean"
```

### Type Coercion (تبدیل نوع خودکار)

```javascript
console.log("5" + 3);      // "53" (String concatenation)
console.log(5 + 3);        // 8 (Numeric addition)
console.log("5" - 3);      // 2 (تبدیل خودکار به عدد)
```

---

## 3. عملگرها

### عملگرهای ریاضی

| عملگر | توضیح | مثال |
|-------|-------|------|
| `+` | جمع | `10 + 5` = 15 |
| `-` | تفریق | `10 - 5` = 5 |
| `*` | ضرب | `10 * 5` = 50 |
| `/` | تقسیم | `10 / 5` = 2 |
| `%` | باقی‌مانده | `10 % 3` = 1 |
| `**` | توان | `2 ** 3` = 8 |

### عملگرهای مقایسه

| عملگر | توضیح |
|-------|-------|
| `>` | بزرگ‌تر از |
| `<` | کوچک‌تر از |
| `>=` | بزرگ‌تر یا مساوی |
| `<=` | کوچک‌تر یا مساوی |
| `===` | مساوی دقیق (strict) |
| `!==` | نامساوی دقیق |

### عملگرهای منطقی

```javascript
true && false       // AND - false
true || false       // OR - true
!true              // NOT - false
```

### عملگرهای انتساب

```javascript
let x = 10;
x += 5;    // x = x + 5   → 15
x -= 3;    // x = x - 3   → 12
x *= 2;    // x = x * 2   → 24
x /= 2;    // x = x / 2   → 12
```

---

## 4. رشته‌های کاراکتری

### خصوصیات String

```javascript
const text = "سلام، نام من علی است";

console.log(text.length);        // طول رشته: 22
console.log(text[0]);            // حرف اول: س
console.log(text[text.length-1]); // حرف آخر: ت
```

### متدهای مهم String

| متد | توضیح | مثال |
|------|-------|------|
| `toUpperCase()` | تبدیل به بزرگ | `"hello".toUpperCase()` → "HELLO" |
| `toLowerCase()` | تبدیل به کوچک | `"HELLO".toLowerCase()` → "hello" |
| `charAt(index)` | حرف در شاخص | `"hello".charAt(0)` → "h" |
| `indexOf(str)` | شاخص شروع | `"hello".indexOf("ll")` → 2 |
| `includes(str)` | آیا شامل است | `"hello".includes("ell")` → true |
| `slice(start, end)` | برش | `"hello".slice(0, 3)` → "hel" |
| `split(separator)` | تقسیم | `"a,b,c".split(",")` → ["a", "b", "c"] |
| `replace(old, new)` | جایگزین | `"hello".replace("h", "H")` → "Hello" |

### Template Literals (رشته‌های الگو)

```javascript
const name = "علی";
const age = 26;

// روش قدیمی:
const msg1 = "سلام " + name + " شما " + age + " ساله‌اید";

// روش جدید (Template Literal):
const msg2 = `سلام ${name} شما ${age} ساله‌اید`;

console.log(msg2);
```

---

## 5. آرایه‌ها

### ایجاد آرایه

```javascript
const fruits = ["سیب", "موز", "نارنجی"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["متن", 42, true, null];

console.log(fruits[0]);        // "سیب" (اولین عنصر)
console.log(fruits.length);    // 3 (تعداد عناصر)
```

### متدهای مهم آرایه

#### متدهای تغییردهنده:

| متد | توضیح |
|------|-------|
| `push(item)` | اضافه کردن به انتهای آرایه |
| `pop()` | حذف از انتهای آرایه |
| `unshift(item)` | اضافه کردن به ابتدای آرایه |
| `shift()` | حذف از ابتدای آرایه |

#### متدهای غیرتغییردهنده:

```javascript
const numbers = [1, 2, 3, 4, 5];

// map: تبدیل عناصر
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter: فیلتر کردن عناصر
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]

// reduce: کاهش به یک مقدار
const sum = numbers.reduce((total, num) => total + num, 0);
// 15

// forEach: تکرار روی عناصر
numbers.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});

// includes: بررسی وجود عنصر
console.log(numbers.includes(3));  // true

// indexOf: شاخص عنصر
console.log(numbers.indexOf(3));   // 2

// slice: برش آرایه
console.log(numbers.slice(0, 3));  // [1, 2, 3]

// join: ترکیب با جدا‌کننده
console.log(numbers.join("-"));    // "1-2-3-4-5"

// concat: ترکیب دو آرایه
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2));    // [1, 2, 3, 4]
```

---

## 6. شرط‌های منطقی

### if/else if/else

```javascript
const age = 20;

if (age < 18) {
  console.log("زیر‌سن");
} else if (age < 65) {
  console.log("بالغ");
} else {
  console.log("بازنشسته");
}
```

### Ternary Operator (عملگر سه‌تایی)

```javascript
const status = age >= 18 ? "بالغ" : "زیر‌سن";
console.log(status);
```

### switch statement

```javascript
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
```

### مثال عملی: بررسی نوع مثلث

```javascript
const side1 = 5, side2 = 5, side3 = 5;

if (side1 + side2 > side3 && 
    side1 + side3 > side2 && 
    side2 + side3 > side1) {
  
  if (side1 === side2 && side2 === side3) {
    console.log("مثلث متساوی‌الاضلاع");
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log("مثلث متساوی‌الساقین");
  } else {
    console.log("مثلث مختلف‌الاضلاع");
  }
} else {
  console.log("مثلث نامعتبر");
}
```

---

## 7. حلقه‌ها

### حلقه for

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}
```

### حلقه while

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### حلقه do...while

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### حلقه for...of (برای آرایه‌ها)

```javascript
const colors = ["قرمز", "سبز", "آبی"];

for (const color of colors) {
  console.log(color);
}
```

### حلقه for...in (برای شیء‌ها)

```javascript
const person = { name: "علی", age: 26, city: "تهران" };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### break و continue

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 2) continue;  // از 2 بگذر
  if (i === 4) break;     // توقف در 4
  console.log(i);         // 1, 3
}
```

---

## 8. توابع

### تعریف تابع - روش‌های مختلف

#### 1. Function Declaration (اعلان تابع)

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));  // 5
```

#### 2. Function Expression (عبارت تابع)

```javascript
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5));  // 20
```

#### 3. Arrow Function (تابع پیکان‌دار)

```javascript
// فرم کوتاه (یک خط):
const square = x => x * x;
console.log(square(5));  // 25

// فرم بلند (چندین خط):
const divide = (a, b) => {
  if (b === 0) return 0;
  return a / b;
};
```

### پارامترهای پیش‌فرض

```javascript
function greet(name = "دوست", age = 25) {
  console.log(`سلام ${name}, ${age} ساله‌ای`);
}

greet();                  // سلام دوست, 25 ساله‌ای
greet("علی", 30);        // سلام علی, 30 ساله‌ای
```

### Rest Parameters (پارامترهای باقی‌مانده)

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // 15
```

### Higher Order Functions (توابع مرتبه‌بالا)

```javascript
// توابعی که توابع دیگری را درونشان دارند
const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(n => n % 2 === 0);
const doubled = numbers.map(n => n * 2);
const total = numbers.reduce((acc, n) => acc + n, 0);

console.log("فیلتر:", evens);      // [2, 4]
console.log("نقشه:", doubled);     // [2, 4, 6, 8, 10]
console.log("تقلیل:", total);      // 15
```

---

## 9. شیء‌ها

### ایجاد شیء

```javascript
const person = {
  name: "علی احمدی",
  age: 26,
  city: "تهران",
  email: "ali@example.com",
  
  // متد (تابع داخل شیء):
  greet: function() {
    return `سلام، من ${this.name} هستم`;
  },
  
  // Arrow Function به عنوان متد:
  getInfo: () => {
    return `${person.name} - ${person.age} ساله`;
  }
};

// دسترسی به ویژگی‌ها:
console.log(person.name);        // "علی احمدی"
console.log(person["age"]);      // 26
console.log(person.greet());     // "سلام، من علی احمدی هستم"
```

### اضافه کردن و حذف ویژگی

```javascript
// اضافه کردن:
person.phone = "09111234567";

// حذف:
delete person.email;
```

### Object Methods

```javascript
// Object.keys: تمام کلیدها
console.log(Object.keys(person));    // ["name", "age", "city", "phone"]

// Object.values: تمام مقادیر
console.log(Object.values(person));  // ["علی احمدی", 26, "تهران", "09111234567"]

// Object.entries: کلید-مقدار
console.log(Object.entries(person)); // [["name", "علی احمدی"], ...]

// حلقه روی شیء:
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### Destructuring (تخریب)

```javascript
const { name, age, city } = person;
console.log(name, age, city);  // علی احمدی 26 تهران

// با نام‌های متفاوت:
const { name: n, age: a } = person;
console.log(n, a);
```

### شیء‌های تودرتو

```javascript
const company = {
  name: "شرکت فناوری",
  employees: [
    { id: 1, name: "علی", position: "توسعه‌دهنده" },
    { id: 2, name: "فاطمه", position: "طراح" }
  ],
  location: {
    city: "تهران",
    country: "ایران"
  }
};

console.log(company.location.city);     // "تهران"
console.log(company.employees[0].name); // "علی"
```

---

## 10. DOM Manipulation

### انتخاب عناصر

```javascript
// توسط ID:
const element = document.getElementById("myId");

// توسط Selector:
const element = document.querySelector(".myClass");
const elements = document.querySelectorAll("p");

// توسط Tag Name:
const allDivs = document.getElementsByTagName("div");
```

### تغییر محتوا

```javascript
// تنها متن:
element.textContent = "متن جدید";

// شامل HTML:
element.innerHTML = "<b>متن غلیظ</b>";
```

### تغییر Styling

```javascript
element.style.color = "red";
element.style.fontSize = "20px";
element.style.display = "none";
```

### مدیریت کلاس‌ها

```javascript
// اضافه کردن کلاس:
element.classList.add("active");

// حذف کلاس:
element.classList.remove("inactive");

// تبدیل (اگر وجود دارد حذف، وگرنه اضافه):
element.classList.toggle("highlight");

// بررسی داشتن کلاس:
if (element.classList.contains("active")) {
  // ...
}
```

### ایجاد عناصر جدید

```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "عنصر جدید";
newDiv.className = "new-class";

// اضافه کردن به صفحه:
document.body.appendChild(newDiv);

// اضافه کردن قبل از عنصری:
parent.insertBefore(newDiv, sibling);
```

### ویژگی‌های HTML

```javascript
// تنظیم ویژگی:
element.setAttribute("data-id", "123");
element.setAttribute("disabled", true);

// دریافت ویژگی:
const id = element.getAttribute("data-id");

// حذف ویژگی:
element.removeAttribute("disabled");
```

---

## 11. Event Handling

### رویدادهای مهم

| رویداد | توضیح |
|-------|-------|
| `click` | کلیک روی عنصر |
| `dblclick` | دوبار کلیک |
| `mouseover` | موس روی عنصر |
| `mouseout` | موس خارج از عنصر |
| `mousedown` | فشردن دکمه موس |
| `mouseup` | رها کردن دکمه موس |
| `input` | تغییر مقدار input |
| `change` | تغییر مقدار select |
| `submit` | ارسال فرم |
| `keydown` | فشردن کلید |
| `keyup` | رها کردن کلید |
| `load` | بارگذاری صفحه |
| `scroll` | پیمایش صفحه |

### رویدادگیری (Event Listening)

#### روش 1: در HTML

```html
<button onclick="handleClick()">کلیک کنید</button>

<script>
function handleClick() {
  console.log("دکمه کلیک شد!");
}
</script>
```

#### روش 2: با JavaScript

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("دکمه کلیک شد!");
});
```

#### روش 3: با Event Object

```javascript
button.addEventListener("click", (event) => {
  console.log("کلیک کننده:", event.target);
  console.log("نوع رویداد:", event.type);
  
  // جلوگیری از رفتار پیش‌فرض:
  event.preventDefault();
  
  // متوقف کردن انتشار:
  event.stopPropagation();
});
```

### حذف Event Listener

```javascript
function handleClick() {
  console.log("کلیک شد");
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

### مثال عملی: فرم

```javascript
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("مقدار:", input.value);
  form.reset();
});

input.addEventListener("input", (event) => {
  console.log("در حال نوشتن:", event.target.value);
});
```

---

## 12. Asynchronous Programming

### چرا Asynchronous؟

Asynchronous برنامه‌نویسی (برنامه‌نویسی غیرهمزمان) برای عملیات‌هایی است که وقت می‌برند:
- درخواست‌های شبکه‌ای
- خواندن/نوشتن فایل‌ها
- پرس‌وجوهای پایگاه‌داده
- محاسبات سنگین

### Callback Functions (توابع بازخوانی)

```javascript
function fetchData(callback) {
  console.log("درحال بارگذاری...");
  
  setTimeout(() => {
    const data = { id: 1, name: "علی" };
    callback(data);
  }, 2000);
}

fetchData((result) => {
  console.log("داده‌ها دریافت شدند:", result);
});
```

**مشکل:** Callback Hell (تودرتو شدن زیاد)

### Promise

**Promise یک شی است که نمایندگی یک عملیات غیرهمزمان است.**

سه حالت:
- **Pending:** درحال انتظار
- **Fulfilled:** موفق (resolve)
- **Rejected:** ناموفق (reject)

```javascript
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "محمد" });
      } else {
        reject("شناسه نامعتبر");
      }
    }, 2000);
  });
}

// استفاده:
fetchUser(1)
  .then(user => {
    console.log("کاربر:", user);
  })
  .catch(error => {
    console.error("خطا:", error);
  });
```

### Promise Chain

```javascript
fetchUser(1)
  .then(user => {
    console.log("کاربر:", user);
    return fetchPosts(user.id);  // Promise بعدی
  })
  .then(posts => {
    console.log("پست‌ها:", posts);
    return fetchComments(posts[0].id);
  })
  .then(comments => {
    console.log("نظرات:", comments);
  })
  .catch(error => {
    console.error("خطا:", error);
  });
```

### Async/Await

**بهترین روش برای کار با Promise‌ها**

```javascript
async function getUserWithPosts(userId) {
  try {
    console.log("درحال بارگذاری...");
    
    // منتظر تا Promise حل شود:
    const user = await fetchUser(userId);
    console.log("کاربر:", user);
    
    const posts = await fetchPosts(user.id);
    console.log("پست‌ها:", posts);
    
    return { user, posts };
  } catch (error) {
    console.error("خطا:", error);
  }
}

// استفاده:
getUserWithPosts(1)
  .then(result => console.log("نتیجه:", result));
```

### Promise.all (اجرای موازی)

```javascript
function task1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("تسک 1"), 1000);
  });
}

function task2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("تسک 2"), 1500);
  });
}

// اجرا همزمان:
Promise.all([task1(), task2()])
  .then(results => {
    console.log("نتایج:", results);
  });
```

### Event Loop (ترتیب اجرا)

```javascript
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
*/
```

**ترتیب اجرا:**
1. Synchronous code
2. Micro Tasks (Promise, async/await)
3. Macro Tasks (setTimeout, setInterval)

---

## نکات و بهترین‌رویه‌ها

### ✓ نام‌گذاری

- استفاده از `camelCase`: `myVariable`
- `UPPER_CASE` برای ثابت‌ها: `MAX_SIZE = 100`
- نام‌های معنی‌دار انتخاب کنید

### ✓ متغیرها

- از `const` به طور پیش‌فرض استفاده کنید
- از `let` هنگام نیاز به تغییر
- از `var` استفاده نکنید

### ✓ مقایسه

- `===` و `!==` استفاده کنید، نه `==` و `!=`
- Type coercion درکش کنید

### ✓ Asynchronous

- `async/await` را ترجیح دهید
- `try/catch` برای خطاگیری
- `Promise.all` برای موازی‌سازی

### ✓ DOM

- `querySelector` استفاده کنید (modern)
- Event delegation برای بهره‌وری
- Debounce/Throttle برای رویدادهای فرکانس‌بالا

### ✓ عمومی

- کد پاک و خوان‌پذیر بنویسید
- توابع کوچک و یک‌کاره باشند
- کد خود را مستند‌سازی کنید
- از MDN برای مرجع استفاده کنید

---

## خلاصه‌ای از موضوعات

| موضوع | شامل |
|-------|-------|
| **متغیرها** | const، let، var، نام‌گذاری |
| **انواع داده** | String، Number، Boolean، Object، Array، null، undefined |
| **عملگرها** | ریاضی، مقایسه، منطقی، انتساب |
| **رشته‌ها** | length، slice، split، replace، indexOf |
| **آرایه‌ها** | push، pop، map، filter، reduce، forEach |
| **شرط‌ها** | if/else، switch، ternary operator |
| **حلقه‌ها** | for، while، for...of، for...in |
| **توابع** | declaration، expression، arrow، parameters |
| **شیء‌ها** | properties، methods، destructuring |
| **DOM** | querySelector، innerHTML، classList |
| **رویدادها** | addEventListener، preventDefault |
| **Async** | callback، Promise، async/await، Promise.all |

---

## منابع و مراجع

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Codecademy](https://www.codecademy.com/)
- [FreeCodeCamp](https://www.freecodecamp.org/)

---

**نویسنده:** دیکتاتور (Dictator)  
**تاریخ:** نوامبر 2025  
**ورژن:** 1.0
