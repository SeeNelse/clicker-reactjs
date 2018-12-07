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
          <span>Уровень: { props.Item.level }</span>
        </div>
      </div>
    </div>
  )
}

export default Upgrade;