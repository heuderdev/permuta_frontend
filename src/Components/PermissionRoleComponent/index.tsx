import React, { useEffect, useState } from "react";
import {Api} from "../../services/api";


interface PermissionComponentProps {
    role?: string;
    children: React.ReactNode
}


export const PermissionComponent: React.FC<PermissionComponentProps> = ({ role, children }) => {
    const [permissions, setPermissions] = useState([] as string[]);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadRoles() {
            const response = await Api.post("/verify-token").finally(() => { setLoading(false) })
            const findRole = response.data?.role?.some((r: any) => role?.split(",").includes(r.slug))
            setPermissions(findRole);
        }

        loadRoles();
    }, [])

    if(loading) <><h3>loading...</h3></>

    return <>{permissions && children}</>;
}

