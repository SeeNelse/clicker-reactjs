import React from 'react';

const VictimSlot = (props) => {
  return(
    <div className="victim__slot">
      {props.Victim ? 
      <div className="victim__man" data-key={ props.VictimIndex } style={{backgroundImage: 'url(' + props.Victim.iconUrl + ')'}}>
        <span className="victim__name">
          { props.Victim.name }, { props.Victim.age }, <img src="images/ui/blood.png" alt="blood"/>{ props.Victim.blood }
        </span>
      </div> : '' }
    </div>
  )
}

export default VictimSlot;