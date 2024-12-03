function openMail(event) {
    event.preventDefault();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const mailtoLink = `mailto:contact@sermhs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}