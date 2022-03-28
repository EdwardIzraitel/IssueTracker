import React from 'react';
import {Route} from 'react-router-dom'
//TODO
/*
1- - 

*/
const ProtectedRoute = ({component: Component, ...rest}) =>{
    return(
        <Route
            {...rest}
            render={props} =>{
                if()

            }
        />
    )
}