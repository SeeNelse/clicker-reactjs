import React from 'react';
import GlobalUpgradesMenu from './globalUpgradesMenu';

const Upgrades = ({ UpgradeApply }) => {
  return(
    <div className="sidebar-upgrades">
      <GlobalUpgradesMenu UpgradeApply = { UpgradeApply } /> 
    </div>
  )
}

export default Upgrades;