let notes = []

        function addNote() {
            let newNote = document.querySelector('#newNote').value;
            notes.push(newNote)
            generateNote()

            document.querySelector('#newNote').value = ''

            if (localStorage.getItem('name') == null) {                
                    localStorage.setItem('name', newNote)                
            }

            if (localStorage.getItem('name') != null) {                
                    localStorage.setItem('name', notes)                 
            }

        }

        function deleteNote() {
            
        }

        function generateNote() {
            let newString = '';
            for (let note of notes) {
                newString += `<div><input type="checkbox"><span>${note}</span><button id="del" onclick="deleteNote()"><img src="./images/del.png"></button></div>`;
            }
            document.querySelector('#container').innerHTML = newString;
        }

        document.addEventListener('DOMContentLoaded', function() {
            generateNote()
            
        })
