const form = document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');

const name_error = document.getElementById('name_error');
const password_error = document.getElementById('password_error');


form.addEventListener('submit', (e) => {
    if(username.value === '' || username.value == null)
        {
            e.preventDefault();
            name_error.innerHTML = "Name is Required";
        }
    else
        {
            name_error.innerHTML = "";  
        }

    if(password.value === '' || password.value == null)
        {
            e.preventDefault();
            password_error.innerHTML = "Password is Required";
        }
    else if(password.value.length < 8)
        {
            e.preventDefault();
            password_error.innerHTML = "Password must be atleast 8 characters";
        }
    else
        {
            password_error.innerHTML="";
        }

    });










