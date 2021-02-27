const user1 = document.getElementById('user1');
const user2 = document.getElementById('user2');

const btnUser1 = document.getElementById('btnUser1');
const btnUser2 = document.getElementById('btnUser2');
const quitar = document.getElementById('quitar');

btnUser1.addEventListener('click', function () {
    user2.classList.toggle('invisible')    
})

btnUser2.addEventListener('click', function () {
    user1.classList.toggle('invisible')    
})