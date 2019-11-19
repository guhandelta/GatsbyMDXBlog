import React from "react"
import Layout from '../components/layout'
import {Link} from 'gatsby'

export default () => {

    return(
        <Layout>
            
            <div className="">
                <Link to='/post/'>Welcome to the Blog</Link>
            </div>

        </Layout>
    );

}
