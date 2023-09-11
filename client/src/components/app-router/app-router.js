import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Context } from "../..";
import { privateRoutes, publicRoutes } from "../../routes";

function AppRouter() {
  const {user} = useContext(Context);
  console.log(user);

  return (
    <Routes>
      {publicRoutes.map(route =>
        <Route element={route.element} path={route.path}></Route>
      )}
      {user.isAuth ? <>
        {privateRoutes.map(route =>
          <Route element={route.element} path={route.path}></Route>
        )}
        <Route path="*" element={<Navigate to="/shop" />}></Route>
      </>
      : <Route path="*" element={<Navigate to="/auth" />}></Route>
      }
    </Routes>
)};

export default AppRouter;
