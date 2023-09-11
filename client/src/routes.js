import Admin from "./pages/admin";
import Auth from "./pages/auth";
import Basket from "./pages/basket";
import DevicePage from "./pages/device-page";
import Shop from "./pages/shop";

export const privateRoutes = [
  {path: "/", element: <Shop />},
  {path: "/basket", element: <Basket />},
  {path: "/admin", element: <Admin />},
]

export const publicRoutes = [
  {path: "/", element: <Auth />},
  {path: "/auth", element: <Auth />},
  {path: "/shop", element: <Shop />},
  {path: "/device/:id", element: <DevicePage />},
]
