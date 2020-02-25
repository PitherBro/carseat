function toggle(id){
    var selection = document.getElementById(id);
    //console.log(selection.innerHTML);
    var stateElm = selection.children[2];
    //console.log(stateElm);
    if(stateElm.innerHTML === "yes"){
        stateElm.innerHTML = "no";
    }
    else{
        stateElm.innerHTML = "yes";
    }
    checkStates(selection);
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
    console.log(elm.id);
  if(elm.id == "child"){
    if(checkToggle(elm.children[2])){
        show(['phone']);
    }
    else{
        hide(['phone']);
    }
  }
  else if(elm.id == "phone"){
    if(checkToggle(elm.children[2])){
        show(['checkConnection', 'betterBlock']);
        hide(['callAuthorities']);
    }
    else{
        hide(['checkConnection', 'betterBlock','alertBlock','callAuthorities']);
    }
  }
  else if(elm.id == "checkConnection"){
    if(!checkToggle(elm.children[2])){
        show(['betterBlock','allIsWellB']);
        hide(['alertBlock']);
    }
    else{
        
        hide(['betterBlock']);
        show(['alertBlock','alertCheck']);
    }
  }
  else if (elm.id === 'parResponse'){
    if(checkToggle(elm.children[2])){
        hide(['callAuthorities']);
        show(['allIsWellA']);
    }
    else{
        show(['callAuthorities']);
        hide(['allIsWellA']);
    }
  }
  else if(elm.id === 'alertCheck'){
    if(checkToggle(elm.children[2])){
        show(['allIsWellB']);
        hide(['alertCheckAgain','alertSend','allIsWellC']);
    }
    else{
        show(['alertCheckAgain','allIsWellC']);
        hide(['allIsWellB']);
    }
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
function show(arg){
arg.forEach(element => {
    //console.log(element);
    document.getElementById(element).hidden = false;
});
}
function hide(arg){
    arg.forEach(element => {
        //console.log(element);
        document.getElementById(element).hidden =true;
       
    });
}