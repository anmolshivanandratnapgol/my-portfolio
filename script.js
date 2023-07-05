const header =document.querySelector("header")
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);

});


let menu =document.querySelector('#menu-icon');
let navlist =document.querySelector('.navlist');


menu.onclick = () =>{
   menu.classList.toggle('bx-x');
   navlist.classList.toggle('active');
   
}


// contact email sending 


function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_vnmrn64";
    const templateID = "template_6g396tj";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }

      // download file jquery 


      $(document).ready(function(){


        $('#btndownload').click(function(e) {
          e.preventDefault();  //stop the browser from following
          window.location.href = 'Anmol_Resume.pdf';
      });

      });
      
    
// image container javascript


document.querySelectorAll('.container img').forEach(image => {
 image.onclick = () =>{
  document.querySelector(".popup-image").style.display ="block";
  document.querySelector(".popup-image img").src = image.getAttribute('src');
 }
  
});


document.querySelector('.popup-image ').onclick =() =>{
  document.querySelector(".popup-image").style.display ="none";

}



// animation

const sr = scrollReveal ({
      distance : '45px',
      duration:2700,
      reset:true
})

sr.reveal('.home-text' , {delay:350 ,origin:'left'})
sr.reveal('.home-img' , {delay:350 ,origin:'right'})
sr.reveal('.about','.service','.imagegallery','.skillsets','contactus', {delay:200 ,origin:'bottom'})

