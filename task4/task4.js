let notes = []

document.addEventListener('DOMContentLoaded', function() {
    let getMyNewNote = localStorage.getItem('MyNewNote')
    if (getMyNewNote != null) {
        notes = getMyNewNote.split(',')
        generateNote()               
    }   
})

function addNote() {
    let newNote = document.querySelector('#newNote');
    if (newNote.validity.valueMissing) {    
        document.querySelector('#newNote').placeholder = 'вы ничего не ввели'        
    }

    if (!newNote.validity.valueMissing) {
        let newNoteFormat = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
        if (!newNote.value.match(newNoteFormat)) {
            document.querySelector('#newNote').placeholder = 'неверный формат'           
        } else {
            notes.push(newNote.value)
            generateNote()
            localStorage.setItem('MyNewNote', notes)
            document.querySelector('#newNote').placeholder = ''
        }
    }

    document.querySelector('#newNote').value = ''

    if (localStorage.getItem('MyNewNote') == null) {                
            localStorage.setItem('MyNewNote', notes)                
    }

    if (localStorage.getItem('MyNewNote') != null) {                
            localStorage.setItem('MyNewNote', notes)                 
    }
}

function generateNote() {
    let newString = '';
    for (let note of notes) {
        newString += `<div id="optional"><input type="checkbox"><span>${note}</span><button id="del" onclick="deleteNote(this)">Удалить</button></div>`;
    }
    document.querySelector('#container').innerHTML = newString;
}

function deleteNote() {
    let optional = document.querySelector('#optional')
    optional.classList.toggle('hidden') 
}



// Тоже работает, но код без массивов
// function addNote() {
//     let noteCounter = localStorage.length
//     let newNote = document.querySelector('#newNote');

//     if (newNote.validity.valueMissing) {    
//         document.querySelector('#newNote').placeholder = 'вы ничего не ввели'        
//     }

//     if (!newNote.validity.valueMissing) {
//         let newNoteFormat = /^[а-яА-ЯёЁa-zA-Z0-9]+$/
//         if (!newNote.value.match(newNoteFormat)) {
//             document.querySelector('#newNote').placeholder = 'неверный формат'           
//         } else {
//             localStorage.setItem(noteCounter, newNote.value)
//             document.querySelector('#newNote').placeholder = ''
//         }
//     }
    
//     document.querySelector('#newNote').value = ''

//     generateNote()
// }

// function generateNote() {
//     let newString = '';
//     for (let itemKey = 0; localStorage.getItem(itemKey) != null; itemKey++) {
//         const note = localStorage.getItem(itemKey)
//         newString += `<div id="optional"><input type="checkbox"><span>${note}</span><button id="del" onclick="deleteNote(this)">Удалить</button></div>`;
//     }
//     document.querySelector('#container').innerHTML = newString;
// }

// document.addEventListener('DOMContentLoaded', function() {
//     generateNote()
// })


// function deleteNote() {
//     let optional = document.querySelector('#optional')
//     optional.classList.toggle('hidden') 
// }



// это работает, надо еще валидацию добавить

