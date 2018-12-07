import React from 'react';

const CounterBtn = ({ SuckBloodFromAllVictims , HuntingState }) => {
  return(
    <button className="counter__btn" onClick = { SuckBloodFromAllVictims } disabled = { HuntingState } >{ HuntingState ? 'Вы на охоте' : 'Собрать кровь' }</button>
  )
}

export default CounterBtn;