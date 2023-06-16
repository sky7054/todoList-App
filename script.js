const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const remainTask = document.getElementById("remain-task");

var count = 0 ;

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
       // console.log(count);
    


        // ADD DETETE BUTTON

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();
    lengthData()
}

function clearTask(){
    
}

listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
        lengthData()
       
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        count--;
        console.log(count);
        remainTask.innerHTML = `${count} task left`;
     //   lengthData()
      
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function lengthData(){
    localStorage.setItem("data", listContainer.innerHTML);
    return localStorage.length;
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");

}
console.log(lengthData());

showData();