import {Site} from './site'
import {Sidebar} from './sidebar'

export class App {
  constructor(model) {
    this.model = model
  }
  

  //функция для вывода элементов на сайт
  init() {
    const site = new Site('#site') //передаем нащ селектор из index.html 
    console.log(site)

    site.render(this.model); //рендерим наш сайт блок site
     //функция которое следит за обновлением
    const updateCallback = newBlock => {
      this.model.push(newBlock)
       site.render(this.model)
    }

    new Sidebar('#panel', updateCallback)
  }
}