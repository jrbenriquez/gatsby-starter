import React from "react"
import {useSpring, animated } from 'react-spring'
import Layout from '../components/layout'

const BlogPage = ({location}) => {

    const fade = useSpring({from: {opacity: 0}, opacity: 1})
    return (
        <Layout location={location}>
            <animated.div style={fade}>
            <h1>Blog</h1>
            <p>Posts will show up here later on</p>
            </animated.div>
        </Layout>
    )
}

export default BlogPage