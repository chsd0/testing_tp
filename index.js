const activate = () => {
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.toggle('active');
    const authWrapper = document.getElementsByClassName('auth_wrapper')[0];
    authWrapper.hidden = !authWrapper.hidden;
};

const authWindow = document.getElementsByClassName('auth')[0];
const featuresWindow = document.getElementsByClassName('features')[0];
const regWindow = document.getElementsByClassName('registration')[0];

const openRegistration = () => {
    authWindow.classList.toggle('expand');
    featuresWindow.classList.toggle('expand');
    setTimeout(() => {
        authWindow.classList.toggle('not_active');
        regWindow.classList.toggle('not_active');
        regWindow.classList.toggle('expand');
    }, 250);
};

const openAuthorization = () => {
    regWindow.classList.toggle('not_active');
    regWindow.classList.toggle('expand');
    authWindow.classList.toggle('not_active');
    setTimeout(() => {
        authWindow.classList.toggle('expand');
        featuresWindow.classList.toggle('expand');
    }, 10);
};

const togglePasswordVisibility = (target) => {
    const passwordInput = target.parentElement.children[0];
    target.classList.toggle('visibility');
    if(passwordInput.getAttribute('type') === 'password') {
        passwordInput.setAttribute('type', 'text');
    } else {
        passwordInput.setAttribute('type', 'password');
    }
};
