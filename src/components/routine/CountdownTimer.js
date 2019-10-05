import React, {useState} from 'react'
import Countdown, {zeroPad, calcTimeDelta} from 'react-countdown-now';
import {useSpring, animated} from 'react-spring'
import timerStyles from './CountdownTimer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faUndo } from '@fortawesome/free-solid-svg-icons';
import {OneHourBassPractice} from '../../routines/flow'

function getMilliseconds(minutes) {
    return minutes * 60000
}

const getNow = Date.now()


const CountdownTimer = (props) => {
    const {mode, timerStarted, setTimer} = props

    const Completionist = ({setTimer}) => (
        <div style={{display:'flex', justifyContent: 'space-evenly'}}>
            <div>Exercise done!</div>
            <div className={timerStyles.clickable} onClick={() => setTimer(false)} style={{zIndex: '999'}}>
                <FontAwesomeIcon icon={ faUndo }/>
            </div>
        </div>)
    
    function startTimer(){
        setTimer(true)
    }


    let id = 0
    let paused = false
    let setMinutes = OneHourBassPractice[mode].timer
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
          return <Completionist setTimer={setTimer} />
          
        } else {
          // Render a countdown
          return (
          <div className={timerStyles.timerWrapper}>
              <div className={timerStyles.timer} >
                {zeroPad(minutes)}:{zeroPad(seconds)}
            </div>

            <div className={timerStyles.clickable} onClick={() => pauseTimer()} style={{zIndex: '999'}}>
            <FontAwesomeIcon icon={ faPause }/> / <FontAwesomeIcon icon={ faPlay }/>
            </div>

            <div className={timerStyles.clickable} onClick={() => resetTimer()} style={{zIndex: '999'}}>
            <FontAwesomeIcon icon={ faUndo }/>
            </div>
                
            
          </div>
          )}
      };


    return (
        <animated.div style={{
            position: 'absolute'
            }}>
        <div style={{
            width: '90vw'
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
                <div className={timerStyles.clickable} onClick={() => startTimer()} style={{zIndex: '999'}}>
                <FontAwesomeIcon icon={ faPlay }/> Start Practice
                </div>
          </div>
        }
        <hr></hr>
        </div>
        </animated.div>
    )};

export default CountdownTimer