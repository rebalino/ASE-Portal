import { ServerApi, ServerApiHelloWorld } from "api";

export class ServerApiClient implements ServerApi{
    async helloWorld(): Promise<string> {
        const response = await fetch(ServerApiHelloWorld);

        if(!response.ok){
            throw new Error('error');
        }

        return response.text();
    }

}