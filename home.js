import {users, myLearning} from '../general.js'
import { courseList } from './general.js';

const params = new URLSearchParams(window.location.search);
const email = params.get("email")
let userSession

users.forEach(user => {
    if (email === user.email){
        userSession = user
        console.log(userSession)
    } else {
        console.log("user not found")
    }
});

let username = userSession.username

document.querySelector('.js-mainHeader').innerHTML = `welcome ${username} `;


let allCourses = '';


courseList.forEach((course) =>{
    allCourses += `<div class="courseCard">
                    <h1 class="js-link"><a href="html-courses.html?pageId=${course.code}">${course.title}</a></h1>
                    <button class="js-button" data-course-title=${course.title} data-course-code=${course.code}>Enroll</button>
                </div>`
})



function renderAllCourses() {
    document.querySelector('.js-courseList').innerHTML= allCourses;

}

renderAllCourses()

//make enroll button active
document.querySelectorAll('.js-button')
.forEach((button)=>{
    button.addEventListener('click',()=>{
        const title = button.dataset.courseTitle;
        const code = button.dataset.courseCode;
        console.log(button.dataset)
        addCourse(title,code);
           
    })
})

function addCourse(title,code){
    myLearning.push({
     title,
     code,
     progress : 0   
    })
    console.log(myLearning)
    let activeCourses = '';
    myLearning.forEach((course)=>{
        activeCourses +=` <div class ="courseCard"><a href="course-launch.html?pageId=${course.code}">
            <p>${course.title}</p>
            <p>Progress = ${course.progress}%</p>
        </a></div>`
        document.querySelector('.js-myLearning').innerHTML=activeCourses;
    })
}