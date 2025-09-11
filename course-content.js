import { courseContent, updateUser, courseList } from "./general.js";

const urlParams= new URLSearchParams(window.location.search);
let title = urlParams.get("title");
let code = urlParams.get("code");
let index = 0;

updateUser()

let pageImage

function getImage(code) {
    courseList.forEach((course)=>{
        if (code=== course.code){
            pageImage = course.image
        }
        return pageImage;
    })
}

getImage(code)
console.log(pageImage)



function getCourseContent () {
    courseContent.forEach((course, i)=>{
        if (title === course.title){
            let pageContent = '';

            course.content.forEach((content)=>{
                pageContent+= `<div class="courseSection"> <p>${content}</p> </div>`
            })

            document.querySelector('.js-mainBodyContainer').innerHTML = `
            <div class="mainBody" style="background-image:url('${pageImage}')">
                <header class="js-mainHeader mainHeader"><h1>${course.title}<h1></header>
                <div class="js-courseContent courseContent"></div>
                <div class="pageButtons">
                    <div class="js-progressContainer"></div>
                    <button class="prev">Prev</button> 
                    <button type="button" class="next">Next</button>
                </div>
            </div>`
            document.querySelector('.js-courseContent').innerHTML = pageContent;
            index= i;
            console.log('this is index ', index)


            return index;
        }
    })
}

getCourseContent()


// make prev and next buttons active
const nextButton= document.querySelector('.next')
const prevButton= document.querySelector('.prev')


nextButton.addEventListener('click', ()=>{
    nextPage()
})
prevButton.addEventListener('click', ()=>{
    prevPage()
    
})

function prevPage(){
    console.log(index)
    if(index > 0){
        index--
    }else {
        index= 0
    }
    getTitle(index);    
}

export function nextPage(){
    if (index < courseContent.length){
    
        index++
    } else{
        index = courseContent.length -1
    }
    getTitle(index);
}



function getTitle(index) {
    courseContent.forEach((course, i) =>{
        if (index === i){
          let courseTitle= course.title
          console.log(courseTitle)
          window.location.href= `course-content.html?title=${courseTitle}&code=${code}`
        }
        
    })
}
