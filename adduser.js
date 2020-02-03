/****************************************************************************************/
                                       /***admin***/
/****************************************************************************************/
function usernameadmin() {
    var name = document.getElementById("nameadmin").value
    let test = false;

    if (name.length == 0) {
        document.getElementById("u").innerHTML = "ecrire user name"
        document.getElementById("u").style.backgroundColor = "red"
    }
    else {
        document.getElementById("u").innerHTML = ""
        document.getElementById("u").style.backgroundColor = "white"
    }
    for (var i = 0; i < name.length; i++) {

        if (name[i] == " ") {

            document.getElementById("u").innerHTML = "delete espace"
            document.getElementById("u").style.backgroundColor = "red"
            return false
        }
    }
    return true
}
/****************************************************************************************/
function verifMailadmin() {
    var a = document.getElementById("emailadmin").value

    testm = false;
    for (var j = 1; j < (a.length); j++) {

        if (a[j] == '@') {

            if (j < (a.length - 4)) {

                for (var k = j; k < (a.length - 2); k++) {

                    if (a[k] == '.') testm = true;
                }
            }
        }
    }

    if (testm == false) {
        document.getElementById("m").innerHTML = 'Votre adresse e-mail est incorrecte.';
        document.getElementById("m").style.backgroundColor = "red"
    }

    else {
        document.getElementById("m").innerHTML = '';
        document.getElementById("m").style.backgroundColor = "white"
    }

    return testm;
}

/****************************************************************************************/
function paswordadmin() {
    var a = document.getElementById("passwordadmin").value
    var n = 0;
    if (a.length < 8 || a.length > 15) {
        document.getElementById("p").innerHTML = "pass doit etre dans 8 et 15"
        document.getElementById("p").style.backgroundColor = "red"
    }
    else {
        document.getElementById("p").innerHTML = ""
        document.getElementById("p").style.backgroundColor = "white"
    }
}
/****************************************************************************************/
function confirmadmin() {
    var pass = document.getElementById("passwordadmin").value
    var cpass = document.getElementById("passwordadmin2").value
    if (cpass != pass) {
        document.getElementById("c.p").innerHTML = 'non confirmer';
        document.getElementById("c.p").style.backgroundColor = "red"
    }
    else {
        document.getElementById("c.p").innerHTML = '';
        document.getElementById("c.p").style.backgroundColor = "white"
    }
}

/****************************************************************************************/
function phoneadmin() {
    var phone = document.getElementById("phoneadmin").value

    if (phone.length < 8 || phone.length > 8) {

        document.getElementById("phon").innerHTML = 'phone invalide';
        document.getElementById("phon").style.backgroundColor = "red"
    }
    else {
        document.getElementById("phon").innerHTML = '';
        document.getElementById("phon").style.backgroundColor = "white"
    }
}

/****************************************************************************************/
function addadmin() {
    var user = document.getElementById("nameadmin").value;
    var mail = document.getElementById("emailadmin").value;
    var pass = document.getElementById("passwordadmin").value;
    var role = "Admin"
    var tel = document.getElementById("phoneadmin").value;
    var account = document.getElementById("accountadmin").value
    var more = document.getElementById("admin-info").value
    var newdate = new Date()
    var adress= document.getElementById("adress").value="Veuillez renseigner votre adress";
    var listadmin = JSON.parse(localStorage.getItem("admins"))
    if (listadmin == null) {
        listadmin = []
    }
    obj = {
        id: Math.floor(Math.random() * 1000) + 1,
        username: user,
        email: mail,
        psw: pass,
        num: tel,
        account:account,
        date:newdate,
        info:more,
        adresse:adress,
        picture:"./images/user.png",
        role:role,
    }
    listadmin.push(obj)
    let str = JSON.stringify(listadmin)
    localStorage.setItem("admins", str)
}

/****************************************************************************************/
function addadmin(){
  var listadmin = JSON.parse(localStorage.getItem("admins"))
  var table = document.getElementById("addadmin")
  var data = ''
  if (listadmin || null) {

      for (i = 0; i < listadmin.length; i++) {

          data += `
          <tbody>
          <tr>
               <td> <a>${listadmin[i].username}</a>
               <br />
               <small>${listadmin[i].date}</small>
               </td>

               <td> <a>${listadmin[i].email}</a></td>

               <td>
               <button Onclick="Viewadmin(${listadmin[i].id})" class="btn btn-primary btn-xs" class="fa fa-folder" id='v' data-toggle="modal" data-target=".bs-example-modal-lg"> View </button>
               <button Onclick="Editadmin(${listadmin[i].id})" class="btn btn-info btn-xs" class="fa fa-pencil" id='e'> Edit </button>
               <button Onclick="Deletadmin(${listadmin[i].id})" class="btn btn-danger btn-xs" class="fa fa-trash-o" id='d'> Delete </button>
               </td>
          </tr>
          </tbody>

          `
      }
      table.innerHTML = data;
  }

}

/****************************************************************************************/
function Viewadmin(index) {
  var view = document.getElementById('viewadmin')
  var profil = ''
  var listadmin = JSON.parse(localStorage.getItem('admins'))
  for (let i = 0; i < listadmin.length; i++) {

      if (index == listadmin[i].id) {
          profil += 
          `
          <div class="col-md-6 col-sm-6 col-xs-12">
          <div class="x_panel">
              <!-- Large modal -->
              <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">

                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                      </button>
                      <h4 class="modal-title" id="myModalLabel">Admin Profil</h4>
                    </div>
            <div class="item form-group">
            <label class="control-label col-md-12 col-sm-12 col-xs-12" for="name">Username</label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].username}' id='nameadmin' class="form-control col-md-12 col-sm-12 col-xs-12" data-validate-length-range="6" name="name" type="text">
            </div>
          <div align="center" ></div>
            <div class="item form-group">
            <label class="control-label col-md-12 col-sm-12 col-xs-12" for="email">Email</label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].email}' type="email" id="emailadmin" name="email" class="form-control col-md-12 col-sm-12 col-xs-12">
            </div>
          <div align="center" ></div>
            <div class="item form-group">
            <label class="control-label col-md-12 col-sm-12 col-xs-12" for="number">Accounting Number</label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].account}' type="number" id="numberadmin" name="number" data-validate-minmax="0,1000" class="form-control col-md-12 col-sm-12 col-xs-12">
            </div>
            </div>
          <div align="center" ></div>
            <div class="item form-group">
            <label for="password" class="control-label col-md-12 col-sm-12 col-xs-12">Password </label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].psw}' id="passwordadmin" type="password" name="password" data-validate-length="6,8" class="form-control col-md-12 col-sm-12 col-xs-12">
            </div>
            </div>
          <div align="center" ></div>
            <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="telephone">Telephone </label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].num}' type="tel" id="phoneadmin" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
            </div>
            <div align="center" ></div>
            <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="More informations">More informations </label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].info}' type="tel" id="more-infoadmin" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
            </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>

                  </div>
                </div>
              </div>
              <!-- /modals -->
            </div>
          </div>

          `
                      }
                  
              }
              view.innerHTML=profil
}
/****************************************************************************************/
function Deletadmin(index) {
  var listadmin = JSON.parse(localStorage.getItem('admins'))
  for (let i = 0; i < listadmin.length; i++) {
      if (index == listadmin[i].id) {
          listadmin.splice(i, 1);
      }
  }
  localStorage.setItem('admins', JSON.stringify(listadmin));
  addadmin()
}

/****************************************************************************************/
function Editadmin(index) {
  var edd = document.getElementById('editadmin')
  var edite = ''
  var listadmin = JSON.parse(localStorage.getItem('admins'))
  for (let i = 0; i < listadmin.length; i++) {

      if (index == listadmin[i].id) {
          edite += 
  `
  <div class="clearfix"></div>
  <div  id="edit">
  <div class="">
  <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
      <div class="x_title">
        <h2><i class="fa fa-square-o"></i> Edit Admin</h2>
        <ul class="nav navbar-right panel_toolbox">
          <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">

          <div align="center" ></div>
            <div class="item form-group">
            <label class="control-label col-md-12 col-sm-12 col-xs-12" for="name">Username</label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].username}' id='nameadmin' class="form-control col-md-12 col-sm-12 col-xs-12" data-validate-length-range="6" name="name" type="text">
            </div>
          <div align="center" ></div>
            <div class="item form-group">
            <label class="control-label col-md-12 col-sm-12 col-xs-12" for="email">Email</label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].email}' type="email" id="emailadmin" name="email" class="form-control col-md-12 col-sm-12 col-xs-12">
            </div>
          <div align="center" ></div>
            <div class="item form-group">
            <label class="control-label col-md-12 col-sm-12 col-xs-12" for="number">Accounting Number</label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].account}' type="number" id="numberadmin" name="number" data-validate-minmax="0,1000" class="form-control col-md-12 col-sm-12 col-xs-12">
            </div>
            </div>
          <div align="center" ></div>
            <div class="item form-group">
            <label for="password" class="control-label col-md-12 col-sm-12 col-xs-12">Password </label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].psw}' id="passwordadmin" type="password" name="password" data-validate-length="6,8" class="form-control col-md-12 col-sm-12 col-xs-12">
            </div>
            </div>
          <div align="center" ></div>
            <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="telephone">Telephone </label>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <input value='${listadmin[i].num}' type="tel" id="phoneadmin" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
            </div>
            </div><br/><br/>
          <button type="button" class="badd" onclick="canceladmin(${i})" >cancel</button>
          <button type="button" class="btadd" onclick="uppadmin(${listadmin[i].id})" >update</button>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
  <div class="clearfix"></div>

  </div>

  </div>`
                      }
                  
              }
              edd.innerHTML=edite
}

/****************************************************************************************/
function uppadmin(index) {
  var listadmin = JSON.parse(localStorage.getItem('admins'))

  for (let i = 0; i < listadmin.length; i++) {
    if (index==listadmin[i].id) {
  listadmin[i].username= document.getElementById('nameadmin').value
  listadmin[i].email= document.getElementById('emailadmin').value
  listadmin[i].account= document.getElementById('numberadmin').value
  listadmin[i].psw= document.getElementById('passwordadmin').value
  listadmin[i].num= document.getElementById('phoneadmin').value
    }
  }
  localStorage.setItem('admins', JSON.stringify(listadmin));
  
  addadmin()
}

/***************************************************************************************/
function canceladmin(i) {
  var edd = document.getElementById('editadmin')
  var edite=''
  edd.innerHTML=edite
}

  /****************************************************************************************/
                                  /***Edit own profile Admin***/
  /****************************************************************************************/
  function ownprofile(){
    var table = document.getElementById("tabcontent2")
    var data=''
    var listADD = JSON.parse(localStorage.getItem('admins'))
    var listuser =JSON.parse(localStorage.getItem("conectadmin"))
    var j =listuser.length-1
    if (listADD || null) { 

      for (i = 0; i < listADD.length; i++) {
     
        
        if (listADD[i].id==listuser[j].idadmin) {
        data += `
        <div class="col-md-12 col-sm-12 col-xs-12 profile_details">
        <div class="well profile_view">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <h2 class="brief"><i>Admin</i></h2>
            <div class="left col-xs-7">
              <h1>${listADD[i].username}</h1>
              <p><strong>About: </strong> Admin du Projet Mini ERP</p><br>
              <ul class="list-unstyled">
                <li> <p><strong>Email *:</strong> ${listADD[i].email}</p><br>
                <li> <p><strong>Account Number *:</strong> ${listADD[i].account}</p><br>
                <li> <p><strong>Password *:</strong> ${listADD[i].psw}</p><br>
                <li> <p><strong>Phone *:</strong>${listADD[i].num}</p><br>
                <li> <p><strong>Address:</strong> ${listADD[i].adresse}</p><br>
              </ul>
            </div>
            <div class="right col-xs-5 " id="imgTest">
                <input id="inputFileToLoad" class="file-input" type="file" onchange="encodeImageFileAsURL(${listADD[i].id})">
                <img onload="${listADD[i].picture}" class="rounded-circle">
            </div>
          </div>
          <div class="col-xs-12 bottom text-center">
            <div class="col-xs-12 col-sm-6 text-left">
              <p type="date"> Date de la dernière mise à jours: ${listADD[i].date} <i newdate ></i> </p> 
            </div>
            <div class="col-xs-12 col-sm-6 emphasis">
              <button type="button" class="btn btn-primary btn-xs" onclick="editownprofil(${listADD[i].id})"> <i class="fa fa-user"></i>
                 Edit Profile 
              </button>
            </div>
          </div>
        </div>
      </div>
        `
      }
    
  }
      table.innerHTML = data;
    }
  
  }

  /****************************************************************************************/
    function encodeImageFileAsURL() {

      var listADD = JSON.parse(localStorage.getItem('admins'))
      var listuser =JSON.parse(localStorage.getItem("conectadmin"))
      var j =listuser.length-1
      if (listADD || null) { 
  
        for (i = 0; i < listADD.length; i++) {
          if (listADD[i].id==listuser[j].idadmin) {

            var filesSelected = document.getElementById("inputFileToLoad").files;
            if (filesSelected.length > 0) {
               var fileToLoad = filesSelected[0];
               var fileReader = new FileReader();
  
               fileReader.onload = function(fileLoadedEvent) {
               var srcData = fileLoadedEvent.target.result; // <--- data: base64
              //  listADD[i].picture=srcData;
              //  localStorage.setItem("admins", JSON.stringify(listADD));
               var newImage = document.createElement('img');
               newImage.src = srcData;
  
               document.getElementById("imgTest").innerHTML = newImage.outerHTML;
               // alert( document.getElementById("imgTest").innerHTML);
               console.log(newImage);

               }
             fileReader.readAsDataURL(fileToLoad);

             }
          }
       }
     }
      // addadmin()
    }

  /****************************************************************************************/
  function editownprofil(index){
    var edd = document.getElementById('editprofile')
    var edite = ''
    var listADD = JSON.parse(localStorage.getItem('admins'))
    // var j =listuser.length-1
    for (let i = 0; i < listADD.length; i++) {

        if (index == listADD[i].id) {
            edite += 
    `
    <div  id="editprofile">
    <div class="">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
        <div class="x_title">
          <h2><i class="fa fa-square-o"></i> Edit Profile</h2>
          <ul class="nav navbar-right panel_toolbox">
            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">

            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="name">Username</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].username}' id="useradmin" class="form-control col-md-12 col-sm-12 col-xs-12" data-validate-length-range="6" name="name" type="text">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="email">Email</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].email}' type="email" id="emailadmin" name="email" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="number">Accounting Number</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].account}' type="number" id="numberadmin" name="number" data-validate-minmax="0,1000" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label for="password" class="control-label col-md-12 col-sm-12 col-xs-12">Password </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].psw}' id="passwadmin" type="number" name="password" data-validate-length="6,8" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
              <label for="tel" class="control-label col-md-12 col-sm-12 col-xs-12">Date de modification </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].date}' id="dateadmin" type="tel" name="date" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
              <label for="text" class="control-label col-md-12 col-sm-12 col-xs-12"> Informations additionnelles </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].info}' id="infoadmin" type="text" name="info" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
              <label for="Adresse" class="control-label col-md-12 col-sm-12 col-xs-12">Adresse </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].adresse}' id="adresseadmin" type="text" name="adresse" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
                <label class="control-label col-md-12 col-sm-12 col-xs-12" for="telephone">Telephone </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].num}' type="tel" id="phonadmin" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
              </div>
              </div><br/><br/>
            <button type="button" class="" onclick="cancelprofile(${i})" >cancel</button>
            <button type="button" class="" onclick="uppprofile(${listADD[i].id})" >update</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>

    </div>
  
    </div>`
                        }
                    
                }
                edd.innerHTML=edite
  }

  /****************************************************************************************/
  function uppprofile(index) {
    var listadmin = JSON.parse(localStorage.getItem("admins"))

    for (let i = 0; i < listadmin.length; i++) {
      if (index==listadmin[i].id) {
    listadmin[i].username= document.getElementById('useradmin').value
    listadmin[i].email= document.getElementById('emailadmin').value
    listadmin[i].account= document.getElementById('numberadmin').value
    listadmin[i].psw= document.getElementById('passwadmin').value
    listadmin[i].num= document.getElementById('phonadmin').value
    listadmin[i].date= document.getElementById('dateadmin').value
    listadmin[i].info= document.getElementById('infoadmin').value
    listadmin[i].adresse= document.getElementById('adresseadmin').value
      }
    }
    localStorage.setItem("admins", JSON.stringify(listadmin));
    
    // addadmin()
    ownprofile()
  }

  /**************************************************************************************/
  function cancelprofile(i) {
    var edd = document.getElementById('editprofile')
    var edite=''
    edd.innerHTML=edite
  }

/****************************************************************************************/
                                      /***director***/
/****************************************************************************************/



function username() {
    var name = document.getElementById("namedir").value
    let test = false;

    if (name.length == 0) {
        document.getElementById("u").innerHTML = "ecrire user name"
        document.getElementById("u").style.backgroundColor = "red"
    }
    else {
        document.getElementById("u").innerHTML = ""
        document.getElementById("u").style.backgroundColor = "white"
    }
    for (var i = 0; i < name.length; i++) {

        if (name[i] == " ") {

            document.getElementById("u").innerHTML = "delete espace"
            document.getElementById("u").style.backgroundColor = "red"
            return false
        }
    }
    return true
}
/****************************************************************************************/
function verifMail() {
    var a = document.getElementById("emaildir").value

    testm = false;
    for (var j = 1; j < (a.length); j++) {

        if (a[j] == '@') {

            if (j < (a.length - 4)) {

                for (var k = j; k < (a.length - 2); k++) {

                    if (a[k] == '.') testm = true;
                }
            }
        }
    }

    if (testm == false) {
        document.getElementById("m").innerHTML = 'Votre adresse e-mail est incorrecte.';
        document.getElementById("m").style.backgroundColor = "red"
    }

    else {
        document.getElementById("m").innerHTML = '';
        document.getElementById("m").style.backgroundColor = "white"
    }

    return testm;
}

/****************************************************************************************/
function pasword() {
    var a = document.getElementById("passworddir").value
    var n = 0;
    if (a.length < 8 || a.length > 15) {
        document.getElementById("p").innerHTML = "pass doit etre dans 8 et 15"
        document.getElementById("p").style.backgroundColor = "red"
    }
    else {
        document.getElementById("p").innerHTML = ""
        document.getElementById("p").style.backgroundColor = "white"
    }
}
/****************************************************************************************/
function confirm() {
    var pass = document.getElementById("passworddir").value
    var cpass = document.getElementById("password2").value
    if (cpass != pass) {
        document.getElementById("c.p").innerHTML = 'non confirmer';
        document.getElementById("c.p").style.backgroundColor = "red"
    }
    else {
        document.getElementById("c.p").innerHTML = '';
        document.getElementById("c.p").style.backgroundColor = "white"
    }
}

/****************************************************************************************/
function phone() {
    var phone = document.getElementById("tel").value

    if (phone.length < 8 || phone.length > 8) {

        document.getElementById("phon").innerHTML = 'phone invalide';
        document.getElementById("phon").style.backgroundColor = "red"
    }
    else {
        document.getElementById("phon").innerHTML = '';
        document.getElementById("phon").style.backgroundColor = "white"
    }
}

/****************************************************************************************/
function adding() {
    var user = document.getElementById("namedir").value;
    var mail = document.getElementById("emaildir").value;
    var pass = document.getElementById("passworddir").value;
    var tel = document.getElementById("phonedir").value;
    var account = document.getElementById("account").value
    var more = document.getElementById("more-info").value
    var newdate = new Date()

    var adress= document.getElementById("adressdir").value="Veuillez renseigner votre adress";
    var listdir = JSON.parse(localStorage.getItem("directors"))
    if (listdir == null) {
        listdir = []
    }
    obj = {
        id: Math.floor(Math.random() * 1000) + 1,
        username: user,
        email: mail,
        psw: pass,
        num: tel,
        account:account,
        date:newdate,
        info:more,
        adresse:adress,
        picturedir:"./images/user.png",
        role:"director",
    }
    listdir.push(obj)
    let str = JSON.stringify(listdir)
    localStorage.setItem("directors", str)
}

/****************************************************************************************/
function adddir(){
    var listdir = JSON.parse(localStorage.getItem("directors"))
    var table = document.getElementById("adddirector")
    var data = ''
    if (listdir || null) {

        for (i = 0; i < listdir.length; i++) {

            data += `
            <tbody>
            <tr>
                 <td> <a>${listdir[i].username}</a>
                 <br />
                 <small>${listdir[i].date}</small>
                 </td>

                 <td> <a>${listdir[i].email}</a></td>

                 <td>
                 <button Onclick="View(${listdir[i].id})" class="btn btn-primary btn-xs" class="fa fa-folder" id='v' data-toggle="modal" data-target=".bs-example-modal-lg"> View </button>
                 <button Onclick="Edit(${listdir[i].id})" class="btn btn-info btn-xs" class="fa fa-pencil" id='e'> Edit </button>
                 <button Onclick="Delet(${listdir[i].id})" class="btn btn-danger btn-xs" class="fa fa-trash-o" id='d'> Delete </button>
                 </td>
            </tr>
            </tbody>

            `
        }
        table.innerHTML = data;
    }

}

/****************************************************************************************/
function View(index) {
    var view = document.getElementById('view')
    var profil = ''
    var listdir = JSON.parse(localStorage.getItem('directors'))
    for (let i = 0; i < listdir.length; i++) {

        if (index == listdir[i].id) {
            profil += 
            `
            <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="x_panel">
                <!-- Large modal -->
                <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Director Profil</h4>
                      </div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="name">Username</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].username}' id='namedir' class="form-control col-md-12 col-sm-12 col-xs-12" data-validate-length-range="6" name="name" type="text">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="email">Email</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].email}' type="email" id="emaildir" name="email" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="number">Accounting Number</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].account}' type="number" id="numberdir" name="number" data-validate-minmax="0,1000" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label for="password" class="control-label col-md-12 col-sm-12 col-xs-12">Password </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].psw}' id="passworddir" type="password" name="password" data-validate-length="6,8" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
                <label class="control-label col-md-12 col-sm-12 col-xs-12" for="telephone">Telephone </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].num}' type="tel" id="phonedir" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
                <label class="control-label col-md-12 col-sm-12 col-xs-12" for="More informations">More informations </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].info}' type="tel" id="more-info" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
              </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      </div>

                    </div>
                  </div>
                </div>
                <!-- /modals -->
              </div>
            </div>

            `
                        }
                    
                }
                view.innerHTML=profil
  }
/****************************************************************************************/
function Delet(index) {
    var listdir = JSON.parse(localStorage.getItem('directors'))
    for (let i = 0; i < listdir.length; i++) {
        if (index == listdir[i].id) {
            listdir.splice(i, 1);
        }
    }
    localStorage.setItem('directors', JSON.stringify(listdir));
    adddir()
}

/****************************************************************************************/
function Edit(index) {
    var edd = document.getElementById('edit')
    var edite = ''
    var listdir = JSON.parse(localStorage.getItem('directors'))
    for (let i = 0; i < listdir.length; i++) {

        if (index == listdir[i].id) {
            edite += 
    `
    <div class="clearfix"></div>
    <div  id="edit">
    <div class="">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
        <div class="x_title">
          <h2><i class="fa fa-square-o"></i> Edit Director</h2>
          <ul class="nav navbar-right panel_toolbox">
            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">

            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="name">Username</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].username}' id='namedir' class="form-control col-md-12 col-sm-12 col-xs-12" data-validate-length-range="6" name="name" type="text">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="email">Email</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].email}' type="email" id="emaildir" name="email" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="number">Accounting Number</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].account}' type="number" id="numberdir" name="number" data-validate-minmax="0,1000" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label for="password" class="control-label col-md-12 col-sm-12 col-xs-12">Password </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].psw}' id="passworddir" type="password" name="password" data-validate-length="6,8" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
                <label class="control-label col-md-12 col-sm-12 col-xs-12" for="telephone">Telephone </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].num}' type="tel" id="phonedir" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
              </div>
              </div><br/><br/>
            <button type="button" class="badd" onclick="canceldir(${i})" >cancel</button>
            <button type="button" class="btadd" onclick="uppdir(${listdir[i].id})" >update</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>

    </div>
  
    </div>`
                        }
                    
                }
                edd.innerHTML=edite
  }

/****************************************************************************************/
function uppdir(index) {
    var listdir = JSON.parse(localStorage.getItem('directors'))

    for (let i = 0; i < listdir.length; i++) {
      if (index==listdir[i].id) {
    listdir[i].username= document.getElementById('namedir').value
    listdir[i].email= document.getElementById('emaildir').value
    listdir[i].account= document.getElementById('numberdir').value
    listdir[i].psw= document.getElementById('passworddir').value
    listdir[i].num= document.getElementById('phonedir').value
      }
    }
    localStorage.setItem('directors', JSON.stringify(listdir));
    
    adddir()
}

/***************************************************************************************/
function canceldir(i) {
    var edd = document.getElementById('edit')
    var edite=''
    edd.innerHTML=edite
}

  /****************************************************************************************/
                                  /***Edit own profile Director***/
  /****************************************************************************************/
  function ownprofiledir(){
    var table = document.getElementById("tabcontentdir")
    var data=''
    var listdir = JSON.parse(localStorage.getItem('directors'))
    var listuser =JSON.parse(localStorage.getItem("conecdirector"))
    var j =listuser.length-1
    if (listdir || null) { 

      for (i = 0; i < listdir.length; i++) {
     
        
        if (listdir[i].id==listuser[j].iddir) {
        data += `
        <div class="col-md-12 col-sm-12 col-xs-12 profile_details">
        <div class="well profile_view">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <h2 class="brief"><i>Director</i></h2>
            <div class="left col-sm-6">
              <h1>${listdir[i].username}</h1>
              <p><strong>About: </strong> Director du Projet Mini ERP</p><br>
              <ul class="list-unstyled">
                <li><p> <strong>Email *:</strong> ${listdir[i].email}</p><br>
                <li><p> <strong>Account Number *:</strong> ${listdir[i].account}</li><br>
                <li><p> <strong>Password *:</strong> ${listdir[i].psw}</p><br>
                <li><p> <strong>Phone *:</strong> ${listdir[i].num}</p><br>
                <li><p> <strong>Address:</strong> ${listdir[i].adresse}</p><br>
              </ul>
            </div>
            <div class="right col-xs-5 ">
                <input id="inputFileToLoad" class="file-input" type="file" onchange="encodeImageFileAsURLdir()" class="rounded-circle">
            </div>
            <div id="imgTest">
             <img src="${listdir[i].picturedir}" class="rounded-circle" width="304" height="236">
            </div>
          </div>
          <div class="col-xs-12 bottom text-center">
            <div class="col-xs-12 col-sm-6 text-left">
              <p type="date"> Date de la dernière mise à jours: ${listdir[i].date} <i newdate ></i> </p> 
            </div>
            <div class="col-xs-12 col-sm-6 emphasis">
              <button type="button" class="btn btn-primary btn-xs" onclick="editownprofildir(${listdir[i].id})"> <i class="fa fa-user"></i>
                 Edit Profile 
              </button>
            </div>
          </div>
        </div>
      </div>
        `
      }
    
  }
      table.innerHTML = data;
    }
  
  }

  /****************************************************************************************/
    function encodeImageFileAsURLdir() {

      var listadmin= JSON.parse(localStorage.getItem('admins'))
      var filesSelected = document.getElementById("inputFileToLoad").files;
      if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
  
        var fileReader = new FileReader();
  
        fileReader.onload = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result; // <--- data: base64
  
          var newImage = document.createElement('img');
          newImage.src = srcData;
  
          document.getElementById("imgTest").innerHTML = newImage.outerHTML;
          alert( document.getElementById("imgTest").innerHTML);
        }
        fileReader.readAsDataURL(fileToLoad);
      }
      // addadmin()
    }

  /****************************************************************************************/
  function editownprofildir(index){
    var edd = document.getElementById('editprofiledir')
    var edite = ''
    var listdir = JSON.parse(localStorage.getItem('directors'))
    // var j =listuser.length-1
    for (let i = 0; i < listdir.length; i++) {

        if (index == listdir[i].id) {
            edite += 
    `
    <div  id="editprofiledir">
    <div class="">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
        <div class="x_title">
          <h2><i class="fa fa-square-o"></i> Edit Profile</h2>
          <ul class="nav navbar-right panel_toolbox">
            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">

            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="name">Username</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].username}' id="userdir" class="form-control col-md-12 col-sm-12 col-xs-12" data-validate-length-range="6" name="name" type="text">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="email">Email</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].email}' type="email" id="emaildir" name="email" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="number">Accounting Number</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].account}' type="number" id="numberdir" name="number" data-validate-minmax="0,1000" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label for="password" class="control-label col-md-12 col-sm-12 col-xs-12">Password </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].psw}' id="passwdir" type="number" name="password" data-validate-length="6,8" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
              <label for="tel" class="control-label col-md-12 col-sm-12 col-xs-12">Date de modification </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].date}' id="datedir" type="tel" name="date" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
              <label for="text" class="control-label col-md-12 col-sm-12 col-xs-12"> Informations additionnelles </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].info}' id="infodir" type="text" name="info" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
              <label for="Adresse" class="control-label col-md-12 col-sm-12 col-xs-12">Adresse </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].adresse}' id="adressedir" type="text" name="adresse" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
                <label class="control-label col-md-12 col-sm-12 col-xs-12" for="telephone">Telephone </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listdir[i].num}' type="tel" id="phondir" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
              </div>
              </div><br/><br/>
            <button type="button" class="" onclick="cancelprofiledir(${i})" >cancel</button>
            <button type="button" class="" onclick="uppprofiledir(${listdir[i].id})" >update</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>

    </div>
  
    </div>`
                        }
                    
                }
                edd.innerHTML=edite
  }

  /****************************************************************************************/
  function uppprofiledir(index) {
    var listdir = JSON.parse(localStorage.getItem("directors"))

    for (let i = 0; i < listdir.length; i++) {
      if (index==listdir[i].id) {
    listdir[i].username= document.getElementById('userdir').value
    listdir[i].email= document.getElementById('emaildir').value
    listdir[i].account= document.getElementById('numberdir').value
    listdir[i].psw= document.getElementById('passwdir').value
    listdir[i].num= document.getElementById('phondir').value
    listdir[i].date= document.getElementById('datedir').value
    listdir[i].info= document.getElementById('infodir').value
    listdir[i].adresse= document.getElementById('adressedir').value
      }
    }
    localStorage.setItem("directors", JSON.stringify(listdir));
    
    // adddir()
    ownprofiledir()
  }

  /**************************************************************************************/
  function cancelprofiledir(i) {
    var edd = document.getElementById('editprofiledir')
    var edite=''
    edd.innerHTML=edite
  }

/****************************************************************************************/
                                    /***employee***/
/****************************************************************************************/
function usernamemp() {
    var name = document.getElementById("nameemp").value
    let test = false;

    if (name.length == 0) {
        document.getElementById("ue").innerHTML = "ecrire user name"
        document.getElementById("ue").style.backgroundColor = "red"
    }
    else {
        document.getElementById("ue").innerHTML = ""
        document.getElementById("ue").style.backgroundColor = "white"
    }
    for (var i = 0; i < name.length; i++) {

        if (name[i] == " ") {

            document.getElementById("ue").innerHTML = "delete espace"
            document.getElementById("ue").style.backgroundColor = "red"
            return false
        }
    }
    return true
}
/****************************************************************************************/
function verifMailemp() {
    var a = document.getElementById("emailemp").value

    testm = false;
    for (var j = 1; j < (a.length); j++) {

        if (a[j] == '@') {

            if (j < (a.length - 4)) {

                for (var k = j; k < (a.length - 2); k++) {

                    if (a[k] == '.') testm = true;
                }
            }
        }
    }

    if (testm == false) {
        document.getElementById("me").innerHTML = 'Votre adresse e-mail est incorrecte.';
        document.getElementById("me").style.backgroundColor = "red"
    }

    else {
        document.getElementById("me").innerHTML = '';
        document.getElementById("me").style.backgroundColor = "white"
    }

    return testm;
}

/****************************************************************************************/
function paswordemp() {
    var a = document.getElementById("passwordemp").value
    var n = 0;
    if (a.length < 8 || a.length > 15) {
        document.getElementById("pe").innerHTML = "pass doit etre dans 8 et 15"
        document.getElementById("pe").style.backgroundColor = "red"
    }
    else {
        document.getElementById("pe").innerHTML = ""
        document.getElementById("pe").style.backgroundColor = "white"
    }
}
/****************************************************************************************/
function confirmemp() {
    var pass = document.getElementById("passwordemp").value
    var cpass = document.getElementById("confirmemp").value
    if (cpass != pass) {
        document.getElementById("c.pe").innerHTML = 'non confirmer';
        document.getElementById("c.pe").style.backgroundColor = "red"
    }
    else {
        document.getElementById("c.pe").innerHTML = '';
        document.getElementById("c.pe").style.backgroundColor = "white"
    }
}

/****************************************************************************************/
function phonemp() {
    var phone = document.getElementById("phoneemp").value

    if (phone.length < 8 || phone.length > 8) {

        document.getElementById("pho").innerHTML = 'phone invalide';
        document.getElementById("pho").style.backgroundColor = "red"
    }
    else {
        document.getElementById("pho").innerHTML = '';
        document.getElementById("pho").style.backgroundColor = "white"
    }
}
/****************************************************************************************/
function addingemp() {
    var user = document.getElementById("nameemp").value;
    var mail = document.getElementById("emailemp").value;
    var role = "Employee";
    var pass = document.getElementById("passwordemp").value;
    var tel = document.getElementById("phoneemp").value;
    var number = document.getElementById("number").value;
    var more = document.getElementById("employee-info").value
    var newdate = new Date()
    var adress= document.getElementById("adressemp").value="Veuillez renseigner votre adress";
    // var selectemp = document.getElementById("myinput").files;
    var listemp = JSON.parse(localStorage.getItem("employees"))
    if (listemp == null) {
        listemp = []
    }
    obj = {
        id: Math.floor(Math.random() * 1000) + 1,
        username: user,
        email: mail,
        psw: pass,
        num: tel,
        account: number,
        date1: newdate,
        info:more,
        adresse:adress,
        pictureemp:"./images/user.png",
        role:role,
    }
    listemp.push(obj)
    let str = JSON.stringify(listemp)
    localStorage.setItem("employees", str)
    // addemp()
}

/****************************************************************************************/
function addemp() {
    var listemp = JSON.parse(localStorage.getItem("employees"))
    var table = document.getElementById("add")
    var data = ''
    if (listemp || null) {

        for (i = 0; i < listemp.length; i++) {

            data += `
            <tbody>
            <tr>
                 <td> <a>${listemp[i].username}</a>
                 <br />
                 <small>${listemp[i].date1}</small>
                 </td>

                 <td> <a>${listemp[i].email}</a></td>

                 <td>
                 <button Onclick="Views(${listemp[i].id})" class="btn btn-primary btn-xs" class="fa fa-folder" id='v' data-toggle="modal" data-target=".bs-example-modal-lg"> View </button>
                 <button Onclick="Editer(${listemp[i].id})" class="btn btn-info btn-xs" class="fa fa-pencil" id='e'> Edit </button>
                 <button Onclick="Delete(${listemp[i].id})" class="btn btn-danger btn-xs" class="fa fa-trash-o" id='d'> Delete </button>
                 </td>
            </tr>
            </tbody>

            `
        }
        table.innerHTML = data;
    }

}

/****************************************************************************************/
function Delete(index) {
    var listemp = JSON.parse(localStorage.getItem('employees'))
    for (let i = 0; i < listemp.length; i++) {
        if (index == listemp[i].id) {
            listemp.splice(i, 1);
        }
    }
    localStorage.setItem('employees', JSON.stringify(listemp));
    addemp()
}

/****************************************************************************************/
function Views(index) {
    var view = document.getElementById('views')
    var profil = ''
    var listemp = JSON.parse(localStorage.getItem('employees'))
    for (let i = 0; i < listemp.length; i++) {

        if (index == listemp[i].id) {
            profil += 
            `
            <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="x_panel">
                <!-- Large modal -->
                <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">Director Profil</h4>
                      </div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="name">Username</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].username}' id='nameemp' class="form-control col-md-12 col-sm-12 col-xs-12" data-validate-length-range="6" name="name" type="text">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="email">Email</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].email}' type="email" id="email" name="email" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="number">Accounting Number</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].account}' type="number" id="number" name="number" data-validate-minmax="0,1000" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label for="password" class="control-label col-md-12 col-sm-12 col-xs-12">Password </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].psw}' id="password" type="password" name="password" data-validate-length="6,8" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
                <label class="control-label col-md-12 col-sm-12 col-xs-12" for="telephone">Telephone </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].num}' type="tel" id="phone" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
                <label class="control-label col-md-12 col-sm-12 col-xs-12" for="More informations">More informations </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].info}' type="tel" id="employee-info" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
              </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      </div>

                    </div>
                  </div>
                </div>
                <!-- /modals -->
              </div>
            </div>

            `
                        }
                    
                }
                view.innerHTML=profil
  }

/****************************************************************************************/
function Editer(index) {
    var edd = document.getElementById('edite')
    var edite = ''
    var listemp = JSON.parse(localStorage.getItem('employees'))
    for (let i = 0; i < listemp.length; i++) {

        if (index == listemp[i].id) {
            edite += 
    `
    <div class="clearfix"></div>
    <div  id="edite">
    <div class="">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
        <div class="x_title">
          <h2><i class="fa fa-square-o"></i> Edit Employees</h2>
          <ul class="nav navbar-right panel_toolbox">
            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">

            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="name">Username</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].username}' id="nameemp" class="form-control col-md-12 col-sm-12 col-xs-12" data-validate-length-range="6" name="name" type="text">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="email">Email</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].email}' id='mail' type="email" id="emailemp" name="email" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="number">Accounting Number</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].account}' type="number" id="number" name="number" data-validate-minmax="0,1000" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label for="password" class="control-label col-md-12 col-sm-12 col-xs-12">Password </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].psw}' id="passwordemp" type="password" name="password" data-validate-length="6,8" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
                <label class="control-label col-md-12 col-sm-12 col-xs-12" for="telephone">Telephone </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listemp[i].num}' type="tel" id="phoneemp" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
              </div>
              </div><br/><br/>
            <button type="button" class="badd" onclick="cancel(${i})" >cancel</button>
            <button type="button" class="btadd" onclick="upp(${listemp[i].id})" >update</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>

    </div>
  
    </div>`
                        }
                    
                }
                edd.innerHTML=edite
  }

/****************************************************************************************/
  function upp(index) {
    var listemp = JSON.parse(localStorage.getItem('employees'))

    for (let i = 0; i < listemp.length; i++) {
      if (index==listemp[i].id) {
    listemp[i].username= document.getElementById('nameemp').value
    listemp[i].email= document.getElementById('mail').value
    listemp[i].account= document.getElementById('number').value
    listemp[i].psw= document.getElementById('passwordemp').value
    listemp[i].num= document.getElementById('phoneemp').value
      }
    }
    localStorage.setItem('employees', JSON.stringify(listemp));
    
    addemp()
  }

  /**************************************************************************************/
  function cancel(i) {
    var edd = document.getElementById('edite')
    var edite=''
    edd.innerHTML=edite
  }

  /****************************************************************************************/
                                  /***Edit own profile Employee***/
  /****************************************************************************************/
  function ownprofileemp(){
    var table = document.getElementById("tabcontentemp")
    var data=''
    var listADD = JSON.parse(localStorage.getItem('employees'))
    var listuser =JSON.parse(localStorage.getItem("conecemployees"))
    var j =listuser.length-1
    if (listADD || null) { 

      for (i = 0; i < listADD.length; i++) {
     
        
        if (listADD[i].id==listuser[j].idemp) {
        data += `
        <div class="col-md-12 col-sm-12 col-xs-12 profile_details">
        <div class="well profile_view">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <h2 class="brief"><i>Employee</i></h2>
            <div class="left col-xs-7">
              <h1>${listADD[i].username}</h1>
              <p><strong>About: </strong> Employee du Projet Mini ERP</p>
              <ul class="list-unstyled">
                <li><p> <strong>Email *:</strong>${listADD[i].email}</p>
                <li><p> <strong>Account Number *:</strong> ${listADD[i].account}</p>
                <li><p> <strong>Password *:</strong>${listADD[i].psw}</p>
                <li><p> <strong>Phone *:</strong>${listADD[i].num}</p>
                <li><p> <strong>Address:</strong>${listADD[i].adresse}</p>
              </ul>
            </div>
            <div class="right col-xs-5">
            <div class="upload-img">
            <div class="change-photo-btn">
              <input type="file" class="upload" onchange ="openFile(event)">             
            </div>
            </div>
            <div class="profile-img">
              <img src="./images/user.png" alt="User Image" id="avatarimg" style="height: 250px;
              width: 250px; border-radius: 4px;">
            </div>

          </div>
          </div>
          <div class="col-xs-12 bottom text-center">
            <div class="col-xs-12 col-sm-6 text-left">
              <p type="date"> Date de la dernière mise à jours: ${listADD[i].date} <i newdate ></i> </p> 
            </div>
            <div class="col-xs-12 col-sm-6 emphasis">
              <button type="button" class="btn btn-primary btn-xs" onclick="editownprofilemp(${listADD[i].id})"> <i class="fa fa-user"></i>
                 Edit Profile 
              </button>
            </div>
          </div>
        </div>
      </div>
        `
      }
    
  }
      table.innerHTML = data;
    }
  
  }
  // <div class="submit-section submit-btn-bottom">  
  // <input type="button" class="btn btn-success submit-btn" value="Save changes" onclick="Modify(${listADD[i].id})">
  // </div>
  /****************************************************************************************/
// ___________________________________________________________________________________________

var imgUpdate = "";
function openFile(event) {
    var imgUpdate = "";
    var input = event.target;
    var reader = new FileReader();   
       reader.onload = function(){

        var listemp = JSON.parse(localStorage.getItem("employees"))
        var listADD = JSON.parse(localStorage.getItem("conecemployees"))
        var j =listADD.length-1
        for (let i = 0; i < listemp.length; i++) {
          if (listADD[j].idemp==listemp[i].id) {

         imgUpdate = reader.result;
         console.log(imgUpdate)

         document.getElementById("avatarimg").src = imgUpdate
         document.getElementById("leftavatar").src = imgUpdate
         document.getElementById("topavatar").src = imgUpdate

         listemp[i].pictureemp= document.getElementById("avatarimg").name
         localStorage.setItem("employees", JSON.stringify(listemp));
         console.log(listemp)
          };
        }
        };
    reader.readAsDataURL(input.files[0]);


      }
// ___________________________________________________________________________________________

// function Modify(index) {
//     var listADD = JSON.parse(localStorage.getItem('employees'))
//     for (i = 0; i < listADD.length; i++) {     
//       if (index == listADD[i].id){
//             if(imgUpdate !== "")
//             {
//                 pictureemp['img'] = imgUpdate;
//                 console.log(imgUpdate);
                
//             }else {
//               pictureemp['img'] = pictureemp[index].img;
//                 console.log(index);
                
//             }
//             if(imgsUpdate !== "") {
//               pictureemp['imgs'] = imgsUpdate;
//             }else {
//               pictureemp['imgs'] = pictureemp[index].imgs;

//             }
//             if(index !== -1) {
//               pictureemp[index] = pictureemp;

//             } else {
//               pictureemp.push(pictureemp);
//             }
//             localStorage.setItem("employees", JSON.stringify( pictureemp));
//             // location.replace("http://127.0.0.1:5500/Company%20Profile.html")
//         }
//     }
//   }

  /****************************************************************************************/
  function editownprofilemp(index){
    var edd = document.getElementById('editprofileemp')
    var edite = ''
    var listADD = JSON.parse(localStorage.getItem('employees'))
    // var j =listuser.length-1
    for (let i = 0; i < listADD.length; i++) {

        if (index == listADD[i].id) {
            edite += 
    `
    <div  id="editprofileemp">
    <div class="">
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
        <div class="x_title">
          <h2><i class="fa fa-square-o"></i> Edit Profile</h2>
          <ul class="nav navbar-right panel_toolbox">
            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="x_content">

            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="name">Username</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].username}' id="useremp" class="form-control col-md-12 col-sm-12 col-xs-12" style="color:red" data-validate-length-range="6" name="name" type="text">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="email">Email</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].email}' type="email" id="emailemp" name="email" style="color:red" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label class="control-label col-md-12 col-sm-12 col-xs-12" for="number">Accounting Number</label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].account}' type="number" id="numberemp" name="number" data-validate-minmax="0,1000" style="color:red" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
              <label for="password" class="control-label col-md-12 col-sm-12 col-xs-12">Password </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].psw}' id="passwemp" type="number" name="password" data-validate-length="6,8" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
              <label for="tel" class="control-label col-md-12 col-sm-12 col-xs-12">Date de modification </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].date}' id="dateemp" type="tel" name="date" style="color:red" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
              <label for="text" class="control-label col-md-12 col-sm-12 col-xs-12"> Informations additionnelles </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].info}' id="infoemp" type="text" name="info" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
              <div align="center" ></div>
              <div class="item form-group">
              <label for="Adresse" class="control-label col-md-12 col-sm-12 col-xs-12">Adresse </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].adresse}' id="adresseemp" type="text" name="adresse" class="form-control col-md-12 col-sm-12 col-xs-12">
              </div>
              </div>
            <div align="center" ></div>
              <div class="item form-group">
                <label class="control-label col-md-12 col-sm-12 col-xs-12" for="telephone">Telephone </label>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <input value='${listADD[i].num}' type="tel" id="phonemp" name="phone" data-validate-length-range="8,8" class="form-control col-md-12 col-sm-12 col-xs-12"><br/><br/>
              </div>
              </div><br/><br/>
            <button type="button" class="" onclick="cancelprofileemp(${i})" >cancel</button>
            <button type="button" class="" onclick="uppprofileemp(${listADD[i].id})" >update</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>

    </div>
  
    </div>`
                        }
                    
                }
                edd.innerHTML=edite
  }

  /****************************************************************************************/
  function uppprofileemp(index) {
    var listemp = JSON.parse(localStorage.getItem("employees"))

    for (let i = 0; i < listemp.length; i++) {
      if (index==listemp[i].id) {
    listemp[i].psw= document.getElementById('passwemp').value
    listemp[i].num= document.getElementById('phonemp').value
    listemp[i].info= document.getElementById('infoemp').value
    listemp[i].adresse= document.getElementById('adresseemp').value
      }
    }
    localStorage.setItem("employees", JSON.stringify(listemp));
    
    // addemp()
    ownprofileemp()
  }

  /**************************************************************************************/
  function cancelprofileemp(i) {
    var edd = document.getElementById('editprofileemp')
    var edite=''
    edd.innerHTML=edite
  }