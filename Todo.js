var clickToAdd = document.querySelector('#clickToAdd');
var taskList = document.querySelector('ul');
//var todoForm = document.querySelector('#todo-form');
var wayToTask = document.querySelector('#wayToTask');
wayToTask.innerHTML = `<p>Tasks count: ${taskList.children.length}</p>`;

clickToAdd.addEventListener('click',()=> { 
    //get the name and description
    var taskName = document.querySelector('#task-name');
    var taskDes = document.querySelector('#description');
    //create an li elemment and add task name to it
    var newTask = document.createElement('li');
    var taskHeading = document.createElement('h4');
    var taskDescription = document.createElement('p');
    if(taskName.value!=""){
        taskHeading.innerText=taskName.value;
        // removeTextAreaWhiteSpace
        taskDes.value = taskDes.value.replace(/^\s*|\s*$/g,'');
        
        taskDescription.innerText=taskDes.value;
        //appending to li
        newTask.append(taskHeading);
        newTask.append(taskDescription);
        //appending to ul
        taskList.prepend(newTask);//prepende to the main list
    }
    wayToTask.innerHTML = `<p>Tasks count: ${taskList.children.length}</p>`;
    //add the border if not
    if(taskList.children.length!=0){
        var ulClassList = taskList.classList;
        ulClassList.remove('initialUl');
        ulClassList.add('afterUl');
    }
});

taskList.addEventListener('click',e=>{
    if(e.target.nodeName==="LI"){
        e.target.remove();
    }else if(e.target.parentNode.nodeName==="LI"){
        e.target.parentNode.remove();
    }
    wayToTask.innerHTML = `<p>Tasks count: ${taskList.children.length}</p>`;
    //remove the border is tasks are 0 count
    if(taskList.children.length==0){
        var ulClassList = taskList.classList;
        ulClassList.remove('afterUl');
        ulClassList.add('initialUl');
    }
});