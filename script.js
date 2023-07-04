const SForm = document.getElementById('student-form');
const tBody = document.querySelector('#crudTable tbody');

SForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gpa = document.getElementById('gpa').value;
    const age = document.getElementById('age').value;
    const degree = document.getElementById('degree').value;

    const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${gpa}</td>
        <td>${age}</td>
        <td>${degree}
        <span class="edit-icon" onclick="editRow(this)">
          <i class="fa-regular fa-pen-to-square"></i>
          </span>
          <span class="delete-icon" onclick="deleteRow(this)">
            <i class="fa-regular fa-trash-can"></i>
          </span>
        </td>
      `;

      tBody.appendChild(newRow);
      SForm.reset();
    });


    //delete data
    function deleteRow(row) {
      const selectedRow = row.parentNode.parentNode;
      selectedRow.remove();
    }

    //edit Data
    function editRow(row) {
      const selectedRow = row.parentNode.parentNode;
      const cells = selectedRow.querySelectorAll('td');

      document.getElementById('name').value = cells[0].textContent;
      document.getElementById('email').value = cells[1].textContent;
      document.getElementById('gpa').value = cells[2].textContent;
      document.getElementById('age').value = cells[3].textContent;
      document.getElementById('degree').value = cells[4].textContent;

      selectedRow.remove();
    }

//searching

var newarray= [];

document.getElementById("search").addEventListener("keyup", function(){
  var search = this.value.toLowerCase();

  newarray = array.filter(function (val){

    if(val.name.includes(search) || val.email.includes(search) || val.degree.includes(search)){
      var newobj = {name : val.name , email : val.email , degree : val.degree};
      return newobj; 
    }
  })


  tBody.appendChild(newarray);
  SForm.reset();

})






