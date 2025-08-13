# Konimbo Landing Page

דף נחיתה ל-Konimbo הכולל צד לקוח (Front-End) וצד שרת (Back-End) עם חיבור ל-Airtable.

## דרישות מוקדמות
- Node.js מותקן במחשב
- חשבון Airtable עם Base ו-Table מוכנים
- Git מותקן במחשב

---

## התקנה והרצה – צד שרת (Server)

1. פתח את הטרמינל או PowerShell.  
2. עבור לתיקיית השרת:
   ```bash
   cd konimbo-landing-server
   ```
3. התקן את החבילות:
   ```bash
   npm install
   ```
4. צור קובץ `.env` בתיקייה הראשית של השרת עם הפרטים הבאים (השלם בפרטים שלך מ-Airtable):
   ```env
   AIRTABLE_API_KEY=המפתח_שלך
   AIRTABLE_BASE_ID=ה-Base_ID_שלך
   AIRTABLE_TABLE_NAME=שם_הטבלה
   ```
5. הפעל את השרת:
   ```bash
   node server.js
   ```
6. ברירת המחדל – השרת ירוץ בכתובת:
   ```
   http://localhost:4000
   ```

---

## התקנה והרצה – צד לקוח (Client)

1. פתח חלון טרמינל/PowerShell חדש.  
2. עבור לתיקיית הקליינט:
   ```bash
   cd konimbo-landing-client
   ```
3. ודא שבקובץ ה-JavaScript של הקליינט (`script.js`) כתובת ה-API נכונה:
   ```javascript
   const API_URL = "http://localhost:4000/submit";
   ```
4. פתח את הקובץ `index.html` בדפדפן.

---

## מבנה הפרויקט
```
konimbo-landing-page/
│
├── konimbo-landing-client/   # קבצי ה-HTML, CSS, JS של הלקוח
│
└── konimbo-landing-server/   # קוד Node.js של השרת
```

---

## שימוש
- מלא את הטופס בדף הנחיתה.  
- הנתונים יישלחו לשרת ב-Node.js.  
- השרת ישמור את הנתונים בטבלה ב-Airtable.
