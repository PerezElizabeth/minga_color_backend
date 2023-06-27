import { Router} from "express"
import read from '../controllers/users/read.js'

const auth_router = Router()

auth_router.get('/',read)   //GET: para leer (TODOS o SOLO UNO) autores


export default auth_router