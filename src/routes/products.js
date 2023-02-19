import {Router} from "express";
import { methods as productController} from "./../controllers/product_controller"


const router = Router();

router.get("/", productController.getProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);



export default router;