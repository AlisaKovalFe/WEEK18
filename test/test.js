// function typeMe() {
//     if (!Number(document.querySelector('input').value)) {
//         document.querySelector('input').value = 'это не число'
//     }
// }

function typeMe() {
    let input = document.querySelector('input')
    let inputFormat = /^[1-9]+[0-9]*$/
    if (!input.value.match(inputFormat)) {
        document.querySelector('input').value = 'это не число'
    } else {
        document.querySelector('input').value = 'спасибо, это число'
    }
}

// function double(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != null) {
//             let n = arr[i] * 2
//             newArr.push(n)
//         }        
//     }
//     return newArr
// }

// console.log(double([1, 2, null, 7, 8, null, 3]));

// function double(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {        
//         newArr = arr.slice().filter((n) => n !=null).map((n) => n * 2)     
//     }
//     return newArr
// }

// console.log(double([1, 2, null, 7, 8, null, 3]));




// валидация кредитки
// function checkCreditCard() {
//     let creditCard = document.getElementById('creditCard')
//     let creditFormat = /^\b[3-6]\d{3}[ \-_.]?(\d{4}[ \-_.]?){2}\d{4}\b$/
//     if (!creditCard.value.match(creditFormat) ) {
//         console.log(('Формат кредитной карты неверное указан'))
//     } else {
//         console.log(('Ваша карта прошла проверку'))
//     }
// }


// document.querySelector('#button').addEventListener('click', checkCreditCard)