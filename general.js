export const users = [
    {
    email: "ademolaadebukola27@gmail.com",
    username : "admin",
    password : "unlovable",
    myLearning : []
    }
]

export function updateUser(){
    fetch("/api/user")
    .then(res => res.json())
    .then(data => {
        document.querySelector('.user').innerHTML = `<h2>${data.username}</h2>`
        document.querySelector('.js-username').innerHTML = `<h2>${data.username}</h2>`
        document.querySelector('.js-email').innerHTML = `<h2>${data.email}</h2>`
        console.log(data)
    })

}


export const courseList = [
    {code: 'html',
    title: 'Html-basics',
    image : 'images/html-Image.jpg',
    modules: [
        {title: 'Introduction-to-HTML',
        progress: 0},

        {title: 'HTML-tags',
        progress: 0},

        {title: 'HTML-forms',
        progress: 0},
        
        {title: 'HTML-page',
        progress: 0},
        ]
    },

    {code : 'css',
    title: 'CSS-essentials',
    image : 'images/css-image.webp',
    modules: [
        {title: 'Introduction-to-CSS',
        progress: 0},

        {title: 'CSS-syntax',
        progress: 0},

        {title: 'Fonts-and-Colors ',
        progress: 0},

    ]},

    {code : 'react',
    title: 'React-js'},
    
    {code : 'js',
    title: 'Java-Script-fundamentals',
    image: 'images/js-Image.webp',
    modules: [
        {title: 'Introduction-to-Java-Script',
        progress: 0},

        {title: 'Java-Script-Syntax',
        progress: 0},

        {title: 'Math-and-Numbers',
        progress: 0},

    ]},

    {code : 'next-js',
    title: 'Next-js'},
]

export const careerPath =[
    {code : 'fd',
    title: 'Front-end Development'},
    {code : 'bd',
    title: 'Back-end Development'},
    {code : 'fsd',
    title: 'Full-stack Development'},
]

export let index = 0
export function updatePageIndex() {
   index = pageIndex
} 

index = JSON.parse(localStorage.getItem('index'))

export function nextPage(){
    if (index < courseContent.length){
    
        index++
        localStorage.setItem('index', JSON.stringify(index))
    } else{
        index = courseContent.length -1
    }
    

    console.log('this is index', index)
    let courseTitle= ''

    courseContent.forEach((course, i) =>{
        if (index === i){
        courseTitle= course.title
        console.log(courseTitle)
        window.location.href= `course-content.html?title=${courseTitle}`
        console.log(courseTitle)  
        }
        
    })
}

export const moduleList = [
    {code : 'html',
    title: 'Introduction to HTML',
    progress: 0},

    {code : 'html',
    title: 'HTML tags',
    progress: 0},

    {code : 'html',
    title: 'HTML forms',
    progress: 0},
    
    {code : 'html',
    title: 'HTML page',
    progress: 0},

    {code : 'css',
    title: 'Introduction-to-CSS',
    progress: 0},

    {code : 'css',
    title: 'CSS-syntax',
    progress: 0},

    {code : 'css',
    title: 'Fonts-and-Colors ',
    progress: 0},

    {code : 'js',
    title: 'Introduction-to-Java-Script',
    progress: 0},

    {code : 'js',
    title: 'Java-Script-Syntax',
    progress: 0},

    {code : 'js',
    title: 'Math and Numbers',
    progress: 0},
]


export const courseContent = [
    {title: 'Introduction-to-HTML',
        content: [
            `HTML (HyperText Markup Language) is the standard language used to create web pages.It tells the browser what to display: text, images, links, forms, and more.HTML is not a programming language—it’s a markup language that describes the structure of a webpage.Think of HTML as the skeleton of a website. Without it, web pages wouldn’t have structure.`,

            `HTML (HyperText Markup Language) is the standard language used to create web pages.It tells the browser what to display: text, images, links, forms, and more.HTML is not a programming language—it’s a markup language that describes the structure of a webpage.Think of HTML as the skeleton of a website. Without it, web pages wouldn’t have structure.`,

            `HTML (HyperText Markup Language) is the standard language used to create web pages.It tells the browser what to display: text, images, links, forms, and more.HTML is not a programming language—it’s a markup language that describes the structure of a webpage.Think of HTML as the skeleton of a website. Without it, web pages wouldn’t have structure.`,
            `HTML (HyperText Markup Language) is the standard language used to create web pages.It tells the browser what to display: text, images, links, forms, and more.HTML is not a programming language—it’s a markup language that describes the structure of a webpage.Think of HTML as the skeleton of a website. Without it, web pages wouldn’t have structure.`,
            
            `HTML (HyperText Markup Language) is the standard language used to create web pages.It tells the browser what to display: text, images, links, forms, and more.HTML is not a programming language—it’s a markup language that describes the structure of a webpage.Think of HTML as the skeleton of a website. Without it, web pages wouldn’t have structure.`,

            `HTML (HyperText Markup Language) is the standard language used to create web pages.It tells the browser what to display: text, images, links, forms, and more.HTML is not a programming language—it’s a markup language that describes the structure of a webpage.Think of HTML as the skeleton of a website. Without it, web pages wouldn’t have structure.`,
            
                
            `<!DOCTYPE html> → Tells the browser this is an HTML5 document.

                        <html>...</html> → Wraps everything inside the webpage.

                        <head>...</head> → Contains metadata (info about the page, not shown to users).

                        <title>...</title> → The title shown in the browser tab.

                        <body>...</body> → Everything inside here is shown on the page.`
                
        ]
    },


    {title: 'HTML-tags',
        content: [
            "introduction to tags",
            "continuation",
            "end of course"
        ]
    },

    
    {title: 'HTML-forms',
        content: [
            "introduction to forms",
            "continuation",
            "end of course"
        ]
    },
    
    {title: 'HTML-page',
        content: [
            "introduction to page",
            "continuation",
            "end of course"
        ]
    },
    {title: 'Introduction-to-CSS',
        content: [
            "introduction to css",
            "continuation",
            "end of course"
        ]
    },
    {title: 'Introduction-to-Java-Script',
        content: [
            "introduction to js",
            "continuation",
            "end of course"
        ]
    },
]

export let myLearning =[];