// generate random password

function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector(`#password`);

    passwordText.value = password;
    {
        generateBtn.addEventListener(`click`,writePassword);
    }
        // set password length/complexity
        let complexity = document.getElementsByid("password").value;

        //[possible password values
        let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

        let password = "";

        // create loop to choose password characters
        for(var i =0; i<= complexity; 1++){
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length -1)));
        }

        // add passwork to card

        document.querySelector("#generate").value = password;
}