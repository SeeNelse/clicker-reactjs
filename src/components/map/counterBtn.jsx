import React from 'react';

const CounterBtn = ({ HandleCollectBloodClick , HuntingState }) => {
  return(
    <button className="counter__btn" onClick = { HandleCollectBloodClick } disabled = { HuntingState } >{ HuntingState ? 'Вы на охоте' : 'Собрать кровь' }</button>
  )
}

export default CounterBtn;