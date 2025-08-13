# Konimbo Landing Page

דף נחיתה ל-Konimbo הכולל צד לקוח (Front-End) וצד שרת (Back-End) עם חיבור ל-Airtable.

## דרישות מוקדמות
- התקנת Node.js במחשב
- חשבון Airtable עם Base ו-Table מוכנים
- התקנת Git במחשב

## התקנה והרצה – צד שרת (Server)
1. פתח את הטרמינל או PowerShell.
2. עבור לתיקיית השרת:  
   cd konimbo-landing-server
3. התקן את התלויות:  
   npm install
4. צור קובץ בשם `.env` בתיקייה הראשית של השרת והכנס לתוכו את הפרטים הבאים (עם הערכים שלך מ-Airtable):  
   AIRTABLE_API_KEY=המפתח שלך  
   AIRTABLE_BASE_ID=ה-Base ID שלך  
   AIRTABLE_TABLE_NAME=שם הטבלה שלך
5. הפעל את השרת:  
   node server.js
6. השרת יהיה זמין בכתובת:  
   http://localhost:4000

## התקנה והרצה – צד לקוח (Client)
1. פתח טרמינל נוסף או חלון חדש.
2. עבור לתיקיית הלקוח:  
   cd konimbo-landing-client
3. התקן את התלויות:  
   npm install
4. הפעל את הלקוח:  
   npm start
5. הלקוח יהיה זמין בדפדפן בכתובת:  
   http://localhost:3000

## מבנה הפרויקט
- **client/** – קבצי ה-Front-End (HTML, CSS, JS)
- **server/** – קבצי ה-Back-End (Node.js, חיבור ל-Airtable)
- **.env** – קובץ משתני סביבה (לא לשתף ברשת)

## הערות
- אין להעלות את קובץ ה-.env ל-GitHub.
- יש לוודא שכל התלויות מותקנות לפני הפעלה ראשונה.
