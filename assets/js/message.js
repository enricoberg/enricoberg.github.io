function renderMessage(imageurl,message_header,message_body,timer){
    let body=document.body;
    body.innerHTML='<script src="assets/js/functions-min.js"></script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>';
    let element_message = document.createElement("div");
    element_message.classList.add("containerfull");
    element_message.innerHTML = `<h1 style="width: 100%; text-align: center;">${message_header}</h1><p style="width: 100%; text-align: center; font-size: 18px;">${message_body}</p>`;
    body.insertBefore(element_message, body.firstChild);
    let element_image= document.createElement("div");
    element_image.classList.add("containerfull");
    element_image.classList.add("foxcontainer");
    element_image.innerHTML=`<img src="${imageurl}" alt="Fox" style="position: absolute; left:50%; top:25px; transform: translate(-50%, 0); max-width: 70vw;">`;
    body.insertBefore(element_image, body.firstChild);
    setTimeout(()=>{window.location.reload()},timer);
}


