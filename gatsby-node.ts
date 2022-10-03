import path from "path"
import vCardsJS from "vcards-js"
import axios from "axios"
import qrcode from "qrcode"
import fs from "fs"
import Jimp from "jimp"
import { IconIco } from "@shockpkg/icon-encoder"

export const onPostBuild = async ({ reporter }) => {
  const vcf = path.join(__dirname, "public", "jckimble.vcf")
  const qr = path.join(__dirname, "public", "qr-code.svg")
  const ico = path.join(__dirname, "public", "favicon.ico")
  const vCard = vCardsJS()
  vCard.firstName = "James"
  vCard.middleName = "C"
  vCard.lastName = "Kimble"
  vCard.title = "Software Consultant"
  vCard.email = "me@jckimble.com"
  vCard.workPhone = "+16017484093"
  vCard.url = "https://jckimble.com"
  vCard.source = "https://jckimble.com/jckimble.vcf"
  vCard.socialUrls["linkedIn"] =
    "https://www.linkedin.com/in/james-kimble-865092212/"
  vCard.socialUrls["twitter"] = "https://twitter.com/jckimble601"
  vCard.socialUrls["github"] = "https://github.com/jckimble"

  await new Promise<void>((resolve, reject) => {
    qrcode.toFile(
      qr,
      vCard.getFormattedString(),
      {
        errorCorrectionLevel: "Q",
        type: "svg",
        width: 400,
        color: {
          light: "FFF",
          dark: "000",
        },
      },
      function (err, data) {
        if (err) {
          reject(err.message)
          return
        }
        resolve()
      }
    )
  })

  let image = await axios.get(
    "https://0.gravatar.com/avatar/43799da335050c4cebcc859ef15dd939?s=150",
    { responseType: "arraybuffer" }
  )
  let imageBase64 = Buffer.from(image.data).toString("base64")
  vCard.photo.embedFromString(imageBase64, "image/jpeg")
  vCard.saveToFile(vcf)

  let img = await Jimp.read(
    "https://0.gravatar.com/avatar/43799da335050c4cebcc859ef15dd939?s=16"
  )
  img.resize(16, 16)
  let data = await img.getBufferAsync(Jimp.MIME_PNG)
  const favico = new IconIco()
  favico.addFromPng(data)
  fs.writeFileSync(ico, favico.encode())
  reporter.success("jckimble.vcf, favicon.ico and qr-code.svg generated")
}
