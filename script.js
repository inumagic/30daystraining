const trainingData = {
    1: { 
        title: "口腔解剖學", 
        video: "https://www.youtube.com/embed/your-video-id", 
        audio: "audio1.mp3", 
        pdf: "https://drive.google.com/file/d/your-pdf-id/preview"
    },
    2: { 
        title: "牙齒結構", 
        video: "https://www.youtube.com/embed/your-video-id", 
        audio: "audio2.mp3", 
        pdf: "https://drive.google.com/file/d/your-pdf-id/preview"
    },
    1: { title: "口腔解剖學", video: "video1.mp4", audio: "audio1.mp3", pdf: "doc1.pdf" },
    2: { title: "牙齒結構", video: "video2.mp4", audio: "audio2.mp3", pdf: "doc2.pdf" },
    3: { title: "牙周病學", video: "video3.mp4", audio: "audio3.mp3", pdf: "doc3.pdf" },
    4: { title: "診斷技巧", video: "video4.mp4", audio: "audio4.mp3", pdf: "doc4.pdf" },
    5: { title: "治療計畫", video: "video5.mp4", audio: "audio5.mp3", pdf: "doc5.pdf" },
    6: { title: "修復技術", video: "video6.mp4", audio: "audio6.mp3", pdf: "doc6.pdf" },
    7: { title: "拔牙技巧", video: "video7.mp4", audio: "audio7.mp3", pdf: "doc7.pdf" },
    8: { title: "植牙基礎", video: "video8.mp4", audio: "audio8.mp3", pdf: "doc8.pdf" },
    9: { title: "美學牙科", video: "video9.mp4", audio: "audio9.mp3", pdf: "doc9.pdf" },
    10: { title: "根管治療", video: "video10.mp4", audio: "audio10.mp3", pdf: "doc10.pdf" },
    11: { title: "全口假牙", video: "video11.mp4", audio: "audio11.mp3", pdf: "doc11.pdf" },
    12: { title: "牙科新技術", video: "video12.mp4", audio: "audio12.mp3", pdf: "doc12.pdf" }
};

function showDays(start, end) {
    const dayButtons = document.getElementById("day-buttons");
    dayButtons.innerHTML = "";
    dayButtons.classList.remove("hidden");

    for (let i = start; i <= end; i++) {
        let button = document.createElement("button");
        button.textContent = `Day ${i}: ${trainingData[i].title}`;
        button.onclick = () => showContent(i);
        dayButtons.appendChild(button);
    }
}

function showContent(day) {
    const content = document.getElementById("content");
    const data = trainingData[day];

    content.innerHTML = `
        <h2>${data.title}</h2>
        <video controls width="400">
            <source src="${data.video}" type="video/mp4">
            你的瀏覽器不支援影片播放。
        </video>
        <br>
        <audio controls>
            <source src="${data.audio}" type="audio/mpeg">
            你的瀏覽器不支援音訊播放。
        </audio>
        <br>
        <a href="${data.pdf}" target="_blank">下載 PDF</a>
    `;
}
