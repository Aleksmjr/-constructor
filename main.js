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
// дотягиваемся еще раз до нашего конструктора и создаем квадратики
document.addEventListener('DOMContentLoaded', () => {
  // Создаем квадрат 100x100px
  const square = new DomElement('.square', 100, 100, 'green');
  const squareElement = square.getElement('Леша Маскаев пытается убежать');

  // Устанавливаем дополнительные стили (позицию и начальное положение)
  squareElement.style.position = 'absolute';
  squareElement.style.left = '600px';
  squareElement.style.top = '100px';

  let posX = 600;
  let posY = 100;
  const step = 20; //шаг, перенес из свитчкейса
  let squareSize = 100; // размер квадрата для того, чтобы не уйти за пределы

  // событие по кнопке (пусть шагает себе )

  document.addEventListener('keydown', (event) => {
    const maxWidth = window.innerWidth - squareSize;
    const maxHeight = window.innerHeight - squareSize;

    let reachedBorder = false; // Флаг (прикол для Семы)

    switch (event.key) {
      case 'ArrowUp':
        if (posY > 0) posY -= step;
        else reachedBorder = true;
        break;
      case 'ArrowDown':
        if (posY < maxHeight) posY += step;
        else reachedBorder = true;
        break;
      case 'ArrowLeft':
        if (posX > 0) posX -= step;
        else reachedBorder = true;
        break;
      case 'ArrowRight':
        if (posX < maxWidth) posX += step;
        else reachedBorder = true;
        break;
    }
    if (reachedBorder) {
      alert('CЬ*БАТЬ ПЫТАЕШЬСЯ?');
    }
    squareElement.style.left = posX + 'px';
    squareElement.style.top = posY + 'px';
  });
});
