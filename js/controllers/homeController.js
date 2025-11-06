import { Paragraph } from "../views/atoms/index.js"
import { Layout } from "./layoutController.js"

export const HomePage = async () => {
    const title = "Velkommen"
    const p = Paragraph()
    p.innerText = "Velkommen til Sgt. Prepper webshop"
    return await Layout(title, p)
}

// export function renderHome() {
//   const header = document.createElement("header");
  
//   const logo = document.createElement("img");
//   logo.src = logoImg;
//   logo.alt = "Webshop logo";

//   header.appendChild(logo);
//   document.body.prepend(header);
// }