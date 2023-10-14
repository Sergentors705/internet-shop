import Admin from './pages/admin/admin';
import Auth from './pages/auth/auth';
import Basket from './pages/basket/basket';
import DevicePage from './pages/device-page/device-page';
import Shop from './pages/shop/shop';

export const privateRoutes = [
  {path: '/', element: <Shop />},
  {path: '/basket', element: <Basket />},
  {path: '/admin', element: <Admin />},
]

export const publicRoutes = [
  {path: '/', element: <Auth />},
  {path: '/auth', element: <Auth />},
  {path: '/registration', element: <Auth />},
  {path: '/shop', element: <Shop />},
  {path: '/device/:id', element: <DevicePage />},
]
