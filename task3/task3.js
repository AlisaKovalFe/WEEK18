let button = document.querySelector('#send')
let comment = document.querySelector('#comment')
let container = document.querySelector('#container')


commentsAll = []

document.addEventListener('DOMContentLoaded', function() {
    let personSaved = localStorage.getItem('person')
    let getNewComment = localStorage.getItem('newComment')
    if (personSaved != null && getNewComment != null) {
        document.querySelector('#person').value = personSaved

        let arr = getNewComment.split(',')
        let newString = '' 
        for (let comment of arr) {

            if (comment.search('/viagra/gi') || comment.search('/xxx/gi')) {
                let filter = '***'
                let checkResultFirst = comment.replace(/viagra/gi, filter)
                console.log(checkResultFirst);
                let checkResultSecond = comment.replace(/xxx/gi, filter)
    
                newString += `<div class="out"><div class="inner inner_color" type="text">${personSaved}:</div><div class="inner" type="text">${checkResultFirst}</div></div>`            
            }
            }                
        document.querySelector('#container').innerHTML = newString;           
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
    let person = document.querySelector('#person').value

    comment.value = '' 
    container.innerHTML = ''
    commentsAll.push(checkComment)


    for (let comment of commentsAll) {
        if (comment.search('/viagra/gi') || comment.search('/xxx/gi')) {
            let filter = '***'
            let checkResultFirst = comment.replace(/viagra/gi, filter)
            console.log(checkResultFirst);
            let checkResultSecond = comment.replace(/xxx/gi, filter)

            container.innerHTML += `<div class="out"><div class="inner inner_color" type="text">${person}:</div><div class="inner" type="text">${checkResultFirst}</div></div>`            
        }
    }   

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


button.addEventListener('click', checkSpam)

