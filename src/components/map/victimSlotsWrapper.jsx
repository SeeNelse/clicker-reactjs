import React from 'react';
import VictimSlot from './victimSlot';

const VictimSlotsWrapper = ({ SlotItemsCount, Victims, OpenVictimUpgradeMenu }) => {
  return(
    <div className="victim-background">
      <div className="victim-background__top"></div>
      <div className="victim-background__right-top"></div>
      <div className="victim-background__right"></div>
      <div className="victim-background__right-bottom"></div>
      <div className="victim-background__bottom"></div>
      <div className="victim-background__left-bottom"></div>
      <div className="victim-background__left"></div>
      <div className="victim-background__left-top"></div>
      <div className="victim-background__floor"></div>
      <div className="victim__wrapper">
        { [...Array(SlotItemsCount)].map((e, i) => <VictimSlot key={ i } VictimIndex = { i } OpenVictimUpgradeMenu = { OpenVictimUpgradeMenu } Victim = { Victims[i] } />) }
      </div>
    </div>
  )
}

export default VictimSlotsWrapper;