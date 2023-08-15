"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date("2023-08-20")

const CountDown = () => {
  return (
    <span>
        <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate}/>
    </span>
  )
}

export default CountDown;