import React, { useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import { Waypoint } from 'react-waypoint'
import '../styles/index.scss'
import LayoutStyles from './layout.module.scss'
import { Helmet } from "react-helmet"
import {useSpring, animated} from 'react-spring'

const Layout = ({location, children}) => {

    const slide = useSpring({
        from: {transform: `translate3d(100%,0,0)`},
        transform: `translate3d(0,0,0)`})

    return (
        <div className={LayoutStyles.container}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>John Rei Enriquez</title>
                <link rel="canonical" href="http://jrbenriquez.com" />
            </Helmet>
            <Header />
            <animated.div className={LayoutStyles.content} style={slide}>
                    {children}
            </animated.div>
            <Footer />
        </div>
    )
}

export default Layout