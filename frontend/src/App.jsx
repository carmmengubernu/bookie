import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import CarmenDevPage from './dev-pages/CarmenDevPage';
import DianaDevPage from './dev-pages/DianaDevPage';
import Home from './Pages/Home/Home';
import AppHeader from './components/AppHeader/AppHeader';
import Aside from './components/Aside/Aside';
import MyProfile from './Pages/MyProfile/MyProfile';

function Layout() {
  return (
    <>
      <Aside />
      <div className='w-full bg-canvas'>
        <AppHeader />
        <main className='flex-1   p-10  md:min-h-dvh max-w-section '>
          <Outlet />
        </main>
      </div>
    </>
  );
}

const children = [
  { index: true, element: <Home /> },
  { path: '/my-profile', element: <MyProfile /> },
];

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
