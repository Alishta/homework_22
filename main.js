// Створити масив, довжину та елементи якого задає користувач.
let arrLength = +prompt('Enter array length.');

while(isNaN(arrLength)) {
    arrLength = prompt('Numbers only!');
}

let arr = [];

for (let i = 0; i < arrLength; i++) {
    let arrElement = prompt('Enter array element.');
    arr.push(arrElement);
}
//Виводити на сторінку
document.write('Your array: ', arr + '<br>');

// Відсортувати масив за зростанням.
arr.sort(function (a, b) {
    return a - b;
});
document.write('Your array after sorting: ', arr + '<br>');

// Видалити елементи з масиву з 2 по 4 (включно!).
arr.splice(1, 3);

document.write('Your array after removing elements: ', arr);
