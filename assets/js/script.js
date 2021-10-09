document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0) {
        console.log("Please enter a value")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
            
            </div>
        `;
    }
}
