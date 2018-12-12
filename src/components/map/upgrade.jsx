import React from 'react';

const Upgrade = (props) => {
  return(
    <div className="sidebar-upgrades-menu-item" onClick = { () => {props.UpgradeApply(props.Item)} }>
      <div className="sidebar-upgrades-menu-item__left"><img src={ props.Item.iconUrl } alt="upgrade" className="sidebar-upgrades-menu-item__img"/></div>
      <div className="sidebar-upgrades-menu-item__right">
        <h5 className="sidebar-upgrades-menu-item__name">{ props.Item.name }</h5>
        <p className="sidebar-upgrades-menu-item__description">{ props.Item.description }</p>
        <div className="sidebar-upgrades-menu-item-info">
          <span className="sidebar-upgrades-menu-item-info__description">
            { props.Item.type === 'autoCollect' ? props.Item.bloodPerTick + ' крови раз в ' + props.Item.duration.toString().slice(0, -3) + ' секунд' : '' }
            { props.Item.type === 'autoHunting' ? 'Гаргульи ходят на охоту каждые ' + props.Item.duration.toString().slice(0, -3) + ' секунд' : '' }
            { props.Item.type === 'increaseClick' ? props.Item.bloodPerTick + ' крови за клик' : '' }
          </span>
          <span className="sidebar-upgrades-menu-item-info__level">Уровень: { props.Item.level }</span>
          <span className="sidebar-upgrades-menu-item-info__price">Цена: { props.Item.price } <img src="images/blood.png" alt="blood" className="sidebar-upgrades-menu-item__blood"/></span>
        </div>
      </div>
    </div>
  )
}

export default Upgrade;