import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import EnquirForm from './components/EnquirForm.jsx';
import Success from './components/Success.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/EnquireMart/",
//     element: <App/>,
//     children: [
//       {
//         path: "/EnquireMart/",
//         element: <Home/>,
//       },
//       {
//         path: "/EnquireMart/home",
//         element: <Home/>,
//       },
//       {
//         path: "/EnquireMart/product-enquiry",
//         element: <EnquirForm/>,
//       },
//       {
//         path: "/EnquireMart/success",
//         element: <Success/>,
//       },

//     ]
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode basename="/app">
    {/* <RouterProvider router={router} /> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product-enquiry" element={<EnquirForm />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
