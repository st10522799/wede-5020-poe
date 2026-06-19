document.getElementById("contactForm").addEventListener("submit", function(event){

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if(name.length < 2){
        alert("Please enter a valid full name.");
        event.preventDefault();
        return;
    }

    if(phone !== "" && !/^[0-9+\-\s]+$/.test(phone)){
        alert("Phone number can only contain numbers.");
        event.preventDefault();
        return;
    }

    alert("Thank you! Your message has been submitted successfully.");
});