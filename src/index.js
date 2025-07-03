import "./style.css";
console.log("Webpack template!");
// CONTINUE WRITING WHEN YOU HAVE ENERGY. I AM CURRENTLY MAKING HORRENDOUS DESIGN CHOICES
class Project {
    constructor(name){
        this.name = name
        this.todos = []
    }
    addtodo(title,duedate,description,priority){
        let newtodo = new ToDo(title,duedate,description,priority,this);
        this.todos.push(newtodo)
    }
    removetodo(todoid){
        let todotoremove = this.todos.find(item => item.id === todoid)
        let index = this.todos.indexOf(todotoremove)
        this.todos.splice(index,1)
    }
}

class ToDo{
    constructor(title,duedate,description,priority,projectparent){
        this.priority = priority
        this.title = title
        this.duedate = duedate
        this.description = description
        this.projectparent = projectparent
        this.complete = false
        this.id = crypto.randomUUID()
    }
}

const DOMController = (function(){
    let projectContainer = document.querySelector("#project-list-container")
    let newprojectbtn = document.querySelector("#NewProject")
    newprojectbtn.addEventListener("click",NewProjectDom)
    function NewProjectDom(){
        MainApp
    }
    function DisplayProjects(){
        let projectArrayCopy = MainApp.projectArrayCopy()
        for(let project of projectArrayCopy){
            let container = document.createElement("div")
            let header = document.createElement("h3")
            header.textContent = project.name
            let todoscont = document.createElement("div")
            for (let todo of project.todos){
                console.log(todo)
                let tododom = todo.title
                todoscont.append(tododom)
            }
            console.log(project)
            container.append(header,todoscont)
            projectContainer.append(container)
        }
    }
    return{DisplayProjects}
})();

const MainApp = (function(){
    let projectarray = []
    function newProject(name){
        let newproject = new Project(name)
        projectarray.push(newproject)
    } 
    function NewToDo(title,duedate,description,priority,projectparent){
        projectparent.addtodo(title,duedate,description,priority,projectparent)
    }
    function projectArrayCopy(){
        return [...projectarray]
    }
    function logprojectarray(){
        console.log(projectarray)
    }
    return{newProject,projectArrayCopy,logprojectarray}
})();

MainApp.newProject("CleanHouse")
MainApp.newProject("Dollar")
MainApp.newProject("Wassup")
DOMController.DisplayProjects()
let cleanHouseProject = MainApp.projectArrayCopy().find(p => p.name === "CleanHouse");
console.log(cleanHouseProject)
cleanHouseProject.addtodo("Clean bed","tommorow","BLA BLA",1)
MainApp.newProject("E")
DOMController.DisplayProjects()


 