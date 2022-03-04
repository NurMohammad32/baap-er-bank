document.getElementById('login-submit').addEventListener('click', function(){
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == '26nurmohammad@gmail.com' && userPassword == 'MyPassword'){
        window.location.href = 'banking.html';
    }
    else{
        alert("User name OR Password is not matching with record. Please, Try again.");
    }
})




