import {server} from "./server.js"


const form = document.querySelector('#form')
const input = document.querySelector('#url')
const content = document.querySelector("#content")

form.addEventListener("submit", async (event)=> {

    event.preventDefault()

    const videoURl = input.value
//Tratamento para pegar ID do vídeo
if(!videoURl.includes("shorts")){

 return content.textContent ="Esse vídeo não parece ser um short."
}

const [_,parms] = videoURl.split("/shorts/")
const [videoID] = parms.split("?si")
console.log(parms)

content.textContent = "Obtendo o texto do áudio..."

 const transcription = await server.get ("/summary/"+ videoID)

content.textContent = transcription.data.result

})