import { Router } from "express";
import {
  createPhone,
  getPhone,
  getOnePhone,
  updatePhone,
  deletePhone,
  getPhoneByUser
} from "../controllers/phone.controller";

const router = Router();

router.post("/", createPhone);
router.get("/", getPhone);
router.get("/:idPhone", getOnePhone);
router.put("/:idPhone", updatePhone);
router.delete("/:idPhone", deletePhone);
router.get("/usuario/:idUser", getPhoneByUser);

export default router;
