import React, { useState } from "react"
import {useSpring, animated } from 'react-spring'
import { Link } from "gatsby"
import Layout from '../components/layout'

const ContactPage = (props) => {
    const [headerClicked, setHeaderClicked] = useState(false)
    const fade = useSpring({from: {opacity: 0}, opacity: 1})

    return (
        <Layout location={props.location} headerClicked={headerClicked} setHeaderClicked={setHeaderClicked}>
            <animated.div style={fade}>
            <h1>Contact Me</h1>
            <p>johnrei.enriquez@gmail.com</p>
            <a href="https://twitter.com/johnreienriquez" target="_blank">Twitter</a>
            </animated.div>
        </Layout>
    )
}

export default ContactPage