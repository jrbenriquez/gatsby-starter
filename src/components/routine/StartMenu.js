import React from 'react'
import {animated} from 'react-spring'
import routineStyles from "../../pages/routine.module.scss"

const StartMenu = (props) => {
    const {slideToSide, started, opacity, setStart} = props
    return (
        <div className={routineStyles.routineWrapper}>
                        <animated.div style={{
                            transform: slideToSide.interpolate(slideToSide => `translate3d(${slideToSide}%,0,0)`),
                            opacity
                
                        }}>
                            <h1>1 Hour</h1>
                            <h1>Bass Practice Routine</h1>
                        </animated.div>
                        <animated.div style={{opacity}}><hr></hr> <h3>Improving this as time goes by.</h3> <h6>(i.e to include diagrams + chart guides)</h6></animated.div>
                        <animated.div className={routineStyles.startButtonWrapper} style={{
                            transform: slideToSide.interpolate(slideToSide => `translate3d(${(slideToSide*-1)*2}%,0,0)`),
                            opacity
                        }}>
                        <p className={routineStyles.startButton} onClick={() => setStart(true)}><u>START</u></p>
                        </animated.div>
                    </div>
    )
}

export default StartMenu