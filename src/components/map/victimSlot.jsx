import React from 'react';

const VictimSlot = ({ Victim }) => {
  return(
    <div className="victim__slot">
      {/* {Victim ? <div></div> `${Victim.name}, ${Victim.age}` : '' } */}
      {Victim ? <div className="victim__man"><span className="victim__name">{Victim.name}, {Victim.age}</span></div> : '' }
    </div>
  )
}

export default VictimSlot;