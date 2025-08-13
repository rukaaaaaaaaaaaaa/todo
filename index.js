'use strict';

const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');

textInput.addEventListener('keydown',e=>{
    const text = textInput.value.trim();
    if(text === '' || e.key !== 'Enter'){
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const input = document.createElement('input');

    li.classList.add('list-item');
    span.textContent = text;
    span.classList.add('todo-text');

    button.textContent = "削除";
    button.type = 'button';
    button.classList.add('delete-button');
    button.addEventListener('click', e => {
        todoList.removeChild(e.target.closest('li'));
    })

    input.type = 'checkbox';

    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    textInput.value = "";
});