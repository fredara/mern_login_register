import React from 'react'
import { Redirect, Route } from "react-router-dom"

//import useAuth from '../../auth/useAuth';


const PublicRouter = (props) => {

    //const { user } = useAuth();
    
    /*if(user){
        if(user.typeProfile==='corredor') return <Redirect to="/profile-corredor" />
        if(user.typeProfile==='desarrollador') return <Redirect to="/profile" /> 
    }*/

    return (
        <div>
            <Route {...props}/>
        </div>
    )
}

export default PublicRouter
