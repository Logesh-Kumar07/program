  function myfunc(){

        const taskText =document.getElementById("input").value.trim();
        if(taskText === "") return ;
        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click",function() {
        li.classList.toggle("completed");
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove";

        removeBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        li.remove();
        }
    );

    
                li.appendChild(removeBtn);
        document.getElementById("output").appendChild(li);
        document.getElementById("input").value = "";

    } 