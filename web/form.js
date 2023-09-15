import {server} from "./server.js"


const form = document.querySelector('#form')
const input = document.querySelector('#url')
const content = document.querySelector("#content")

form.addEventListener("submit", async (event)=> {

    event.preventDefault()
    content.classList.add("placeholder")

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

content.textContent = "Realizando o resumo..."

const summary = await server.post("/summary",
{
    text: transcription.data.result,
})

    content.textContent = summary.data.result
    content.classList.remove("placeholder")
})