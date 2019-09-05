import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello</h1>
        <h2>I am JR. A full stack developer.</h2>
        <h2>I work with Python and a couple of JS frameworks</h2>
        <p>Need a developer? <Link to="/contact">Contact Me</Link> </p>
        </Layout>
    )
}

export default IndexPage