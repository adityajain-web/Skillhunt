import { Home, Login, Register } from "../pages/pages";

const path = [
    { path: '/', element: <Home /> },
    { path: '/auth/login', element: <Login /> },
    { path: '/auth/register', element: <Register /> },
]

export default path