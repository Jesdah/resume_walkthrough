function sendMail(contactForm) {
    emailjs.send("service_u5749im","template_mnfqoy5", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCES", response);
        },
        function(error) {
            console.log("FAILED",error);
        }
    );
    return false;  // To block from loading a new page
}
console.log("hej")