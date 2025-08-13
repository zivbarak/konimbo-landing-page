
const API_URL = "http://localhost:4000/submit";

const form = document.getElementById("lead-form");
const statusEl = document.getElementById("form-status");
const btn = form.querySelector("button");
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#fullName");

function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v || "").trim());
}

function isFullName(v) {
    const parts = (v || "").trim().split(/\s+/).filter(w => w.length >= 2);
    return parts.length >= 2;
}

function setStatus(messages, type = "info") {
    if (Array.isArray(messages)) {
        statusEl.innerHTML = messages.map(m => `<div>${m}</div>`).join("");
    } else {
        statusEl.textContent = messages || "";
    }
    statusEl.style.color =
        type === "success" ? "#16a34a" : type === "error" ? "#dc2626" : "#475569";
    statusEl.style.display = messages ? "block" : "none";
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusEl.textContent = "";
    statusEl.innerHTML = "";
    statusEl.style.display = "none";

    const data = Object.fromEntries(new FormData(form));
    const fullName = (data.fullName || "").trim();
    const email = (data.email || "").trim();
    const message = (data.message || "").trim();

    let errors = [];

    if (!fullName) {
        errors.push("נא להזין שם מלא.");
    } else if (!isFullName(fullName)) {
        errors.push("נא להזין שם מלא (שם פרטי ומשפחה).");
    }

    if (!email) {
        errors.push("נא להזין כתובת אימייל.");
    } else if (!isValidEmail(email)) {
        errors.push("נא להזין כתובת אימייל תקינה.");
    }

    if (errors.length > 0) {
        setStatus(errors, "error");
        return;
    }

    btn.disabled = true;
    const oldBtnText = btn.textContent;
    btn.textContent = "שולח…";

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullName, email, message })
        });

        const body = await res.json().catch(() => ({}));
        if (!res.ok || body.ok === false) {
            throw new Error(body.error || "שגיאה בשליחה");
        }

        // מחליפים את הכותרת הראשית
        const heading = form.parentNode.querySelector("h2");
        if (heading) {
            heading.textContent = "הפרטים נשלחו בהצלחה!";
        }

        // מסתירים את הטופס
        form.style.display = "none";

    } catch (err) {
        setStatus(err.message || "תקלה בשליחה, נסי שוב.", "error");
    } finally {
        btn.disabled = false;
        btn.textContent = oldBtnText;
    }
});
