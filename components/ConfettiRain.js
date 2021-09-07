import React from 'react'
import useWindowDimensions from './useWindowDimensions'
import Confetti from 'react-confetti'
export default () => {
    const { height, width } = useWindowDimensions();
    return (
        <Confetti width={width} height={height} numberOfPieces={500} tweenDuration={60000} colors={['#ec3750', '#ff8c37', "#f1c40f", "#33d6a6", '#5bc0de', '#338eda']} />
    )
}