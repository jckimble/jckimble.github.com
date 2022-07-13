import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import QRCode from 'qrcode'
import vCard from 'meta-data-vcard';

require("./style.scss")

const vcard=new vCard();
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0){
            let data=vcard.String({
                embedImgs:false
            })
            QRCode.toCanvas(document.querySelector("#qrcode canvas"),data,{
                version:"Auto",
                errorCorrectionLevel:"Medium",
                margin:4,
                color:{
                    light:"#FFF",
                    dark:"#000",
                },
                toSJISFunc: QRCode.toSJIS
            })
        }
    });
});
window.downloadVcf=()=>{
    var link = document.createElement("a");
    link.setAttribute("download","jckimble.vcf")
    link.setAttribute("href",vcard.toDataURL({embedImgs:true}))
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
observer.observe(document.querySelector("#qrcode"));