// Contact form submission handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('문의가 성공적으로 전송되었습니다!');
        this.reset();
    } else {
        alert('모든 필드를 입력해주세요.');
    }
});
