import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import { About, SignUp, Donations } from './routes';

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
    ],
  },
  
]);

export default function App() {
  

  return (
    <RouterProvider router={router} />
  )
}
