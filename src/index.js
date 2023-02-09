import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const rend = createRoot(container); // createRoot(container!) if you use TypeScript
rend.render(<App />);