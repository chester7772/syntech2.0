
import {users} from '../general.js'

document.querySelector('.js-submitButton').addEventListener('click',()=>{
    createNewUser()
})

function createNewUser() {
    let matchingEmail;
    let emailInput = document.querySelector('.emailInput')
    let usernameInput = document.querySelector('.usernameInput')
    let passwordInput = document.querySelector('.passwordInput')
    let email
    let username = usernameInput.value;
    let password = passwordInput.value;

    users.forEach((user)=>{
        email = emailInput.value;
        
        if(user.email === email ){
            matchingEmail = email;
        }
    })

    if(matchingEmail){
        document.querySelector('.js-message').innerHTML=`User already exists Proceed to login <a href="login.html">Login</a>`
        console.log(users)
    } else if (!matchingEmail){
        users.push({email,
            username,
            password
        })
        document.querySelector('.js-message').innerHTML=`User created. 
        Proceed to login <a href="login.html">Login</a>`
        console.log(users)
    }

    emailInput.value='';
    usernameInput.value='';
    passwordInput.value='';
}

