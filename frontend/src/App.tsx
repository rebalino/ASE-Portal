import { useEffect, useState } from "react";
import { ServerApiClient } from "./Client";

const client = new ServerApiClient();

export default function App(): React.JSX.Element {
    const [text, setText] = useState('');

    useEffect(() => {
        client.helloWorld()
            .then(setText)
            .catch(console.error)
    }, []);

    return (
        <div>{text}</div>
    )
}