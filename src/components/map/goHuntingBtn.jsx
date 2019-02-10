import React from 'react';
import msToTime from '../../utils/timeFormatter'

const GoHuntingBtn = ({ HandleGoHuntingClick, TimeToFinishHunting, TimeToFinishAutoHunting, HuntingState, IsReachMaxCount }) => {
  return(
    <div>
      <span style={{ color: '#fff' }}>Автохота:  { TimeToFinishAutoHunting !== 0 ? "На автоохоте" : "Не на автоохоте"} </span>
      {/* msToTime(TimeToFinishAutoHunting) */}
      {console.log(TimeToFinishHunting)}
      <button 
      className="map-bot__hunting-btn ui-button" 
      onClick = { HandleGoHuntingClick } 
      disabled = { HuntingState || IsReachMaxCount } >
      { TimeToFinishHunting ? msToTime(TimeToFinishHunting) : 'Пойти на охоту' }
    </button>
    </div>
  )
}

export default GoHuntingBtn;