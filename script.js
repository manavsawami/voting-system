document.addEventListener('DOMContentLoaded', () => {
    // Handle form submissions
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const voteForm = document.getElementById('voteForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement login logic here
            alert('Login submitted');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement registration logic here
            alert('Register submitted');
        });
    }

    if (voteForm) {
        voteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Implement voting logic here
            alert('Vote submitted');
        });
    }
});
