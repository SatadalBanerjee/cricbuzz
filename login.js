document.querySelector("#form").addEventListener("submit",myFunction)

var data=JSON.parse(localStorage.getItem("loginData"))
// console.log(data.email)

function myFunction(){
    event.preventDefault();
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#pass").value;

    data.forEach(function(el){
        
    if(password == el.password)
    {
      alert("Login Succesfull");
      window.location.href="index1.html"
    }
    else{
        alert("Invalid Email or Password");
    }
   

    })
}