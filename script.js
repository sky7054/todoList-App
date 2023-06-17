const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const remainTask = document.getElementById("remain-task");

var count = 0 ;

//Adding task 

function addTask(){
    
    if(inputBox.value === ''){
        alert("Please write Something");
    }
    else{

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        count++;
        remainTask.innerHTML = `${count} task left`;

        saveCount();
     
    


        // Adding delete BUTTON

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    // clear input box when task is added

    inputBox.value = '';
    saveData();
    saveCount();
}

// remove task in the list 

listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        
       
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        count--;
        remainTask.innerHTML = `${count} task left`;
        saveCount();
      
    }
},false);


// use local storage save and show data

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");

}

function saveCount(){
    localStorage.setItem("Task",count);
}

function showCount(){
    count = localStorage.getItem("Task");
}

showData();
showCount();