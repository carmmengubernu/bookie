import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import CarmenDevPage from './dev-pages/CarmenDevPage';
import DianaDevPage from './dev-pages/DianaDevPage';
import Home from './Pages/Home/Home';
import Aside from './components/Aside/Aside';

function Layout() {
  return (
    <>
      <Aside />
      <main className='flex-1 p-10 bg-canvas md:min-h-dvh'>
        <Outlet />
      </main>
    </>
  );
}

const children = [{ index: true, element: <Home /> }];

if (import.meta.env.DEV) {
  children.push({ path: 'carmen-components', element: <CarmenDevPage /> });
}
if (import.meta.env.DEV) {
  children.push({ path: 'diana-components', element: <DianaDevPage /> });
}

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
