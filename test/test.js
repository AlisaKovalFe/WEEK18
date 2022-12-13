function typeMe() {
    if (!Number(document.querySelector('input').value)) {
        document.querySelector('input').value = 'это не число'
    }
}

