const CONFIG = {
    targetTime: "08:45:00", 
    startOffset: 150,        // میلی‌ثانیه زودتر برای جبران پینگ
    maxOrders: 3,           // تعداد کلیک رگباری
    clickInterval: 40,      // فاصله بین کلیک‌ها (بسیار سریع)
};

let serverTimeOffset = 0;
let ordersSent = 0;

// ================= هماهنگ‌سازی با ساعت سایت =================
async function syncTime() {
    console.log(" در حال تطبیق با ساعت سرور آگاه...");
    try {
        const start = Date.now();
        const response = await fetch(window.location.href, { method: 'HEAD', cache: "no-store" });
        const end = Date.now();
        const serverDateStr = response.headers.get('Date');
        
        if (serverDateStr) {
            const serverTime = new Date(serverDateStr).getTime();
           
            serverTimeOffset = (serverTime + (end - start) / 2) - end;
            console.log(` هماهنگ شد. اختلاف: ${Math.round(serverTimeOffset)}ms`);
        }
    } catch (e) {
        console.error("خطا در همگام‌سازی زمان.");
    }
}

function getNow() {
    return new Date(Date.now() + serverTimeOffset);
}

// ================= تابع کلیک رگباری روی دکمه + =================
function fireBarrage() {
   
    const plusBtn = document.querySelector('button.btn-success.outlined.fa-plus');

    if (plusBtn && plusBtn.offsetParent !== null) {
        plusBtn.click();
        ordersSent++;
        console.log(` شلیک ${ordersSent} در زمان: ${getNow().toLocaleTimeString('en-GB')}.${getNow().getMilliseconds()}`);
    } else {
        console.error(" دکمه (+) پیدا نشد! مطمئن شوید پنل باز است.");
    }
}

// ================= شروع خودکار ====================
async function startBot() {
    console.clear();
    await syncTime();
    console.log(`%c  ربات رگباری (+) آماده در ${CONFIG.targetTime}  `, "background: #000; color: #0f0; font-size: 16px");

    const timer = setInterval(() => {
        const now = getNow();
        const timeStr = now.toLocaleTimeString('en-GB', { hour12: false });
        const ms = now.getMilliseconds();

        // لحظه برخورد با هدف
        if (timeStr === CONFIG.targetTime || (timeStr === incrementSec(CONFIG.targetTime, -1) && ms >= (1000 - CONFIG.startOffset))) {
            clearInterval(timer);
            
            const barrageInterval = setInterval(() => {
                fireBarrage();
                if (ordersSent >= CONFIG.maxOrders) {
                    clearInterval(barrageInterval);
                    console.log(" ماموریت تمام شد.");
                }
            }, CONFIG.clickInterval);
        }
    }, 1);
}

function incrementSec(t, s) {
    const d = new Date();
    const [h, m, sec] = t.split(':').map(Number);
    d.setHours(h, m, sec + s);
    return d.toLocaleTimeString('en-GB', { hour12: false });
}

startBot();





//chat gpt
const CONFIG = {
  targetTime: "08:4:00",
  startOffset: 150,     // ms
  maxOrders: 3,
  clickInterval: 40
};

let serverTimeOffset = 0;
let ordersSent = 0;
let plusBtn = null;
let targetTimestamp = 0;
const ping = (async () => {
    const start = Date.now();
    await fetch(window.location.href, { method: 'HEAD', cache: 'no-store' });
    const end = Date.now();
    console.log(`پینگ واقعی شما: ${end - start} میلی‌ثانیه`);
})();


// ================= همگام‌سازی زمان =================
async function syncTime() {
  try {
    const t0 = Date.now();
    const res = await fetch(location.href, { method: "HEAD", cache: "no-store" });
    const t1 = Date.now();
    const serverDate = res.headers.get("Date");
    if (!serverDate) return;

    const serverTime = new Date(serverDate).getTime();
    serverTimeOffset = serverTime + (t1 - t0) / 2 - t1;

    console.log(`⏱ offset: ${Math.round(serverTimeOffset)}ms`);
  } catch {
    console.error("❌ sync time failed");
  }
}

const nowMs = () => Date.now() + serverTimeOffset;

// ================= پیدا کردن دکمه فقط یک‌بار =================
function cacheButton() {
  plusBtn = document.querySelector("button.btn-success.outlined.fa-plus");
  if (!plusBtn) {
    console.error("❌ دکمه + پیدا نشد");
    return false;
  }
  return true;
}

// ================= شلیک =================
function fire() {
  if (!plusBtn || plusBtn.offsetParent === null) return;

  plusBtn.click();
  ordersSent++;
  console.log(`🔥 ${ordersSent} @ ${nowMs()}`);
}

// ================= شروع =================
async function startBot() {
  console.clear();
  await syncTime();
  if (!cacheButton()) return;

  const [h, m, s] = CONFIG.targetTime.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, s, 0);
  targetTimestamp = d.getTime();

  console.log(
    `%cBOT ARMED → ${CONFIG.targetTime}`,
    "background:#000;color:#0f0;font-size:14px"
  );

  // چک لحظه برخورد با rAF
  function waitForHit() {
    if (nowMs() >= targetTimestamp - CONFIG.startOffset) {
      startBarrage();
    } else {
      requestAnimationFrame(waitForHit);
    }
  }

  waitForHit();
}

// ================= رگبار =================
function startBarrage() {
  const interval = setInterval(() => {
    fire();
    if (ordersSent >= CONFIG.maxOrders) {
      clearInterval(interval);
      console.log("✅ mission complete");
    }
  }, CONFIG.clickInterval);
}

startBot();
