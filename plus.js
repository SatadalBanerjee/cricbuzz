var form=document.querySelector("#form");
form.addEventListener("submit",myFunction);

var data=JSON.parse(localStorage.getItem("loginData"))

function myFunction(){
    event.preventDefault();
    var email=document.querySelector("#email").value;
    var coupon=document.querySelector("#coupon").value;
    var btn=document.querySelector("#continue");
    var price=document.querySelector("#main-price");

    data.forEach(function(el){
    
if(email == el.email)
{
    if(coupon == "masai30" || coupon == "Masai30")
    {
      btn.innerText="Pay 699 INR"
      alert("Coupon Applied Succesfully You Need to Pay 699INR");
      // btn.innerText="Pay 699 INR"
      window.location.href="payment.html"
      

    }
    else if(coupon == ""){
      alert("Continue to Payment Page")
    }
    else{
        alert("Invalid Coupon code");
    }
}
else if(email ==""){
  alert("Please enter your Email");
}
else{
    alert("Invalid email ! Please check email or Signup first")
}
        
        })
}