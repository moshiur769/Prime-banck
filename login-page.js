const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function(){
    const loginEmail = document.getElementById('Email');
    const Email = loginEmail.value
    const loginpassword = document.getElementById('password');
    const password = loginpassword.value;

    if(Email==="primebank@gmail.com"&& password=== "1234"){
        window.location.href="dashboard.html";
    }
    else{
        alert('Your Email or Password Not Match')
    }
})