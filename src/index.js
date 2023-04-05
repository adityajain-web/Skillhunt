import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<BrowserRouter><App /><ToastContainer /></BrowserRouter>)

