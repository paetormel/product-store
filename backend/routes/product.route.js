import express from 'express';
import { deleteProduct, getProduct, postProduct, putProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.put('/:id', putProduct);
router.get("/", getProduct);
router.post("/", postProduct);
router.delete('/:id', deleteProduct);

export default router;