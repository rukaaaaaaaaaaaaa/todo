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

    li.classList.add('list-item');
    span.textContent = text;
    span.classList.add('todo-text');

    button.textContent = "削除";
    button.type = 'button';
    button.classList.add('delete-button');
    button.addEventListener('click', e => {
        todoList.removeChild(e.target.closest('li'));
    })

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    textInput.value = "";
});