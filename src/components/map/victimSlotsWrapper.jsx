import React from 'react';
import VictimSlot from './victimSlot';

const VictimSlotsWrapper = ({SlotItemsCount}) => {
  return(
    <div className="victim__wrapper">
       {[...Array(SlotItemsCount)].map((e, i) => <VictimSlot key={i} />) }
    </div>
  )
}

export default VictimSlotsWrapper;