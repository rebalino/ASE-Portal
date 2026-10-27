import { User } from "../models/user-model";

export const users: User[] = [
    {
        id: 2,
        name: "Peter",
        email: "peter@email.com",
        neptunId: 'aaa111',
        isStudent: true,
        age: 20,
        lastLogin: new Date('2026-10-10'),
        assignments: [
            {
                name: "intro",
                value: 0,
                description: ""
            },
            {
                name: "Task1",
                value: 5,
                description: "Your first task."
            }
        ],
        completedTasks: 0
    },
    {
        id: 3,
        name: "Robert",
        email: "robi@email.com",
        neptunId: 'xxx123',
        isStudent: true,
        age: 19,
        lastLogin: new Date('2026-9-11'),
        assignments: [
            {
                name: "Task2",
                value: 7,
                description: "Your second task."
            }
        ],
        completedTasks: 2
    },
    {
        id: 4,
        name: "Lilla",
        email: "lilla@email.com",
        neptunId: '789bbb',
        isStudent: true,
        age: 21,
        lastLogin: new Date('2026-8-20'),
        assignments: [],
        completedTasks: 3
    },
    {
        id: 1,
        name: "Zoltan",
        email: "zoli@email.com",
        neptunId: '444yyy',
        isStudent: false,
        age: 30,
        lastLogin: new Date('2026-10-15'),
        assignments: [],
        completedTasks: null
    }
];