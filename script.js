const editableInputs = document.querySelectorAll('input#editable');
const save = document.getElementById('save')
const edit = document.getElementById('edit')
const cancel = document.getElementById('cancel')
const aboutOrganization = document.getElementById('aboutOrg')

edit.addEventListener('click', () => {
    editFunction(true)
})

cancel.addEventListener('click', () => {
    editFunction(false)
})

function editFunction(bool){
    if (bool) {
    editableInputs.forEach(input => {
    input.style.pointerEvents = "all";
    aboutOrganization.style.pointerEvents = "all";
    });
    save.style.display = "inline-block";
    edit.style.display = "none";
    cancel.style.display = "inline-block";
    }else{
        editableInputs.forEach(input => {
            input.style.pointerEvents = "none";
            aboutOrganization.style.pointerEvents = "none";
        });
        save.style.display = "none";
        cancel.style.display = "none";
        edit.style.display = "inline-block";
    }
}

function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }