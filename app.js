

//this function fix that in the resalt area show me 12345...
function appendOperation(operation){
    document.getElementById('resaltarea').innerHTML += operation;

}

//this funtion make in the inner html 2*2 and give me the resalt that i need

function calculateresalt() {
    let container = document.getElementById('resaltarea');
    let result = eval(container.innerHTML);
    container.innerHTML = result;
}

// this functions is for delet(-1x tapps or -3) - and ' / ' delet space 3tapps

function deleteLast(){
    let container = document.getElementById('resaltarea');
    if(container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);

    } else{
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
    
}