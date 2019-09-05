import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import '../styles/index.scss'
import LayoutStyles from './layout.module.scss'
import { Helmet } from "react-helmet"

const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>John Rei Enriquez</title>
                <link rel="canonical" href="http://jrbenriquez.com" />
            </Helmet>
            <div className={LayoutStyles.content}>
            <Header />
            {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout