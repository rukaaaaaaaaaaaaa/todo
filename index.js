'use strict';

// 入力フィールドとTodoリスト要素を取得
const textInput = document.getElementById('text-input');
const todoList = document.getElementById('todo-list');
// タスクの配列を初期化
let tasks = [];
// 日本語入力中かどうかを判断するフラグ
let isComposing = false;

// 日本語変換中
textInput.addEventListener('compositionstart', () => {
    isComposing = true;
});

// 日本語の入力確定
textInput.addEventListener('compositionend', () => {
    isComposing = false;
});

//Todoリスト追加処理
textInput.addEventListener('keydown',e=>{
    const text = textInput.value.trim();
    if(isComposing || text === '' || e.key !== 'Enter') {
        return;
    }

    //HTML要素作成
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const input = document.createElement('input');

    //CSS用クラス
    li.classList.add('list-item');
    span.textContent = text;
    span.classList.add('todo-text');

    //削除ボタン
    button.textContent = "削除";
    button.type = 'button';
    button.classList.add('delete-button');
    button.addEventListener('click', e => {
        todoList.removeChild(e.target.closest('li'));
    })

    //チェックボックス
    input.type = 'checkbox';

    // 作成した要素をliに追加し、それをtodoListに追加
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

    // 入力フィールドを空にする
    textInput.value = "";

    // タスクの配列にも追加（配列には文字列のみ格納）
    tasks.push(text);

    //ローカルストレージに保存
    localStorage.removeItem('tasks');
    localStorage.setItem('tasks', JSON.stringify(tasks));
});