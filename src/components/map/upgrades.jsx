import React from 'react';
import VictimUpgradesMenu from './victimUpgradesMenu';
import GlobalUpgradesMenu from './globalUpgradesMenu';

const Upgrades = ({ CurrentVictimMenu, UpgradeApply }) => {
  return(
    <div className="sidebar-upgrades">
      { CurrentVictimMenu === null ? 
        <GlobalUpgradesMenu UpgradeApply = { UpgradeApply } /> : 
        <VictimUpgradesMenu CurrentVictimMenu = { CurrentVictimMenu } />
      }
    </div>
  )
}

export default Upgrades;