let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generateQR(){
    if(qrText.value.length > 0){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    imgBox.classList.add("show-img");
    }else{
        alert('Please enter text or URL before generating QR code');
        qrText.classList.add('error');
        setTimeout(() => {
            
        }, 1000);
    }
 } 