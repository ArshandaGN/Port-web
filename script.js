function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;

    // Validate the form
    if (!name || !email || !description) {
        document.getElementById("error-message").textContent = "All fields are required!";
        return;
    }

    // Clear any previous error messages
    document.getElementById("error-message").textContent = "";

    // Process form data (for example, sending data to WhatsApp)
    const whatsappMessage = `Hello!%0AName: ${name}%0AEmail: ${email}%0AMessage: ${description}`;
    const whatsappLink = `https://wa.me/6281807557684?text=${whatsappMessage}`;
    
    // Open WhatsApp link
    window.open(whatsappLink, '_blank');

    // Clear the form after submission
    document.getElementById("contactForm").reset();
    alert("Thank you for your message! We will get back to you soon.");
}