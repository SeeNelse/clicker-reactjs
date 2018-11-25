import React from 'react';
import GoHuntingBtn from './goHuntingBtn';

const Sidebar = ({ HandleGoHuntingClick, TimeToFinishHunting, HuntingState, IsReachMaxCount }) => {
  return(
    <div className="sidebar">
      <GoHuntingBtn 
        HandleGoHuntingClick = { HandleGoHuntingClick }
        TimeToFinishHunting = { TimeToFinishHunting }
        HuntingState = { HuntingState }
        IsReachMaxCount = { IsReachMaxCount }
      />
    </div>
  )
}

export default Sidebar;