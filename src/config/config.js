export const CONFIG = {
  defaultVictim: {
    name: 'Вонючий Билли', 
    age: 26,
    blood: 2,
    type: 1,
    meat: 5,
  },
  globalUpgrades: [
    {
      id: 0,
      name: 'Автосбор крови',
      description: 'Автоматически собирает кровь с жертв',
      bloodPerTick: 2,
      duration: 1000,
      iconUrl: 'images/upgrades/autocollect.png',
      price: 20,
      type: 'autoCollect',
      level: 1,
    },
    {
      id: 1,
      name: 'Автоохота',
      description: 'Позволяет автоматически отправлять на охоту прислужников',
      iconUrl: 'images/upgrades/autocollect.png',
      duration: 8000,
      price: 10,
      type: 'autoHunting',
      level: 1,
    },
    {
      id: 2,
      name: 'Увеличенная добыча типа 1',
      description: 'Увеличивает добычу крови с жертв типа 1',
      bloodPerTick: 6,
      iconUrl: 'images/upgrades/autocollect.png',
      price: 10,
      type: 'increaseClick',
      level: 1,
      forVictimType: 1,
    },
    {
      id: 3,
      name: 'Увеличенная добыча типа 2',
      description: 'Увеличивает добычу крови с жертвы типа 2',
      bloodPerTick: 6,
      iconUrl: 'images/upgrades/autocollect.png',
      price: 10,
      type: 'increaseClick',
      level: 1,
      forVictimType: 2,
    },
  ],
}