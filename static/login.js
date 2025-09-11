import {users} from '../general.js'

let emailInput= document.querySelector('.emailInput')
let passwordInput= document.querySelector('.passwordInput')


const button =document.querySelector('.js-submitButton')
button.addEventListener('click', ()=>{
    button.dataset.email= emailInput.value;
    let email =button.dataset.email
    console.log(emailInput.value)
    window.location.href= `home.html?email=${email}`
})