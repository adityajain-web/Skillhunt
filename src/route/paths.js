import { Home, Login, Register, ResetVerification } from "../pages/pages";

const path = [
    { path: '/', element: <Home /> },
    { path: '/auth/login/', element: <Login /> },
    { path: '/auth/register/', element: <Register /> },
    { path: '/auth/reset-verification/', element: <ResetVerification /> },
]

export default path