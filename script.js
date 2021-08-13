'use strict'

function expand () {
    if(!document.getElementById('list').classList.contains('show')) {
        document.getElementById('list').classList.add('show');
    } else {
        document.getElementById('list').classList.remove('show');
    }
}
