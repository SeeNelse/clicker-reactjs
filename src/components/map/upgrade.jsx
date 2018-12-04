import React from 'react';

const Upgrade = (props) => {
  return(
    <div className="sidebar-upgrades-menu-item" onClick = { () => {props.UpgradeApply(props.Item)} }>
      <img src={ props.Item.iconUrl } alt="upgrade" className="sidebar-upgrades-menu-item__img"/>
      <div className="sidebar-upgrades-menu-item__right">
        <h5 className="sidebar-upgrades-menu-item__name">{ props.Item.name }</h5>
        <p className="sidebar-upgrades-menu-item__description">{ props.Item.description }</p>
        <div className="sidebar-upgrades-menu-item__info">
          <span>{ props.Item.bloodPerTick } крови раз в { props.Item.duration } секунд</span>
          <span>Цена: { props.Item.price }</span>
        </div>
      </div>
    </div>
  )
}

export default Upgrade;



// import React, { Component } from 'react';

// class Upgrade extends Component {
//   constructor (props) {
//     super(props);

//     this.victimUpgradeMenu = this.UpgradeApply.bind(this);
//   }

//   CallVictimUpgradeMenu() {
//     this.props.UpgradeApply(props.Item);

//   }

//   render() {
//     return(
//       <div className="sidebar-upgrades-menu-item" onClick = { () => { this.CallVictimUpgradeMenu } }>
//         <img src={ props.Item.iconUrl } alt="upgrade" className="sidebar-upgrades-menu-item__img"/>
//         <div className="sidebar-upgrades-menu-item__right">
//           <h5 className="sidebar-upgrades-menu-item__name">{ props.Item.name }</h5>
//           <p className="sidebar-upgrades-menu-item__description">{ props.Item.description }</p>
//           <div className="sidebar-upgrades-menu-item__info">
//             <span>{ props.Item.bloodPerTick } крови раз в { props.Item.duration } секунд</span>
//             <span>Цена: { props.Item.price }</span>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Upgrade;