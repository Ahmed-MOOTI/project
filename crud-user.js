function adddirector(){
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
                 <button Onclick="View(${listdir[i].id})" class="btn btn-primary btn-xs" class="fa fa-folder" id='v'> View </button>
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