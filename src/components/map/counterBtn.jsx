import React from 'react';

const CounterBtn = ({ SuckBloodFromAllVictims , HuntingState }) => {
  return(
    <button className="map-bot__counter-btn" 
      onClick = { SuckBloodFromAllVictims } 
      disabled = { HuntingState } >
      { HuntingState ? 'Вы на охоте' : 'Собрать кровь' }
    </button>
  )
}

export default CounterBtn;