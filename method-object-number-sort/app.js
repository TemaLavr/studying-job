// написать метод, который на вход получает объект, а на выходе возвращает число, соответствующее сумме всех числовых полей.
// Задача со звездочкой - то же самое.
// Но вместо просто числа с суммой полей метод возвращает массив с названиями полей, причем эти названия полей отсортированы по убыванию.
// Например, для объекта {name: 'Vasya', friends: 5, likes: 19, projects: 7} вернется массив [likes, projects, friends].

// -----------------------------------------------

// Метод, который на вход получает объект, а на выходе возвращает число, соответствующее сумме всех числовых полей
function sumNumericFields(obj) {
  let sum = 0;

  // Перебираем все ключи obj
  for (let key in obj) {
    // Проверяем, является ли key собственным (неунаследованным) свойством obj
    if (obj.hasOwnProperty(key)) {
      // Получаем значение свойства по ключу key и присваиваем его переменной value
      let value = obj[key];
      // С помощью typeof проверяем является ли value числом
      // и если является добавляем его к sum
      if (typeof value === 'number') {
        sum += value;
        // Проверяем, является ли value объектом, но не null
        // и если является, то вызываем эту же функцию и передаем ей объект
      } else if (typeof value === 'object' && value !== null){
          sum+= sumNumericFields(value)
      }
    }
  }

  // Возвращаем накопленную сумму числовых полей
  return sum;
}

let user = {
  name: 'Vasya',
  friends: 5,
  likes: 19,
  projects: 7,
};

console.log(sumNumericFields(user));



// -----------------------------------------------

// Метод, который на вход получает объект, а на выходе возвращает число, соответствующее сумме всех числовых полей
// Но вместо просто числа с суммой полей метод возвращает массив с названиями полей, причем эти названия полей отсортированы по убыванию
function getSortedFieldNames(obj) {
  let numericFields = [];

  // Перебираем все ключи obj 
  function processObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        // Если значение является числом, то новый объект { name: key, value: value } добавляется в numericFields
        if (typeof value === 'number') {
          numericFields.push({name: key, value: value});
        } else if (typeof value === 'object' && value !== null) {
          processObject(value)
        }
      }
    }
  }
  processObject(obj);
  
    // Сортируем в порядке убывания
    numericFields.sort((a, b) => b.value - a.value);

    // Отсортированный numericFields преобразуется в sortedNames, содержащий только name значения каждого числового поля
    let sortedNames = numericFields.map(item => item.name);
  
  // Возвращаем отсортированный в порядке убывания массив
  return sortedNames;
}

let user1 = {
  name: 'Vasya',
  friends: 5,
  likes: 19,
  projects: 7,
};

console.log(getSortedFieldNames(user1));

