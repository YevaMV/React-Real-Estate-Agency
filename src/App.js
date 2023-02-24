import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Buy from './pages/Buy';
import Home from './pages/Home';
import Rent from './pages/Rent';
import About from './pages/About';
import Contact from './pages/Contact';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/buy', element: <Buy /> },
      { path: '/rent', element: <Rent /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
