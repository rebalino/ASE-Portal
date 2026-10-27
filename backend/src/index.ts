import express from "express";
import { ServerApi, ServerApiHelloWorld, ServerApiUsers } from "api";
import { userRouter } from "./routes/user-routes";

class ServerApiImpl implements ServerApi{
    async helloWorld(): Promise<string> {
        return "hello world";
    }
}

const PORT = parseInt(process.env['PORT'] ?? '3000', 10);

class BackendServer {
    constructor(readonly serverApi: ServerApi, readonly port: number) {

    }

    start() {
        const app = express();

        // Add the JSON parsing middleware to the application to parse JSON request bodies.
        app.use(express.json());

        app.use(ServerApiUsers, userRouter);

        app.get(ServerApiHelloWorld, async(req, res) => {
            res.send(await this.serverApi.helloWorld());
        });

        app.use((req, res) => {
            res.status(404).json({
                message: 'Page not found'
            })
        });

        app.listen(this.port);
    }
}

const serverapi = new ServerApiImpl();
const server = new BackendServer(serverapi , PORT);
server.start();