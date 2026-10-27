export type User = {
    id: number,
    name: string,
    email: string,
    neptunId: string,
    isStudent: boolean,
    age: number,
    lastLogin: Date,
    assignments: {
        name: string,
        value: number,
        description: string
    }[],
    completedTasks: number | null
};