import {col, css, row} from '../utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован')
  }
}

//наследуется от класса block
export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options) //при помощи super инициализируем наши свойство из класса родителя т.е. Block
  }

  //для вывода заголовка
  toHTML() {
    const {tag = 'h1', styles} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
  }
}

//наследуется от класса block
//для вывода изображения
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {imageStyles: is, alt = '', styles} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, css(styles))
  }
}

//наследуется от класса block
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  // для вывода ввиде колонок
  toHTML() {
    const html = this.value.map(col).join('')
    return row(html, css(this.options.styles))
  }
}

//наследуется от класса block
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  //вывод текста
  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles))
  }
}