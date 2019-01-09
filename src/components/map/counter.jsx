import React from 'react';

const Counter = ({CurrentCounter, CounterType}) => {
  return(
    <h4 className="map-bot__counter"> { CounterType ? <img src="images/blood.png" alt="blood" className="map-bot__counter-blood"/> : <img src="images/meet.png" alt="blood" className="map-bot__counter-meat"/> } { CurrentCounter }</h4>
  )
}

export default Counter;