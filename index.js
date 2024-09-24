const activate = () => {
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.toggle('active');
    const authWindow = document.getElementsByClassName('auth_wrapper')[0];
    authWindow.hidden = !authWindow.hidden;
}