import "./style.css";
console.log("Webpack template!");

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

    function DisplayProjects(){
        let projectArrayCopy = MainApp.projectArrayCopy()
    }
})();

const MainApp = (function(){
    let projectarray = []
    function NewProject(name){
        let newproject = new Project(name)
        projectarray.push(newproject)
        console.log(projectarray)
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
    return{NewProject,projectArrayCopy,logprojectarray}
})();

MainApp.NewProject("CleanHouse")
MainApp.projectarray[0].addtodo("Clean Closet","2025-06-21","Sort out clothes that no longer fit",2)
console.log(MainApp.projectArrayCopy())
//let testToDO = new ToDo("Clean Closet","2025-06-21","Sort out clothes that no longer fit",2)
