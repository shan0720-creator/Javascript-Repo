const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks")): [];
showAlltask();

function showAlltask (){
    tasks.forEach((value,index)=>{
        const div = document.createElement("div")
        div.setAttribute("class","task");
        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText =value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.description;
        innerDiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class","deleteBtn");

        btn.innerText = "-";
        btn.addEventListener("click",()=> {
            removeTasks();   //button function to remove the task happened;
            
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAlltask();
        });




        div.append(btn);
        container.append(div);

        




    })
}

  function removeTasks(){
    tasks.forEach((value) => {
       const div = document.querySelector(".task");
       div.remove();
    });
  }

form.addEventListener("submit",(e)=>{  //form submission ka code hai , submit hoga code lekin bhai, page reload nahi hoga bro
    e.preventDefault();//prevents page reload
    removeTasks();
     
    tasks.push({ //jaise hi submit par click karoge , yeh push ho jaega task.
        title: title.value,
        description: description.value
    });
    console.log(tasks);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAlltask();
})