(function(){
    emailjs.init("vTpKhfj8LqgD6PRdC");
})();

document
.getElementById("contact-form")
.addEventListener("submit",function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_k5ci2ln",
        "template_x7ebh03",
        this
    )
    .then(function(){
        alert("Message Sent Successfully!")
    });
});