import ytdl from "ytdl-core";
import fs from "fs";
import { error } from "console";

export const download = (videoID) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoID;

  console.log("Realizando Download do vídeo " + videoID);

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" }).on(
    "info",
    (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000;
      console.log(seconds);
      if (seconds > 60) {
        throw new Error("A duração desse vídeo é maior que 60 segundos!");
      }
    }
  )
  .on ("end", () => {
    console.log("Download do vídeo finalizado.")
  })
  .on("error",(error)=>{
    console.log("Não foi possível fazer o download do vídeo.Detalhes do erro:",error)
  
}).pipe(fs.createWriteStream('./tmp/audio.mp4'))
}
