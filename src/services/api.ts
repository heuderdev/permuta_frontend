import axios from "axios";
import { getUserLocalStorang } from "../Context/AuthProvider/utils";


export const Api = axios.create({
    baseURL: 'http://localhost:3300/v1'
})

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorang()
        config.headers.Authorization =   `Bearer ${user?.token}`  
        //   console.log(config ,'config');
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export function register() {
    try {
        const response = Api.post('/register')
        return response
    } catch (error) {
        return alert(error)
    }
}

export async function UpdatePerfilUser(id: string){
    const response = await Api.patch(`/profiles ${id}`)
    return response
}


export async function UserProfileList(){
    const response = await Api.get('/profiles')
    return response
}


export async function AddPermissionuser(user_id: string, permission_id: string){
    const response = await Api.post('/permissions-users',{ 
        user_id,
        permission_id
    }
)
    return response
}



export async function GetPermission(){
    const response = await Api.get('/permissions')
    return response.data

}

export async function PullPerfil(id:string, data:any) {
    try {
        axios.patch(`/profiles/${id}`, data)
    
      } catch (error) {

        console.error('Erro ao atualizar dados na API:', error);
      }
}



//lst all imoveis


export async function SelectImoveis() {
    try {
       const {data} = await Api.get('/intend')
       console.log(data,'data');
       
       return data
      } catch (error) {
        console.error('Error no carregamento dos imveis:', error);
      }
}
