const generateBtn = document.querySelector(".generate-btn");
const downloadBtn = document.querySelector(".downloaded-btn");
const qrCodeContainer = document.querySelector(".qr-code");
const sizeSelect = document.querySelector(".sizes");
const input = document.querySelector(".input-text");

let qr; 

generateBtn.addEventListener("click", (e) => {
    // to prevent from page refresh
    e.preventDefault();
    const text = input.value.trim();
    const size = sizeSelect.value;
    if (!text) {
        alert("Please enter some text or URL!");
        return;
    }

    // to empty previous QRcodes
    qrCodeContainer.innerHTML = "";


    
    qr = new QRCode(qrCodeContainer, {
        text: text,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

// whenever you change the size dynamically
sizeSelect.addEventListener('change', function(e) {
    // the element where the event happened (like an input box)
    size = e.target.value;
    generateBtn.click();
})

downloadBtn.addEventListener("click", () => {
    const img = qrCodeContainer.querySelector("img");
    if (!img) {
        alert("Generate a QR code first!");
        return;
    }

    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qr-code.png";
    link.click();
});
