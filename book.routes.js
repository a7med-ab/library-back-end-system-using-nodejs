import { Router} from "express";
const router = Router();
import * as book from "./book.controller.js"

router.get('/',book.getbooks)
router.post('/addBOOK',book.addBook)
router.get('/:id',book.getBook)
router.put('/:id',book.updateBook)
router.delete('/delete/:id',book.deleteBook)


export default router