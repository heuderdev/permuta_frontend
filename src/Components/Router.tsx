

import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Screen/Dashboard";
import { Login } from "../Screen/Login";
import { CreateUser } from "../Screen/CreateUser";

export function Router() {
    return (
        <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/creatuser" element={<CreateUser />} />
                <Route path="/" element={<Dashboard />} />
        </Routes>
    )
}