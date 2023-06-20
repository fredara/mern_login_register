import React from 'react'
import { Redirect, Route } from "react-router-dom"

import useAuth from '../../auth/useAuth';


const PrivateRouter = ({hasRole: typeProfile, ...rest}) => {
    //const user = null;

    const { user } = useAuth();

    //if(user?.typeProfile !== typeProfile) return <Redirect to="/login" />
    //si no es el rol en la pantalla que no debe entrar

    if(!user) return <Redirect to="/login" />

    return (
        <div>
            <Route {...rest}/>
        </div>
    )
}

export default PrivateRouter
