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
    //checkStates(selection);
}
function reset(){
    //var child =  document.getElementById("child");
    var phone = document.getElementById("phone");
    var checkConnection = document.getElementById("checkConnection");
    var alertCheck = document.getElementById("alertCheck");
    var alertCheckAgain = document.getElementById("alertCheckAgain");
    var alertSend = document.getElementById("alertSend");
    var alertBlock = document.getElementById("alertBlock");
    var betterBlock = document.getElementById("betterBlock");
    phone.hidden= true;
    checkConnection.hidden = true;
    alert.hidden = true;
    alertCheck.hidden = true;
    alertCheckAgain.hidden =true;
    alertSend.hidden = true;
    alertBlock.hidden = true;
    betterBlock.hidden = true;

}
function checkStates(elm){
   
    if(elm.id === "child")
    {
      updateGUI(elm,"phone");
    }else if (elm.id ==="phone"){
        updateGUI(elm,"checkConnection");
    }
    else if(elm.id === "checkConnection"){
        if(!checkToggle(elm.id)){
            updateGUI(elm,"alertBlock");
        }
        else{
            updateGUI(elm,"betterBlock");
            //updateGUI(elm,"checkParent");
        }
    }
    
    console.log(elm.id);
}
function updateGUI(elmChecking,elmToChange){
    var affectedElm = document.getElementById(elmToChange);
    //console.log(affectedElm.children[2]);
    if(checkToggle(elmChecking.children[2])){
        affectedElm.hidden = false;
    }
    else{
        affectedElm.hidden = true;
    }
}
function checkToggle(elm){
    if(elm.innerHTML === "yes"){
        return true;
    }
    else{
        return false;
    }

}
function turnOn(arg){
arg.forEach(element => {
    console.log(element);
    document.getElementById(element).hidden = false;
});
}
function turnOff(){
    arg.forEach(element => {
        console.log(element);
        document.getElementById(element).hidden =true;
       
    });
}