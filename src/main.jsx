import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home.jsx'
import EnquirForm from './components/EnquirForm.jsx';
import Success from './components/Success.jsx';

const router = createBrowserRouter([
  {
    path: "/EnquireMart/",
    element: <App/>,
    children: [
      {
        path: "/EnquireMart/",
        element: <Home/>,
      },
      {
        path: "/EnquireMart/home",
        element: <Home/>,
      },
      {
        path: "/EnquireMart/product-enquiry",
        element: <EnquirForm/>,
      },
      {
        path: "/EnquireMart/success",
        element: <Success/>,
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
