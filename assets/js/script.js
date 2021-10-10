//Validate input field:
document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0) {
        console.log("Please enter a value")
    }
//Adding a new task:
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="far fa-trash-alt"> X </i>
                </button>
            
            </div>
        `;
//Deleting a task:
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
//Crossing out a completed
        var tasks = document.querySelectorAll(".tasks");
        for(var i=0; i<tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }
    }
}
