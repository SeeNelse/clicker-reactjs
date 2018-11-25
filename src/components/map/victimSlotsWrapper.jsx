import React from 'react';
import VictimSlot from './victimSlot';

const VictimSlotsWrapper = ({ SlotItemsCount, Victims }) => {
  return(
    <div className="victim__wrapper">
       { [...Array(SlotItemsCount)].map((e, i) => <VictimSlot key={i} Victim = { Victims[i] } />) }
    </div>
  )
}

export default VictimSlotsWrapper;