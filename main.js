var btn_login = document.querySelector('.btn__login');

btn_login.addEventListener('click', function () {
    var login = document.querySelector(".login");
    login.style.display = 'flex';
    var icon_exit = document.querySelector('.login-form__exit-icon');
    icon_exit.onclick = function () {
        login.style.display = 'none';
    }
})
