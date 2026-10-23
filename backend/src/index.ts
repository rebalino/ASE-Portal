import express from "express";
import { ServerApi, ServerApiHelloWorld } from "api";

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
        app.use(express.json({ limit: '50mb' }));

        app.post('/ping', (req, res) => {
            const data = req.body as unknown;
            res.json({
                success: true,
                request: data,
            });
        });

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