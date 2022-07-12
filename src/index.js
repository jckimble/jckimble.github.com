import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import QRCode from 'qrcode'

require("./style.scss")

const vcfToData=(text)=>{
    return "data:text/vcard;base64,"+btoa(text)
}

const generateVCF=(vcfData)=>{
    let content={
        "BEGIN":"VCARD",
        "VERSION":"2.1",
        "N":[vcfData.familyName,vcfData.givenName,vcfData.middleName,vcfData.prefixName,vcfData.suffixName].join(";"),
        "FN":vcfData.name,
        "TEL;WORK":vcfData.phone,
        "EMAIL;WORK":vcfData.email,
        "TITLE":vcfData.title,
        "URL":vcfData.url,
        "NOTE":vcfData.description,
        "PHOTO;JPEG":vcfData.photo,
        "END":"VCARD"
    }
    return Object.entries(content).map(([k,v])=>k+":"+v).join("\n")
}

const generateJSONLD=(data)=>{
    const jsonld={
        "@context": "https://schema.org",
        "@type": "Organization",
		"url": data.url,
	    "name": data.name,
		"logo": data.photo,
		"image": data.photo,
        "email": data.email,
        "telephone": data.phone,
        "jobTitle": data.title,
        "address":{
            "addressCountry": "USA",
            "postalCode": "39601",
            "addressRegion": "MS",
            "addressLocality": "Brookhaven",
        },
		"contactPoint": {
		    "@type": "ContactPoint",
		    "email": data.email,
            "telephone": data.phone
		},
		"description": data.description,
		"sameAs": [
		    data.github,
		    data.codepen,
		    data.linkedin,
			data.twitter
		]
    }
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(jsonld);
    document.head.appendChild(script);    
}
    
const getVCardData=()=>{
    let data={}
    const vcardData=document.querySelectorAll('[data-vcard]');
    vcardData.forEach((item)=>{
        let name=item.getAttribute("data-vcard")
        switch(item.tagName){
            case "A":
                let href=item.getAttribute("href")
                if(href.startsWith("mailto:") || href.startsWith("tel:")){
                    data[name]=href.substring(href.indexOf(':') + 1)
                    return
                }
                data[name]=href
                break;
            case "IMG":
                data[name]=item.getAttribute("src")
                break;
            default:
                data[name]=item.textContent
        }
    })
    return data
}
const vCardData=getVCardData()
generateJSONLD(vCardData)
const vcfData=generateVCF(vCardData)
document.querySelector("#vcf").setAttribute("href",vcfToData(vcfData))
QRCode.toCanvas(document.querySelector("#qrcode canvas"),vcfData,{
    version:"Auto",
    errorCorrectionLevel:"Medium",
    margin:4,
    color:{
        light:"#FFF",
        dark:"#000",
    },
    toSJISFunc: QRCode.toSJIS
})
