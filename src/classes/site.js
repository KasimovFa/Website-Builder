export class Site { 
    constructor(selector) {
      this.$el = document.querySelector(selector) // будет храниться id из index.html
    }
    
    //добавляем элемент на сайты из модели
    render(model) {
      this.$el.innerHTML = '' //чистим шаблон, чтобы не повторялось
      model.forEach(block => {
        this.$el.insertAdjacentHTML('beforeend', block.toHTML())
      })
    }
  }