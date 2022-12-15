let errors = [];

function checkValidity(input) {
    let validity = input.validity
    input.min = 12
    input.max = 100
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }

    // if (!validity.typeMisMatch && !validity.valueMissing) {
    //     errors.push('Введен неправильный тип данных')
    // }

    if (validity.valid && !validity.valueMissing) {
        let person = document.getElementById('name')        
        let surname = document.getElementById('surname')
        let town = document.getElementById('town')

        let personFormat = /^[а-яА-ЯёЁa-zA-Z]+$/        
        let townFormat = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/ 

        if (!person.value.match(personFormat) ) {
            errors.push('Неверный формат ввода имени');
        }   
        if (!surname.value.match(personFormat) ) {
            errors.push('Неверный формат ввода фамилии');
        }   
        if (!town.value.match(townFormat) ) {
            errors.push('Неверный формат ввода города');
        }             
    }
    

    if (validity.rangeUnderflow) {        
        errors.push('Возраст должен быть не менее чем ' + input.min)
    }

    if (validity.rangeOverflow) {        
        errors.push('Возраст должен быть не менее чем ' + input.max)
    }

    if (validity.patternMismatch) {
        errors.push('Неверный формат номера телефона')
    }

    if (input.id === 'email' && !validity.valueMissing) {
        let email = document.getElementById('email')
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        if (!email.value.match(mailFormat)) {
            errors.push('Неверный формат e-mail');
        }        
    }

    if (input.id === 'password' && !validity.valueMissing ) {
        let password = document.getElementById('password')
        let passwordFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
        password.minLength = 3
        password.maxLength = 8
        if (validity.tooShort) {
                errors.push('Пароль не должен быть короче чем ' + password.minLength)            
        }

        if (validity.tooLong) {
            errors.push('Пароль не должен быть длинне чем ' + password.maxLength)            
    }

        if (!password.value.match(passwordFormat)) {
            errors.push('Неверный формат пароля')
        }
    }

    if (input.id === 'repeatPassword' && !validity.valueMissing) {
        let password = document.getElementById('password')
        let repeatPassword = document.getElementById('repeatPassword')
        if (repeatPassword.value !== password.value) {
            errors.push('Проверка пароля не прошла') 
        }
    }
}

function check() {
    errors = [];

    let inputs = document.querySelectorAll('input');

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorMessage').innerHTML = errors.join('. <br>')    
}