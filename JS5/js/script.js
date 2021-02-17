//Задание 1
document.write("Задание 1 </br>");

function countNumbers(num1, num2, num3) {
    return (num1 - num2) / num3;
}

document.write(`${countNumbers(10, 2, 4)}`);


//Задание 2
document.write("</br></br> Задание 2 </br>");

function countDegree(num1) {
    return [Math.pow(num1, 2), Math.pow(num1, 3)];
}

document.write(`Квадрат и куб числа: ${countDegree(3)}`);


//Задание 3
document.write("</br></br> Задание 3</br>");
let a = 7,
    b = 3;

function min(num1, num2) {

    return (num1 < num2) ? num1 : num2;

}

function max(num1, num2) {

    return (num1 > num2) ? num1 : num2;

}

document.write(`Пример работы функции min: ${min(a, b)}</br>`);
document.write(`Пример работы функции max: ${max(a, b)}`);


//Задание 4
document.write("</br></br> Задание 4</br>");

let startNumber = prompt("Введите число-начало диапазона для массива(задание 4)"),
    endNumber = prompt("Введите число-конец диапазона для массива(задание 4)");

while (!startNumber.trim() || !Number.isInteger(Number(startNumber))) {
    startNumber = prompt("Ошибка! Введите число-начало диапазона для массива(задание 4)");
}

while (!endNumber.trim() || !Number.isInteger(Number(endNumber))) {
    endNumber = prompt("Ошибка! Введите число-конец диапазона для массива(задание 4)");
}

function createArray(numStart, numEnd) {

    let arrayNumbers = [];

    for (let i = numStart; i <= numEnd; i++) {
        arrayNumbers.push(i);
    }

    return arrayNumbers;
}

function printArray(array) {

    for (let item of array) {
        document.write(item + " ");
    }
}

let currentArray = createArray(startNumber, endNumber);

document.write(`Создан массив: ${currentArray}</br>`);
document.write(`Выводим массив: `);
printArray(currentArray);


//Задание 5
document.write("</br></br> Задание 5</br>");

function isEven(num) {
    return (num % 2 == 0) ? true : false;
}

document.write(`Проверка четности числа</br>число 4: ${isEven(4)}</br> число 5: ${isEven(5)}`);


//Задание 6
document.write("</br></br> Задание 6</br>");

let arrayNumbers6 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

function editArrayToEven(array) {

    let resultArray = [];

    for (let item of array) {

        if (isEven(item)) resultArray.push(item);
    }

    return resultArray;
}

document.write(`Перебор и вывод массива только с четными числами ${editArrayToEven(arrayNumbers6)}`);


//Задание 7
document.write("</br></br> Задание 7</br>");

function drowPyramid(height) {

    if (arguments.length <= 1) {
        for (let i = 1; i <= height; i++) {
            for (let l = 1; l <= i; l++) {
                document.write(i);
            }
            document.write("</br>");
        }
    } else {
        for (let i = 1; i <= height; i++) {
            for (let l = 1; l <= i; l++) {
                document.write(arguments[1]);
            }
            document.write("</br>");
        }
    }
}

drowPyramid(9);
drowPyramid(9, "#");


//Задание 8
document.write("</br></br> Задание 8</br>");


let height = prompt("Введите высоту треугольника (целое число)(задание 8)");

while (!height.trim() || !Number.isInteger(Number(height)) || Number(height) < 1) {
    height = prompt("Ошибка! Введите высоту треугольника(задание 8)");
}

function drowTriangle(height, symbol) {
    let mass11 = [],
        mass11Item = [],
        massIndex = [],
        index = 1;

    massIndex.push(Number(height - 1));

    for (let i = 0; i < height; i++) {
        for (let numIndex of massIndex) {
            mass11Item[numIndex] = symbol;
        }
        massIndex.push(massIndex[0] - index);
        massIndex.push(massIndex[0] + index);
        mass11.push(mass11Item);
        mass11Item = [];
        index++;
    }

    for (let num11 of mass11) {
        for (let num11Item of num11) {
            if (num11Item == undefined) {
                document.write(`<font color="white">${symbol}</font>`);
            } else {
                document.write(num11Item);
            }
        }
        document.write("</br>");
    }
}


function drowReverseTriangle(height, symbol) {
    let mass11 = [],
        mass11Item = [],
        massIndex = [],
        index = 1;

    massIndex.push(Number(height - 1));

    for (let i = 0; i < height; i++) {
        for (let numIndex of massIndex) {
            mass11Item[numIndex] = symbol;
        }
        massIndex.push(massIndex[0] - index);
        massIndex.push(massIndex[0] + index);
        mass11.unshift(mass11Item);
        mass11Item = [];
        index++;
    }

    for (let num11 of mass11) {
        for (let num11Item of num11) {
            if (num11Item == undefined) {
                document.write(`<font color="white">${symbol}</font>`);
            } else {
                document.write(num11Item);
            }
        }
        document.write("</br>");
    }
}


drowTriangle(height, "*");               // выводим обычный треугольник
document.write("</br>");
drowReverseTriangle(height, "*");        // выводим перевернутый треугольник


//Задание 9
document.write("</br></br> Задание 9</br>");

function createRowFibonacci(endNumber) {

    let array = [0, 1];

    if (endNumber <= 0) {
        return array = [0];
    }
    while (true) {
        if ((array[array.length - 1] + array[array.length - 2]) <= endNumber) {
            array.push(array[array.length - 1] + array[array.length - 2]);
        } else break;
    }

    return array;
}

document.write(`Выводим ряд чисел Фибоначи ${createRowFibonacci(1000)}`);


//Задание 10
document.write("</br></br> Задание 10</br>");

function calculateSumDigits(number) {
    let sum = 0;

    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    if (sum < 10) {
        return sum;
    } else return calculateSumDigits(sum);
}

document.write(`Сумма цифр числа равна ${calculateSumDigits(255)}`);

//Задание 11
document.write("</br></br> Задание 11</br>");

let arrayNumbers = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

function writeElementArray(array) {
    if (array.length <= 1)
        document.write(array.shift() + " ");
    else {
        document.write(array.shift() + " ");
        writeElementArray(array);
    }
}

writeElementArray(arrayNumbers);


//Задание 12
document.write("</br></br> Задание 12</br>");
document.write("Выведено в консоль");


function writeDataUser() {

    let name = prompt("Введите ваше имя");
    while (!name.trim() || name.length < 2 || Number(name)) {
        name = prompt("Допущена ошибка. Введите ваше имя корректно");
    }

    let lastName = prompt("Введите вашу фамилию");
    while (!lastName.trim() || lastName.length < 2 || Number(lastName)) {
        lastName = prompt("Допущена ошибка. Введите вашу фамилию корректно");
    }

    let secondName = prompt("Введите ваше отчество");
    while (!secondName.trim() || secondName.length < 2 || Number(secondName)) {
        secondName = prompt("Допущена ошибка. Введите ваше отчество корректно");
    }

    let group = prompt("Введите вашу группу");
    while (!group.trim()) {
        group = prompt("Допущена ошибка. Введите вашу группу корректно");
    }

    let stringAbout = 'Домашняя работа: «Функции»',
        stringGroup = 'Выполнил: студент гр.' + group,
        stringFullName = lastName + ' ' + name + ' ' + secondName,
        maxlength;

    stringAbout.length > stringGroup.length ? maxlength = stringAbout.length : maxlength = stringGroup.length;
    stringFullName.length > maxlength ? maxlength = stringFullName.length : maxlength;

    console.log(editStringForWriteDataUser("", maxlength, "*"));
    console.log(editStringForWriteDataUser(stringAbout, maxlength, "*"));
    console.log(editStringForWriteDataUser(stringGroup, maxlength, "*"));
    console.log(editStringForWriteDataUser(stringFullName, maxlength, "*"));
    console.log(editStringForWriteDataUser("", maxlength, "*"));


}

function editStringForWriteDataUser(string, length, symbol) {
    let arrayString = string.split('');

    if (string.length == 0) {
        while ((arrayString.length - 1) <= length) {
            arrayString.push(symbol);
        }
    } else {

        arrayString.unshift(symbol);
        while ((arrayString.length - 1) <= length) {
            if ((arrayString.length - 1) == length) {
                arrayString.push(symbol);
            } else {
                arrayString.push(" ");
            }
        }
    }

    return arrayString.join('')

}

writeDataUser();


//Задание 13 почту не сделал \/(0_0)\/