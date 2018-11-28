import React from 'react';
import GoHuntingBtn from './goHuntingBtn';
import Upgrades from './upgrades';

const Sidebar = ({ HandleGoHuntingClick, TimeToFinishHunting, HuntingState, IsReachMaxCount }) => {
  return(
    <div className="sidebar">
      <GoHuntingBtn 
        HandleGoHuntingClick = { HandleGoHuntingClick }
        TimeToFinishHunting = { TimeToFinishHunting }
        HuntingState = { HuntingState }
        IsReachMaxCount = { IsReachMaxCount }
      />
      <Upgrades/>
    </div>
  )
}

export default Sidebar;