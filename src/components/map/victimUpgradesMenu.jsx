import React from 'react';

const VictimUpgradesMenu = ({ CurrentVictimMenu }) => {
  return(
    <div className="sidebar-upgrades-menu">
      <div className="sidebar-upgrades-menu__name"> Жертва номер { CurrentVictimMenu+1 } </div>
    </div>
  )
}

export default VictimUpgradesMenu;