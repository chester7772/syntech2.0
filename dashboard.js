import { courseList,moduleList, myLearning, courseContent, careerPath,updateUser  } from './general.js';
let cards = document.querySelectorAll('.cards');
let htmlCourseContent= '';
let lessonContent='';
const username = "{{username}}";

updateUser()


//course content display
let length= courseContent.length
courseContent.forEach((course)=>{
    course.content.forEach((lesson, index)=>{
        lessonContent+= `<div class="js-contentCard contentCard" data-lesson-title = >
        <p>${index+1}/${length} </p>
        <div> ${lesson}</div>
        <button class='js-prevButton prevButton'>Prev</button>
        <button class='js-nextButton nextButton'>Next</button>
    <div>`
    })
    htmlCourseContent+= `<div><h1>${course.title} </h1>
    <p>${lessonContent}</p>`
    
})

//document.querySelector('.js-htmlCourseContent').innerHTML= htmlCourseContent


let htmlCourseLessons = document.querySelectorAll('.js-courseContent')
console.log(htmlCourseLessons)

htmlCourseLessons.forEach(lesson=>{
    
    if(index<1){
        lesson.classList.add('showLesson')
    }
    console.log("added")
})






//codes to display all courses and careers
let allCourses = '';
let allCareers = '';

courseList.forEach((course) =>{
    allCourses += `<div class= 'courseCard'>
                        <div class=" js-courseCard" data-course-code=${course.code}>
                            <h1 class="js-link">${course.title}</a></h1> 
                        </div>
                        <button class="js-enrollButton enrollButton" data-course-title=${course.title} data-course-code=${course.code} data-course-modules='${JSON.stringify(course.modules)}'>Enroll</button>
                    </div>`
})

document.querySelector('.js-courseList').innerHTML= allCourses;

careerPath.forEach((career) =>{
    allCareers += `<div class= 'courseCard'>
                        <div class=" js-courseCard" data-course-code=${career.code}>
                            <h1 class="js-link">${career.title}</a></h1> 
                        </div>
                        <button class="js-enrollButton enrollButton" data-course-title=${career.title} data-course-code=${career.code}>Enroll</button>
                    </div>`
})

document.querySelector('.js-careerList').innerHTML= allCareers;



//on click action for each course
let htmlModules = '';
let cssModules ='';
let jsModules ='';

moduleList.forEach((module)=>{
if(module.code==='html'){
    htmlModules += `<div class= 'moduleCard js-moduleCard' data-title = ${module.title} data-module-code = ${module.code}>
        <h1>${module.title}</h1>
        <p>Progress: ${module.progress}</p>
    </div>`
}else if(module.code==='css'){
    cssModules += `<div class= 'moduleCard js-moduleCard' data-title = ${module.title} data-module-code = ${module.code}>
        <h1>${module.title}</h1>
        <p>Progress: ${module.progress}</p>
    </div>`
}else if(module.code==='js'){
    jsModules += `<div class= 'moduleCard js-moduleCard' data-title = ${module.title} data-module-code = ${module.code}>
        <h1>${module.title}</h1>
        <p>Progress: ${module.progress}</p>
    </div>`
}
})

document.querySelectorAll('.js-courseCard').forEach((courseCard)=>{
    courseCard.addEventListener('click',()=>{
        let id = courseCard.dataset.courseCode + 'Modules';
        if(id === "htmlModules"){
            cards.forEach(card=>{
                card.classList.remove('show')
            })
            document.querySelector('.js-courseList').classList.add('show')
            document.querySelector('.js-htmlRightModules').classList.add('show')
        } else if(id === "cssModules"){
            cards.forEach(card=>{
                card.classList.remove('show')
            })
            document.querySelector('.js-courseList').classList.add('show')
            document.querySelector('.js-cssRightModules').classList.add('show')

        }else if(id === "jsModules"){
            cards.forEach(card=>{
                card.classList.remove('show')
            })
            document.querySelector('.js-courseList').classList.add('show')
            document.querySelector('.js-jsRightModules').classList.add('show')
        }

    })
})

//display modules
if(htmlModules){
    document.querySelector('.js-htmlModules').innerHTML= htmlModules
} 
if(cssModules){
    document.querySelector('.js-cssModules').innerHTML= cssModules
}if(jsModules){
    document.querySelector('.js-jsModules').innerHTML= jsModules
}

//right
/*
if(htmlModules){
    document.querySelector('.js-htmlRightModules').innerHTML= htmlModules
} 
if(cssModules){
    document.querySelector('.js-cssRightModules').innerHTML= cssModules
}if(jsModules){
    document.querySelector('.js-jsRightModules').innerHTML= jsModules
}
*/



//active class to nav buttons
let buttons = document.querySelectorAll('.js-buttons')
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        buttons.forEach(b => b.classList.remove("buttonOnclick"))
        button.classList.add("buttonOnclick")
    })
})

//make nav buttons function 

let myLearningNav = document.querySelector('.js-myLearning')
myLearningNav.addEventListener('click',()=>{
    cards.forEach(card=>{
        card.classList.remove('show')
    })
    document.querySelector('.js-activeList').classList.add('show')
})
document.querySelector('.js-activeList').classList.add('show')

document.querySelector('.js-courses').addEventListener('click',()=>{

    cards.forEach(card=>{
        card.classList.remove('show')
    })
    document.querySelector('.js-coursesContainer').classList.add('show')
})



//enroll button

document.querySelectorAll('.js-enrollButton')
.forEach((button)=>{
    button.addEventListener('click',()=>{
        const title = button.dataset.courseTitle;
        const code = button.dataset.courseCode;
        const modules = button.dataset.courseModules;
        console.log(button.dataset)
        addCourse(title,code,modules);
           
    })
})


function addCourse(title,code,modules){
    myLearning.push({
     title,
     code,
     modules  
    })
    console.log(myLearning)
    displayActiveCourses()
    
}


//display myLearning

displayActiveCourses()
function displayActiveCourses(){
    let activeCourses
    myLearning.forEach((course)=>{
        let content= JSON.parse(course.modules);     
        let allContent = '';

        content.forEach((lesson, index)=>{ 
            allContent += ` <div class ="courseCard .js-moduleCard"><a href="course-content.html?title=${lesson.title}&code=${course.code}">
                <p>${lesson.title}</p>
                <p>Progress = ${lesson.progress}%</p>
            </a></div>`  
        })
            activeCourses +=` <div class="coursesContainer">
                <h1>${course.title}</h1>
                <div class ="myLearningCourseList">${allContent}</div>
            </a></div>`
    })


    //display myLearning
    document.querySelector('.js-activeList').innerHTML= activeCourses;

}

    //onclick action for modules
let moduleCard =document.querySelectorAll('.js-moduleCard')
moduleCard.forEach((Card)=>{
    Card.addEventListener('click', ()=>{
        console.log('clicked')
    })
})



let courseslist = document.querySelectorAll('.courseList')