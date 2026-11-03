document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var form = this;
    var btn = document.getElementById('submitBtn');
    var successDiv = document.getElementById('successMessage');

    btn.textContent = 'ОТПРАВКА...';
    btn.disabled = true;

    var formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        form.style.display = 'none';
        successDiv.style.display = 'block';
    })
    .catch(error => {
        alert('Ошибка сети. Проверьте интернет и попробуйте снова.');
        btn.textContent = 'ОТПРАВИТЬ';
        btn.disabled = false;
    });
});