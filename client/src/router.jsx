import { createBrowserRouter } from 'react-router-dom'
import Guest from './Guest.jsx'
import Admin from './auth/Admin.jsx'
import User from './auth/User.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Guest />
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