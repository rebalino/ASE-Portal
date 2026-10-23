import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ErrorBoundary from "./ErrorBoundary";
import App from "./App";

const root = document.getElementById('root');
if (!root) {
    throw new Error("root element not found");
}

const appErrorFallback = (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '36rem', margin: '0 auto', color: '#1f1f1f' }}>
        <h1 style={{ fontSize: '1.4rem' }}>Something went wrong</h1>
        <p>The app hit an unexpected error. Reloading the page usually fixes it.</p>
        <button
            type="button"
            onClick={() => { window.location.reload(); }}
            style={{ padding: '0.5rem 1rem', fontSize: '0.95rem', cursor: 'pointer', border: 'none', borderRadius: 4, background: '#c00000', color: '#fff' }}
        >
            Reload page
        </button>
    </div>
);

createRoot(root).render(
    <StrictMode>
        <ErrorBoundary label="app" fallback={appErrorFallback}>
            <App />
        </ErrorBoundary>
    </StrictMode>
);

