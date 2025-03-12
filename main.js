// с большой буквы класс - значит КОНСТРУКТОР БАТЬ
function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height + 'px';
  this.width = width + 'px';
  this.bg = bg;
  this.fontSize = fontSize + 'px';
  this.getElement = function (text) {
    let element;
    // если стартвиф (начинается с ) точки
    if (this.selector.startsWith('.')) {
      element = document.createElement('div'); //создаем див
      element.classList.add(this.selector.slice(1)); // элементу добавляется класс и слайсом убираем точку
    } // если начинается с решетки
    else if (this.selector.startsWith('#')) {
      element = document.createElement('p'); // создали параграф
      element.id = this.selector.slice(1);
    } else {
      return;
    }

    // Применяем стили с помощью cssText
    element.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background-color: ${this.bg};
      font-size: ${this.fontSize};
    `;
    // Вставляем текст в элемент
    element.innerText = text;

    // добавляем элемент на страницу
    document.body.appendChild(element);
    return element;
  };
}
// создаем новый обьект
const blockElement = new DomElement('.block', 100, 500, 'lightblue', 24);
const paragraphElement = new DomElement('#btn', 100, 500, 'yellow', 24);

// создаем элементы на странице
blockElement.getElement('Создал короче блок с классом');
paragraphElement.getElement('Создал короче блок с ID');
