'use strict'

function expand () {
    if(!document.getElementById('list').classList.contains('show')) {
        document.getElementById('list').classList.add('show');
    } else {
        document.getElementById('list').classList.remove('show');
    }
}

function toggledark () {
    if(!document.body.classList.contains('dark-theme')) {
        document.body.classList.add('dark-theme');
        document.getElementById('icon').classList.remove('fa-sun')
        document.getElementById('icon').classList.add('fa-moon')
    } else {
        document.body.classList.remove('dark-theme');
        document.getElementById('icon').classList.remove('fa-moon')
        document.getElementById('icon').classList.add('fa-sun')
    }
}
