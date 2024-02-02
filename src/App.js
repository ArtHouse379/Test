import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Product from "./components/Product";
import { ProductProvider } from "./context/ProductContext";

const router = createBrowserRouter([
  {
    path: '/',
    element:(
      <ProductProvider>
        <Layout/>
      </ProductProvider>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]

  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
