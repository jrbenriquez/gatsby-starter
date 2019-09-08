import React from "react"
import {useSpring, animated } from 'react-spring'
import { Link } from "gatsby"

import Layout from '../components/layout'

const AboutPage = ({location}) => {
    const fade = useSpring({from: {opacity: 0}, opacity: 1})
    return (
        <Layout location={location}>
            <animated.div style={fade}>
            <h1>About Me</h1>
            <p>I love making cool stuff with Python and JS</p>
            <p>Yes, nothing much to see here... yet</p>
            <Link to="/contact">Contact Me</Link>
            </animated.div>
        </Layout>
    )
}

export default AboutPage