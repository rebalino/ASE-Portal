import express, { Request, Response } from "express"
import { users } from "../data/users";

export const userRouter = express.Router();

type UserQueryParams = {
    name?: string,
    isStudent?: 'true' | 'false',
    minAge?: string,
    maxAge?: string,
};

userRouter.get('/', (req: Request<object, unknown, object, UserQueryParams>, res: Response) => {
    const { name, isStudent, minAge, maxAge } = req.query;
    let filteredUsers = users;

    if (name) {
        filteredUsers = filteredUsers.filter(user => user.name.toLowerCase() === name.toLowerCase());
    }
    if (isStudent) {
        filteredUsers = filteredUsers.filter(user => user.isStudent === JSON.parse(isStudent))
    }
    if (minAge) {
        filteredUsers = filteredUsers.filter(user => user.age >= JSON.parse(minAge))
    }
    if (maxAge) {
        filteredUsers = filteredUsers.filter(user => user.age <= JSON.parse(maxAge))
    }

    res.json(filteredUsers);
});

userRouter.get('/:id', (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
    const user = users.find(user => user.id.toString() === id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'No user found with that id' })
    }
});