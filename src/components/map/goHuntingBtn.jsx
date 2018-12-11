import React from 'react';
import msToTime from '../../utils/timeFormatter'

const GoHuntingBtn = ({ HandleGoHuntingClick, TimeToFinishHunting, HuntingState, IsReachMaxCount, AutoHuntingState }) => {
  return(
    <button 
      className="map-bot__hunting-btn" 
      onClick = { HandleGoHuntingClick } 
      disabled = { HuntingState || IsReachMaxCount || AutoHuntingState } >
      { TimeToFinishHunting ? msToTime(TimeToFinishHunting) : 'Пойти на охоту' }
    </button>
  )
}

export default GoHuntingBtn;