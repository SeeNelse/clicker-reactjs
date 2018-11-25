import React from 'react';

const CounterBtn = ({HandleCollectBloodClick}) => {
  return(
    <button className="counter__btn" onClick = { HandleCollectBloodClick }>Собрать кровь</button>
  )
}

export default CounterBtn;