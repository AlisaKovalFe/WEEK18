let button = document.querySelector('button')
let comment = document.querySelector('#comment')
let container = document.querySelector('#container')
let img = document.querySelector('#img')

commentsAll = []

document.addEventListener('DOMContentLoaded', function() {
    let personSaved = localStorage.getItem('person')
    if (personSaved != null) {
        document.querySelector('#person').value = personSaved
    }

    let getNewComment = localStorage.getItem('newComment')
    if (getNewComment != null) {                
        document.querySelector('#container').innerHTML = getNewComment                    
    } 

    // let getNewAva = localStorage.getItem('img')
    // if (getNewAva != null) {                
    //     document.querySelector('#img').src = getNewAva                    
    // } 
})

// function addAvatar() {
//     let t = prompt('Введите url аватарки', 'url')
//     img.src = t


// }


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

            container.style.fontSize = '1rem'
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

    if (localStorage.getItem('person') != null) {                
        localStorage.setItem('person', person)                
    }
    

}   


button.addEventListener('click', checkSpam)

