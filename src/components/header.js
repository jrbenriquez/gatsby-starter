import React, { useState } from "react"
import { animated, useSpring, config } from 'react-spring'
import { Link } from "gatsby"
// import "./header.module.scss"

import headerStyles from './header.module.scss'

const Header = () => {

    const [aboutClicked, aboutToggle ] = useState(false);

    const aboutFade = useSpring({
        transform: aboutClicked ? 'scale(2.5)' : 'scale(1)'
    })

    return (
        <header className={headerStyles.header}>
            <h1><Link className={headerStyles.title} to='/'>JOHN REI ENRIQUEZ </Link></h1>
            <nav>
            <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></li>
                {/* <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li> */}
                <animated.li style={aboutFade}><Link onClick={() => aboutToggle(true)} className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Me</Link></animated.li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></li>
            </ul>
            </nav>

        </header>
    )
}

export default Header