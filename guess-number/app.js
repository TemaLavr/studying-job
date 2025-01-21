function guessNumber() {
    // Компьютер 1 загадывает число
    // Генерирует случайное число и округляет до целого
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Компьютер 1 загадал число!");
  
    // Компьютер 2 начинает угадывать
    // Диапазон для поиска
    let min = 1;
    let max = 100;
    // Здесь хранится возможное число для угадывания
    let possibleNumber;
    // Счетчик попыток
    let attempts = 0;
  
    //Запускаем цикл угадывания
    while (true) {
      attempts++;
      possibleNumber = Math.floor((min + max) / 2); // Стратегия бинарного поиска
      console.log(`Попытка ${attempts}. В диапазоне от ${min} до ${max}.`);
      console.log(`Компьютер 2 предположил, что загаданное число ${possibleNumber}.`);
  
      // Проверка вариантов
      if (possibleNumber === hiddenNumber) {
        console.log(`Компьютер 2 угадал число ${hiddenNumber} за ${attempts} попыток!`);
        break;
      } else if (possibleNumber < hiddenNumber) {
        console.log("Подсказка - Больше!");
        min = possibleNumber + 1;
      } else {
        console.log("Подсказка - Меньше!");
        max = possibleNumber - 1;
      }
  
      // Если что-то пойдет не так - все остановится
      // Чтобы цикл не был бесконечным
        if (min > max) {
          console.log("Ошибка!!! Компьютер 2 не смог угадать число.");
          break;
      }
    }
  }
  
  guessNumber();