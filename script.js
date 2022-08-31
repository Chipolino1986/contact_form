"use strict"

function publishData() {
    let name = document.getElementById('name').value.toUpperCase();
    let age = document.getElementById('age').value;
    let color = document.getElementById('color').value;
    let date = document.getElementById('date').value;
    let password = document.getElementById('pin').value;
    let checkbox = document.getElementById('check').value;
  

    document.getElementById('p').innerHTML = 'Ваши данные:' 
    + '<br>' + 'Ваше имя: ' + name + '<br>' + 'Ваш возраст: ' + age + ' лет' + '<br>'
    + 'Ваш любимый цвет: ' + color + '<br>' + 'Ваш пароль: ' + password + '<br>' + 'Ваш день рождения: '
    + date + '<br>' + 'Вы согласились на слежку !';
};