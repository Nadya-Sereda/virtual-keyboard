const body = document.body;

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'wrapper-keyboard';
body.appendChild(keyboardContainer);

const title = document.createElement('h1');
title.className = 'keyboard-title';
title.textContent = 'RSS Virtual Keyboard';
title.title = 'The keyboard was created in the Windows operating system.\n To switch the language combination: left ctrl + alt.';
keyboardContainer.appendChild(title);

const keyboardForm = document.createElement('div');
keyboardForm.className = 'keyboard-form';
keyboardContainer.appendChild(keyboardForm);

const formInput = document.createElement('textarea');
formInput.className = 'input-form';
formInput.id =  'input';
formInput.type = 'text';
keyboardForm.appendChild(formInput);

const keyboardItems = document.createElement('div');
keyboardItems.className = 'keyboard-items';
keyboardContainer.appendChild(keyboardItems);

const createEl = (id, text, _class = 'item', tag = 'div', date) => {
  const el = document.createElement(tag)
  el.id = id;
  el.className = _class;
  el.textContent = text;
  document.querySelector('keyboard-items');
  keyboardItems.appendChild(el);
}

createEl('ё', 'ё', 'item item_g4');
createEl('1', '1', 'item item_g4');
createEl('2', '2', 'item item_g4');
createEl('3', '3', 'item item_g4');
createEl('4', '4', 'item item_g4');
createEl('5', '5', 'item item_g4');
createEl('6', '6', 'item item_g4');
createEl('7', '7', 'item item_g4');
createEl('8', '8', 'item item_g4');
createEl('9', '9', 'item item_g4');
createEl('0', '0', 'item item_g4');
createEl('-', '-', 'item item_g4');
createEl('+', '+', 'item item_g4');
createEl('backspace', 'Backspace', 'item item_g9');
createEl('tab', 'Tab', 'item item_g6');
createEl('й', 'й', 'item item_g4');
createEl('ц', 'ц', 'item item_g4');
createEl('у', 'у', 'item item_g4');
createEl('к', 'к', 'item item_g4');
createEl('е', 'е', 'item item_g4');
createEl('н', 'н', 'item item_g4');
createEl('г', 'г', 'item item_g4');
createEl('ш', 'ш', 'item item_g4');
createEl('щ', 'щ', 'item item_g4');
createEl('з', 'з', 'item item_g4');
createEl('х', 'х', 'item item_g4');
createEl('ъ', 'ъ', 'item item_g4');
createEl('delete', 'Del', 'item item_g6');
createEl('capslock', 'Caps Lock', 'item item_g9');
createEl('ф', 'ф', 'item item_g4');
createEl('ы', 'ы', 'item item_g4');
createEl('в', 'в', 'item item_g4');
createEl('а', 'а', 'item item_g4');
createEl('п', 'п', 'item item_g4');
createEl('р', 'р', 'item item_g4');
createEl('о', 'о', 'item item_g4');
createEl('л', 'л', 'item item_g4');
createEl('д', 'д', 'item item_g4');
createEl('ж', 'ж', 'item item_g4');
createEl('э', 'э', 'item item_g4');
createEl('enter', 'Enter', 'item item_g9');
createEl('shift', 'Shift', 'item item_g9');
createEl('я', 'я', 'item item_g4');
createEl('ч', 'ч', 'item item_g4');
createEl('с', 'с', 'item item_g4');
createEl('м', 'м', 'item item_g4');
createEl('и', 'и', 'item item_g4');
createEl('т', 'т', 'item item_g4');
createEl('ь', 'ь', 'item item_g4');
createEl('б', 'б', 'item item_g4');
createEl('ю', 'ю', 'item item_g4');
createEl('.', '.', 'item item_g4');
createEl('arrowup', '\u25B2', 'item item_g4');
createEl('shift', 'Shift', 'item item_g9');
createEl('control', 'Ctrl', 'item item_g5');
createEl('meta', 'Win', 'item item_g5');
createEl('alt', 'Alt', 'item item_g5');
createEl(' ', ' ', 'item item_g24');
createEl('alt', 'Alt', 'item item_g5');
createEl('arrowleft', '\u25C4', 'item item_g4');
createEl('arrowdown', ' \u25BC', 'item item_g4');
createEl('arrowright', ' \u25BA', 'item item_g4');
createEl('control', 'Ctrl', 'item item_g4');

const letters = document.querySelector('.keyboard-items');
const input = document.querySelector('textarea').focus();
var capslock = false;
const keys = document.querySelectorAll('.item');

//const arr = Array(keys.innerHTML.toUpperCase());
//let a = Array(2);
//console.log(arr); 

letters.addEventListener('click', function (event) {
      keys.forEach((item) => {
        item.classList.remove('pressed');
      });
      keys.forEach(item => {
        if (event.target == item) {
      let letter = event.target.innerText;
     
     
        if (letter === 'Caps Lock') {
          letter = 'capslock'; 
        } else if (letter === 'Enter') {
          formInput.value += '\n';
        } else if (letter === 'Backspace') {
          if (formInput.value === '') return;
          formInput.value = formInput.value.slice(0, -1);
        } else if (letter === ' ') {
          formInput.value += ' ';
        } else if (letter === 'Tab') {
          formInput.value += '\t';
        } else  if (letter === 'Ctrl') {
          letter = 'control';
        } else if (letter === 'Del') {
          letter = 'delete';
          formInput.value = '';
        }
        else {
          formInput.value += letter;
        };
      
      //console.log(letter);
      let id = [letter.toLowerCase()];
      letterId  = document.getElementById(id);
      letterId.classList.add('pressed')
    }
  });
});
 
init ();

function init() {
 formInput.addEventListener('keydown', keydownHandler);
 formInput.addEventListener('keyup', keyupHandler);


function keydownHandler(event) {

  document.querySelectorAll('.item').forEach((item) => {
  item.classList.remove('pressed');
  });
  let key = event.key.toLowerCase();
  console.log(key);
  letterKey  = document.getElementById(key);
  letterKey.classList.add('pressed');
}
function keyupHandler(event) {
  let key = event.key.toLowerCase();

  letterKey  = document.getElementById(key);
  letterKey.classList.remove('pressed');
}
};


  const upp = document.querySelector('.item');

  console.log(upp.textContent.toUpperCase());
