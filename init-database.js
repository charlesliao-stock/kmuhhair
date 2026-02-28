import { db } from './firebase-config.js';
import { collection, doc, setDoc, writeBatch } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function initializeDatabase() {
    console.log("開始初始化資料庫設定...");
    const batch = writeBatch(db);

    // 1. 初始化服務項目 (Services)
    const services = [
        { id: 's1', name: '剪髮', price: 200 },
        { id: 's2', name: '洗髮', price: 300 },
        { id: 's3', name: '理髮(手術用)', price: 150 },
        { id: 's4', name: '染髮', price: 1200 }
    ];

    services.forEach(item => {
        const ref = doc(db, "Settings", "Services", "Items", item.id);
        batch.set(ref, { name: item.name, price: item.price });
    });

    // 2. 初始化特殊需求標籤 (Tags)
    const tags = [
        { id: 't1', name: '今日出院' },
        { id: 't2', name: '需在床上洗' },
        { id: 't3', name: '身上有管路' },
        { id: 't4', name: '家屬不在場' }
    ];

    tags.forEach(tag => {
        const ref = doc(db, "Settings", "Tags", "Items", tag.id);
        batch.set(ref, { name: tag.name });
    });

    // 3. 初始化全域設定 (Global Config)
    const configRef = doc(db, "Settings", "WebConfig");
    batch.set(configRef, {
        isWebOpen: true,
        morningLimit: 10,
        afternoonLimit: 10,
        contactPhone: "07-1234567"
    });

    try {
        await batch.commit();
        console.log("✅ 資料庫初始化成功！現在可以去 booking.html 查看成果了。");
        alert("資料庫初始化成功！");
    } catch (error) {
        console.error("❌ 初始化失敗:", error);
        alert("初始化失敗，請檢查 Firebase Console 的 Rules 設定。");
    }
}

// 執行初始化
initializeDatabase();
