import React, { Component } from 'react';

class VictimSlot extends Component {
  constructor (props) {
    super(props);

    this.victimUpgradeMenu = this.victimUpgradeMenu.bind(this);
  }

  victimUpgradeMenu() {
    this.props.OpenVictimUpgradeMenu(this.props.VictimIndex);
  }

  render() {
    return(
      <div className="victim__slot">
        {this.props.Victim ? 
        <div className="victim__man" onClick = { this.victimUpgradeMenu }>
          <span className="victim__name">
            { this.props.Victim.name }, { this.props.Victim.age }, { this.props.Victim.blood }
          </span>
        </div> : '' }
      </div>
    )
  }
}

export default VictimSlot;