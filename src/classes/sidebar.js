import {block} from '../utils'
import {TextBlock, TitleBlock} from './blocks'

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector)
    this.update = updateCallback //сохранненое функция updateCallback

    this.init()
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template)
    this.$el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('text'),
      block('title')
    ].join('')
  }
  
  //метод получение данных их формы и их добавление
  add(event) {
    event.preventDefault(); // чтобы страница не перезагружалось
    
    //получаем данные из формы
    const type = event.target.name
    const value = event.target.value.value
    const styles = event.target.styles.value
    
    //получаем объект с value = text или title и стили
    const newBlock = type === 'text' // если тип текст,то обращаемся к классу ТextBlock иначе TitleBlock
      ? new TextBlock(value, {styles})
      : new TitleBlock(value, {styles})

    this.update(newBlock)

    event.target.value.value = ''
    event.target.styles.value = ''
  }
}