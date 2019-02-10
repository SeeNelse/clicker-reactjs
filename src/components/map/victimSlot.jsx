import React, { Component } from 'react';

class VictimSlot extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return(
      <div className="victim__slot">
        {this.props.Victim ? 
        <div className="victim__man" data-key={ this.props.VictimIndex } style={{backgroundImage: 'url(' + this.props.Victim.iconUrl + ')'}}>
          <span className="victim__name">
            { this.props.Victim.name }, { this.props.Victim.age }, <img src="images/ui/blood.png" alt="blood"/>{ this.props.Victim.blood }
          </span>
        </div> : '' }
      </div>
    )
  }
}

export default VictimSlot;