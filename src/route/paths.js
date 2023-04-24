import { Home, Login, Register, ResetVerification, SeekerDashboard } from "../pages/pages";

const path = [
    { path: '/', element: <Home /> },
    { path: '/auth/login/', element: <Login /> },
    { path: '/auth/register/', element: <Register /> },
    { path: '/auth/reset-verification/', element: <ResetVerification /> },
    { path: '/seeker/dashboard/', element: <SeekerDashboard /> },
]

export default path