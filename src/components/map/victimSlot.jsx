import React from 'react';

const VictimSlot = ({ Victim }) => {
  return(
    <div className="victim__slot">
      {Victim ? ` ${Victim.name} , ${Victim.age} ` : '' }
    </div>
  )
}

export default VictimSlot;