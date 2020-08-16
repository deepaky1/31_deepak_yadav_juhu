function checkname(){
    let userelement = document.querySelector("#userId").value ;
    if(userelement ==="") {
      console.log("Please Enter Name")
    }
    else {
        document.querySelector("#userId").innerHTML=userelement;
    }

}


function checkpassword(){
let passwordelement = document.querySelector("#PassId ").value;

if(passwordelement === "")
{
  console.log("Enter Your Password");
}
else{
  document.querySelector("#PassId").innerHTML=passwordelement;

}

}