document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0) {
        console.log("Please enter a value")
    }
}
