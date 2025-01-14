//Задание 1
// Выведите числа от 1 до 10 в консоль

for (let i = 1; i <= 10; i++){
console.log(i);
}
//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
let numberTwo = 0;

while (numberTwo <= 20) {
    console.log(numberTwo);
    numberTwo += 2;
}
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

for (let i = 10; i > 0; i--) {
    console.log(i);
}
//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++){
    console.log(i * 5);
}
//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sum = 0;
for (let i = 1; i <= 100; i++){
sum += i;
};
console.log(sum);
//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for(let i = 0; i <= array.length; i++){
    console.log(i+1);
};
//Задание 7
// Выведите сумму всех элементов массива используя цикл for
let numbers = [1, 2, 3, 4, 5];
let sumSeven = 0;
for (let i = 0; i < numbers.length; i++){
    sumSeven += numbers[i];
}
console.log(sumSeven);
//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++){
    let animal = animals[i] + ' - прекрасное животное';
    console.log(animal);
};
//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
for (let letter of str){
    console.log(letter);
}
//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for(let number of array){
    console.log(number);
}
//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
let joinedSentences = sentences.join(' ');
let splittedSentences = joinedSentences.split(' ');
console.log(splittedSentences);


//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
sum = 0;
for (number of numbers){
sum += number;
};
console.log(sum);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for(let i = 0; i < list.length; i++){
    word = list[i];
    console.log(word.length);
};

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
for (let i = 0; i < words.length; i++){
    let word = words[i];
    let wordsUpperCase = word.toUpperCase();
    console.log(wordsUpperCase);
};
//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let symbol of greeting){
    if(vowels.includes(symbol)) {
        vowelCount++
    }
};
console.log(vowelCount);


//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
//const words = ['Hello', 'world', '!'];
const joinedWords = words.join(' ');
console.log(joinedWords);


//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let num17 = 1;
while (num17 <= 10) {
    console.log(num17);
    num17++
};

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let num18 = 10;
while (num18 >= 1) {
    console.log(num18);
    num18--
};
//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
while(allNumbers > 0){
if (allPositive === false){
    break;
}
};

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let i = 0;
do{
    console.log(random[i]);
    i++;
} while(random >= 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

x = 1;
while (x <= 100){
    if (x % 3!==0)
    console.log(x);
    x +=1
};
//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
let title = document.querySelectorAll('h4');
for(i = 0; i< title.length; i++){
    document.querySelectorAll('h4')[i].style.color = 'blue';
}
//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';
function makeWord(words) {
    for(let i=0; i<words; i=i+2){
        randomString += alphabet[Math.floor(Math.random()*alphabet.length)];
    }
    console.log(randomString);
    }
    makeWord(10);