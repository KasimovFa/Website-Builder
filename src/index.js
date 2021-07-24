import {model} from './model' //получаем нашу модель
import {App} from './classes/app' //получаем класс App из файла app.js
import './styles/style.css' //стили 

//передаем нашу модель и запускаем функцию вывод элементов на страницу
new App(model).init();
