var form=document.querySelector("#form")
var userData=JSON.parse(localStorage.getItem("loginData")) || [];
form.addEventListener("submit", function(event){
    
    event.preventDefault()
    var data = {
        name: form.name.value,
        email: form.email.value,
        password: form.pass.value,
    }
    // arr.push(data);
    // var userData=JSON.parse(localStorage.getItem("userData")) || [];
    if(data.name == "" || data.email == "" || data.password == ""  )
    { 
        alert("Please Enter Your All Your Details")
    }
    else{
        if(checkEmail(data.email)===true){
            userData.push(data);
            localStorage.setItem("loginData",JSON.stringify(userData));
            alert("signup succesful")
            window.location.href="index1.html";
        }
        else{
            alert("Account already exists")
        }
    }
    
})

    function checkEmail(email){
        let filtered=userData.filter(function (element){
            return email === element.email;
        })
        if(filtered.length > 0)
        {
            return false;
        }
        else{
            return true;
        }
        }

