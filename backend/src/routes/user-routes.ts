import express from "express"
import { getUserById, getUsers } from "../controllers/user-controller";

export const userRouter = express.Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUserById);