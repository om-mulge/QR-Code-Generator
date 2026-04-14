// get elements
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let downloadLink = document.getElementById("downloadLink");

// function for generation QR code
function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

        imgBox.classList.add("show-img");

        downloadLink.href = qrImage.src;
        downloadLink.style.display = "block";
    } else {
        qrText.classList.add("error");

        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);

        downloadLink.style.display = "none";
    }
}

// ✅ KEEP THIS OUTSIDE
function openPortfolio() {
    window.open("https://ommulge-omega.vercel.app/", "_blank");
}