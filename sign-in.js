
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const submit = document.getElementById("submit");
    const error = document.getElementById("error");
    const reveal = document.getElementById("revealPassword");

    submit.addEventListener("click", function(event){
        event.preventDefault();
        try {
            if(username.value == "admin" && password.value == "admin"){
                alert("Login Successfully");
                window.location.href = "index.html";
                return 0;
            }else{
                error.style.display = "block";
                password.value = "";
                return 0;
            }
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
    });
    
    reveal.addEventListener("click", function(reset){
        reset.preventDefault();
        if(password.type === "password"){
            password.type = "text";
            return 0;
        }else{
            password.type = "password";
            return 0;
        }
    });