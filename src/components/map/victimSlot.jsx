import React from 'react';

const VictimSlot = ({ Victim }) => {
  return(
    <div className="victim__slot">
      {/* {Victim ? <div></div> `${Victim.name}, ${Victim.age}` : '' } */}
      {Victim ? <div className="victim__man"></div> : '' }
    </div>
  )
}

export default VictimSlot;