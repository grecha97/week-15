let cities = ['Лондон', 'Париж', 'Гамбург', 'Барселона'];
let temperatures = [];
for (let i = 0; i < cities.length; i++){
    let temp = prompt(`Введите температуру в городе ${cities[i]}`);
    temperatures.push(Number(temp));
};

let list = document.querySelector('.list');

for (let i = 0; i < cities.length; i++){
    let city = document.createElement('li');
    city.textContent =  `Температура в городе ${cities[i]}  ${temperatures[i]} °C`;
    list.append(city);
};

    let min = Math.min (...temperatures);
    let max = Math.max(...temperatures);
    let minTemp = document.createElement('h3');
    let maxTemp = document.createElement('h3');
    minTemp.textContent = `Минимальная температура: ${min} °C`;
    maxTemp.textContent = `Максимальная температура: ${max} °C`;;
    list.append(minTemp);
    list.append(maxTemp);






