document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("click-this-too").addEventListener("click", generateonlynumber);
    document.getElementById("click-this").addEventListener("click",generate);
    document.getElementById("resetForm").addEventListener("click",resetFunction);
  });

function generate() {

        var charPosition, passwordChar, length1;
        length1 = parseInt(document.getElementById("length").value, 10);

        var allCharacters = 
        "!@#$%^&*()abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var newPassword = "";

            for (i = 0; i < length1; i++) {
                charPosition = Math.floor(Math.random() * allCharacters.length);
                passwordChar = allCharacters.charAt(charPosition);
                newPassword =  newPassword + passwordChar;
            }
            pass.value =  newPassword;
        
           if(document.getElementById("pass").value){
                console.log('print hoise');
                
            }
            
    }

function generateonlynumber(){
    var charPosition, passwordChar, length1;

    length1 = parseInt(document.getElementById("length").value, 10);
    var numbers = "0123456789";
    var  password = "";
    
    for (i = 0; i < length1; i++) {
        charPosition = Math.floor(Math.random() * numbers.length);
        passwordChar = numbers.charAt(charPosition);
        password =  password + passwordChar;
    }
    pass2.value =  password;
}

function resetFunction() {
    document.getElementById("myForm").reset();
}