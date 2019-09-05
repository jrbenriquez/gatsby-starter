import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>I love making cool stuff with Python and JS</p>
            <p>Yes, nothing much to see here... yet</p>
            <Link to="/contact">Contact Me</Link>
        </Layout>
    )
}

export default AboutPage