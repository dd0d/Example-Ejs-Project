// المكتبات المُستخدمة حاليًا
const express = require('express');
const app = express();


// تعريف الملفات و إعدادات الملفات
app.set('view engine', 'ejs');
app.set('views', './views');


// جلب ملف ال index.ejs في حال تم إنشائه
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', name: 'mohmad' });
});

// نظام تشغيل الخادم على بورت 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
