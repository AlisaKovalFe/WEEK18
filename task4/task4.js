// function addNote() {
//     let noteCounter = localStorage.length
//     let newNote = document.querySelector('#newNote').value;
//     localStorage.setItem( noteCounter, newNote)
//     document.querySelector('#newNote').value = ''

//     generateNote()
// }

// function generateNote() {
//     let newString = '';
//     for (let itemKey = 0; localStorage.getItem(itemKey) != null; itemKey++) {
//         const note = localStorage.getItem(itemKey)
//         newString += `<div><input type="checkbox"><span>${note}</span><button id="del" onclick="deleteNote(this)">Удалить</button></div>`;
//     }
//     document.querySelector('#container').innerHTML = newString;
// }

// document.addEventListener('DOMContentLoaded', generateNote)


// function deleteNote(sender) {
//     sender.parentElement.classList.toggle('hidden') 
// }






// 'это не работала как надо

let notes = []

document.addEventListener('DOMContentLoaded', function() {
    let getMyNewNote = localStorage.getItem('MyNewNote')
    if (getMyNewNote != null) {
        let arr = getMyNewNote.split(',')
        let newString = '' 
        for (let note of arr) {
            newString += `<div><input type="checkbox"><span>${note}</span><button id="del" onclick="deleteNote(this)">Удалить</button></div>`;
        }             
        // document.querySelector('#container').innerHTML = getMyNewNote.split(',')    
        document.querySelector('#container').innerHTML = newString;                
    }   
})

function addNote() {
    let newNote = document.querySelector('#newNote').value;
    notes.push(newNote)

    document.querySelector('#newNote').value = ''

    if (localStorage.getItem('MyNewNote') == null) {                
            localStorage.setItem('MyNewNote', notes)                
    }

    if (localStorage.getItem('MyNewNote') != null) {                
            localStorage.setItem('MyNewNote', notes)                 
    }

    generateNote(newNote)

}

function generateNote() {
    let newString = '';
    for (let note of notes) {
        newString += `<div><input type="checkbox"><span>${note}</span><button id="del" onclick="deleteNote(this)">Удалить</button></div>`;
    }
    document.querySelector('#container').innerHTML = newString;
}