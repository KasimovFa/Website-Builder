// экспортируем модель нашей таблицы
/*import {model} from './model';
console.log(model)
// экспортируем функции
import {templates} from './templates';
// экспортируем стили для удобной удобной работы в js
import '/styles/style.css';


const site = document.getElementById('site');


model.forEach(block => {
    let html = '';
    const toHTML = templates[block.type]; //получаем нужную функцию, например в 1ой итерации. Значит получаем функцию title
    if (toHTML) {
      site.insertAdjacentHTML('beforeend', toHTML(block)); // в 1ой итерации передаем в функ - ии  type: title
    }
});*/

import {model} from './model' //получаем нашу модель т.е. объект model, из файла  model.js
import {App} from './classes/app' //получаем класс App мз файла app.js
import './styles/style.css' //стили 

//передаем нашу модель и запускаем функцию вывод элементов на страницу
new App(model).init();
