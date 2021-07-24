// функция для отображения html элемента на странице ввиде столбцов
export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
  }
  
// функция для отображения html элемента на странице ввиде строк 
  export function col(content) {
    return `<div class="col-sm">${content}</div>`
  }
  

  // функция преобразования объектов в строку с css свойствами
  export function css(styles = {}) {
    if (typeof styles === 'string') return styles //проверяем  является ли данные строкой, если является возращаем стили иначе приводим в строку разделяем 
    const toString = key => `${key}: ${styles[key]}`
      return Object.keys(styles).map(toString).join(';')
  }
  

  export function block(type) {
    return `
      <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
          <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
          <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
      </form>
      <hr />
    `
  }