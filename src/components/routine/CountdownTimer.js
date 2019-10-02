import React from 'react'
import Countdown, {zeroPad} from 'react-countdown-now';
import {useSpring, animated} from 'react-spring'
import timerStyles from './CountdownTimer.module.scss'

function getSeconds(minutes) {
    return minutes * 60000
}

const CountdownTimer = (props) => {
    const {started, slideToSide, opacity} = props

    const Completionist = () => <span>You are good to go!</span>;


    const renderer = ({ hours, minutes, seconds, completed, api }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
          <div className={timerStyles.timerWrapper}>
              <div className={timerStyles.timer} >
              {zeroPad(minutes)}:{zeroPad(seconds)}
              </div>
              <div className={timerStyles.clickable} onClick={() => api.start()} style={{marginLeft: '20vw'}}>
              START
              </div>
          </div>
          )}
      };


    return (
        <animated.div style={{
            position: 'absolute'
            }}>
        <Countdown date={Date.now() + getSeconds(5)}
            renderer={renderer}
            autoStart={false} />
        </animated.div>
    )};

export default CountdownTimer