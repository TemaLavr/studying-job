// реализация нескольких методов, которые выполняют то же, что и существующие.
// mySlice(arr, [start], [end]) - делает то же самое, что и arr.slice([start], [end]) только без использования само собой внутри себя arr.slice
// И аналогично еще парочка:
// myIndexOf(arr, item, from)
// myIncludes(arr, item, from)

// ------------------------------

// mySlice
function mySlice(arr, start, end) {
    let newArr = []; // Создаем пустой массив для результата
  
    // Если start не указан, присваиваем ему значение 0
    if (start === undefined) {
      start = 0;
    // Если start отрицательный, то вычисляем его позицию с конца массива
    } else if (start < 0) {
      // Math.max(0, ...) для того, чтобы когда start выходит за границы массива в минус, то вернулся 0
      start = Math.max(0, arr.length + start);
    }
  
    // Если end не указан, присваиваем ему длину массива
    if (end === undefined) {
      end = arr.length;
    // Если end отрицательный, то его позиция вычисляется с конца массива
    } else if (end < 0) {
      // Math.max(0, ...) для того, чтобы когда end выходит за границы массива в минус, то вернулся 0
      end = Math.max(0, arr.length + end);
    }
  
    // Перебираем массив от start до end (не включая end)
    // Каждый элемент массива добавляется в newArr
    for (let i = start; i < end; i++) {
      newArr.push(arr[i]);
    }
  
    return newArr;
  }

let originalArray = [1, 2, 3, 4, 5, 6];
 
console.log(mySlice(originalArray));
console.log(mySlice(originalArray, -3));
console.log(mySlice(originalArray, 1));

// ------------------------------------

// myIndexOf
function myIndexOf(arr, item, from) {
  // Если from не указан, то значение 0
  if (from === undefined) {
    from = 0;
  }

  // Дополнительная проверка на некорректный from
    if (from >= arr.length) {
      // Если from выходит за границы массива, то элемент не будет найден (возвращаем -1)
      return -1;
    }
    // Если from отрицательный, то вычисляем его позицию с конца массива
    if(from < 0)
    {
        from = Math.max(0, arr.length + from)
    }
    
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  // Если цикл завершился и элемент не был найден, то возвращается -1
  return -1;
}

let arr = [1, 2, 3, 4, 2, 5];

console.log(myIndexOf(arr, 2));
console.log(myIndexOf(arr, 2, 6));
console.log(myIndexOf(arr, 2, -3));
console.log(myIndexOf(arr, 6));


// ----------------------------------------

// myIncludes
function myIncludes(arr, item, from) {
  // Если from не указан, то значение 0
  if (from === undefined) {
    from = 0;
  }
    // Если from выходит за пределы массива, то возвращаем false
    if (from >= arr.length) {
      return false;
    }

    // Если from отрицательный, то вычисляем его позицию с конца массива
    if(from < 0)
    {
        from = Math.max(0, arr.length + from)
    }
  
  // Перебираем элементы массива, начиная с индекса from до конца массива
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  // Возвращаем false, если элемент не найден
  return false;
}

let arrNumber = [1, 2, 3, 4, 2, 5];

console.log(myIncludes(arrNumber, 2));
console.log(myIncludes(arrNumber, 6));
console.log(myIncludes(arrNumber, 2, 6));