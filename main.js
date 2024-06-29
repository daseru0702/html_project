// Contact form submission handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert('문의가 성공적으로 전송되었습니다!');
        // Here you can add code to send the form data to the server
        this.reset();
    } else {
        alert('모든 필드를 입력해주세요.');
    }
});
