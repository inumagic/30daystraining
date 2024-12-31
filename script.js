document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById("home-section");
    const dailyButtonsSection = document.getElementById("daily-buttons-section");
    const dayContentSection = document.getElementById("day-content-section");
    const dailyButtons = document.getElementById("daily-buttons");
    const dayContent = document.getElementById("day-content");

    // 定義數據
    const daysData = {
        1: {
            text:"加入相關群組並看公告、學習禮貌接待、診間中與醫師溝通、如何接電話、電話禮儀、環境認識、如何使用印表機",
            audios: [
                { title: "禮貌接待", url: "audio1.mp3" }
            ],
           pdfs: [
                { text: "A1.診所營業項目及資訊", url: "A1.pdf" },
                { text: "A2-2.加班申請單", url: "A2-2.pdf" },
                { text: "A3.電話轉接SOP", url: "A3.pdf" },
                { text: "A4.客訴發生SOP", url: "A4.pdf" },
                { text: "A6.IC單填寫SOP", url: "A6.pdf" },
                { text: "A9.診所位置平面圖", url: "A9.jpg" },
                { text: "A12 新進人員sop", url: "A12.pdf" },
                { text: "A14.優勢系統ic讀卡機當機", url: "A14.pdf" },
                { text: "A18 AED使用方式及流程", url: "A18.pdf" },
                { text: "A24 停水應急SOP", url: "A24.pdf" },
               ],
                  links: [
                {text:"教育訓練群組", url:"https://line.me/R/ti/g/Xy_DlB9_SQ"},
                {text:"X光教育訓練群組", url:"https://line.me/R/ti/g/UrjXAr2nJe"},
    
    
    
            ],
    
        },
        2: {
            text: "認識F4表、如何開啟備診語音、如何使用以上工具、學習如何基礎備診。",
            additionalText:"每個診間都有 F4 表，請務必確認並使用。此外，還有語音備診網站，其相關資訊已在「正職」及「兼職」群組的記事本與公告中發布，請隨時參考。進行備診時，請務必打開相關資料，按照網站或表單上的內容逐項檢查並備好，確保準備無誤。",
            pdfs: [
                { text: "認識F4表", url: "F4.pdf" },
            ],
            links:[
            {text:"語音備診網站", url:"https://inumagic.github.io/voice-assistant/"}
            ],
        },
    
        3:{
            text:"患者Q&A",
            pdfs:[
                { text: "與患者問與答", url: "ptqa.pdf" },
    
            ],
        },
    
        4:{
            text:"X光教學",
            links: [
             { text: "PANO 教育訓練 - Part 1", url: "https://www.youtube.com/embed/RyP04XuPyUU" },
                { text: "PANO 教育訓練 - Part 2", url: "https://youtu.be/uZNuzdkY5yo?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
                { text: "PANO 教育訓練 - Part 3", url: "https://youtu.be/ZiMHNiORs4Y?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
                { text: "PANO 教育訓練 - Part 4", url: "https://youtu.be/fBY80LJh03s?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
                { text: "CT 教育訓練 - Part 1", url: "https://youtu.be/MDlweDsDmdw?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
                { text: "CT 教育訓練 - Part 2", url: "https://youtu.be/PzY77cJ4CG8?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
                { text: "CT 教育訓練 - Part 3", url: "https://youtu.be/B9VHaejjHvM?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
                { text: "CT 教育訓練 - Part 4", url: "https://youtu.be/Yw2PRXimFSg?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
                { text: "CT 教育訓練 - Part 5", url: "https://youtu.be/7YIvLfwIREM?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
                { text: "CT 教育訓練 - Part 6", url: "https://youtu.be/_BRh_cDRxJI?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
                { text: "CT 教育訓練 - Part 7", url: "CT7.mp4" },
            ],
           
        },
        
        5:{
            text: "學習NPA",
            pdfs:[
                { text: "帶P't進診間流程SOP", url: "M1.pdf" },
             
                { text: "A10.拍攝照片影片SOP", url: "A10.pdf" },
                { text: "P2.矯正口內外照教學", url: "P2part II.pdf" },
            ],
        },
    
        6:{
            text:"口腔掃描系統教學",
            links:[
                {text: "口腔掃描系統教學", url:"https://inumagic.github.io/voice-assistant/scanning.html"},
            ],
           
    
        },
    
        7:{
        text:"IC相關",
        pdfs:[
            { text: "A6.IC單填寫SOP", url: "A6.pdf" },
            { text: "A8-1.健保處置代碼KEY IN SOP", url: "A8-1.pdf" },
            { text: "A14.優勢系統ic讀卡機當機", url: "A14.pdf" },
            { text: "A26特殊疾病患者標準SOP", url: "A26.pdf" },
        ],
        },

        8:{
            text:"櫃台SOP",
            pdfs:[
                { text: "R1.櫃台注意事項", url: "R1.pdf" },
                { text: "R2.櫃台每日工作", url: "R2.pdf" },
                { text: "R3. 掛號流程", url: "R3.pdf" },
                { text: "R4.櫃台每月申報sop", url: "R4.pdf" },
                { text: "R7.NP掛號費更改SOP", url: "R7.pdf" },
                { text: "R9.約診注意事項", url: "R9.pdf" },
                { text: "R11.櫃台每日工作事項", url: "R11.pdf" },
                { text: "U1.健保抽審程序", url: "U1.pdf" },



            ],

        },
        
        9:{
            text:"櫃台SOP-收費相關",
            pdfs:[
                { text: "S4.TA印花收據SOP", url: "S4.pdf" },
                { text: "S5.重新開立收據", url: "S5.pdf" },
                { text: "S6.本票填寫SOP", url: "S6.pdf" },
                { text: "S10-1.日報表寫法SOP", url: "S10-1.pdf" },
                { text: "S11.患者申請X光影像等資料SOP", url: "S11.pdf" },
                { text: "S12.櫃台收款流程SOP", url: "S12.pdf" },
                { text: "S13.重開健保收據SOP", url: "S13.pdf" },
                { text: "S14.M5單書寫方式SOP", url: "S14.M5.pdf" },
        ],
        },

         10:{
            text:"叫貨",
            pdfs:[
                { text: "V1.叫貨&收貨SOP", url: "V1.pdf" },
                { text: "V2.叫貨單範本", url: "V2.pdf" },
                { text: "V3.庫存SOP", url: "V3.pdf" },
                { text: "V5. 維修流程&送修流程廠商SOP", url: "V5.pdf" },
        ],
        },

         11:{
            text:"預設訊息",
            links:[
                { text: "預設訊息表網站", url: "https://inumagic.github.io/default-messages/" },
               
        ],
        },
        
        12:{
            text:"診間相關",
            links:[
            { text: "感染控制保護貼 Part1", url: "https://youtu.be/ETqgEqPsrxo?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
            { text: "感染控制保護貼 Part2", url: "https://youtu.be/WR0dGxT2hWs?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
            { text: "M系列診間吸唾管濾心清潔方式 Part1", url: "https://youtu.be/8ze-3H3vd6s?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
            { text: "M系列診間吸唾管濾心清潔方式 Part2", url: "https://youtu.be/dAgis79gKUw?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
            { text: "V診間診療椅保養清潔教學 Part1", url: "https://youtu.be/8hFc83l1vII?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
            { text: "V診間診療椅保養清潔教學 Part2", url: "https://youtu.be/NvYWY7r3lxg?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
            { text: "V診間診療椅保養清潔教學 Part3", url: "https://youtu.be/6njNwKoYk2M?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
            { text: "閉診定位", url: "https://youtu.be/dVb93sU5zFg?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
            { text: "閉診定位及清潔", url: "https://youtu.be/dPzhcp_hC2c?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },
            { text: "診間清潔", url: "https://youtu.be/CwA0ggFoKvg?list=PLnpTiTa0d_zQKjpSFe0z84yRILK3wyEfq" },


        ]
     },
       
    } 
   // 顯示特定區段
   function showSection(section) {
    [homeSection, dailyButtonsSection, dayContentSection].forEach(s => s.classList.add("d-none"));
    section.classList.remove("d-none");
}

// 加載日數圖片
function loadDailyImages(range) {
    const [start, end] = range.split("-").map(Number);
    dailyButtons.innerHTML = ""; // 清空内容

    for (let i = start; i <= end; i++) {
        const col = document.createElement("div");
        col.className = "col-12 col-md-4 text-center"; // 居中对齐

        const img = document.createElement("img");
        img.src = `day${i}.jpg`; // 指定图片路径
        img.alt = `Day ${i}`;
        img.className = "img-fluid cursor-pointer";
        img.addEventListener("click", () => loadDayContent(i));

        const label = document.createElement("p"); // 添加 Day 标注
        label.textContent = `Day ${i}`;
        label.className = "mt-2"; // 添加一些间距

        col.appendChild(img);
        col.appendChild(label); // 把标注加入到图片下面
        dailyButtons.appendChild(col);
    }

    showSection(dailyButtonsSection);
}


// 顯示特定區段
function showSection(section) {
    [homeSection, dailyButtonsSection, dayContentSection].forEach(s => s.classList.add("d-none"));
    section.classList.remove("d-none");
}

// 加載日數圖片
function loadDailyImages(range) {
    const [start, end] = range.split("-").map(Number);
    dailyButtons.innerHTML = ""; // 清空内容

    for (let i = start; i <= end; i++) {
        const col = document.createElement("div");
        col.className = "col-12 col-md-4 text-center"; // 居中对齐

        const img = document.createElement("img");
        img.src = `day${i}.jpg`; // 指定图片路径
        img.alt = `Day ${i}`;
        img.className = "img-fluid cursor-pointer";
        img.addEventListener("click", () => loadDayContent(i));

        const label = document.createElement("p"); // 添加 Day 标注
        label.textContent = `Day ${i}`;
        label.className = "mt-2"; // 添加一些间距

        col.appendChild(img);
        col.appendChild(label); // 把标注加入到图片下面
        dailyButtons.appendChild(col);
    }

    showSection(dailyButtonsSection);
}

// 加載特定日的內容
function loadDayContent(day) {
    dayContent.innerHTML = ""; // 清空之前的內容

    const dayData = daysData[day];
    if (!dayData) {
        alert(`Content for Day ${day} is not available yet.`);
        return;
    }

    // 添加標題
    const title = document.createElement("h2");
    title.textContent = `Day ${day}`;
    dayContent.appendChild(title);

    // 添加文本內容
    if (dayData.text) {
        const text = document.createElement("p");
        text.textContent = dayData.text;
        dayContent.appendChild(text);
    }

    // 添加音頻
    if (dayData.audios) {
        const audioSection = createMediaSection("Audio Files", dayData.audios, "audio");
        dayContent.appendChild(audioSection);
    }

    // 添加 PDF 連結
    if (dayData.pdfs) {
        const pdfSection = createMediaSection("PDF Resources", dayData.pdfs, "link");
        dayContent.appendChild(pdfSection);
    }

    // 添加外部連結
    if (dayData.links) {
        const linksSection = createMediaSection("Related Links", dayData.links, "link");
        dayContent.appendChild(linksSection);
    }

    // 添加視頻
    if (dayData.videos) {
        const videoSection = createMediaSection("Video Resources", dayData.videos, "video");
        dayContent.appendChild(videoSection);
    }

    showSection(dayContentSection);
}

// 創建多媒體區段
function createMediaSection(title, items, type) {
    const section = document.createElement("div");
    const header = document.createElement("h3");
    header.textContent = title;
    section.appendChild(header);

    items.forEach(item => {
        if (type === "audio") {
            const audioElement = document.createElement("audio");
            audioElement.controls = true;
            audioElement.src = item.url;

            const audioTitle = document.createElement("p");
            audioTitle.textContent = item.title;
            section.appendChild(audioTitle);
            section.appendChild(audioElement);
        } else if (type === "link") {
            const linkElement = document.createElement("a");
            linkElement.href = item.url;
            linkElement.textContent = item.text;
            linkElement.target = "_blank";
            section.appendChild(linkElement);
            section.appendChild(document.createElement("br"));
        } else if (type === "video") {
            const videoElement = document.createElement("video");
            videoElement.controls = true;
            videoElement.src = item.url;
            videoElement.style.maxWidth = "100%"; // 视频自适应大小

            const videoTitle = document.createElement("p");
            videoTitle.textContent = item.text;
            section.appendChild(videoTitle);
            section.appendChild(videoElement);
        }
    });

    return section;
}

// 綁定主頁按鈕事件
document.querySelectorAll(".range-button").forEach(button => {
    button.addEventListener("click", () => {
        const range = button.getAttribute("data-range");
        loadDailyImages(range);
    });
});

// 返回主頁按鈕
document.getElementById("back-to-home").addEventListener("click", () => {
    showSection(homeSection);
});

// 返回日數圖片按鈕
document.getElementById("back-to-daily-buttons").addEventListener("click", () => {
    showSection(dailyButtonsSection);
});

// 初始顯示主頁
showSection(homeSection);
});
