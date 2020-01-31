/****************************************************************************************/
                                    /*** leave employee***/
/****************************************************************************************/
function dead() {
    var c = document.getElementById("Date1").value;
    var d = document.getElementById("Date2").value;
  
    var a = new Date();			// date courante
    var b = new Date(c); // date à tester
    var e = new Date(d); // date à tester
    var na = parseInt(a.valueOf(), 10);
    var nb = parseInt(b.valueOf(), 10);
    var ne = parseInt(e.valueOf(), 10);
    var c = (na - nb) / (1000 * 60 * 60 * 24 * 365)
    var d = (nb - ne) / (1000 * 60 * 60 * 24 * 365)
    if (na > nb) {
    alert("Veuillez saisir une date ultérieur à celle dh'aujourdhui"); } 
    else if (nb > ne) { alert("Veuillez saisir une date ultérieur"); }
    else {
     // document.getElementById("dure").value = c;
      return true;
    }
  }

    //*******************************************************************/
    function cancel() {

        document.getElementById("leave_type").value="Holiday";
        document.getElementById("half1").value="All day";
        document.getElementById("half2").value="All day";
        document.getElementById("leave_reason").value="";
    
      }

  //*********************************************************************/
  function displayemp() {

    var table = document.getElementById("display-request");
    var data=''
    var listADD = JSON.parse(localStorage.getItem('requestemp'));
    var listuser =JSON.parse(localStorage.getItem("conecemployees"));
    var j =listuser.length-1 ;
    console.log(j);
    console.log(listADD);
    if (listADD == null) {

      data +=  `
      <thead>
      <tr class="headings">
        <th class="column-title"> Date </th>
        <th class="column-title"> Type </th>
        <th class="column-title"> Approved by </th>
        <th class="column-title"> Edit </th>
        <th class="column-title"> Statut </th>
      </tr>
    </thead>
          `
    }
    else {
      data += `
      <thead>
      <tr class="headings">
        <th class="column-title"> Date </th>
        <th class="column-title"> Type </th>
        <th class="column-title"> Approved by </th>
        <th class="column-title"> Edit </th>
        <th class="column-title"> Statut </th>
      </tr>
    </thead>
      `
      for (i = 0; i < listADD.length; i++) {
        
        
        if (listADD[i].id==listuser[j].idemp) {
          
        
          
        
        data += 
        `
        <tbody>
        <tr class="even pointer">
          <td class=" "> ${listADD[i].begin} &nbsp;&nbsp; ${listADD[i].end}</td>
          <td class=" "> ${listADD[i].leavetype}</td>
          <td class=" "> ${listADD[i].approvedby} </td>
          <td class=" "> 
            <button Onclick="Deleterequestemp(${listADD[i].idrequest})" class='btn btn-danger'>Delete</boutton>
          </td>
          <td class=" last"> ${listADD[i].statut}</td>
        </tr>
        </tbody>
        `
      }
    
  }
      table.innerHTML = data;
    } 
  
  }
//   <button Onclick="Editrequestemp(${listADD[i].idrequest})" class='badd'>Edit</boutton>

  /******************************************************************************************/
  function Deleterequestemp(index){
    var listADD = JSON.parse(localStorage.getItem('requestemp'))
    for (let i = 0; i < listADD.length; i++) {
      if (index==listADD[i].idrequest) {
      listADD.splice(i, 1);
      }
    }
    localStorage.setItem('requestemp', JSON.stringify(listADD));
    // var x = document.getElementById("display-request");
    // x.style.display ="none"
    displayemp()
  }

  //*******************************************************************/
  function requestsemp(){
    var type =      document.getElementById("leave_type").value;
    var deadline1 = document.getElementById("Date1").value;
    var deadline2 = document.getElementById("Date2").value;
    var halfday1 =  document.getElementById("half1").value;
    var halfday2 =  document.getElementById("half2").value;
    var reason =    document.getElementById("leave_reason").value;
    var listADD =JSON.parse(localStorage.getItem("requestemp"))
    var listuser=JSON.parse(localStorage.getItem("conecemployees"))
    var i =listuser.length-1
    if(dead()){
    if(listADD==null){
    listADD=[]}

   obj ={
     id:listuser[i].idemp ,
     leavetype:type,
     begin: deadline1,
     end: deadline2,
     half1:halfday1,
     half2:halfday2,
     reason: reason,
     statut:"In progress",
     approvedby:"",
     idrequest : Math.floor(Math.random()*1000)+1
   }
   listADD.push(obj)
   let str= JSON.stringify(listADD)
   localStorage.setItem("requestemp",str)
   location.replace('resumeemp.html')
  //  displayemp()
   cancel();

   }
   else { alert("Veuillez saisir une date ultérieur"); }
  }

  /****************************************************************************************/
                                    /*** leave director***/
/****************************************************************************************/
function deaddir() {
    var c = document.getElementById("Date1dir").value;
    var d = document.getElementById("Date2dir").value;
  
    var a = new Date();			// date courante
    var b = new Date(c); // date à tester
    var e = new Date(d); // date à tester
    var na = parseInt(a.valueOf(), 10);
    var nb = parseInt(b.valueOf(), 10);
    var ne = parseInt(e.valueOf(), 10);
    var c = (na - nb) / (1000 * 60 * 60 * 24 * 365)
    var d = (nb - ne) / (1000 * 60 * 60 * 24 * 365)
    if (na > nb) {
    alert("Veuillez saisir une date ultérieur à celle dh'aujourdhui"); } 
    else if (nb > ne) { alert("Veuillez saisir une date ultérieur"); }
    else {
     // document.getElementById("dure").value = c;
      return true;
    }
  }

    //*******************************************************************/
    function canceldir() {

        document.getElementById("leave_typedir").value="Holiday";
        document.getElementById("half1dir").value="All day";
        document.getElementById("half2dir").value="All day";
        document.getElementById("leave_reasondir").value="";
    
      }

  //*********************************************************************/
  function displaydir() {

    var table = document.getElementById("display-requestdir");
    var data=''
    var listADD = JSON.parse(localStorage.getItem('requestdir'));
    var listuser =JSON.parse(localStorage.getItem("conecdirector"));
    var j =listuser.length-1 ;
    if (listADD == null) {

      data +=  `
      <thead>
      <tr class="headings">
        <th class="column-title"> Date </th>
        <th class="column-title"> Type </th>
        <th class="column-title"> Approved by </th>
        <th class="column-title"> Edit </th>
        <th class="column-title"> Statut </th>
      </tr>
    </thead>
          `
    }
    else {
      data += `
      <thead>
      <tr class="headings">
        <th class="column-title"> Date </th>
        <th class="column-title"> Type </th>
        <th class="column-title"> Approved by </th>
        <th class="column-title"> Edit </th>
        <th class="column-title"> Statut </th>
      </tr>
    </thead>
      `
      for (i = 0; i < listADD.length; i++) {
        
        
        if (listADD[i].id==listuser[j].iddir) {
          
        
          
        
        data += 
        `
        <tbody>
        <tr class="even pointer">
          <td class=" "> ${listADD[i].begin} &nbsp;&nbsp; ${listADD[i].end}</td>
          <td class=" "> ${listADD[i].leavetype}</td>
          <td class=" "> ${listADD[i].approvedby} </td>
          <td class=" "> 
            <button Onclick="Deleterequestdir(${listADD[i].idrequest})" class='btn btn-danger'>Delete</boutton>
          </td>
          <td class=" last"> ${listADD[i].statut}</td>
        </tr>
        </tbody>
        `
      }
    
  }
      table.innerHTML = data;
    } 
  
  }
//   <button Onclick="Editrequestemp(${listADD[i].idrequest})" class='badd'>Edit</boutton>

  /******************************************************************************************/
  function Deleterequestdir(index){
    var listADD = JSON.parse(localStorage.getItem('requestdir'))
    for (let i = 0; i < listADD.length; i++) {
      if (index==listADD[i].idrequest) {
      listADD.splice(i, 1);
      }
    }
    localStorage.setItem('requestdir', JSON.stringify(listADD));
    var x = document.getElementById("display-requestdir");
    displaydir()
  }

  /******************************************************************************************/
  function requestsdir(){
    var type =      document.getElementById("leave_typedir").value;
    var deadline1 = document.getElementById("Date1dir").value;
    var deadline2 = document.getElementById("Date2dir").value;
    var halfday1 =  document.getElementById("half1dir").value;
    var halfday2 =  document.getElementById("half2dir").value;
    var reason =    document.getElementById("leave_reasondir").value;
    var listADD =JSON.parse(localStorage.getItem("requestdir"))
    var listuser=JSON.parse(localStorage.getItem("conecdirector"))
    var i =listuser.length-1
    if(deaddir()){
        console.log(deadline1)
        console.log(deadline2)
        console.log(halfday1)
        console.log(halfday2)
        console.log(reason)
        console.log(type)
    if(listADD==null){
    listADD=[]}

   obj ={
     id:listuser[i].iddir ,
     leavetype:type,
     begin: deadline1,
     end: deadline2,
     half1:halfday1,
     half2:halfday2,
     reason: reason,
     statut:"In progress",
     approvedby:"",
     idrequest : Math.floor(Math.random()*1000)+1
   }
   listADD.push(obj)
   let str= JSON.stringify(listADD)
   localStorage.setItem("requestdir",str)
   location.replace('resumedir.html')
   canceldir();
   }
   else { alert("Veuillez saisir une date ultérieur"); }
  }

    /****************************************************************************************/
                                    /*** Answer Director***/
/****************************************************************************************/
  /******************************************************************************************/
    function answerdir() {

        var table = document.getElementById("display-answerdir");
        var data=''
        var listADD = JSON.parse(localStorage.getItem('requestemp'));
        if (listADD == null) {
    
          data +=  `
          <thead>
          <tr class="headings">
            <th class="column-title"> Date from to </th>
            <th class="column-title"> Type </th>
            <th class="column-title"> Raison </th>
            <th class="column-title"> Approved by </th>
            <th class="column-title"> Edit </th>
            <th class="column-title"> Statut </th>
          </tr>
        </thead>
              `
        }
        else {
          data += `
          <thead>
          <tr class="headings">
            <th class="column-title"> Date from to </th>
            <th class="column-title"> Type </th>
            <th class="column-title"> Raison </th>
            <th class="column-title"> Approved by </th>
            <th class="column-title"> Edit </th>
            <th class="column-title"> Statut </th>
          </tr>
        </thead>
          `
          for (i = 0; i < listADD.length; i++) {    
            
            data += 
            `
            <tbody>
            <tr class="even pointer">
              <td class=" "> ${listADD[i].begin} &nbsp;&nbsp; ${listADD[i].end}</td>
              <td class=" "> ${listADD[i].leavetype}</td>
              <td class=" "> ${listADD[i].reason}</td>
              <td class=" "> ${listADD[i].approvedby} </td>
              <td class=" "> 
                <button Onclick="Denyrequestemp(${listADD[i].idrequest})" class='btn btn-danger'>Deny</boutton>
                <button Onclick="Acceptrequestemp(${listADD[i].idrequest})" class='btn btn-success'>Accept</boutton>
              </td>
              <td class=" last"> ${listADD[i].statut}</td>
            </tr>
            </tbody>
            `
          }
        
      }
          table.innerHTML = data;
          
        } 
    
  /******************************************************************************************/
      function Denyrequestemp(index){
        var listADD = JSON.parse(localStorage.getItem('requestemp'))
        var listuser=JSON.parse(localStorage.getItem("conecdirector"))
        var name = "";
        name = listuser[i].userdir;
        for (let i = 0; i < listADD.length; i++) {
          if (index==listADD[i].idrequest) {
            listADD[i].statut= "Denied";
            listADD[i].approvedby=name;            
          }
        }
        localStorage.setItem('requestemp', JSON.stringify(listADD)); 
        answerdir()
        displayemp()
       }

  /******************************************************************************************/
  function Acceptrequestemp(index){
    var listADD = JSON.parse(localStorage.getItem('requestemp'))
    var listuser=JSON.parse(localStorage.getItem("conecdirector"))
    var name = "";
    name = listuser[i].userdir;
    for (let i = 0; i < listADD.length; i++) {
      if (index==listADD[i].idrequest) {
        listADD[i].statut= "ACCEPTED";
        listADD[i].approvedby=name;            
      }

    }
    localStorage.setItem('requestemp', JSON.stringify(listADD));
    answerdir()
    displayemp()
  }

    /****************************************************************************************/
                                    /*** Answer Admin***/
/****************************************************************************************/
function answeradtodir() {

  var table = document.getElementById("display-requestad");
  var data=''
  var listADD = JSON.parse(localStorage.getItem('requestdir'));
  if (listADD == null) {

    data +=  `
    <thead>
    <tr class="headings">
      <th class="column-title"> Date from to </th>
      <th class="column-title"> Type </th>
      <th class="column-title"> Raison </th>
      <th class="column-title"> Approved by </th>
      <th class="column-title"> Edit </th>
      <th class="column-title"> Statut </th>
    </tr>
  </thead>
        `
  }
  else {
    data += `
    <thead>
    <tr class="headings">
      <th class="column-title"> Date from to </th>
      <th class="column-title"> Type </th>
      <th class="column-title"> Raison </th>
      <th class="column-title"> Approved by </th>
      <th class="column-title"> Edit </th>
      <th class="column-title"> Statut </th>
    </tr>
  </thead>
    `
    for (i = 0; i < listADD.length; i++) {    
      
      data += 
      `
      <tbody>
      <tr class="even pointer">
        <td class=" "> ${listADD[i].begin} &nbsp;&nbsp; ${listADD[i].end}</td>
        <td class=" "> ${listADD[i].leavetype}</td>
        <td class=" "> ${listADD[i].reason}</td>
        <td class=" "> ${listADD[i].approvedby} </td>
        <td class=" "> 
          <button Onclick="Denyrequestadtodir(${listADD[i].idrequest})" class='btn btn-danger'>Deny</boutton>
          <button Onclick="Acceptrequestadtodir(${listADD[i].idrequest})" class='btn btn-success'>Accept</boutton>
        </td>
        <td class=" last"> ${listADD[i].statut}</td>
      </tr>
      </tbody>
      `
    }
  
}
    table.innerHTML = data;
    
  } 

/******************************************************************************************/
function Denyrequestadtodir(index){
  var listADD = JSON.parse(localStorage.getItem('requestdir'))
  var listuser=JSON.parse(localStorage.getItem("conectadmin"))
  var name = "";
  name = listuser[i].useradmin;
  for (let i = 0; i < listADD.length; i++) {
    if (index==listADD[i].idrequest) {
      listADD[i].statut= "Denied";
      listADD[i].approvedby=name;            
    }
  }
  localStorage.setItem('requestdir', JSON.stringify(listADD)); 
  answeradtodir()
 }

/******************************************************************************************/
function Acceptrequestadtodir(index){
var listADD = JSON.parse(localStorage.getItem('requestdir'))
var listuser=JSON.parse(localStorage.getItem("conectadmin"))
var name = "";
name = listuser[i].useradmin;
for (let i = 0; i < listADD.length; i++) {
if (index==listADD[i].idrequest) {
  listADD[i].statut= "ACCEPTED";
  listADD[i].approvedby=name;            
}

}
localStorage.setItem('requestdir', JSON.stringify(listADD));
answeradtodir() 
}

/****************************************************************************************/
function answeradtoemp(){

  var table = document.getElementById("display-answerad");
  var data=''
  var listadmin = JSON.parse(localStorage.getItem('requestemp'));
  if (listadmin == null) {

    data +=  `
    <thead>
    <tr class="headings">
      <th class="column-title"> Date from to </th>
      <th class="column-title"> Type </th>
      <th class="column-title"> Raison </th>
      <th class="column-title"> Approved by </th>
      <th class="column-title"> Edit </th>
      <th class="column-title"> Statut </th>
    </tr>
  </thead>
        `
  }
  else {
    data += `
    <thead>
    <tr class="headings">
      <th class="column-title"> Date from to </th>
      <th class="column-title"> Type </th>
      <th class="column-title"> Raison </th>
      <th class="column-title"> Approved by </th>
      <th class="column-title"> Edit </th>
      <th class="column-title"> Statut </th>
    </tr>
  </thead>
    `
    for (i = 0; i < listadmin.length; i++) {    
      
      data += 
      `
      <tbody>
      <tr class="even pointer">
        <td class=" "> ${listadmin[i].begin} &nbsp;&nbsp; ${listadmin[i].end}</td>
        <td class=" "> ${listadmin[i].leavetype}</td>
        <td class=" "> ${listadmin[i].reason}</td>
        <td class=" "> ${listadmin[i].approvedby} </td>
        <td class=" "> 
          <button Onclick="Denytoemp(${listadmin[i].idrequest})" class='btn btn-danger'>Deny</boutton>
          <button Onclick="Accepttoemp(${listadmin[i].idrequest})" class='btn btn-success'>Accept</boutton>
        </td>
        <td class=" last"> ${listadmin[i].statut}</td>
      </tr>
      </tbody>
      `
    }
}
    table.innerHTML = data;
    
  } 

/******************************************************************************************/
function Denytoemp(index){
  var listADD = JSON.parse(localStorage.getItem('requestemp'))
  var listuser=JSON.parse(localStorage.getItem("conectadmin"))
  var mail = "";
  mail = listuser[1].emailadmin;
  for (let i = 0; i < listADD.length; i++) {
  if (index==listADD[i].idrequest) {
    listADD[i].statut= "DENIED";
    listADD[i].approvedby=mail;            
  }
  
  }
  localStorage.setItem('requestemp', JSON.stringify(listADD));
  answeradtoemp() 
  }

/******************************************************************************************/
function Accepttoemp(index){
var listADD = JSON.parse(localStorage.getItem('requestemp'))
var listuser=JSON.parse(localStorage.getItem("conectadmin"))
var mail = "";
mail = listuser[1].emailadmin;
for (let i = 0; i < listADD.length; i++) {
if (index==listADD[i].idrequest) {
  listADD[i].statut= "ACCEPTED";
  listADD[i].approvedby=mail;            
}

}
localStorage.setItem('requestemp', JSON.stringify(listADD));
answeradtoemp() 
}

