//Configurando servidor para rodar na porta 3333,recuperando request parametro ID 
import cors from "cors"
import  express  from "express"

const app = express()

app.use(cors())

app.get('/summary/:id', (request, response) =>{
    response.send("ID do vídeo:"+ request.params.id)
})

app.listen(3333, () => console.log ("server is running on port 3333"))
//
