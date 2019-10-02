import React, {useState} from 'react'
import Countdown, {zeroPad, calcTimeDelta} from 'react-countdown-now';
import {useSpring, animated} from 'react-spring'
import timerStyles from './CountdownTimer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faUndo } from '@fortawesome/free-solid-svg-icons';
import {timers} from '../../springs/routine'

function getMilliseconds(minutes) {
    return minutes * 60000
}

const getNow = Date.now()


const CountdownTimer = (props) => {
    const {started, slideToSide, opacity, mode} = props

    const [timerStarted, setTimer] = useState(false);

    const Completionist = () => <span>You are good to go!</span>;
    
    function startTimer(){
        setTimer(true)
    }


    let id = 0
    let paused = false
    let setMinutes = timers[mode]
    const renderer = ({ hours, minutes, seconds, completed, api }) => {


        function pauseTimer(){
            if(!paused) { 
                api.pause();
                paused = true;
             } else {
                api.start()
                paused = false
             }

        }

        function resetTimer(){
            setTimer(false)
        }

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

            <div className={timerStyles.clickable} onClick={() => pauseTimer()} style={{marginLeft: '10vw', zIndex: '999'}}>
            <FontAwesomeIcon icon={ faPause }/> / <FontAwesomeIcon icon={ faPlay }/>
            </div>

            <div className={timerStyles.clickable} onClick={() => resetTimer()} style={{marginLeft: '10vw', zIndex: '999'}}>
            <FontAwesomeIcon icon={ faUndo }/>
            </div>
                
            
          </div>
          )}
      };


    return (
        <animated.div style={{
            position: 'absolute'
            }}>
        {timerStarted &&
        <Countdown date={Date.now() + getMilliseconds(setMinutes)}
            renderer={renderer}
            autoStart={true}
            controlled={false}
            key={id}
            
            />
        }
        {!timerStarted &&

            <div className={timerStyles.timerWrapper}>
                <div className={timerStyles.timer} >
                    {zeroPad(setMinutes)}:00
                </div>
                <div className={timerStyles.clickable} onClick={() => startTimer()} style={{marginLeft: '10vw', zIndex: '999'}}>
                <FontAwesomeIcon icon={ faPlay }/> Start Practice
                </div>
          </div>
        }
        <hr></hr>
        </animated.div>
    )};

export default CountdownTimer