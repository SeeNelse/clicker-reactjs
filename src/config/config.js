export const CONFIG = {
  defaultVictim: {
    name: 'Вонючий Билли', 
    age: 26,
    blood: 2000,
    bloodPerTick: 1,
  },
  globalUpgrades: [
    {
      id: '0',
      name: 'Автосбор крови',
      description: 'Автоматически добывает кровь с жертвы',
      bloodPerTick: 1,
      duration: 1000,
      iconUrl: 'images/upgrades/autocollect.png',
      price: 20,
      type: 'autoCollect',
    },
  ],
  victimUpgrades: [
    {
      id: '0',
      name: 'Увеличенная добыча',
      description: 'Увеличивает добычу крови с жертвы',
      bloodPerTick: 5,
      iconUrl: 'images/upgrades/autocollect.png',
      price: 10,
      type: 'increaseClick',
    },
  ]
}