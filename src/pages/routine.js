import React, { useState } from "react"
import {useSpring, useTransition, animated } from 'react-spring'

import routineStyles from "./routine.module.scss"
import StartMenu from "../components/routine/StartMenu"
import CountdownTimer from "../components/routine/CountdownTimer"
import Layout from '../components/layout'

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

function RoutinePage(props) {

    const [started, setStart] = useState(false);

    const {slideToSide, opacity} = useSpring({
        slideToSide: started ? 50 : 0,
        opacity: started ? 0 : 1
    })

    let initialMode = 'WARMUP'

    return (
        <Layout>
            <div className={routineStyles.routineWrapper}>
                    <MainDiv 
                    started={started}
                    slideToSide={slideToSide}
                    opacity={opacity}
                    setStart={setStart}
                    mode={initialMode} />
                { !!initialMode && started && initialMode === 'WARMUP' &&
                    <div style={{position: 'absolute'}}>
                    <div className={routineStyles.routineTitle} >
                    
                        <div><h2>Warm Up</h2></div>
                     
                    </div>
                    <div className={routineStyles.routineSubTitle}>
                    <h6>Loosen those finger muscles!</h6>
                    
                    </div>
                    </div>
            }
            </div>
        </Layout>
    )
}

export default RoutinePage