import express from "express";
import { UserDetails, deleteUser, getAllUsers, postAllUsers, specialFunc, updateUser, } from "../controllers/user.js";

const router = express.Router();



router.get("/all", getAllUsers);

router.post("/new", postAllUsers);

router.get("/userid/special", specialFunc);

router
    .route("/userid/:id")
    .get(UserDetails)
    .put(updateUser)
    .delete(deleteUser);
    
export default router;