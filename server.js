// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// הגדרות בסיס
app.use(cors());
app.use(express.json({ limit: "1mb" }));

// בדיקת חיים
app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Server is up" });
});

// קבלת שליחת טופס ושמירה ל-Airtable
app.post("/submit", async (req, res) => {
  try {
    const { fullName, email, message } = req.body || {};

    // ולידציה בסיסית בצד שרת
    if (!fullName || !email) {
      return res.status(400).json({ ok: false, error: "שם מלא ואימייל חובה" });
    }

    // בניית בקשה ל-Airtable REST API
    const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(process.env.AIRTABLE_TABLE_NAME)}`;

    const airtableResp = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              "Full Name": fullName,
              "Email": email,
              "Message": message || "",
            },
          },
        ],
      }),
    });

    if (!airtableResp.ok) {
      // החזרה של טקסט השגיאה מה-Airtable ללוג
      const errText = await airtableResp.text();
      console.error("Airtable error:", errText);
      return res.status(502).json({ ok: false, error: "Airtable failed" });
    }

    // הצלחה
    return res.json({ ok: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

// הפעלה
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
