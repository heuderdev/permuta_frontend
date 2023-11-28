

import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider/auth';
import {useEffect, useState} from  'react'
import { Api } from '../services/api';
//@ts-ignore


interface RouterPropsData extends RouterProps {
     role?: string
     children: any
     redirectTO: any

}


export const PrivateRoute = ({ children, redirectTO, role, ...rest }: RouterPropsData) => {
     const [permission, setPermission] = useState([] as string[])

     // usuario logado com permissao

     useEffect(() => {
          async function loadRolers(){
               const response = await Api.post("/verify-token")
               const findRole = response.data?.role?.some((r: any) => role?.split(",").includes(r.slug))
               setPermission(findRole)
          }
          loadRolers()
     },[])
     const auth = useAuth()

     if (auth.token !== null) {
          return auth.token ? children : <Navigate to={redirectTO} {...rest} />
     }


     if (!role && auth.token) {
          return <Route {...rest}/>
     }
}
