export interface ServerApi {
    helloWorld(): Promise<string>,
}

export const ServerApiHelloWorld = '/api/hello';