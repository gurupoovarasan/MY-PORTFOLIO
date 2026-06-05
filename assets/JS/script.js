

function nav_expand() {
  document.querySelector(".nav_link").classList.toggle("expand");
};
function nav_close() {
  document.querySelector(".nav_link").classList.close("expand");
};


// email message

function sendMail(){
  let parms={
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      phone : document.getElementById("phone").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("message").value
     
  }
  emailjs.send("service_bbxk4zj","template_rhqn5jl",parms).then(alert("Email Sent..!!"))
}