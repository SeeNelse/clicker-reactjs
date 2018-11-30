import React from 'react';
import VictimUpgradesMenu from './victimUpgradesMenu';

const Upgrades = ({ CurrentVictimMenu, UpgradeApply }) => {
  return(
    <div className="sidebar-upgrades">
      { CurrentVictimMenu === null ? 
        <div className="sidebar-upgrades-info">global</div> : 
        <VictimUpgradesMenu CurrentVictimMenu = { CurrentVictimMenu } UpgradeApply = { UpgradeApply }/>
      }
    </div>
  )
}

export default Upgrades;