// function validate(){
//   var name = document.getElementById('name');
//   var email = document.getElementById('Email');
//   var password = document.getElementById('password');
//   var error_message = document.getElementById("error_message");
  
//   error_message.style.padding = "10px";
  
//   var text;
//   if(name.length < 5){
//     text = "Please Enter valid Name";
//     error_message.innerHTML = text;
//     return false;
//   }
  
//   if(email.toString().indexOf("@") == -1 || email.length < 6){
//     text = "Please Enter valid Email";
//     error_message.innerHTML = text;
//     return false;
//   }

//   if (password.length <= 6){
//     text="Password must be longer than 6 characters";
//     error_message.innerHTML = text;
//     return false;
//   }
  
//   alert("Form Submitted Successfully!");
//   return true;
// }

function login()
    {
      var uname = document.myform.name.value;
      console.log("here");

      var pwd = document.myform.psw.value;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(uname =='')
      {
        alert("please enter email.");
      }
      else if(pwd=='')
      {
            alert("enter the password");
      }
      else if(!filter.test(uname))
      {
        alert("Enter valid email id.");
      }
      else if(pwd.length < 6 || pwd.length > 6)
      {
        alert("Password min and max length is 6.");
      }
      else
      {
    alert('Thank You for Login & You are Redirecting to BMS alumini page');
    //Redirecting to other page or webste code or you can set your own html page.
         window.location = "./alumHomePage.html";
        }
    }
    //Reset Inputfield code.
    function clearFunc()
    {
      document.getElementById("email").value="";
      document.getElementById("pwd1").value="";
    }	
