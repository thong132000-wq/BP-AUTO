BP AUTO CMS

โครงสร้างนี้เตรียมไว้สำหรับ GitHub + Netlify + Decap CMS

1) อัปโหลดทุกไฟล์ขึ้น GitHub repository เดียวกัน
2) แก้ admin/config.yml บรรทัด repo ให้เป็น YOUR_USERNAME/YOUR_REPOSITORY
3) ระบบหลังบ้านจะอยู่ที่ https://ชื่อเว็บของคุณ/admin/
4) รถจะถูกเก็บใน data/cars/*.json และรูปใน images/cars/
5) ไฟล์ cars.json ต้องถูกสร้างตอน deploy เพื่อให้หน้าเว็บอ่านรายการรถอัตโนมัติ

หมายเหตุ: การเปิดใช้งาน login ของ Decap CMS กับ GitHub ต้องตั้งค่า OAuth ตามวิธีของผู้ให้บริการ/โฮสต์ที่ใช้งานก่อน
