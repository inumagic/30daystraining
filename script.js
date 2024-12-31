document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.getElementById("home-section");
    const dailyButtonsSection = document.getElementById("daily-buttons-section");
    const dailyButtons = document.getElementById("daily-buttons");
    const dayContentSection = document.getElementById("day-content-section");
    const dayContent = document.getElementById("day-content");

    // 定義數據
    const daysData = {
        1: {
            text:"加入相關群組並看公告、學習禮貌接待、診間中與醫師溝通、如何接電話、電話禮儀、環境認識、如何使用印表機",
            audios: [
                { title: "禮貌接待", url: "Day 1/audio1.mp3" }
            ],
            pdfs: [
                { text: "A1.診所營業項目及資訊", url: "Day 1/A1.診所營業項目及資訊.pdf" },
                { text: "A2-2.加班申請單", url: "Day 1/A2-2.加班申請單(範本)1061120修改.pdf" },
                { text: "A3.電話轉接SOP", url: "Day 1/A3.電話轉接SOP.pdf" },
                { text: "A4.客訴發生SOP", url: "Day 1/A4.客訴發生SOP.pdf" },
                { text: "A6.IC單填寫SOP", url: "Day 1/A6.IC單填寫SOP  113.9.11修改 .pdf" },
                { text: "A9.診所位置平面圖", url: "Day 1/A9.診所位置平面圖.jpg" },
                { text: "A12 新進人員sop", url: "Day 1/A12 新進人員sop.pdf" },
                { text: "A12 新進人員sop", url: "Day 1/A14.優勢系統ic讀卡機當機.pdf" },
                { text: "A14.優勢系統ic讀卡機當機", url: "Day 1/A18 AED使用方式及流程.pdf" },
                { text: "A24 停水應急SOP", url: "Day 1/A24 停水應急SOP.pdf" },
    
    
            ],
           
            
            links:[
                {text:"教育訓練群組", url:"https://line.me/R/ti/g/Xy_DlB9_SQ"},
                {text:"X光教育訓練群組", url:"https://line.me/R/ti/g/UrjXAr2nJe"},
    
    
    
            ],
    
        },
        2: {
            text: "認識F4表、如何開啟備診語音、如何使用以上工具、學習如何基礎備診。",
            additionalText:"每個診間都有 F4 表，請務必確認並使用。此外，還有語音備診網站，其相關資訊已在「正職」及「兼職」群組的記事本與公告中發布，請隨時參考。進行備診時，請務必打開相關資料，按照網站或表單上的內容逐項檢查並備好，確保準備無誤。",
            pdfs: [
                { text: "認識F4表", url: "Day 2/F4表.pdf" },
            ],
            links:[
            {text:"語音備診網站", url:"https://inumagic.github.io/voice-assistant/"}
            ],
        },
    
        3:{
            text:"患者Q&A",
            pdfs:[
                { text: "與患者問與答", url: "Day 1/與患者問與答_1040121.pdf" },
    
            ],
        },
    
        4:{
            text:"X光教學",
            videos: [
                { text: "PANO 教育訓練 - Part 1", url: "Day 1/VID_20240224105526pano1.mp4" },
                { text: "PANO 教育訓練 - Part 2", url: "Day 1/VID_20240224110716pano2.mp4" },
                { text: "PANO 教育訓練 - Part 3", url: "Day 1/VID_20240224112219pano3.mp4" },
                { text: "PANO 教育訓練 - Part 4", url: "Day 1/VID_20240224112502pano4.mp4" },
                { text: "CT 教育訓練 - Part 1", url: "Day 1/CT1.mp4" },
                { text: "CT 教育訓練 - Part 2", url: "Day 1/CT2.mp4" },
                { text: "CT 教育訓練 - Part 3", url: "Day 1/CT3.mp4" },
                { text: "CT 教育訓練 - Part 4", url: "Day 1/CT4.mp4" },
                { text: "CT 教育訓練 - Part 5", url: "Day 1/CT5.mp4" },
                { text: "CT 教育訓練 - Part 6", url: "Day 1/CT6.mp4" },
                { text: "CT 教育訓練 - Part 7", url: "Day 1/CT7.mp4" },
            ],
           
        },
        
        5:{
            text: "學習NPA",
            pdfs:[
                { text: "帶P't進診間流程SOP", url: "5.臨床類(MNOP)/M.GP/M1.帶P't進診間流程SOP.pdf" },
             
                { text: "A10.拍攝照片影片SOP", url: "Day 1/A10.拍攝照片影片SOP.pdf" },
                { text: "P2.矯正口內外照教學", url: "Day 2/P2.矯正口內外照教學 part II.pdf" },
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
            { text: "A6.IC單填寫SOP", url: "Day 1/A6.IC單填寫SOP  113.9.11修改 .pdf" },
            { text: "A8-1.健保處置代碼KEY IN SOP", url: "Day 1/A8-1.健保處置代碼KEY IN SOP (技工不必看!!).pdf" },
            { text: "A14.優勢系統ic讀卡機當機", url: "Day 1/A14.優勢系統ic讀卡機當機.pdf" },
            { text: "A26特殊疾病患者標準SOP", url: "Day 1/A26特殊疾病患者標準SOP.pdf" },
        ],
        },
    
        8:{
            text:"櫃台SOP",
            pdfs:[
                { text: "S4.TA印花收據SOP", url: "櫃台SOP/S4.TA印花收據SOP(更新版 待CK).pdf" },
                { text: "S5.重新開立收據", url: "櫃台SOP/S5.重新開立收據sop.pdf" },
                { text: "S6.本票填寫SOP", url: "櫃台SOP/S6.本票填寫SOP.pdf" },
                { text: "S10-1.日報表寫法SOP", url: "櫃台SOP/S10-1.日報表寫法SOP -112.06.15更新.pdf" },
                { text: "S11.患者申請X光影像等資料SOP", url: "櫃台SOP/S11.患者申請X光影像等資料SOP(新版).pdf" },
                { text: "S12.櫃台收款流程SOP", url: "櫃台SOP/S12.櫃台收款流程SOP.pdf" },
                { text: "S13.重開健保收據SOP", url: "櫃台SOP/S13.重開健保收據SOP(待確認).pdf" },
                { text: "S14.M5單書寫方式SOP", url: "櫃台SOP/S14.M5單書寫方式SOP -112.06.15更新.pdf" },
        ],
        },
    
       
    }

    function showSection(section) {
        [homeSection, dailyButtonsSection, dayContentSection].forEach(s => s.classList.add("d-none"));
        section.classList.remove("d-none");
    }

    // 加載特定日的內容
    function loadDayContent(day) {
        const dayData = daysData[day];
        if (!dayData) {
            alert(`Content for Day ${day} is not available yet.`);
            return;
        }

        dayContent.innerHTML = ""; // 清空之前的內容

        const title = document.createElement("h2");
        title.textContent = `Day ${day}`;
        dayContent.appendChild(title);

        if (dayData.text) {
            const text = document.createElement("p");
            text.textContent = dayData.text;
            dayContent.appendChild(text);
        }

        if (dayData.audios) {
            const audioSection = createMediaSection("Audio Files", dayData.audios, "audio");
            dayContent.appendChild(audioSection);
        }

        if (dayData.pdfs) {
            const pdfSection = createMediaSection("PDF Resources", dayData.pdfs, "link");
            dayContent.appendChild(pdfSection);
        }

        if (dayData.links) {
            const linksSection = createMediaSection("Related Links", dayData.links, "link");
            dayContent.appendChild(linksSection);
        }

        showSection(dayContentSection);
    }

    // 加載日數按鈕
    function loadDailyButtons(range) {
        const [start, end] = range.split("-").map(Number);
        dailyButtons.innerHTML = ""; // 清空按鈕

        for (let i = start; i <= end; i++) {
            const button = document.createElement("button");
            button.textContent = `Day ${i}`;
            button.classList.add("btn", "btn-outline-primary", "m-2");
            button.addEventListener("click", () => loadDayContent(i));
            dailyButtons.appendChild(button);
        }

        showSection(dailyButtonsSection);
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
            }
        });

        return section;
    }

    // 綁定 Explore 按鈕事件
    document.querySelectorAll(".range-button").forEach(button => {
        button.addEventListener("click", () => {
            const range = button.getAttribute("data-range");
            loadDailyButtons(range);
        });
    });

    // 返回主頁按鈕
    document.getElementById("back-to-home").addEventListener("click", () => {
        showSection(homeSection);
    });

    // 返回日數按鈕
    document.getElementById("back-to-daily-buttons").addEventListener("click", () => {
        showSection(dailyButtonsSection);
    });

    // 初始顯示主頁
    showSection(homeSection);
});
