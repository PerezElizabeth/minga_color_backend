import { Router} from "express"
import read from '../controllers/chapters/read.js'

const chapter_router = Router()

//chapter_router.post()   //POST: para crear un autor
chapter_router.get('/',read)    //GET: para leer (TODOS o SOLO UNO) autores
//chapter_router.put()    //PUT: para actualizar un autor
//chapter_router.delete() //DELETE: para eliminar un autor

export default chapter_router