import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pokemon',
    element: <Pokemon />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
