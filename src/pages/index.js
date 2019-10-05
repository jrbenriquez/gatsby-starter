import React, {useState} from 'react'
import { animated, useSpring, config } from 'react-spring'
import { Waypoint } from 'react-waypoint'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'

const IndexPage = (props) => {
    const [scrolling, toggle] = useState(false);
    const [headerClicked, setHeaderClicked] = useState(false)
    const {disappear, appear, y, appearingScale} = useSpring({
        disappear: scrolling ? 0 : 1,
        appear: scrolling ? 1 : 0,
        y: scrolling ? 10: 0,
        appearingScale: scrolling? 20 : 50
    })

    const fade = useSpring({
        opacity: headerClicked ? 0 : 1
    })
    return (<div>
        <animated.img src={'img/scrolldown.gif'} className={indexStyles.scroller} style={{
            transform: y.interpolate(y => `translate3d(0,${y*2}%,0)`),
            opacity: disappear.interpolate(disappear => `${disappear}`),
            config: config.molasses
        }}/>
        <Layout location={props.location} headerClicked={headerClicked} setHeaderClicked={setHeaderClicked}>
        <animated.div className={indexStyles.scrollableContent} style={fade}>
        <Waypoint
            // debug={true}
            onLeave={() => {
                toggle(true)
            }}
            onEnter={() => {
                toggle(false)
            }}

            />
        <animated.div className={indexStyles.mainContent} style={
            {
                transform: y.interpolate(y => `translate3d(0,${y*-1}vh,0)`),
                opacity: disappear.interpolate(disappear => `${disappear}`),
                config: config.molasses
            }
        }>      
            <h1>Hello</h1>
            <Waypoint
            // debug={true}
            onLeave={() => {
                toggle(true)
            }}
            onEnter={() => {
                toggle(false)
            }}

            />
            <h2>I am JR. A full stack web developer.</h2>
            <h2>I work with Python and a couple of JS frameworks</h2>
            <Waypoint
            // debug={true}
            onEnter={() => {
                toggle(false)
            }}/>
            <p>Need a developer? <Link to="/contact">Contact Me</Link> </p>
            
        </animated.div>
        <animated.div style={{
                transform: y.interpolate(y => `translate3d(0,${(y)*-3}vh,0)`),
                opacity: appear.interpolate(appear => `${appear}`),
                config: config.molasses
            }}>
            <h1>I also Play BASS.</h1>
            <h2>Need a practice routine tool?</h2>
            <animated.div className={indexStyles.floatRight, indexStyles.clickable} style={{
                right: appearingScale.interpolate(appearingScale => `${appearingScale}`)
            }}>
                <p><Link to="/routine">Go to Bass Shed</Link></p>
            </animated.div>
        </animated.div>
        </animated.div>
        </Layout>
        </div>
    )
}

export default IndexPage