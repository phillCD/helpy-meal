import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import { About, SignUp, Donations, Dashboard } from './routes';
import Institution from './routes/Institutions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp/>
  },
  {
    element: <NavBar />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: '/donations',
        element: <Donations />
      },
      {
        path: '/institutions',
        element: <Institution />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ],
  },
  
]);

export default function App() {
  

  return (
    <RouterProvider router={router} />
  )
}
