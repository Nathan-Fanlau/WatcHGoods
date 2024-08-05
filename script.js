// HAMBURGER MENU CODE
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// FORM VALIDATION
function validate(){
    // Get data from form
    var fullname = document.getElementById("fullname").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var country = document.getElementById("country").value
    var subject = document.getElementById("subject").value
    var description = document.getElementById("description").value
    var errorMessage = document.getElementById("errorMessage")

    if(fullname.length < 5){
        document.getElementById("errorMessage1").innerHTML = "*Username must be at least 5 characters long<br>"
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    else if(email.endsWith("@gmail.com") == false && email.endsWith("@yahoo.com") == false){
        document.getElementById("errorMessage2").innerHTML = "*Email must be end with @gmail.com/@yahoo.com<br>"
        window.scrollTo({
            top: 140,
            behavior: "smooth"
        });
    }

    else if(phone.length < 8 || phone.length > 12){
        document.getElementById("errorMessage3").innerHTML = "*Phone number can only be 8-12 digits long<br>"
        window.scrollTo({
            top: 280,
            behavior: "smooth"
        });
    }

    else if(country === "" || country === "select"){
        document.getElementById("errorMessage4").innerHTML = "*Please select a valid country / region<br>"
        window.scrollTo({
            top: 420,
            behavior: "smooth"
        });
    }

    else if(subject === "" || subject === "select"){
        document.getElementById("errorMessage5").innerHTML = "*Please select a valid subject<br>"
        window.scrollTo({
            top: 540,
            behavior: "smooth"
        });
    }

    else if(description.length < 50){
        document.getElementById("errorMessage6").innerHTML = "*Description must at least be 50 characters to ensure a detailed inquiry / request.<br>"
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });
    }
}



function isAlphaNum(string){
    var isAlpha = false
    var isNum = false
    for(let i=0; i < string.length; i++){
        if(isNaN(string[i])){
            isAlpha = true
        }
        else{
            isNum = true
        }
    }
    if(isAlpha == true && isNum == true){
        return true
    } else return false
}