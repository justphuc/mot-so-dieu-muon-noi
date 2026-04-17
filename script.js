// ===== CHECK UPDATE (GIỮ NGUYÊN) =====
(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();


// ===== TEXT NÚT KHÔNG =====
const messages = [
    "Em chắc chưa?",
    "Em thực sự chắc chứ??",
    "Em khum đồng ý được à?",
    "Đồng ý đi maàa...",
    "Em suy nghĩ lại đi!",
    "Em mà chọn Không, thì anh rất buồn đấy...",
    "Anh sẽ rất buồn đấy...",
    "Anh sẽ rất rất buồn đấyyyyyy...",
    "Ok fine, anh không hỏi em nữa...",
    "Anh đùa thui, làm ơn chọn Có đi mà, anh năn nỉ! ❤️"
];

let messageIndex = 0;


// ===== XỬ LÝ NÚT KHÔNG =====
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}


// ===== XỬ LÝ NÚT CÓ (QUAN TRỌNG) =====
function handleYesClick() {
    const url = "https://script.google.com/macros/s/AKfycbwyRyZ5A4aqxU_LlW4HstwqjTuFvNQQO50NKdsirKKt4FnTVsAhxJvGPAoMmhbmoyzV1w/exec";

    console.log("Đang gửi dữ liệu...");

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            answer: "co",
            time: new Date().toLocaleString()
        })
    })
    .then(res => {
        console.log("Gửi thành công");
        window.location.href = "yes_page.html";
    })
    .catch(err => {
        console.error("Lỗi gửi:", err);
        // vẫn chuyển trang dù lỗi
        window.location.href = "yes_page.html";
    });
}
