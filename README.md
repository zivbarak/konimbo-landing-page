# Konimbo Landing Page

דף נחיתה ל-Konimbo הכולל צד לקוח (Front-End) וצד שרת (Back-End) עם חיבור ל-Airtable.

## דרישות מוקדמות
- Node.js מותקן במחשב
- חשבון Airtable עם Base וטבלה מוכנים
- Git מותקן במחשב

## התקנה והרצה – צד שרת (Server)
1. פתח את הטרמינל או PowerShell.
2. עבור לתיקיית הפרויקט של השרת:
   ```
   cd konimbo-landing-server
   ```
3. התקן את התלויות:
   ```
   npm install
   ```
4. צור קובץ בשם `.env` בתיקייה הראשית של השרת והכנס בו את המידע הבא (עם הפרטים שלך מ-Airtable):
   ```
   AIRTABLE_API_KEY=המפתח_שלך
   AIRTABLE_BASE_ID=ה-ID_של_base
   AIRTABLE_TABLE_NAME=שם_הטבלה
   ```
5. הפעל את השרת:
   ```
   node server.js
   ```
6. השרת אמור לפעול בכתובת:  
   http://localhost:4000

## התקנה והרצה – צד לקוח (Client)
1. עבור לתיקיית הפרויקט של הלקוח:
   ```
   cd konimbo-landing-client
   ```
2. התקן את התלויות:
   ```
   npm install
   ```
3. הפעל את הלקוח:
   ```
   npm start
   ```
4. הלקוח אמור להיפתח בדפדפן בכתובת:  
   http://localhost:3000
