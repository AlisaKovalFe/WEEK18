let notes = []

document.addEventListener('DOMContentLoaded', function() {
    let getMyNewNote = localStorage.getItem('MyNewNote')
    if (getMyNewNote != null) {                
        document.querySelector('#container').innerHTML = getMyNewNote                    
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

function deleteNote(sender) {
    sender.parentElement.classList.toggle('hidden')
}


