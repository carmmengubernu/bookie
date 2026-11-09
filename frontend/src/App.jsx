import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import CarmenDevPage from './dev-pages/CarmenDevPage';

function Home() {
  return <h1>Home</h1>;
}

function Layout() {
  return (
    <>
      <nav className='flex gap-4 p-4'>
        <Link to='/'>Home</Link>
        {import.meta.env.DEV && (
          <Link to='/carmen-components'>Carmen Components</Link>
        )}
      </nav>
      <Outlet />
    </>
  );
}

const children = [{ index: true, element: <Home /> }];

if (import.meta.env.DEV) {
  children.push({ path: 'carmen-components', element: <CarmenDevPage /> });
}

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
