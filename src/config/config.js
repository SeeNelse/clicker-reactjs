export const CONFIG = {
  defaultVictim: {
    name: 'Вонючий Билли', 
    age: 26,
    blood: 2000,
    bloodPerTick: 1,
  },
  victimUpgrades: [
    {
      id: '0',
      name: 'Увеличенная добыча',
      description: 'Увеличивает добычу крови с жертвы',
      bloodPerTick: 5,
      iconUrl: 'images/upgrades/autocollect.png',
      price: 10,
    },
    {
      id: '1',
      name: 'Автосбор крови',
      description: 'Автоматически добывает кровь с жертвы',
      bloodPerTick: 1,
      duration: 10000,
      iconUrl: 'images/upgrades/autocollect.png',
      price: 1000,
    },
  ]
}