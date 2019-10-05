import React, { useState } from "react"
import {useSpring, useTransition, animated } from 'react-spring'

import routineStyles from "./routine.module.scss"
import StartMenu from "../components/routine/StartMenu"
import CountdownTimer from "../components/routine/CountdownTimer"
import Layout from '../components/layout'
import {OneHourBassPractice} from '../routines/flow'

import {startTransitions} from '../springs/routine'

const MainDiv = (props) => {
    const {slideToSide, started, opacity, setStart, mode} = props
    const greetingVisible = !started
    const readyToStart = useTransition(greetingVisible, null, startTransitions)
    return (
        <div className={routineStyles.routineWrapper}>

            {readyToStart.map(
                ({ item, key, props }) => 
                item ? (
                    <StartMenu
                    props={started}
                    slideToSide={slideToSide}
                    opacity={opacity}
                    setStart={setStart} 
                    />
                ) : (
                    <CountdownTimer
                    started={started}
                    slideToSide={slideToSide}
                    opacity={opacity}
                    mode={mode} />
                )
            )}
        </div>
    )
}

function RoutinePage(myProps) {
    const [headerClicked, setHeaderClicked] = useState(false)
    const [started, setStart] = useState(false);
    const [currentMode, setMode] = useState('WARMUP');
    const [routines, setRoutine] = useState([{
        routine: 'WARMUP',
        key: 0
    }]);
    const {slideToSide, opacity} = useSpring({
        slideToSide: started ? 50 : 0,
        opacity: started ? 0 : 1
    })

    const fade = useSpring({
        opacity: headerClicked ? 0 : 1
    })

    let modeKey = 0

    function cycleMode(key) {
        let nextModeKey = key+1
        let max_mode_length = Object.keys(OneHourBassPractice.flow).length
        if (key >= max_mode_length - 1) {
            nextModeKey = 0
        }
        let nextMode = OneHourBassPractice.flow[nextModeKey]
        setMode(nextMode)
        return [{
            routine: nextMode,
            key: nextModeKey
        }]
    }

    const switchModes = useTransition(routines, item => item.key , {
        from: {opacity: 0, transform: 'translate3d(-20px,0,0)'},
        enter: {opacity: 1, transform: 'translate3d(0,0,0)'},
        leave: {opacity: 0, transform: 'translate3d(20px,0,0)'}
    })


    return (
        <Layout location={myProps.location} headerClicked={headerClicked} setHeaderClicked={setHeaderClicked}>
            <div className={routineStyles.routineWrapper} style={fade}>
                    <MainDiv 
                    started={started}
                    slideToSide={slideToSide}
                    opacity={opacity}
                    setStart={setStart}
                    mode={currentMode} />
                { !!currentMode && started &&

                switchModes.map(
                    ({ item, props, key }) => 
                        <div style={{position: 'absolute'}}>
                            <animated.div style={props} key={key}>
                            <div className={routineStyles.routineTitle} >
                    
                                <div><h2>{OneHourBassPractice[item.routine].title}</h2></div>
                     
                            </div>
                            <div className={routineStyles.routineSubTitle}>
                                <h6>{OneHourBassPractice[item.routine].subtext}</h6>  
                            </div>
                            <div className={routineStyles.buttonWrapper}>
                                <div className={routineStyles.nextButton}>
                                <button onClick={() => setRoutine(cycleMode(item.key)) }>Next</button>
                                </div>
                            </div>
                            </animated.div>
                            
                        </div>
                )
                }
            </div>
        </Layout>
    )
}

export default RoutinePage