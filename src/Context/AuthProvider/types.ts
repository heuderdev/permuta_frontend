export interface IUser{
    email: string
    token: string
}

export interface SessionProps{
    email: string
    password: string
}


export interface IContext extends IUser{
    authenticate: (email: string, password: string) => Promise<void>
    logout: () => void

}

export interface IAuthProvider {
    children: JSX.Element
}