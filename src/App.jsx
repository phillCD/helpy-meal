import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import { About, SignUp, Donations } from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp/>
  },
  {
    path: "/home",
    element: <NavBar />,
    children: [
      {
        path: "/home/about",
        element: <About />
      },
      {
        path: '/home/donations',
        element: <Donations />
      },
    ],
  },
  
]);

export default function App() {
  

  return (
    <RouterProvider router={router} />
  )
}
