import { Router } from "express";
import read from '../controllers/mangas/read.js'

const manga_router = Router()

//manga_router.post()   //POST: para crear un autor
manga_router.get('/',read)    //GET: para leer (TODOS o SOLO UNO) autores
//manga_router.put()    //PUT: para actualizar un autor
//manga_router.delete() //DELETE: para eliminar un autor

export default manga_router