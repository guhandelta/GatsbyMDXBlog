// Wrapper layout component
import React from 'react'
import './layout.css'

const Layout = ({children}) => { // since this component will be wrapping over other components, the child props of thee component are-
    //- referred here as `children`, to display that particular component
    return (
        <>
            <main>{children}</main>   
        </>
    )
}
export default Layout