import { Router} from "express";
const router = Router();
import * as author from "./author.controller.js"



router.get('/',author.getAuthors)
router.post('/addAuthor',author.addAuthor)
router.get('/:id',author.getAuthorbyId)
router.put('/:id',author.updateAuthorInfo)
router.delete('/delete/:id',author.deleteAuthor)


export default router