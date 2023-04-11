//Задание 1//

const userAlex = {
  Имя: 'Алексей',
  Фамилия: 'Алексеев',
  Возраст: '34'
  }
  
  Object.getOwnPropertyNames(userAlex).forEach(function(val) {
    console.log(val + ': ' + userAlex[val]);
  });
   /*"Имя: Иван"
  "Фамилия: Иванов"
  "Возраст: 25"*/






