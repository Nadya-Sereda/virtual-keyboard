const body = document.body;
const diffLang = {
  'en': ['~','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'z', 'x', 'c', 'v','b', 'n', 'm', '<', '>', '?'],
  'ru': ['ё','й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м','и', 'т', 'ь', 'б', 'ю', '.']
 };

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'wrapper-keyboard';
body.appendChild(keyboardContainer);

const title = document.createElement('h1');
title.className = 'keyboard-title';
title.textContent = 'RSS Virtual Keyboard';
title.title = 'The keyboard was created in the Windows operating system.\n To switch the language combination: Shift.';
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

const createEl = (id, text, _class = 'item', tag = 'div') => {
  const el = document.createElement(tag)
  el.id = id;
  el.className = _class;
  el.textContent = text;
  document.querySelector('keyboard-items');
  keyboardItems.appendChild(el);
}

createEl('ё', `ё`, 'item item_g4 letter');
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
createEl('й', 'й', 'item item_g4 letter');
createEl('ц', 'ц', 'item item_g4 letter');
createEl('у', 'у', 'item item_g4 letter');
createEl('к', 'к', 'item item_g4 letter');
createEl('е', 'е', 'item item_g4 letter');
createEl('н', 'н', 'item item_g4 letter');
createEl('г', 'г', 'item item_g4 letter');
createEl('ш', 'ш', 'item item_g4 letter');
createEl('щ', 'щ', 'item item_g4 letter');
createEl('з', 'з', 'item item_g4 letter');
createEl('х', 'х', 'item item_g4 letter');
createEl('ъ', 'ъ', 'item item_g4 letter');
createEl('delete', 'Del', 'item item_g6');
createEl('capslock', 'Caps Lock', 'item item_g9');
createEl('ф', 'ф', 'item item_g4 letter');
createEl('ы', 'ы', 'item item_g4 letter');
createEl('в', 'в', 'item item_g4 letter');
createEl('а', 'а', 'item item_g4 letter');
createEl('п', 'п', 'item item_g4 letter');
createEl('р', 'р', 'item item_g4 letter');
createEl('о', 'о', 'item item_g4 letter');
createEl('л', 'л', 'item item_g4 letter');
createEl('д', 'д', 'item item_g4 letter');
createEl('ж', 'ж', 'item item_g4 letter');
createEl('э', 'э', 'item item_g4 letter');
createEl('enter', 'Enter', 'item item_g9');
createEl('shift', 'Shift', 'item item_g9');
createEl('я', 'я', 'item item_g4 letter');
createEl('ч', 'ч', 'item item_g4 letter');
createEl('с', 'с', 'item item_g4 letter');
createEl('м', 'м', 'item item_g4 letter');
createEl('и', 'и', 'item item_g4 letter');
createEl('т', 'т', 'item item_g4 letter');
createEl('ь', 'ь', 'item item_g4 letter');
createEl('б', 'б', 'item item_g4 letter');
createEl('ю', 'ю', 'item item_g4 letter');
createEl('.', '.', 'item item_g4 letter');
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

letters.addEventListener('click', function (event) {
  console.log(event.target);
  keys.forEach((item) => {
    item.classList.remove('pressed');
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
		  letter = 'space';
          formInput.value += ' ';
        } else if (letter === 'Tab') {
          formInput.value += '\t';
        } else  if (letter === 'Ctrl') {
          letter = 'control';
        } else if (letter === 'Del') {
          letter = 'delete';
          formInput.value = '';
        }
		else if (letter === 'Shift') {
		  formInput.value;
		}
		else if (letter === 'Alt') {
		  formInput.value;
		}
		else if (letter === '\u25BA') {
		  letter = 'arrowright';
		  formInput.value;
		}
		else if (letter === '\u25BC') {
		  letter = 'arrowdown';
		  formInput.value;
		}
		else if (letter === '\u25C4') {
		  letter = 'arrowleft';
		  formInput.value;
		}
		else if (letter === '\u25B2') {
		  letter = 'arrowup';
		  formInput.value;
		}
		else if (letter === 'Win') {
		  formInput.value;
		letter = 'meta'; 
		}
        else {
          formInput.value += letter;
        };
        
      event.target.classList.add('pressed'); 
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
  letterKey  = document.getElementById(key);
  letterKey.classList.add('pressed');
}

function keyupHandler(event) {
  let key = event.key;

  letterKey  = document.getElementById(key);
  letterKey.classList.remove('pressed');

}
};

// Переключение на заглавные буквы:

const letterChange = document.querySelectorAll('.letter');
const capsLockKey = document.getElementById('capslock');
let flagUp = 0;

capsLockKey.addEventListener('click', () => {
  if (flagUp == 0) {
    includesUpperCase();
  } else {
    includesLowerCase();
  }
});

function includesUpperCase() {
  letterChange.forEach(element => {
    element.innerHTML = element.innerHTML.toUpperCase();
    flagUp = 1;
  });
}

function includesLowerCase() {
  letterChange.forEach(element => {
    element.innerHTML = element.innerHTML.toLowerCase();
    flagUp = 0;
  });
}

//замена на английский язык:

const changeLangKey = document.querySelector('#shift');
changeLangKey.addEventListener('click', changeLang);

function changeLang() {
   changeLangKey.classList.toggle('en');

  if(changeLangKey.classList.contains('en')) {
        for (let i = 0; i < diffLang.en.length; i++) {
       letterChange[i].innerHTML = diffLang.en[i];
    }
  } else {
    for (let i = 0; i < diffLang.ru.length; i++) {
       letterChange[i].innerHTML = diffLang.ru[i];
    }
  }
};
