
import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";
import { Dashboard } from "../Screen/Dashboard";
import { Login } from "../Screen/Login";
import { CreateUser } from "../Screen/CreateUser";
import { PrivateRoute } from "./privateRouter";
import { PerfilUser } from "../Screen/PerfilUser";
import { PermissionCreate } from "../Screen/FormPermissionCreate";
import { AtribuiPermission } from "../Screen/FormAtribPermission";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={<PrivateRoute redirectTO="/" >
            <Dashboard />
          </PrivateRoute>}
        />
        < Route
          path="/"
          element={<Login />}
        />
        {/*  criar novo usuario para logar no sistema rota */}
        <Route
          path="/creatuser"
          element={<CreateUser />}
        />
        <Route
          path="/perfil"
          element={<PerfilUser />}
        />
{/* 
        <Route
          path="/edit/:id"
          element={<PerfilUser />}
        /> */}

      
        <Route
          path="/createPermission"
          element={<PermissionCreate />}
        />
        <Route
          path="/AtribPermission"
          element={<AtribuiPermission />}
        />
      </Routes>
    </BrowserRouter>
  )
}