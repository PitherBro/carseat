
function toggle(id){
    var selection = document.getElementById(id);
    //console.log(selection.innerHTML);
    var stateElm = selection.children[2];
    console.log(stateElm);
    if(checkToggle(stateElm)){
        stateElm.innerHTML = "no";
    }
    else{
        stateElm.innerHTML = "yes";
    }
    checkStates(selection);
}
function checkToggle(elm){
    if(elm.innerHTML === "yes"){
        return true;
    }
    else{
        return false;
    }

}