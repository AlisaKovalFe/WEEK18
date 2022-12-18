let button = document.querySelector('#send')
let comment = document.querySelector('#comment')
let container = document.querySelector('#container')


let commentsAll = []
let person

document.addEventListener('DOMContentLoaded', function() {
    person = localStorage.getItem('person')
    let getNewComment = localStorage.getItem('newComment')
    if (person != null && getNewComment != null) {
        document.querySelector('#person').value = person
        commentsAll = getNewComment.split(',')
        addComment()                   
    } 

    let getImage = localStorage.getItem('avatar')
    if (getImage != null) {
        document.querySelector('#img').src = getImage
        let img = document.querySelector('#img')
        img.classList.add('imgSize')
        let addAvaButton = document.querySelector('#addAva')
        addAvaButton.classList.toggle('hidden')
    }
})

function addAva() {
    let addAvaButton = document.querySelector('#addAva')

    if (localStorage.getItem('avatar') == null) {         
        let img = document.querySelector('#img') 
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg'  
        localStorage.setItem('avatar', img.src)
        img.classList.add('imgSize')
    } 
    addAvaButton.classList.toggle('hidden')    
}


function checkSpam() {
    let checkComment = comment.value
    
    comment.value = '' 
    container.innerHTML = ''
    commentsAll.push(checkComment)
    addComment() 

    if (localStorage.getItem('newComment') == null) {                
        localStorage.setItem('newComment', commentsAll)                
    }

    if (localStorage.getItem('newComment') != null) {                
        localStorage.setItem('newComment', commentsAll)                 
    }

    if (localStorage.getItem('person') == null) {                
        localStorage.setItem('person', person)                
    }

}   

function addComment() {
    person = document.querySelector('#person').value
    for (let comment of commentsAll) {
        if (comment.search('/viagra/gi') || comment.search('/xxx/gi')) {
            let filter = '***'
            let checkResultFirst = comment.replace(/viagra/gi, filter)
            console.log(checkResultFirst);
            let checkResultSecond = checkResultFirst.replace(/xxx/gi, filter)

            container.innerHTML += `<div class="out"><div class="inner inner_color" type="text">${person}:</div><div class="inner" type="text">${checkResultSecond}</div></div>`            
        }
    } 
}

button.addEventListener('click', checkSpam)

