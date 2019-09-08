import React, {useState} from 'react'
import { animated, useSpring, config } from 'react-spring'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'

const IndexPage = ({location}) => {

    const [scrolling, toggle] = useState(false);

    const animation = useSpring({
        opacity: scrolling ? 1 : 0,
        transform: scrolling ? `translate3d(0,0,0)` : `translate3d(100%,0,0)`,
    })

    return (
        <Layout>
        {/* <div> */}
        <div className={indexStyles.mainContent} >      
            <h1>Hello</h1>
            <h2>I am JR. A full stack web developer.</h2>
            <h2>I work with Python and a couple of JS frameworks</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link> </p>
        </div>
        {/* <animated.div style={animation}>
            <h1>I also Play BASS.</h1>
            <h2>Need a practice routine tool?</h2>
            <p>I have one <Link to="contact">HERE</Link></p>
        </animated.div> */}
        {/* </div> */}
        </Layout>
    )
}

export default IndexPage