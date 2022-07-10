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
        "N":[vcfData.familyName,vcfData.givenName,"","",""],
        "FN":vcfData.name,
        "TEL;WORK":vcfData.phone,
        "EMAIL;WORK":vcfData.email,
        "TITLE":vcfData.title,
        "URL":vcfData.url,
        "NOTE":vcfData.description,
        "PHOTO;JPEG":vcfData.photo,
        "END":"VCARD"
    }
    return Object.entries(content).map(([k,v])=>{
                if(typeof v === 'string'){
                    return k+":"+v
                }else{
                    return k+":"+v.join(";")
                }
            }).join("\n")
}

const generateJSONLD=(data)=>{
    const jsonld={
        "@context": "https://schema.org",
        "@type": "Person",
		"url": data.url,
	    "name": data.name,
        "givenName":data.givenName,
        "familyName":data.familyName,
		"image": data.photo,
        "email": data.email,
        "telephone": data.phone,
        "jobTitle": data.title,
		"contactPoint": [
		    {
			    "@type": "ContactPoint",
			    "email": data.email,
                "telephone": data.phone
			}
		],
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
    
//data.givenName,data.familyName,data.phone,data.email
const getVCardData=()=>{
    let data={}
    const vcardData=document.querySelectorAll('[data-vcard]');
    vcardData.forEach((item)=>{
        let name=item.getAttribute("data-vcard")
        switch(item.tagName){
            case "A":
                if(name!="email" && name!="phone"){
                    data[name]=item.getAttribute("href")
                }else{
                    let str=item.getAttribute("href")
                    data[name]=str.substring(str.indexOf(':') + 1)
                }
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
