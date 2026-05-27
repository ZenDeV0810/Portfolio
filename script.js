function sendMail(event){
  event.preventDefault();

  var params = {
    name: document.getElementById("name").value,
    emailacc: document.getElementById("emailacc").value,
    phone: document.getElementById("phonenum").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  const serviceId = "service_7f57k9h";
  const templateId = "template_7l48w1j";

  emailjs.send(serviceId, templateId, params)
  .then(function(res){
    document.getElementById("name").value = "";
    document.getElementById("emailacc").value = "";
    document.getElementById("phonenum").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    alert("Message Sent Successfully!");
  })
  .catch(function(err){
    console.log(err);
    alert("Failed to send message.");
  });
}