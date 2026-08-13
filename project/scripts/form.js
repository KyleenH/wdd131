document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    this.style.display = 'none';
    const messageContainer = document.getElementById('successMessage');
    messageContainer.style.display = 'block';
});