

function submitFormEmailJS(){
    
    let error=document.querySelector(".errormessage");
    if(!error.classList.contains("invisible")) error.classList.add("invisible");
    let username=document.querySelector("#username").value;
    let email=document.querySelector("#email").value;
    let object = document.querySelector("#object").value;
    let message=document.querySelector("#message").value;
    const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    event.preventDefault();
    if(username=="" || email=="" || object=="" || message=="" || !pattern.test(email)) {
        
        error.innerHTML="Please fill all the fields";
        if(error.classList.contains("invisible")) error.classList.remove("invisible");
        return;
        
    }
    
    
    
    const form=document.getElementById('form'); 
    emailjs.init('fImHDY0dLx--mOF3X')  
                        
    const serviceID = 'default_service';
    const templateID = 'template_lxkx4em';
    setTimeout(() => {
        
    
     
                emailjs.sendForm(serviceID, templateID, form)
                .then(() => {   
                          
                    renderMessage("assets/img/fox.png","Congratulations!","Thank you for your message, I'll reach out to you as soon as possible!",6000);
                }, (err) => { renderMessage("assets/img/fox.png","Oops!","Something went wrong with your request, redirecting..",6000);});           
            
        }, 500);
}  