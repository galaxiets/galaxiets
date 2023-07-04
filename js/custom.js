/* 
Adding custom JavaScript code below
*/

const btn = document.getElementById('form-submit');

btn
 .addEventListener('click', function(event) {
   event.preventDefault();

   btn.innerHTML = '<i class="fa fa-paper-plane"></i>&nbsp;Sending...';

   const serviceID = "service_9mgv4pa";
   const templateID = "template_y21dfwi";

   emailjs.sendForm(serviceID, templateID,  document.getElementById('form-submit-tag'))
    .then(() => {
      btn.innerHTML = '<i class="fa fa-paper-plane"></i>&nbsp;Send message';
      alert('Your message sent successfully!');
    }, (err) => {
        btn.innerHTML = '<i class="fa fa-paper-plane"></i>&nbsp;Send message';
      alert(JSON.stringify(err));
    });
});


function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_9mgv4pa";
    const templateID = "template_y21dfwi";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        //   document.getElementById("name").value = "";
        //   document.getElementById("email").value = "";
        //   ocument.getElementById("subject").value = "";
        //   document.getElementById("message").value = "";

          document.getElementById("name").reset();
          document.getElementById("email").reset();
          document.getElementById("subject").reset();
          document.getElementById("message").reset();
          console.log(res);

          alert ("Your message sent successfully!!");
          document.write ("Your message sent successfully!!");
  
      })
      .catch(err=>console.log(err));  
  }