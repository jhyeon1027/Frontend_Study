import './App.css'
import {Home} from './page/Home.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginForm from "./page/LoginForm.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/login',
        element: <LoginForm/>,
    }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
