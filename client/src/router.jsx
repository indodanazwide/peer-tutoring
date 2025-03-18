import { createBrowserRouter } from 'react-router-dom'
import Guest from './Guest.jsx'
import Admin from './auth/Admin.jsx'
import User from './auth/User.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Guest />,
        children: [
            {
                path: '',
                element: <Home />
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/:user',
        element: <User />
    }
])

export default router