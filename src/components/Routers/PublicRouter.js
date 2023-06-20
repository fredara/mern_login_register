import React from 'react'
import { redirect, Route } from "react-router-dom"
import useAuth from '../../auth/useAuth';


const PublicRouter = (props) => {
    console.log(props);
    //const user = null;

    const { user } = useAuth();
    
    if(user){
        return redirect("/home");
    }
    

    return <Route {...props}/>
}

export default PublicRouter
