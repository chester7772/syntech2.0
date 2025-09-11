import { courseList, moduleList, index} from "./general.js";

const urlParams= new URLSearchParams(window.location.search);
let pageId = urlParams.get("pageId");

console.log(pageId)

let htmlModules = '';
let cssModules ='';
let jsModules ='';

moduleList.forEach((module, index)=>{
    if(module.code==='html'){
        htmlModules += `<a href="course-content.html?title=${module.title}&index=${index}"><div class= 'moduleCard js-moduleCard' data-title = ${module.title}>
            <h1>${module.title}</h1>
            <p>Progress: ${module.progress}</p>
        </div></a>`
    }else if(module.code==='css'){
        cssModules += `<a href="course-content.html?title=${module.title}&index=${index}"><div class= 'moduleCard js-moduleCard' data-title = ${module.title}>
            <h1>${module.title}</h1>
            <p>Progress: ${module.progress}</p>
        </div></a>`
    }else if(module.code==='js'){
        jsModules += `<a href="course-content.html?title=${module.title}&index=${index}"><div class= 'moduleCard js-moduleCard' data-title = ${module.title}>
            <h1>${module.title}</h1>
            <p>Progress: ${module.progress}</p>
        </div></a>`
    }
})

let currentPage = pageId + 'Modules';
if(currentPage === "htmlModules"){
    document.querySelector('.js-modulesList').innerHTML= htmlModules
} else if(currentPage === "cssModules"){
    document.querySelector('.js-modulesList').innerHTML= cssModules
}else if(currentPage === "jsModules"){
    document.querySelector('.js-modulesList').innerHTML= jsModules
}

let matchingCourse
courseList.forEach(course => {
    if (pageId === course.code){
        matchingCourse = course
        console.log(course.title)
    } else {
        console.log("user not found")
    }
});

let courseTitle = matchingCourse.title

document.querySelector('.js-pageTitle').innerHTML = courseTitle

document.querySelectorAll('.js-moduleCard').forEach((card, i) => {
    let cardIndex= i;
    localStorage.clear('index');
    card.addEventListener('click', ()=> {
      //window.location.href= `course-content.html?title=${title}&index=${cardIndex}`  
    })
})