function logadmin(){
    var use= document.getElementById("useradmin").value
    var pass= document.getElementById("passwadmin").value
    var courrier= document.getElementById("mailadmin").value
    var listadmin =JSON.parse(localStorage.getItem("admins"))
    var listuser =JSON.parse(localStorage.getItem("conectadmin"))
    let test =false;
    for (var i=0;i<listadmin.length;i++){
    if ((use==listadmin[i].username)&&(pass==listadmin[i].psw)&&(courrier==listadmin[i].email)){
        document.getElementById("adminlog").innerHTML ='valideé';
        document.getElementById("adminlog").style.backgroundColor = "green"
        location.replace('index.html')
        var oner = listadmin[i].id
        if(listuser==null){
            listuser=[]
        }
        obj ={
            idadmin: oner,
            useradmin: use,
            pswadmin: pass,
            emailadmin:courrier,
        }
        listuser.push(obj)
        let str= JSON.stringify(listuser)
        localStorage.setItem("conectadmin",str)
       return ;

    }
    }
    if(!test){
        document.getElementById("adminlog").innerHTML ='invalide';
        document.getElementById("adminlog").style.backgroundColor = "red"
    }
}

/******************************************************************************************/
function logdirect(){
    var use= document.getElementById("user").value
    var pass= document.getElementById("passw").value
    var courrier= document.getElementById("mail").value
    var listdir =JSON.parse(localStorage.getItem("directors"))
    var listuser =JSON.parse(localStorage.getItem("conecdirector"))
    let test =false;
    for (var i=0;i<listdir.length;i++){
    if ((use==listdir[i].username)&&(pass==listdir[i].psw)&&(courrier==listdir[i].email)){
        document.getElementById("directorlog").innerHTML ='valideé';
        document.getElementById("directorlog").style.backgroundColor = "green"
        location.replace('index2.html')
        var oner = listdir[i].id
        if(listuser==null){
            listuser=[]
        }
        obj ={
            iddir: oner,
            userdir: use,
            pswdir: pass,
            emaildir:courrier,
        }
        listuser.push(obj)
        let str= JSON.stringify(listuser)
        localStorage.setItem("conecdirector",str)
        console.log(obj);
       return ;

    }
    }
    if(!test){
        document.getElementById("directorlog").innerHTML ='invalide';
        document.getElementById("directorlog").style.backgroundColor = "red"
    }
}

  /******************************************************************************************/
  function logemp(){
    var use= document.getElementById("useremp").value
    var pass= document.getElementById("passwemp").value
    var courrier= document.getElementById("mailemp").value
    var listemp =JSON.parse(localStorage.getItem("employees"))
    var listuse =JSON.parse(localStorage.getItem("conecemployees"))
    let test =false;
    for (var i=0;i<listemp.length;i++){
    if ((use==listemp[i].username)&&(pass==listemp[i].psw)&&(courrier==listemp[i].email)){
        document.getElementById("employeelog").innerHTML ='valideé';
        document.getElementById("employeelog").style.backgroundColor = "green"
        location.replace('index3.html')
        var oner = listemp[i].id
        if(listuse==null){
            listuse=[]
        }
         obj ={
             idemp: oner,
             useremp: use,
             pswemp: pass,
             emailemp:courrier,
           
         }
         listuse.push(obj)
         let str= JSON.stringify(listuse)
         localStorage.setItem("conecemployees",str)
        return ;
    }
    }
    if(!test){
        document.getElementById("employeelog").innerHTML ='invalide';
        document.getElementById("employeelog").style.backgroundColor = "red"
    }
}

  /******************************************************************************************/
  