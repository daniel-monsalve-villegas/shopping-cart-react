import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { FiltersProvider } from './context/filter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);
